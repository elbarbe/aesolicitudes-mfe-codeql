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
    selector: 'imes-solicitud-siu-tmoddirscontratante',
    templateUrl: './siu_tmoddirscontratante.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTMODDIRSCONTRATANTEComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptupuTelefonoFijo: Field;
    public ptupuTelefonoCelular: Field;
    public ptupuDireccionCompleta: Field;
    public ptupuRural: FieldDefinedSelection;
    public ptupuevcDepartamento: FieldOVPreload;
    public ptupuevcMunicipio: FieldOVPreload;
    public ptupDCDireccionCompleta: Field;
    public ptupDCDepartamento: FieldOVPreload;
    public ptupDCMunicipio: FieldOVPreload;
    public ptupDCRural: FieldDefinedSelection;
    public ptupDCTelefonoFijo: Field;
    public ptupDCTelefonoCelular: Field;
    public ptupuPais: FieldOVLenseSearch;
    public pDCPais: FieldOVLenseSearch;
    public ptReplicarDireccion: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431957012480960Ser_133UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutmoddirscontratante;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODDIRSCONTRATANTE';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TMODDIRSCONTRATANTE',
            'Modificar direcciones');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuTelefonoFijo = new Field(this.langMng);
        this.ptupuTelefonoCelular = new Field(this.langMng);
        this.ptupuDireccionCompleta = new Field(this.langMng);
        this.ptupuRural = new FieldDefinedSelection(this.langMng);
        this.ptupuevcDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuevcMunicipio = new FieldOVPreload(this.langMng);
        this.ptupDCDireccionCompleta = new Field(this.langMng);
        this.ptupDCDepartamento = new FieldOVPreload(this.langMng);
        this.ptupDCMunicipio = new FieldOVPreload(this.langMng);
        this.ptupDCRural = new FieldDefinedSelection(this.langMng);
        this.ptupDCTelefonoFijo = new Field(this.langMng);
        this.ptupDCTelefonoCelular = new Field(this.langMng);
        this.ptupuPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.pDCPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptReplicarDireccion = new FieldDefinedSelection(this.langMng);

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
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptupuTelefonoFijo.nameInRequest = 'pt_p_telefonofijo';
        this.ptupuTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_TelefonoFijo',
            'Teléfono fijo');
        this.ptupuTelefonoFijo.mandatory = false;
        this.ptupuTelefonoFijo.dataType = Field.dtString;
        this.ptupuTelefonoFijo.maxLength = 15;
        this.ptupuTelefonoFijo.assignCSS();
        this.ptupuTelefonoFijo.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuTelefonoFijo);

        this.ptupuTelefonoCelular.nameInRequest = 'pt_p_telefonocelular';
        this.ptupuTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_TelefonoCelular',
            'Teléfono celular');
        this.ptupuTelefonoCelular.mandatory = false;
        this.ptupuTelefonoCelular.dataType = Field.dtString;
        this.ptupuTelefonoCelular.maxLength = 15;
        this.ptupuTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuTelefonoCelular);

        this.ptupuDireccionCompleta.nameInRequest = 'pt_p_direccioncompleta';
        this.ptupuDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_DireccionCompleta',
            'Dirección completa');
        this.ptupuDireccionCompleta.mandatory = false;
        this.ptupuDireccionCompleta.dataType = Field.dtString;
        this.ptupuDireccionCompleta.maxLength = 250;
        this.ptupuDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuDireccionCompleta);

        this.ptupuRural.nameInRequest = 'pt_p_rural';
        this.ptupuRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_Rural',
            'Rural');
        this.ptupuRural.mandatory = true;
        this.ptupuRural.dataType = Field.dtBool;
        this.ptupuRural.options = DefinedSelections.DS_SINO;
        this.ptupuRural.value = false;
        this.ptupuRural.assignCSS();
        this.fields.push(this.ptupuRural);

        this.ptupuevcDepartamento.nameInRequest = 'pt_p_evcdepartamento';
        this.ptupuevcDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_evcDepartamento',
            'Departamento');
        this.ptupuevcDepartamento.mandatory = false;
        this.ptupuevcDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuevcDepartamento.maxLength = 150;
        this.ptupuevcDepartamento.assignCSS();
        this.fields.push(this.ptupuevcDepartamento);

        this.ptupuevcMunicipio.nameInRequest = 'pt_p_evcmunicipio';
        this.ptupuevcMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_evcMunicipio',
            'Municipio');
        this.ptupuevcMunicipio.mandatory = false;
        this.ptupuevcMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuevcMunicipio.maxLength = 150;
        this.ptupuevcMunicipio.assignCSS();
        this.fields.push(this.ptupuevcMunicipio);

        this.ptupDCDireccionCompleta.nameInRequest = 'pt_pdcdireccioncompleta';
        this.ptupDCDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_pDCDireccionCompleta',
            'Dirección completa');
        this.ptupDCDireccionCompleta.mandatory = false;
        this.ptupDCDireccionCompleta.dataType = Field.dtString;
        this.ptupDCDireccionCompleta.maxLength = 250;
        this.ptupDCDireccionCompleta.assignCSS();
        this.fields.push(this.ptupDCDireccionCompleta);

        this.ptupDCDepartamento.nameInRequest = 'pt_pdcdepartamento';
        this.ptupDCDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_pDCDepartamento',
            'Departamento');
        this.ptupDCDepartamento.mandatory = false;
        this.ptupDCDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupDCDepartamento.maxLength = 150;
        this.ptupDCDepartamento.assignCSS();
        this.fields.push(this.ptupDCDepartamento);

        this.ptupDCMunicipio.nameInRequest = 'pt_pdcmunicipio';
        this.ptupDCMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_pDCMunicipio',
            'Municipio');
        this.ptupDCMunicipio.mandatory = false;
        this.ptupDCMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupDCMunicipio.maxLength = 150;
        this.ptupDCMunicipio.assignCSS();
        this.fields.push(this.ptupDCMunicipio);

        this.ptupDCRural.nameInRequest = 'pt_pdcrural';
        this.ptupDCRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_pDCRural',
            'Rural');
        this.ptupDCRural.mandatory = true;
        this.ptupDCRural.dataType = Field.dtBool;
        this.ptupDCRural.options = DefinedSelections.DS_SINO;
        this.ptupDCRural.value = false;
        this.ptupDCRural.assignCSS();
        this.fields.push(this.ptupDCRural);

        this.ptupDCTelefonoFijo.nameInRequest = 'pt_pdctelefonofijo';
        this.ptupDCTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_pDCTelefonoFijo',
            'Teléfono fijo');
        this.ptupDCTelefonoFijo.mandatory = false;
        this.ptupDCTelefonoFijo.dataType = Field.dtString;
        this.ptupDCTelefonoFijo.maxLength = 15;
        this.ptupDCTelefonoFijo.assignCSS();
        this.ptupDCTelefonoFijo.addCSSClass('beginNewLine');
        this.fields.push(this.ptupDCTelefonoFijo);

        this.ptupDCTelefonoCelular.nameInRequest = 'pt_pdctelefonocelular';
        this.ptupDCTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_pDCTelefonoCelular',
            'Teléfono celular');
        this.ptupDCTelefonoCelular.mandatory = false;
        this.ptupDCTelefonoCelular.dataType = Field.dtString;
        this.ptupDCTelefonoCelular.maxLength = 15;
        this.ptupDCTelefonoCelular.assignCSS();
        this.fields.push(this.ptupDCTelefonoCelular);

        this.ptupuPais.nameInRequest = 'pt_p_pais';
        this.ptupuPais.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pt_p_Pais',
            'País');
        this.ptupuPais.mandatory = false;
        this.ptupuPais.dataType = ModelConstants.Pais.name;
        this.ptupuPais.maxLength = 50;
        this.ptupuPais.assignCSS();
        this.fields.push(this.ptupuPais);

        this.pDCPais.nameInRequest = 'pdcpais';
        this.pDCPais.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_pDCPais',
            'País');
        this.pDCPais.mandatory = false;
        this.pDCPais.dataType = ModelConstants.Pais.name;
        this.pDCPais.maxLength = 50;
        this.pDCPais.assignCSS();
        this.fields.push(this.pDCPais);

        this.ptReplicarDireccion.nameInRequest = 'ptreplicardireccion';
        this.ptReplicarDireccion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODDIRSCONTRATANTE_inArg_ptReplicarDireccion',
            'Replicar');
        this.ptReplicarDireccion.mandatory = true;
        this.ptReplicarDireccion.dataType = Field.dtBool;
        this.ptReplicarDireccion.options = DefinedSelections.DS_SINO;
        this.ptReplicarDireccion.assignCSS();
        this.fields.push(this.ptReplicarDireccion);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // ptReplicarDireccion
            const defValptReplicarDireccion = new Promise<void>((resolveDefValue) => {
                this.ptReplicarDireccion.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptReplicarDireccion);

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
            if (lastRole === 'Departamento') {
                this.ptupDCDepartamento.setValue(lastRoleOid);
                this.ptupDCDepartamento.enabled = false;
                this.loadPreloadptupdcmunicipio();
            }
            if (lastRole === 'Municipio') {
                this.ptupDCMunicipio.setValue(lastRoleOid);
                this.ptupDCMunicipio.enabled = false;
            }
            if (lastRole === 'Pais') {
                this.pDCPais.setValue(lastRoleOid);
                this.executeDependecyRulespdcpais('SetValue', true);
                this.pDCPais.enabled = false;
                this.executeDependecyRulespdcpais('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcDepartamento.loadPreload(response.results);
                } else {
                    this.ptupuevcDepartamento.loadPreload([]);
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

        // ptupDCDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupDCDepartamento.loadPreload(response.results);
                } else {
                    this.ptupDCDepartamento.loadPreload([]);
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
     * Search the preload values of field pt_p_evcMunicipio
     */
    private loadPreloadptupuevcmunicipio(): void {

        if (this.ptupuevcDepartamento.getSelectedInstances().length === 1 &&
            this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODDIRSCONTRATANTE_pt_p_evcMunicipio_NavFilter0');
            navFilters.push('Solicitud_TMODDIRSCONTRATANTE_pt_p_evcMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuevcMunicipio.loadPreload(response.results);
                    } else {
                        this.ptupuevcMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuevcMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuevcMunicipio.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_pDCMunicipio
     */
    private loadPreloadptupdcmunicipio(): void {

        if (this.ptupDCDepartamento.getSelectedInstances().length === 1 &&
            this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODDIRSCONTRATANTE_pt_pDCMunicipio_NavFilter0');
            navFilters.push('Solicitud_TMODDIRSCONTRATANTE_pt_pDCMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupDCMunicipio.loadPreload(response.results);
                    } else {
                        this.ptupDCMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupDCMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupDCMunicipio.cleanPreload();
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuPais'.toLowerCase()) {
            this.ptupuPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupupais('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pDCPais'.toLowerCase()) {
            this.pDCPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespdcpais('SetValue', false);
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
            this.loadPreloadptupuevcmunicipio();
            this.loadPreloadptupdcmunicipio();
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
                'contratante.direccionres,contratante.departamentores.Codigo,contratante.municipiores.Codigo,contratante.ruraldirres' +
                ',direccion.pais.Codigo,direccion.direccioncompleta,direccion.departamento.Codigo,direccion.municipio.Codigo' +
                ',direccion.rural,contratante.telefonocelularres,contratante.telefonocelular,contratante.telefonofijores' +
                ',contratante.telefonofijo');
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
            // pDCPais.SetVisible( FALSE )
            this.pDCPais.visible = false;
            // pt_p_Pais.SetVisible( FALSE )
            this.ptupuPais.visible = false;
            // pt_p_DireccionCompleta.SetValue( v.contratante.direccionres )
            this.ptupuDireccionCompleta.setValue(varputhissolicitud.get('contratante.direccionres'));
            // pt_p_evcDepartamento.SetValue( v.contratante.departamentores )
            this.ptupuevcDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('contratante.departamentores.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // pt_p_evcMunicipio.SetValue( v.contratante.municipiores )
            this.ptupuevcMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('contratante.municipiores.Codigo'))));
            // pt_p_Rural.SetValue( v.contratante.ruraldirres )
            this.ptupuRural.setValue(this.util.getBool(varputhissolicitud.get('contratante.ruraldirres')));
            // pt_p_Pais.SetValue( v.direccion.pais )
            this.ptupuPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhissolicitud.get('direccion.pais.Codigo')));
            this.executeDependecyRulesptupupais('SetValue', true);
            // pDCPais.SetValue( v.direccion.pais )
            this.pDCPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhissolicitud.get('direccion.pais.Codigo')));
            this.executeDependecyRulespdcpais('SetValue', true);
            // pt_pDCDireccionCompleta.SetValue( v.direccion.direccioncompleta )
            this.ptupDCDireccionCompleta.setValue(varputhissolicitud.get('direccion.direccioncompleta'));
            // pt_pDCDepartamento.SetValue( v.direccion.departamento )
            this.ptupDCDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('direccion.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupdcmunicipio');
            // pt_pDCMunicipio.SetValue( v.direccion.municipio )
            this.ptupDCMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('direccion.municipio.Codigo'))));
            // pt_pDCRural.SetValue( v.direccion.rural )
            this.ptupDCRural.setValue(this.util.getBool(varputhissolicitud.get('direccion.rural')));
            // pt_p_TelefonoCelular.SetValue( v.contratante.telefonocelularres )
            this.ptupuTelefonoCelular.setValue(varputhissolicitud.get('contratante.telefonocelularres'));
            // pt_pDCTelefonoCelular.SetValue( v.contratante.telefonocelular )
            this.ptupDCTelefonoCelular.setValue(varputhissolicitud.get('contratante.telefonocelular'));
            // pt_p_TelefonoFijo.SetValue( v.contratante.telefonofijores )
            this.ptupuTelefonoFijo.setValue(varputhissolicitud.get('contratante.telefonofijores'));
            // pt_pDCTelefonoFijo.SetValue( v.contratante.telefonofijo )
            this.ptupDCTelefonoFijo.setValue(varputhissolicitud.get('contratante.telefonofijo'));
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
     * Evaluate dependendy rules for pt_p_Pais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupupais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupupais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_Pais argument
     */
    private setSuppInfoptupupais(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_Pais lense search argument
     */
    public onptupupaisChange(): void {
        this.executeLenseSearch(this.ptupuPais, ModelConstants.Pais.name, 'IC_Pais',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupupais();
            }
            if (foundInstances === 1) {
                this.processptupupaisSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_Pais lense search argument
     */
    public processptupupaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuPais.searchResults.length > index) {
            selectedInstance = this.ptupuPais.searchResults[index];
        }
        // Clean the result list
        this.ptupuPais.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuPais.allowMultiSelect) {
                this.ptupuPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuPais.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupupais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_Pais lense search argument
     */
    public cleanptupupais(): void {
        this.clearValidationMessages();
        this.ptupuPais.clean();
        this.executeDependecyRulesptupupais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pDCPais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespdcpais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopdcpais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pDCPais argument
     */
    private setSuppInfopdcpais(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.pDCPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pDCPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pDCPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pDCPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pDCPais lense search argument
     */
    public onpdcpaisChange(): void {
        this.executeLenseSearch(this.pDCPais, ModelConstants.Pais.name, 'IC_Pais',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanpdcpais();
            }
            if (foundInstances === 1) {
                this.processpdcpaisSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pDCPais lense search argument
     */
    public processpdcpaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pDCPais.searchResults.length > index) {
            selectedInstance = this.pDCPais.searchResults[index];
        }
        // Clean the result list
        this.pDCPais.searchResults = [];
        if (selectedInstance) {
            if (!this.pDCPais.allowMultiSelect) {
                this.pDCPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pDCPais.addInstances(selectedInstance);
        }
        this.executeDependecyRulespdcpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pDCPais lense search argument
     */
    public cleanpdcpais(): void {
        this.clearValidationMessages();
        this.pDCPais.clean();
        this.executeDependecyRulespdcpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptReplicarDireccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptreplicardireccion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptReplicarDireccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptReplicarDireccion argument
     */
    private executeDependecyRules1ptReplicarDireccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcDepartamento,
                'Codigo');
        this.addQueryInstanceFromField(this.ptupuevcMunicipio,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptReplicarDireccionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptReplicarDireccion argument
     */
    private executeDependecyRules1ptReplicarDireccionActions(): void {
        const varptupuevcdepartamento = this.getFirstInstanceFromCache(this.ptupuevcDepartamento);
        const varptupuevcmunicipio = this.getFirstInstanceFromCache(this.ptupuevcMunicipio);
        // v <> NULL AND v = TRUE
        if (varptupuevcdepartamento && varptupuevcmunicipio && !this.util.isNull(this.util.getBool(this.ptReplicarDireccion.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptReplicarDireccion.value), true)) {
            // pt_pDCDepartamento.SetValue( pt_p_evcDepartamento )
            this.ptupDCDepartamento.setValue(varptupuevcdepartamento?.oid);
            this.pendingDependencyRules.push('loadPreloadptupdcmunicipio');
            // pt_pDCDireccionCompleta.SetValue( pt_p_DireccionCompleta )
            this.ptupDCDireccionCompleta.setValue(this.ptupuDireccionCompleta.value);
            // pt_pDCMunicipio.SetValue( pt_p_evcMunicipio )
            this.ptupDCMunicipio.setValue(varptupuevcmunicipio?.oid);
            // pt_pDCRural.SetValue( pt_p_Rural )
            this.ptupDCRural.setValue(this.util.getBool(this.ptupuRural.value));
            // pt_pDCTelefonoCelular.SetValue( pt_p_TelefonoCelular )
            this.ptupDCTelefonoCelular.setValue(this.ptupuTelefonoCelular.value);
            // pt_pDCTelefonoFijo.SetValue( pt_p_TelefonoFijo )
            this.ptupDCTelefonoFijo.setValue(this.ptupuTelefonoFijo.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptReplicarDireccion argument
     */
    public onptreplicardireccionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptreplicardireccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_evcDepartamento argument
     */
    public onptupuevcdepartamentoChange(): void {
        this.loadPreloadptupuevcmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_pDCDepartamento argument
     */
    public onptupdcdepartamentoChange(): void {
        this.loadPreloadptupdcmunicipio();

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
        if ('ptupuPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pais';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pDCPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.pDCPais.completeSelectionForwardExchInfo(exchInfo);
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
            isVisible = this.ptupuDireccionCompleta.visible ||
                this.ptupuevcDepartamento.visible ||
                this.ptupuevcMunicipio.visible ||
                this.ptupuRural.visible ||
                this.ptupuTelefonoFijo.visible ||
                this.ptupuTelefonoCelular.visible;
        }
        if (groupId === '2') {
            isVisible = this.ptupDCDireccionCompleta.visible ||
                this.ptupDCDepartamento.visible ||
                this.ptupDCMunicipio.visible ||
                this.ptupDCRural.visible ||
                this.ptupDCTelefonoFijo.visible ||
                this.ptupDCTelefonoCelular.visible;
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
