import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from './app.utils';
import { LanguageMng } from './languageMng';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { ConditionalNavigationMng } from './conditionalNavigationMng';
import { Field } from './baseIUElements';
import { Subscription } from 'rxjs';
/**
 * « Generic component for services under specific conditions »
 *      Service has not inbound argments or only one and object valued that not allows null
 *      Service has not outbound arguments
 *      Service is not offered in the manu
 */
@Component({
    selector: 'genericsiu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

    <waitDialog [showWait]="showWait"></waitDialog> 
    <ng-container *ngIf="visible">
        <div style="text-align: center;margin-bottom: 10px;">
            <h2 class="title">{{title}}</h2>
            <div>
                <label class="control-label">{{argAlias}}</label>
                <label class="control-label" style="padding-left: 10px;">
                    {{argValue}}
                </label>
            </div>
        </div>
        <div class="col-12 siuButtons">
            <button type="button" class="btnOk btn btn-primary" (click)="saveChanges()">
                {{langMng.translateText('app_SIU_BTNOK', '')}}</button>
            <button type="button" class="btnCancel btn btn-danger" (click)="processCancel()">
                {{langMng.translateText('app_SIU_BTNCANCEL', '')}}
            </button>
        </div>
    </ng-container>

  `
})
export class GenericSiuComponent implements OnInit {

    /** Exchange information */
    private exchangeInfo: ExchangeInfo | null = null;
    /** Target class name */
    private className = '';
    /** Target service interaction unit name */
    private serviceIUName = '';
    /** Target service name */
    private serviceName = '';
    /** Argument class name */
    private argClassName = '';
    /** Argument name */
    private argName = '';
    /** Argument name in request */
    private argNameInRequest = '';
    /** Supplementary information attribute names */
    private argSupInfAttNames = '';
    /** Supplementary attribute data types */
    private argSupInfAttTypes: string[] = [];
    /** Service Interaction unit must not been shown */
    private siuHasNoShow = false;

    /** Title */
    public title = '';
    /** Argument alias */
    public argAlias = '';
    /** Argument value */
    public argValue = '';

    /** Progress bar subscription to manage the cancel */
    protected progressBarSubscription: Subscription | null = null;
    /** Selected Oids */
    private originalOidList: any[] = [];
    private oidList: any[] = [];
    /** Scenario is visible or not */
    public visible = true;
    /** Shows wait icon */
    public showWait = false;
    /** Indicates service request has been performed and answer is pending */
    public waitingServiceResponse = false;

    constructor(
        protected appGlobalInfo: AppGlobalInfo,
        protected util: Util,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng,
        public changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.get();
        this.className = this.exchangeInfo.targetClassName;
        this.serviceIUName = this.exchangeInfo.targetIUName;

        if (this.configureSIU()) {
            this.visible = !this.siuHasNoShow;
            // Get the selected instances
            if (this.argName) {
                // Navigational or custom initialization
                if (this.exchangeInfo.customData[this.argName]) {
                    this.originalOidList.push(this.exchangeInfo.customData[this.argName]);
                } else if (this.exchangeInfo.selectedOidsClassName === this.argClassName) {
                    // Selected instance
                    this.originalOidList = this.exchangeInfo.selectedOids;
                } else {
                    // Any in the context stack
                    this.originalOidList = this.exchangeInfo.getOidsOfClass(this.argClassName);
                }
            }
            if (this.argName && this.originalOidList.length === 0) {
                // No Oid found
                this.title = 'Error';
                this.argAlias = 'No selected element';
                this.argValue = '';
            } else {
                this.showSuplementaryInformation();
            }
        } else {
            // Configuration has not been found
            this.title = 'Error';
            this.argAlias = 'Configuration not found';
            this.argValue = '';
        }
        if (this.util.modalForIUResponse.observed) {
            this.appGlobalInfo.setScenarioTitle(this.title);
        }
    }

    /**
     * Call service
     */
    public saveChanges(): void {
        if (this.waitingServiceResponse) {
            return;
        }
        this.waitingServiceResponse = true;
        this.oidList  = [];
        this.originalOidList.forEach(val => this.oidList.push(Object.assign({}, val)));

        if (this.oidList.length === 0) {
            this.executeService(null, [], 0, 1);
        } else {
            const totalOids = this.oidList.length;
            if (totalOids > 1) {
                this.progressBarSubscription = this.util.progessBarCancelResponse.subscribe(() => {
                    this.util.hideProgressBar();
                    this.oidList = [];
                    if (this.progressBarSubscription) {
                        this.progressBarSubscription.unsubscribe();
                    }   
                });
            }
            this.executeService(this.oidList.pop(), [], 0, totalOids);
        }
    }

    /**
     * Auxiliar function to manages the multiselection
     * @param oid Instance Oid
     * @param errorList List of errors
     * @param executionCount Execution counter
     * @param totalExecutions Total executions
     */
    private executeService(oid: any, errorList: string[], executionCount: number, totalExecutions: number): void {
        // Show progress bar or wait dialog
        if (totalExecutions > 1) {
            this.util.showProgressBar(this.title, executionCount + 1 === totalExecutions ? 99 :
                Math.round(((executionCount + 1) / totalExecutions) * 100), 0);
        } else {
            this.showWait = true;
        }
        let lOid = oid;
        if (this.argNameInRequest?.endsWith('_json')) {
            lOid = JSON.stringify(oid);
        }
        this.util.executeNoShowService(this.className, this.serviceName, lOid, this.argNameInRequest).then(
            (data: {request: any, response: any}) => {
                executionCount++;
                this.processServiceResponse(data, errorList, executionCount, totalExecutions);
                
            }, (error: {request: any, response: any}) => {
                executionCount++;
                errorList.push(this.langMng.translateError(error.response));
                if (this.oidList.length === 0) {
                    this.visible = true;
                    this.util.addErrorMessageList(errorList);
                    this.showWait = false;
                    this.util.hideProgressBar();
                    this.waitingServiceResponse = false;
                    this.changeDetectorRef.markForCheck();
                    if (executionCount > 1) {
                        this.processCancel(true);
                    }
                } else {
                    this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
                }
            });
    }

    private processServiceResponse(data: {request: any, response: any}, errorList: string[], executionCount: number, totalExecutions: number): void {
        if (data.response.resultCode !== '000' && data.response.resultCode !== '') {
            errorList.push(data.response.resultDescription);
        }
        if (this.oidList.length === 0) {
            if (errorList.length === 0) {
                this.showWait = false;
                this.util.hideProgressBar();
                this.processSuccessfulExecution(data, executionCount);
            } else {
                this.visible = true;
                this.util.addErrorMessageList(errorList);
                this.showWait = false;
                this.util.hideProgressBar();
                this.changeDetectorRef.markForCheck();
                this.waitingServiceResponse = false;
                if (executionCount > 1) {
                    this.processCancel(true);
                }
            }
        } else {
            this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
        }
    }

    private processSuccessfulExecution(data: {request: any, response: any}, executionCount: number): void {
        if (executionCount <= 1) {
            if (!this.condNavMng.processConditionalNavigation(this.className, this.serviceName,
                data.request, data.response,
                this.exchangeInfo ? this.exchangeInfo.previous : null,
                this.exchangeInfo ? this.exchangeInfo.comeBackContext : null)) {
                this.processCancel(true);
            }
        } else {
            this.processCancel(true);
        }
    }


    /**
     * Manages Cancel button
     * @param lastExecutionSuccess Tue if the execution was success or not
     */
    public processCancel(lastExecutionSuccess = false): void {
        this.util.hideProgressBar();
        if (this.exchangeInfo) {
            if (this.util.processCancelInPopup(lastExecutionSuccess)) {
                // Remove the top element in the context stack
                if (this.exchangeInfo?.comeBackContext?.exchangeInfo) {
                    this.appGlobalInfo.appExchangeInfo.save(this.exchangeInfo.comeBackContext.exchangeInfo);
                }
            } else if (this.exchangeInfo?.comeBackContext) {
                this.util.navigateComeBack(this.exchangeInfo.comeBackContext);
            } else {
                this.util.navigateToMain();
            }
        } else {
            this.util.navigateToMain();
        }
    }

    /**
     * Show the supplementary information of the selected Oids
     */
    private showSuplementaryInformation(): void {
        // If no argument
        if (!this.argName || this.originalOidList.length === 0) {
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
            return;
        }

        if (this.originalOidList.length > 1) {
            this.argValue = this.langMng.translateTextWithParams(
                LanguageMng.fsNumberInstacesSelected, '',
                this.originalOidList.length.toString());
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
        } else {
            // Query to get the value of attributes
			this.showWait = true;
			this.util.callQueryByOid(this.argClassName, JSON.stringify(this.originalOidList[0]),
				this.argSupInfAttNames).then((instance) => {
				if (instance) {
					let textValue = '';
					const attArray: string[] = this.argSupInfAttNames.split(',');
					let i = 0;
					for (const att of attArray) {
						if (textValue.length > 0) {
							textValue += ' ';
						}
						if (this.argSupInfAttTypes && this.argSupInfAttTypes.length > i) {
							textValue += this.util.applyDefaultFormat(instance[att.replace(new RegExp('[.]', 'g'), '-')], this.argSupInfAttTypes[i]);
						} else {
							textValue += this.util.valueToString(instance[att.replace(new RegExp('[.]', 'g'), '-')]);
						}
						i++;
					}
					this.argValue = textValue;
				} else {
					this.argValue = '';
				}
				this.showWait = false;
				this.changeDetectorRef.markForCheck();
				if (this.siuHasNoShow) {
					this.saveChanges();
				}
			}).catch((errorMsg) => {
				this.argValue = '';
				this.util.addErrorMessage(errorMsg);
				this.showWait = false;
				this.changeDetectorRef.markForCheck();
			});
        }
    }

    /**
     * Configure the scenario based on the Class and service interaction unit
     */
    private configureSIU(): boolean {
        let siuFound = false;
        switch (this.className) {
            case ModelConstants.Grupoasociado.name:
                siuFound = this.configureClassGrupoAsociado();
                break;
            case ModelConstants.Solicitud.name:
                siuFound = this.configureClassSolicitud();
                break;
            case ModelConstants.Cuestionariop.name:
                siuFound = this.configureClassCuestionarioP();
                break;
            case ModelConstants.Documentog.name:
                siuFound = this.configureClassDocumentoG();
                break;
            case ModelConstants.Globalservices.name:
                siuFound = this.configureGlobalServices();
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class GrupoAsociado
     */
    private configureClassGrupoAsociado(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Grupoasociado.siuueliminar:
                this.title = this.langMng.translateText('cls_GrupoAsociado_svc_eliminar',
                    'Eliminar grupo asociado');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisgrupoasociado';
                this.argNameInRequest = 'p_thisgrupoasociado_oid';
                this.argClassName = ModelConstants.Grupoasociado.name;
                this.argAlias = this.langMng.translateText(
                    'cls_GrupoAsociado_svc_eliminar_inArg_p_thisGrupoAsociado',
                    'Grupo Asociado');
                this.argSupInfAttNames = 'codigolegal,descripcion';
                this.argSupInfAttTypes = [Field.dtString, Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Solicitud
     */
    private configureClassSolicitud(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Solicitud.siuuenviarsmsinfopago:
                this.title = this.langMng.translateText('cls_Solicitud_svc_enviarSMSInfoPago',
                    'enviarSMSInfoPago');
                this.serviceName = 'enviarSMSInfoPago';
                this.argName = 'p_thissolicitud';
                this.argNameInRequest = 'p_thissolicitud_oid';
                this.argClassName = ModelConstants.Solicitud.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Solicitud_svc_enviarSMSInfoPago_inArg_p_thisSolicitud',
                    'Solicitud');
                this.argSupInfAttNames = 'ae_solicitudes.numero_solicitud';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
            case ModelConstants.Solicitud.siuutmarcarcompletada:
                this.title = this.langMng.translateText('cls_Solicitud_svc_TMARCARCOMPLETADA',
                    'Marcar completada');
                this.serviceName = 'TMARCARCOMPLETADA';
                this.argName = 'p_thissolicitud';
                this.argNameInRequest = 'p_thissolicitud_oid';
                this.argClassName = ModelConstants.Solicitud.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Solicitud_svc_TMARCARCOMPLETADA_inArg_p_thisSolicitud',
                    'Solicitud');
                this.argSupInfAttNames = 'ae_solicitudes.numero_solicitud';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class CuestionarioP
     */
    private configureClassCuestionarioP(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Cuestionariop.siuutcerrar:
                this.title = this.langMng.translateText('cls_CuestionarioP_svc_TCERRAR',
                    'Marcar como completado');
                this.serviceName = 'TCERRAR';
                this.argName = 'p_thiscuestionariop';
                this.argNameInRequest = 'p_thiscuestionariop_oid';
                this.argClassName = ModelConstants.Cuestionariop.name;
                this.argAlias = this.langMng.translateText(
                    'cls_CuestionarioP_svc_TCERRAR_inArg_p_thisCuestionarioP',
                    'Cuestionario');
                this.argSupInfAttNames = 'numero';
                this.argSupInfAttTypes = [Field.dtAuto];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class DocumentoG
     */
    private configureClassDocumentoG(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Documentog.siuuprevisualizarato:
                this.title = this.langMng.translateText('cls_DocumentoG_svc_previsualizarATO',
                    'Previsualizar');
                this.serviceName = 'previsualizarATO';
                this.argName = 'p_thisdocumentog';
                this.argNameInRequest = 'p_thisdocumentog_oid';
                this.argClassName = ModelConstants.Documentog.name;
                this.argAlias = this.langMng.translateText(
                    'cls_DocumentoG_svc_previsualizarATO_inArg_p_thisDocumentoG',
                    'Documento gestor');
                this.argSupInfAttNames = 'identificador';
                this.argSupInfAttTypes = [Field.dtAuto];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for Global Services
     */
    private configureGlobalServices(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Globalservices.siuuogsincgruposasociados:
                this.title = this.langMng.translateText('gs_OGSINCGRUPOSASOCIADOS',
                    'Sincronizar grupos asociados');
                this.serviceName = 'OGSINCGRUPOSASOCIADOS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincestadospersona:
                this.title = this.langMng.translateText('gs_TGSINCESTADOSPERSONA',
                    'Sincronizar estados de persona');
                this.serviceName = 'TGSINCESTADOSPERSONA';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincpaises:
                this.title = this.langMng.translateText('gs_TGSINCPAISES',
                    'Sincronizar países');
                this.serviceName = 'TGSINCPAISES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }
}
