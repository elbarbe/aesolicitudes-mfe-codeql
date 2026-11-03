import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-solicitud-siu-tmodencabezado',
    templateUrl: './siu_tmodencabezado.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTMODENCABEZADOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptuptFecha: Field;
    public ptGrupoAsociado: FieldOVLenseSearch;
    public ptProrrateo: FieldOVPreload;
    public ptTipoFactura: FieldOVPreload;
    public ptSoloDiaUno: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431957012480960Ser_117UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutmodencabezado;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODENCABEZADO';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TMODENCABEZADO',
            'Modificar encabezado');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptuptFecha = new Field(this.langMng);
        this.ptGrupoAsociado = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptProrrateo = new FieldOVPreload(this.langMng);
        this.ptTipoFactura = new FieldOVPreload(this.langMng);
        this.ptSoloDiaUno = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisSolicitud.nameInRequest = 'p_thissolicitud';
        this.puthisSolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADO_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptuptFecha.nameInRequest = 'pt_ptfecha';
        this.ptuptFecha.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADO_inArg_pt_ptFecha',
            'Fecha inicio contratación');
        this.ptuptFecha.mandatory = false;
        this.ptuptFecha.dataType = Field.dtDate;
        this.ptuptFecha.assignCSS();
        this.fields.push(this.ptuptFecha);

        this.ptGrupoAsociado.nameInRequest = 'ptgrupoasociado';
        this.ptGrupoAsociado.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADO_inArg_ptGrupoAsociado',
            'Grupo asociado');
        this.ptGrupoAsociado.mandatory = false;
        this.ptGrupoAsociado.dataType = ModelConstants.Grupoasociado.name;
        this.ptGrupoAsociado.maxLength = 200;
        this.ptGrupoAsociado.assignCSS();
        this.fields.push(this.ptGrupoAsociado);

        this.ptProrrateo.nameInRequest = 'ptprorrateo';
        this.ptProrrateo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADO_inArg_ptProrrateo',
            'Porcentaje prorrateo');
        this.ptProrrateo.mandatory = false;
        this.ptProrrateo.dataType = ModelConstants.Prorrateo.name;
        this.ptProrrateo.maxLength = 6;
        this.ptProrrateo.assignCSS();
        this.fields.push(this.ptProrrateo);

        this.ptTipoFactura.nameInRequest = 'pttipofactura';
        this.ptTipoFactura.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADO_inArg_ptTipoFactura',
            'Tipo Factura');
        this.ptTipoFactura.mandatory = true;
        this.ptTipoFactura.dataType = ModelConstants.Tipofactura.name;
        this.ptTipoFactura.maxLength = 50;
        this.ptTipoFactura.assignCSS();
        this.fields.push(this.ptTipoFactura);

        this.ptSoloDiaUno.nameInRequest = 'ptsolodiauno';
        this.ptSoloDiaUno.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODENCABEZADO_inArg_ptSoloDiaUno',
            'Solo dia uno');
        this.ptSoloDiaUno.mandatory = true;
        this.ptSoloDiaUno.dataType = Field.dtBool;
        this.ptSoloDiaUno.options = DefinedSelections.DS_SINO;
        this.ptSoloDiaUno.assignCSS();
        this.fields.push(this.ptSoloDiaUno);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // ptSoloDiaUno
            const defValptSoloDiaUno = new Promise<void>((resolveDefValue) => {
                this.ptSoloDiaUno.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptSoloDiaUno);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Solicitud'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisSolicitud.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhissolicitud('SetValue', true);
            this.puthisSolicitud.enabled = false;
            this.executeDependecyRulesputhissolicitud('SetEnabled', true);
        }
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'GrupoAsociado') {
                this.ptGrupoAsociado.setValue(lastRoleOid);
                this.executeDependecyRulesptgrupoasociado('SetValue', true);
                this.ptGrupoAsociado.enabled = false;
                this.executeDependecyRulesptgrupoasociado('SetEnabled', true);
            }
            if (lastRole === 'TipoFactura') {
                this.ptTipoFactura.setValue(lastRoleOid);
                this.ptTipoFactura.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptTipoFactura
        const navFiltersptTipoFactura: string[] = [];
        navFiltersptTipoFactura.push('Solicitud_TMODENCABEZADO_ptTipoFactura_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoFactura', 'IC_TipoFactura', navFiltersptTipoFactura, this.getNavigationFilterVariables(), '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptTipoFactura.loadPreload(response.results);
                } else {
                    this.ptTipoFactura.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

    /**
     * Search the preload values of field ptProrrateo
     */
    private loadPreloadptprorrateo(): void {

        if (this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODENCABEZADO_ptProrrateo_NavFilter0');
            this.util.searchPreload('Prorrateo', 'IC_Prorrateo', navFilters, this.getNavigationFilterVariables(), 'OC_Prorrateo').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptProrrateo.loadPreload(response.results);
                    } else {
                        this.ptProrrateo.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptProrrateo.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptProrrateo.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisSolicitud'.toLowerCase()) {
            this.puthisSolicitud.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhissolicitud('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptGrupoAsociado'.toLowerCase()) {
            this.ptGrupoAsociado.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptgrupoasociado('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhissolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhissolicitud();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptprorrateo();
        }
        if ('SetValue' === event && this.puthisSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisSolicitud();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisSolicitud argument
     */
    private setSuppInfoputhissolicitud(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisSolicitud.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisSolicitud.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisSolicitud argument
     */
    private executeDependecyRules1puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'finiciocontrato,grupoasociado.Codigo,tipofactura.Codigo,ae_solicitudes.plant.iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisSolicitud argument
     */
    private executeDependecyRules1puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud)) {
            // pt_ptFecha.SetValue( v.finiciocontrato )
            this.ptuptFecha.setValue(this.util.getDate(varputhissolicitud.get('finiciocontrato')));
            this.executeDependecyRulesptuptfecha('SetValue', true);
            // ptGrupoAsociado.SetValue( v.grupoasociado )
            this.ptGrupoAsociado.setValue(this.util.oidBuilder.buildOidGrupoAsociado(
                this.util.getInt(varputhissolicitud.get('grupoasociado.Codigo'))));
            this.executeDependecyRulesptgrupoasociado('SetValue', true);
            // ptTipoFactura.SetValue( v.tipofactura )
            this.ptTipoFactura.setValue(this.util.oidBuilder.buildOidTipoFactura(
                varputhissolicitud.get('tipofactura.Codigo')));
            // ptSoloDiaUno.SetValue( v.Ae_solicitudes.plant.iniciocontdiauno )
            this.ptSoloDiaUno.setValue(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.iniciocontdiauno')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisSolicitud argument
     */
    private executeDependecyRules2puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'ae_solicitudes.plant.esvoluntario,ae_solicitudes.plant.iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisSolicitud argument
     */
    private executeDependecyRules2puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.Ae_solicitudes.plant.esvoluntario = TRUE AND v.Ae_solicitudes.plant.iniciocontdiauno = FALSE
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.esvoluntario')), true) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.iniciocontdiauno')), false)) {
            // pt_ptFecha.SetActive( false )
            this.ptuptFecha.enabled = false;
            this.executeDependecyRulesptuptfecha('SetActive', true);
            // pt_ptFecha.SetValue( NULL )
            this.ptuptFecha.setValue(null);
            this.executeDependecyRulesptuptfecha('SetValue', true);
            // ptProrrateo.SetActive( false )
            this.ptProrrateo.enabled = false;
            // ptProrrateo.SetValue( NULL )
            this.ptProrrateo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisSolicitud lense search argument
     */
    public onputhissolicitudChange(): void {
        this.executeLenseSearch(this.puthisSolicitud, ModelConstants.Solicitud.name, 'IC_Solicitud',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhissolicitud();
            }
            if (foundInstances === 1) {
                this.processputhissolicitudSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisSolicitud lense search argument
     */
    public processputhissolicitudSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisSolicitud.searchResults.length > index) {
            selectedInstance = this.puthisSolicitud.searchResults[index];
        }
        // Clean the result list
        this.puthisSolicitud.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisSolicitud.allowMultiSelect) {
                this.puthisSolicitud.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisSolicitud.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhissolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisSolicitud lense search argument
     */
    public cleanputhissolicitud(): void {
        this.clearValidationMessages();
        this.puthisSolicitud.clean();
        this.executeDependecyRulesputhissolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_ptFecha argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuptfecha(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuptFecha();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptuptFecha();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_ptFecha argument
     */
    private executeDependecyRules1ptuptFecha(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptuptFechaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_ptFecha argument
     */
    private executeDependecyRules1ptuptFechaActions(): void {
        // v <> NULL AND v <> formatToDate( getYear( systemDate() ),getMonth( systemDate() ), 1)
        //
        if (!this.util.isNull(this.util.getDate(this.ptuptFecha.value)) &&
            !this.util.valueEquals(this.util.getDate(this.ptuptFecha.value),
            this.stdFun.formatToDate(this.stdFun.getYear(this.stdFun.systemDate()), this.stdFun.getMonth(this.stdFun.systemDate()),
            this.util.getInt('1')))) {
            // ptProrrateo.SetActive( FALSE )
            this.ptProrrateo.enabled = false;
            // ptProrrateo.SetValue( NULL )
            this.ptProrrateo.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_ptFecha argument
     */
    private executeDependecyRules2ptuptFecha(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptuptFechaActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_ptFecha argument
     */
    private executeDependecyRules2ptuptFechaActions(): void {
        // v <> NULL AND v = formatToDate( getYear( systemDate() ),getMonth( systemDate() ), 1)
        //
        if (!this.util.isNull(this.util.getDate(this.ptuptFecha.value)) &&
            this.util.valueEquals(this.util.getDate(this.ptuptFecha.value),
            this.stdFun.formatToDate(this.stdFun.getYear(this.stdFun.systemDate()), this.stdFun.getMonth(this.stdFun.systemDate()),
            this.util.getInt('1')))) {
            // ptProrrateo.SetActive( TRUE )
            this.ptProrrateo.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_ptFecha argument
     */
    public onptuptfechaChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptuptfecha('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptGrupoAsociado argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptgrupoasociado(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptgrupoasociado();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptGrupoAsociado argument
     */
    private setSuppInfoptgrupoasociado(): void {

        const displaySetIC = 'CodigoLegal,Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptGrupoAsociado.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasociado.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptGrupoAsociado.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptGrupoAsociado.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasociado.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptGrupoAsociado.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the ptGrupoAsociado lense search argument
     */
    public onptgrupoasociadoChange(): void {
        this.executeLenseSearch(this.ptGrupoAsociado, ModelConstants.Grupoasociado.name, 'IC_GrupoAsociado',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptgrupoasociado();
            }
            if (foundInstances === 1) {
                this.processptgrupoasociadoSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptGrupoAsociado lense search argument
     */
    public processptgrupoasociadoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptGrupoAsociado.searchResults.length > index) {
            selectedInstance = this.ptGrupoAsociado.searchResults[index];
        }
        // Clean the result list
        this.ptGrupoAsociado.searchResults = [];
        if (selectedInstance) {
            if (!this.ptGrupoAsociado.allowMultiSelect) {
                this.ptGrupoAsociado.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptGrupoAsociado.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptGrupoAsociado lense search argument
     */
    public cleanptgrupoasociado(): void {
        this.clearValidationMessages();
        this.ptGrupoAsociado.clean();
        this.executeDependecyRulesptgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptGrupoAsociado'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptGrupoAsociado.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsociado';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
