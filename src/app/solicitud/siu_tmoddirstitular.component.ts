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
    selector: 'imes-solicitud-siu-tmoddirstitular',
    templateUrl: './siu_tmoddirstitular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTMODDIRSTITULARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptupuatrTelefonoFijo: Field;
    public ptupuatrTelefonoCelular: Field;
    public ptupuagrDepartamento: FieldOVPreload;
    public ptupuagrMunicipio: FieldOVPreload;
    public ptupuatrDireccionCompleta: Field;
    public ptupuatrRural: FieldDefinedSelection;
    public ptupuagrPais: FieldOVLenseSearch;
    public ptDCDepartamento: FieldOVPreload;
    public ptDCMunicipio: FieldOVPreload;
    public ptDCDireccionCompleta: Field;
    public ptDCRural: FieldDefinedSelection;
    public ptDCTelefonoFijo: Field;
    public ptDCTelefonoCelular: Field;
    public ptReplicarDir: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431957012480960Ser_134UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutmoddirstitular;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODDIRSTITULAR';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TMODDIRSTITULAR',
            'Modificar direcciones');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuatrTelefonoFijo = new Field(this.langMng);
        this.ptupuatrTelefonoCelular = new Field(this.langMng);
        this.ptupuagrDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipio = new FieldOVPreload(this.langMng);
        this.ptupuatrDireccionCompleta = new Field(this.langMng);
        this.ptupuatrRural = new FieldDefinedSelection(this.langMng);
        this.ptupuagrPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptDCDepartamento = new FieldOVPreload(this.langMng);
        this.ptDCMunicipio = new FieldOVPreload(this.langMng);
        this.ptDCDireccionCompleta = new Field(this.langMng);
        this.ptDCRural = new FieldDefinedSelection(this.langMng);
        this.ptDCTelefonoFijo = new Field(this.langMng);
        this.ptDCTelefonoCelular = new Field(this.langMng);
        this.ptReplicarDir = new FieldDefinedSelection(this.langMng);

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
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptupuatrTelefonoFijo.nameInRequest = 'pt_p_atrtelefonofijo';
        this.ptupuatrTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_atrTelefonoFijo',
            'Teléfono fijo');
        this.ptupuatrTelefonoFijo.mandatory = false;
        this.ptupuatrTelefonoFijo.dataType = Field.dtString;
        this.ptupuatrTelefonoFijo.maxLength = 15;
        this.ptupuatrTelefonoFijo.assignCSS();
        this.fields.push(this.ptupuatrTelefonoFijo);

        this.ptupuatrTelefonoCelular.nameInRequest = 'pt_p_atrtelefonocelular';
        this.ptupuatrTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_atrTelefonoCelular',
            'Teléfono celular');
        this.ptupuatrTelefonoCelular.mandatory = false;
        this.ptupuatrTelefonoCelular.dataType = Field.dtString;
        this.ptupuatrTelefonoCelular.maxLength = 15;
        this.ptupuatrTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuatrTelefonoCelular);

        this.ptupuagrDepartamento.nameInRequest = 'pt_p_agrdepartamento';
        this.ptupuagrDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_agrDepartamento',
            'Departamento');
        this.ptupuagrDepartamento.mandatory = false;
        this.ptupuagrDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamento.maxLength = 150;
        this.ptupuagrDepartamento.assignCSS();
        this.fields.push(this.ptupuagrDepartamento);

        this.ptupuagrMunicipio.nameInRequest = 'pt_p_agrmunicipio';
        this.ptupuagrMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_agrMunicipio',
            'Municipio');
        this.ptupuagrMunicipio.mandatory = false;
        this.ptupuagrMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipio.maxLength = 150;
        this.ptupuagrMunicipio.assignCSS();
        this.fields.push(this.ptupuagrMunicipio);

        this.ptupuatrDireccionCompleta.nameInRequest = 'pt_p_atrdireccioncompleta';
        this.ptupuatrDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_atrDireccionCompleta',
            'Dirección completa');
        this.ptupuatrDireccionCompleta.mandatory = false;
        this.ptupuatrDireccionCompleta.dataType = Field.dtString;
        this.ptupuatrDireccionCompleta.maxLength = 250;
        this.ptupuatrDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuatrDireccionCompleta);

        this.ptupuatrRural.nameInRequest = 'pt_p_atrrural';
        this.ptupuatrRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_atrRural',
            'Rural');
        this.ptupuatrRural.mandatory = true;
        this.ptupuatrRural.dataType = Field.dtBool;
        this.ptupuatrRural.options = DefinedSelections.DS_SINO;
        this.ptupuatrRural.value = false;
        this.ptupuatrRural.assignCSS();
        this.fields.push(this.ptupuatrRural);

        this.ptupuagrPais.nameInRequest = 'pt_p_agrpais';
        this.ptupuagrPais.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_pt_p_agrPais',
            'País');
        this.ptupuagrPais.mandatory = false;
        this.ptupuagrPais.dataType = ModelConstants.Pais.name;
        this.ptupuagrPais.maxLength = 50;
        this.ptupuagrPais.assignCSS();
        this.fields.push(this.ptupuagrPais);

        this.ptDCDepartamento.nameInRequest = 'ptdcdepartamento';
        this.ptDCDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptDCDepartamento',
            'Departamento');
        this.ptDCDepartamento.mandatory = false;
        this.ptDCDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptDCDepartamento.maxLength = 150;
        this.ptDCDepartamento.assignCSS();
        this.fields.push(this.ptDCDepartamento);

        this.ptDCMunicipio.nameInRequest = 'ptdcmunicipio';
        this.ptDCMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptDCMunicipio',
            'Municipio');
        this.ptDCMunicipio.mandatory = false;
        this.ptDCMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptDCMunicipio.maxLength = 150;
        this.ptDCMunicipio.assignCSS();
        this.fields.push(this.ptDCMunicipio);

        this.ptDCDireccionCompleta.nameInRequest = 'ptdcdireccioncompleta';
        this.ptDCDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptDCDireccionCompleta',
            'Dirección completa');
        this.ptDCDireccionCompleta.mandatory = false;
        this.ptDCDireccionCompleta.dataType = Field.dtString;
        this.ptDCDireccionCompleta.maxLength = 250;
        this.ptDCDireccionCompleta.assignCSS();
        this.fields.push(this.ptDCDireccionCompleta);

        this.ptDCRural.nameInRequest = 'ptdcrural';
        this.ptDCRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptDCRural',
            'Rural');
        this.ptDCRural.mandatory = true;
        this.ptDCRural.dataType = Field.dtBool;
        this.ptDCRural.options = DefinedSelections.DS_SINO;
        this.ptDCRural.value = false;
        this.ptDCRural.assignCSS();
        this.fields.push(this.ptDCRural);

        this.ptDCTelefonoFijo.nameInRequest = 'ptdctelefonofijo';
        this.ptDCTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptDCTelefonoFijo',
            'Teléfono fijo');
        this.ptDCTelefonoFijo.mandatory = false;
        this.ptDCTelefonoFijo.dataType = Field.dtString;
        this.ptDCTelefonoFijo.maxLength = 15;
        this.ptDCTelefonoFijo.assignCSS();
        this.fields.push(this.ptDCTelefonoFijo);

        this.ptDCTelefonoCelular.nameInRequest = 'ptdctelefonocelular';
        this.ptDCTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptDCTelefonoCelular',
            'Teléfono celular');
        this.ptDCTelefonoCelular.mandatory = false;
        this.ptDCTelefonoCelular.dataType = Field.dtString;
        this.ptDCTelefonoCelular.maxLength = 15;
        this.ptDCTelefonoCelular.assignCSS();
        this.fields.push(this.ptDCTelefonoCelular);

        this.ptReplicarDir.nameInRequest = 'ptreplicardir';
        this.ptReplicarDir.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSTITULAR_inArg_ptReplicarDir',
            'Replicar');
        this.ptReplicarDir.mandatory = true;
        this.ptReplicarDir.dataType = Field.dtBool;
        this.ptReplicarDir.options = DefinedSelections.DS_SINO;
        this.ptReplicarDir.assignCSS();
        this.fields.push(this.ptReplicarDir);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // ptReplicarDir
            const defValptReplicarDir = new Promise<void>((resolveDefValue) => {
                this.ptReplicarDir.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptReplicarDir);

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
            if (lastRole === 'Pais') {
                this.ptupuagrPais.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrpais('SetValue', true);
                this.ptupuagrPais.enabled = false;
                this.executeDependecyRulesptupuagrpais('SetEnabled', true);
            }
            if (lastRole === 'Departamento') {
                this.ptDCDepartamento.setValue(lastRoleOid);
                this.ptDCDepartamento.enabled = false;
                this.loadPreloadptdcmunicipio();
            }
            if (lastRole === 'Municipio') {
                this.ptDCMunicipio.setValue(lastRoleOid);
                this.ptDCMunicipio.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamento.loadPreload([]);
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

        // ptDCDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptDCDepartamento.loadPreload(response.results);
                } else {
                    this.ptDCDepartamento.loadPreload([]);
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
     * Search the preload values of field pt_p_agrMunicipio
     */
    private loadPreloadptupuagrmunicipio(): void {

        if (this.ptupuagrDepartamento.getSelectedInstances().length === 1 &&
            this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODDIRSTITULAR_pt_p_agrMunicipio_NavFilter0');
            navFilters.push('Solicitud_TMODDIRSTITULAR_pt_p_agrMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipio.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipio.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field ptDCMunicipio
     */
    private loadPreloadptdcmunicipio(): void {

        if (this.ptDCDepartamento.getSelectedInstances().length === 1 &&
            this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODDIRSTITULAR_ptDCMunicipio_NavFilter0');
            navFilters.push('Solicitud_TMODDIRSTITULAR_ptDCMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptDCMunicipio.loadPreload(response.results);
                    } else {
                        this.ptDCMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptDCMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptDCMunicipio.cleanPreload();
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrPais'.toLowerCase()) {
            this.ptupuagrPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrpais('SetValue', false);
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
            this.loadPreloadptupuagrmunicipio();
            this.loadPreloadptdcmunicipio();
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
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puthisSolicitud();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4puthisSolicitud();
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
                'Ae_solicitudes.id_solicitud');
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
            // p_thisSolicitud.SetVisible( FALSE )
            this.puthisSolicitud.visible = false;
            // pt_p_agrPais.SetVisible( FALSE )
            this.ptupuagrPais.visible = false;
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
                'direccion.Identificador,direccion.departamento.Codigo,direccion.direccioncompleta,direccion.municipio.Codigo' +
                ',direccion.rural');
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
        // v <> NULL AND v.direccion <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidDireccion(
            this.util.getInt(varputhissolicitud.get('direccion.Identificador'))))) {
            // ptDCDepartamento.SetValue( v.direccion.departamento )
            this.ptDCDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('direccion.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptdcmunicipio');
            // ptDCDireccionCompleta.SetValue( v.direccion.direccioncompleta )
            this.ptDCDireccionCompleta.setValue(varputhissolicitud.get('direccion.direccioncompleta'));
            // ptDCMunicipio.SetValue( v.direccion.municipio )
            this.ptDCMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('direccion.municipio.Codigo'))));
            // ptDCRural.SetValue( v.direccion.rural )
            this.ptDCRural.setValue(this.util.getBool(varputhissolicitud.get('direccion.rural')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_thisSolicitud argument
     */
    private executeDependecyRules3puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'titular.Solicitud.Ae_solicitudes.id_solicitud,titular.telefonocelular,titular.telefonofijo,titular.telefonofijodc' +
                ',titular.telefonocelulardc');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_thisSolicitud argument
     */
    private executeDependecyRules3puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.titular <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidTitular(
            this.util.getInt(varputhissolicitud.get('titular.Solicitud.Ae_solicitudes.id_solicitud'))))) {
            // pt_p_atrTelefonoCelular.SetValue( v.titular.telefonocelular )
            this.ptupuatrTelefonoCelular.setValue(varputhissolicitud.get('titular.telefonocelular'));
            // pt_p_atrTelefonoFijo.SetValue( v.titular.telefonofijo )
            this.ptupuatrTelefonoFijo.setValue(varputhissolicitud.get('titular.telefonofijo'));
            // ptDCTelefonoFijo.SetValue( v.titular.telefonofijodc )
            this.ptDCTelefonoFijo.setValue(varputhissolicitud.get('titular.telefonofijodc'));
            // ptDCTelefonoCelular.SetValue( v.titular.telefonocelulardc )
            this.ptDCTelefonoCelular.setValue(varputhissolicitud.get('titular.telefonocelulardc'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for p_thisSolicitud argument
     */
    private executeDependecyRules4puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'titular.Solicitud.Ae_solicitudes.id_solicitud,titular.direccion.Identificador,titular.direccion.departamento.Codigo' +
                ',titular.direccion.municipio.Codigo,titular.direccion.pais.Codigo,titular.direccion.direccioncompleta' +
                ',titular.direccion.rural');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for p_thisSolicitud argument
     */
    private executeDependecyRules4puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.titular <> NULL AND v.titular.direccion <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidTitular(
            this.util.getInt(varputhissolicitud.get('titular.Solicitud.Ae_solicitudes.id_solicitud')))) &&
            !this.util.isNull(this.util.oidBuilder.buildOidDireccion(
            this.util.getInt(varputhissolicitud.get('titular.direccion.Identificador'))))) {
            // pt_p_agrDepartamento.SetValue( v.titular.direccion.departamento )
            this.ptupuagrDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('titular.direccion.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // pt_p_agrMunicipio.SetValue( v.titular.direccion.municipio )
            this.ptupuagrMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('titular.direccion.municipio.Codigo'))));
            // pt_p_agrPais.SetValue( v.titular.direccion.pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhissolicitud.get('titular.direccion.pais.Codigo')));
            this.executeDependecyRulesptupuagrpais('SetValue', true);
            // pt_p_atrDireccionCompleta.SetValue( v.titular.direccion.direccioncompleta )
            this.ptupuatrDireccionCompleta.setValue(varputhissolicitud.get('titular.direccion.direccioncompleta'));
            // pt_p_atrRural.SetValue( v.titular.direccion.rural )
            this.ptupuatrRural.setValue(this.util.getBool(varputhissolicitud.get('titular.direccion.rural')));
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
     * Evaluate dependendy rules for pt_p_agrPais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrpais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrpais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrPais argument
     */
    private setSuppInfoptupuagrpais(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_agrPais lense search argument
     */
    public onptupuagrpaisChange(): void {
        this.executeLenseSearch(this.ptupuagrPais, ModelConstants.Pais.name, 'IC_Pais',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupuagrpais();
            }
            if (foundInstances === 1) {
                this.processptupuagrpaisSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrPais lense search argument
     */
    public processptupuagrpaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrPais.searchResults.length > index) {
            selectedInstance = this.ptupuagrPais.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrPais.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrPais.allowMultiSelect) {
                this.ptupuagrPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrPais.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrPais lense search argument
     */
    public cleanptupuagrpais(): void {
        this.clearValidationMessages();
        this.ptupuagrPais.clean();
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptReplicarDir argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptreplicardir(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptReplicarDir();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptReplicarDir argument
     */
    private executeDependecyRules1ptReplicarDir(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrDepartamento,
                'Codigo');
        this.addQueryInstanceFromField(this.ptupuagrMunicipio,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptReplicarDirActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptReplicarDir argument
     */
    private executeDependecyRules1ptReplicarDirActions(): void {
        const varptupuagrdepartamento = this.getFirstInstanceFromCache(this.ptupuagrDepartamento);
        const varptupuagrmunicipio = this.getFirstInstanceFromCache(this.ptupuagrMunicipio);
        // v <> NULL AND v = true
        if (varptupuagrdepartamento && varptupuagrmunicipio && !this.util.isNull(this.util.getBool(this.ptReplicarDir.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptReplicarDir.value), true)) {
            // ptReplicarDir.SetValue( FALSE )
            this.ptReplicarDir.setValue(false);
            this.executeDependecyRulesptreplicardir('SetValue', true);
            // ptDCDepartamento.SetValue( pt_p_agrDepartamento )
            this.ptDCDepartamento.setValue(varptupuagrdepartamento?.oid);
            this.pendingDependencyRules.push('loadPreloadptdcmunicipio');
            // ptDCDireccionCompleta.SetValue( pt_p_atrDireccionCompleta )
            this.ptDCDireccionCompleta.setValue(this.ptupuatrDireccionCompleta.value);
            // ptDCMunicipio.SetValue( pt_p_agrMunicipio )
            this.ptDCMunicipio.setValue(varptupuagrmunicipio?.oid);
            // ptDCRural.SetValue( pt_p_atrRural )
            this.ptDCRural.setValue(this.util.getBool(this.ptupuatrRural.value));
            // ptDCTelefonoCelular.SetValue( pt_p_atrTelefonoCelular )
            this.ptDCTelefonoCelular.setValue(this.ptupuatrTelefonoCelular.value);
            // ptDCTelefonoFijo.SetValue( pt_p_atrTelefonoFijo )
            this.ptDCTelefonoFijo.setValue(this.ptupuatrTelefonoFijo.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptReplicarDir argument
     */
    public onptreplicardirChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptreplicardir('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_agrDepartamento argument
     */
    public onptupuagrdepartamentoChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the ptDCDepartamento argument
     */
    public onptdcdepartamentoChange(): void {
        this.loadPreloadptdcmunicipio();

        this.executePendingDependencyRules();
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
        if ('ptupuagrPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pais';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible;

        if (groupId === '0') {
            isVisible = this.ptupuatrDireccionCompleta.visible ||
                this.ptupuagrDepartamento.visible ||
                this.ptupuagrMunicipio.visible ||
                this.ptupuatrRural.visible ||
                this.ptupuatrTelefonoFijo.visible ||
                this.ptupuatrTelefonoCelular.visible;
        }
        if (groupId === '2') {
            isVisible = this.ptDCDireccionCompleta.visible ||
                this.ptDCDepartamento.visible ||
                this.ptDCMunicipio.visible ||
                this.ptDCRural.visible ||
                this.ptDCTelefonoFijo.visible ||
                this.ptDCTelefonoCelular.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '0') {
            alias = this.langMng.translateText('0',
                'Dirección residencial');
        }
        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Dirección de correspondencia');
        }
        return alias;
    }
}
