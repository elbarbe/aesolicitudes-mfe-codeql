import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements global SIU SIU_TGSELECCONTRATOASOC »
 */
import { BHServicesUtil } from '../bhcallutils/bhservicesutil';
import { GestionCache } from '../common/gestionCache';
import { formatDate } from '@angular/common';
import { GlobalServicesServices } from './globalservices.services';
import { ErrorInformation } from '../common/answerRequestInformation';

@Component({
    selector: 'imes-gs-siu-tgseleccontratoasoc',
    templateUrl: './siu_tgseleccontratoasoc.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGSELECCONTRATOASOCComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public puSolicitud: FieldOVLenseSearch;
    public ptNumContrato: FieldDefinedSelection;
    public ptCodLegalProducto: Field;
    public ptCodLegalPlan: Field;
    public ptNumFamilia: Field;

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
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions,
        private bhServicesUtil: BHServicesUtil, private gestionCache: GestionCache) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'IGl_1433189875712803UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgseleccontratoasoc;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor']));
        this.serviceName = 'TGSELECCONTRATOASOC';
        this.title = this.langMng.translateText('gs_TGSELECCONTRATOASOC',
            'Contratos asociados');

        // Create inbound argument components
        this.puSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptNumContrato = new FieldDefinedSelection(this.langMng);
        this.ptCodLegalProducto = new Field(this.langMng);
        this.ptCodLegalPlan = new Field(this.langMng);
        this.ptNumFamilia = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    private cargarDatosContratosDelContratante(): void {
        // Ya hemos cargado en la regla de depdnencia los datos del contratante
        const varpusolicitud = this.getFirstInstanceFromCache(this.puSolicitud);
        // Ahora los utiilzamos para recuperar sus contratos
        const tipoIdent = varpusolicitud.get('Contratante.TipoIdentificacion.NombreCorto');
        const numIdent = varpusolicitud.get('Contratante.NumIdentificacion');
        const numRadicado = varpusolicitud.get('NumRadicado');
        
        if (tipoIdent && numIdent) {
            this.setShowWait(true);
            this.bhServicesUtil.consultarContratosAsociadosDePersona(tipoIdent,numIdent,numRadicado).then( (contratos: any[]) => {
                
                if (contratos)  {
                    const listaContratos: any[] = [];
                    let textoMostrar = '';
                    for (const contrato of contratos) {
                        // Anyadimos el contrato a la lista y como texto concatenamos varios valores
                        // Num. Contrato
                        textoMostrar = BHServicesUtil.getValorElementoPorClave(contrato?.contract?.identifier, 'type', 'CONTRATO', 'value');
                        // Fecha Inicio Vigencia
                        const fecha = contrato?.contract?.applies?.start;
                        textoMostrar += fecha ? ' ' + formatDate(fecha, 'dd/MM/yyyy', 'es-ES') : '';
                        // Estado del contrato (descripción)
                        const estado = contrato?.contract?.status;
                        textoMostrar += estado ? ' ' + estado : '';
                        // Codigo legal Producto
                        const clProd = BHServicesUtil.getValorElementoPorClave(contrato.insurancePlan?.identifier, 'type', 'CODIGO_PRODUCTO', 'value');
                        textoMostrar += clProd ? ' ' + clProd : '';
                        // Codigo legal Plan
                        const clPlan = BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'PLAN', 'value');
                        textoMostrar += clPlan ? ' ' + clPlan : '';
                        // Num. Familia
                        const numFam = BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'FAMILIA', 'value');
                        textoMostrar += numFam ? ' ' + numFam : '';

                        listaContratos.push({key: contrato, value:textoMostrar});
                    }
                    this.ptNumContrato.options = listaContratos;
                    if (listaContratos.length === 0) {
                        this.util.addErrorMessage('El contratante no tiene contratos asociados');    
                    }
                } else {
                    this.util.addErrorMessage('El contratante no tiene contratos asociados');
                }
                this.changeDetectorRef.markForCheck();
                this.setShowWait(false);
            }).catch( (err: Error) => {
                this.setShowWait(false);
                this.util.addErrorMessage(err);
                this.changeDetectorRef.markForCheck();
            });
        } else {
            this.util.addErrorMessage('Debe indicar primero el contratante');
            this.processCancel(false);
        }

        this.changeDetectorRef.markForCheck();
    }

    public override saveChanges(): void {
        if (this.ptNumContrato.value) {
            // Llamamos al servicio utilizando los valores del contrato seleccionado
            const globalSrv: GlobalServicesServices = new GlobalServicesServices(this.appGlobalInfo, this.util);

            this.setShowWait(true);
            globalSrv.tGSELECCONTRATOASOC(this.puSolicitud.getSingleValue(),
                BHServicesUtil.getValorElementoPorClave(this.ptNumContrato.value?.contract?.identifier, 'type', 'CONTRATO', 'value'),
                BHServicesUtil.getValorElementoPorClave(this.ptNumContrato.value?.insurancePlan?.identifier, 'type', 'CODIGO_PRODUCTO', 'value'),
                BHServicesUtil.getValorElementoPorClave(this.ptNumContrato.value?.contract?.identifier, 'type', 'PLAN', 'value'),
                BHServicesUtil.getValorElementoPorClave(this.ptNumContrato.value?.contract?.identifier, 'type', 'FAMILIA', 'value')).then( () => {
                    this.setShowWait(false);
                    this.processCancel();
                }).catch( (err: ErrorInformation) => {
                    this.setShowWait(false);
                    this.util.addErrorMessage(err);
                });
        } else {
            this.util.addErrorMessage('Debe seleccionar un contrato');
        }
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puSolicitud.nameInRequest = 'p_solicitud';
        this.puSolicitud.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOC_inArg_p_Solicitud',
            'Solicitud');
        this.puSolicitud.mandatory = true;
        this.puSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puSolicitud.maxLength = 50;
        this.puSolicitud.assignCSS();
        this.fields.push(this.puSolicitud);

        this.ptNumContrato.nameInRequest = 'ptnumcontrato';
        this.ptNumContrato.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOC_inArg_ptNumContrato',
            'Contrato');
        this.ptNumContrato.mandatory = true;
        this.ptNumContrato.dataType = Field.dtString;

        this.ptNumContrato.maxLength = 50;
        this.ptNumContrato.assignCSS();
        this.fields.push(this.ptNumContrato);

        this.ptCodLegalProducto.nameInRequest = 'ptcodlegalproducto';
        this.ptCodLegalProducto.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOC_inArg_ptCodLegalProducto',
            'ptCodLegalProducto');
        this.ptCodLegalProducto.mandatory = true;
        this.ptCodLegalProducto.dataType = Field.dtString;
        this.ptCodLegalProducto.maxLength = 50;
        this.ptCodLegalProducto.assignCSS();
        this.fields.push(this.ptCodLegalProducto);

        this.ptCodLegalPlan.nameInRequest = 'ptcodlegalplan';
        this.ptCodLegalPlan.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOC_inArg_ptCodLegalPlan',
            'ptCodLegalPlan');
        this.ptCodLegalPlan.mandatory = true;
        this.ptCodLegalPlan.dataType = Field.dtString;
        this.ptCodLegalPlan.maxLength = 50;
        this.ptCodLegalPlan.assignCSS();
        this.fields.push(this.ptCodLegalPlan);

        this.ptNumFamilia.nameInRequest = 'ptnumfamilia';
        this.ptNumFamilia.alias = this.langMng.translateText(
            'gs_TGSELECCONTRATOASOC_inArg_ptNumFamilia',
            'Nº Familia');
        this.ptNumFamilia.mandatory = true;
        this.ptNumFamilia.dataType = Field.dtString;
        this.ptNumFamilia.maxLength = 10;
        this.ptNumFamilia.assignCSS();
        this.fields.push(this.ptNumFamilia);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puSolicitud'.toLowerCase()) {
            this.puSolicitud.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespusolicitud('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_Solicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespusolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopusolicitud();
        }
        if ('SetValue' === event && this.puSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_Solicitud argument
     */
    private setSuppInfopusolicitud(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.puSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puSolicitud.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puSolicitud.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_Solicitud argument
     */
    private executeDependecyRules1puSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puSolicitud,
                'Ae_solicitudes.id_solicitud,NumRadicado,Contratante.TipoIdentificacion.NombreCorto,Contratante.NumIdentificacion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_Solicitud argument
     */
    private executeDependecyRules1puSolicitudActions(): void {
        const varpusolicitud = this.getFirstInstanceFromCache(this.puSolicitud);
        // v <> NULL
        if (varpusolicitud && !this.util.isNull(varpusolicitud)) {
            // p_Solicitud.SetVisible( false )
            this.puSolicitud.visible = false;
            // ptCodLegalPlan.SetVisible( false )
            this.ptCodLegalPlan.visible = false;
            // ptCodLegalProducto.SetVisible( false )
            this.ptCodLegalProducto.visible = false;

            // Cargamos los datos de los contratos del contratante de la solicitud
            this.cargarDatosContratosDelContratante();
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_Solicitud lense search argument
     */
    public onpusolicitudChange(): void {
        this.executeLenseSearch(this.puSolicitud, ModelConstants.Solicitud.name, 'IC_Solicitud',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanpusolicitud();
            }
            if (foundInstances === 1) {
                this.processpusolicitudSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_Solicitud lense search argument
     */
    public processpusolicitudSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puSolicitud.searchResults.length > index) {
            selectedInstance = this.puSolicitud.searchResults[index];
        }
        // Clean the result list
        this.puSolicitud.searchResults = [];
        if (selectedInstance) {
            if (!this.puSolicitud.allowMultiSelect) {
                this.puSolicitud.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puSolicitud.addInstances(selectedInstance);
        }
        this.executeDependecyRulespusolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_Solicitud lense search argument
     */
    public cleanpusolicitud(): void {
        this.clearValidationMessages();
        this.puSolicitud.clean();
        this.executeDependecyRulespusolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.puSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
