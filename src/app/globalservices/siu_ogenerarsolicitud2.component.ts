import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements global SIU SIU_OGENERARSOLICITUD2 »
 */
import { ErrorInformation } from '../common/answerRequestInformation';

@Component({
    selector: 'imes-gs-siu-ogenerarsolicitud2',
    templateUrl: './siu_ogenerarsolicitud2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGENERARSOLICITUD2Component extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuSolicitudAE: FieldOVLenseSearch;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     * @param usrFunc User functions
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'IGl_1462185885696764UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuuogenerarsolicitud2;
        this.setUserVisibility(true);
        this.serviceName = 'OGENERARSOLICITUD2';
        this.title = this.langMng.translateText('gs_OGENERARSOLICITUD2',
            'Replicar solicitud');
        this.noShow = true;

        // Create inbound argument components
        this.ptupuSolicitudAE = new FieldOVLenseSearch(this.langMng, this.util);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuSolicitudAE.nameInRequest = 'pt_p_solicitudae';
        this.ptupuSolicitudAE.alias = this.langMng.translateText(
            'gs_OGENERARSOLICITUD2_inArg_pt_p_SolicitudAE',
            'Solicitud');
        this.ptupuSolicitudAE.mandatory = true;
        this.ptupuSolicitudAE.dataType = ModelConstants.Solicitud.name;
        this.ptupuSolicitudAE.maxLength = 50;
        this.ptupuSolicitudAE.assignCSS();
        this.fields.push(this.ptupuSolicitudAE);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuSolicitudAE'.toLowerCase()) {
            this.ptupuSolicitudAE.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupusolicitudae('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_SolicitudAE argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupusolicitudae(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupusolicitudae();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_SolicitudAE argument
     */
    private setSuppInfoptupusolicitudae(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuSolicitudAE.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuSolicitudAE.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuSolicitudAE.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuSolicitudAE.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_SolicitudAE lense search argument
     */
    public onptupusolicitudaeChange(): void {
        this.executeLenseSearch(this.ptupuSolicitudAE, ModelConstants.Solicitud.name, 'IC_Solicitud',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupusolicitudae();
            }
            if (foundInstances === 1) {
                this.processptupusolicitudaeSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_SolicitudAE lense search argument
     */
    public processptupusolicitudaeSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuSolicitudAE.searchResults.length > index) {
            selectedInstance = this.ptupuSolicitudAE.searchResults[index];
        }
        // Clean the result list
        this.ptupuSolicitudAE.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuSolicitudAE.allowMultiSelect) {
                this.ptupuSolicitudAE.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuSolicitudAE.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupusolicitudae('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_SolicitudAE lense search argument
     */
    public cleanptupusolicitudae(): void {
        this.clearValidationMessages();
        this.ptupuSolicitudAE.clean();
        this.executeDependecyRulesptupusolicitudae('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuSolicitudAE'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuSolicitudAE.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    public override executeService(request: any): void {
        this.util.callHttpPost(`${this.appGlobalInfo.APPCONSTANTS.BASE_URL}/api/${this.className}Api/${this.serviceName}`,
            request).then(
                (response: any) => {
                    this.setShowWait(false);
                    if (response.resultCode !== '000' && response.resultCode !== '') {
                        this.util.addErrorMessage(response.resultDescription);
                        this.processCancel();
                    } else {
                        this.setShowWait(false);
                        this.processOutboundArguments(request, response);
                    }
                    this.changeDetectorRef.markForCheck();
                }, (errResponse: ErrorInformation) => {
                    this.util.addErrorMessage(errResponse);
                    this.processCancel();
                this.changeDetectorRef.markForCheck();
                });

    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public override processOutboundArguments(request: any, response: any): boolean {
        // Quitamos el elemento de la cabeza de la pila del contexto
        let exchInfo: ExchangeInfo = this.getContext()?.exchangeInfo as ExchangeInfo;
        let comeback = exchInfo.comeBackContext; 
        if (exchInfo.comeBackContext?.exchangeInfo?.comeBackContext) {
            comeback = exchInfo.comeBackContext.exchangeInfo.comeBackContext;
        }
        
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_ogenerarsolicitud2_out',
            this.context.exchangeInfo ? this.context.exchangeInfo.previous : null,
            comeback, request, response);
        return true;
    }
}
