import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldBlob, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
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
    selector: 'imes-solicitud-siu-tsubirdocumentoato',
    templateUrl: './siu_tsubirdocumentoato.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTSUBIRDOCUMENTOATOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptupuatrDescripcion: Field;
    public ptupuatrTipo: FieldDefinedSelection;
    public ptupuExtension: Field;
    public ptPersona: FieldOVPreload;
    public ptIdDocGestor: Field;
    public ptNombre: Field;
    public pfFichero: FieldBlob;
    public ptNumSolicitud: Field;
    public ptNumIdentUsuario: Field;

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
        this.idXML = 'Clas_1431957012480960Ser_171UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutsubirdocumentoato;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'MesaDeApoyo']));
        this.serviceName = 'TSUBIRDOCUMENTOATO';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TSUBIRDOCUMENTOATO',
            'Subir documento');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuatrDescripcion = new Field(this.langMng);
        this.ptupuatrTipo = new FieldDefinedSelection(this.langMng);
        this.ptupuExtension = new Field(this.langMng);
        this.ptPersona = new FieldOVPreload(this.langMng);
        this.ptIdDocGestor = new Field(this.langMng);
        this.ptNombre = new Field(this.langMng);
        this.pfFichero = new FieldBlob(this.langMng);
        this.ptNumSolicitud = new Field(this.langMng);
        this.ptNumIdentUsuario = new Field(this.langMng);

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
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = false;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 150;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);

        this.ptupuatrTipo.nameInRequest = 'pt_p_atrtipo';
        this.ptupuatrTipo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_pt_p_atrTipo',
            'Tipo');
        this.ptupuatrTipo.mandatory = false;
        this.ptupuatrTipo.dataType = Field.dtNat;
        this.ptupuatrTipo.options = DefinedSelections.DS_TIPODOCUMENTOG;
        this.ptupuatrTipo.assignCSS();
        this.fields.push(this.ptupuatrTipo);

        this.ptupuExtension.nameInRequest = 'pt_p_extension';
        this.ptupuExtension.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_pt_p_Extension',
            'Extensión');
        this.ptupuExtension.mandatory = false;
        this.ptupuExtension.dataType = Field.dtString;
        this.ptupuExtension.maxLength = 15;
        this.ptupuExtension.assignCSS();
        this.fields.push(this.ptupuExtension);

        this.ptPersona.nameInRequest = 'ptpersona';
        this.ptPersona.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_ptPersona',
            'Persona');
        this.ptPersona.mandatory = true;
        this.ptPersona.dataType = ModelConstants.Persona.name;
        this.ptPersona.maxLength = 80;
        this.ptPersona.assignCSS();
        this.fields.push(this.ptPersona);

        this.ptIdDocGestor.nameInRequest = 'ptiddocgestor';
        this.ptIdDocGestor.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_ptIdDocGestor',
            'ptIdDocGestor');
        this.ptIdDocGestor.mandatory = true;
        this.ptIdDocGestor.dataType = Field.dtString;
        this.ptIdDocGestor.maxLength = 255;
        this.ptIdDocGestor.assignCSS();
        this.fields.push(this.ptIdDocGestor);

        this.ptNombre.nameInRequest = 'ptnombre';
        this.ptNombre.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_ptNombre',
            'ptNombre');
        this.ptNombre.mandatory = true;
        this.ptNombre.dataType = Field.dtString;
        this.ptNombre.maxLength = 255;
        this.ptNombre.assignCSS();
        this.fields.push(this.ptNombre);

        this.pfFichero.nameInRequest = 'pffichero';
        this.pfFichero.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_pfFichero',
            'Fichero');
        this.pfFichero.mandatory = false;
        this.pfFichero.dataType = Field.dtBlob;
        this.pfFichero.assignCSS();
        this.fields.push(this.pfFichero);

        this.ptNumSolicitud.nameInRequest = 'ptnumsolicitud';
        this.ptNumSolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_ptNumSolicitud',
            'ptNumSolicitud');
        this.ptNumSolicitud.mandatory = false;
        this.ptNumSolicitud.dataType = Field.dtInt;
        this.ptNumSolicitud.assignCSS();
        this.fields.push(this.ptNumSolicitud);

        this.ptNumIdentUsuario.nameInRequest = 'ptnumidentusuario';
        this.ptNumIdentUsuario.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TSUBIRDOCUMENTOATO_inArg_ptNumIdentUsuario',
            'ptNumIdentUsuario');
        this.ptNumIdentUsuario.mandatory = false;
        this.ptNumIdentUsuario.dataType = Field.dtString;
        this.ptNumIdentUsuario.maxLength = 30;
        this.ptNumIdentUsuario.assignCSS();
        this.fields.push(this.ptNumIdentUsuario);
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
            if (lastRole === 'Persona') {
                this.ptPersona.setValue(lastRoleOid);
                this.executeDependecyRulesptpersona('SetValue', true);
                this.ptPersona.enabled = false;
                this.executeDependecyRulesptpersona('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of field ptPersona
     */
    private loadPreloadptpersona(): void {

        if (this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TSUBIRDOCUMENTOATO_ptPersona_NavFilter0');
            this.util.searchPreload('Persona', 'IC_Persona', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptPersona.loadPreload(response.results);
                    } else {
                        this.ptPersona.loadPreload([]);
                    }
                    if (this.ptPersona.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptpersona('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptPersona.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptPersona.getSelectedInstances().length > 0) {
                this.ptPersona.cleanPreload();
                this.executeDependecyRulesptpersona('SetValue', true);
            } else {
                this.ptPersona.cleanPreload();
            }
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
            this.loadPreloadptpersona();
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
                'numradicado');
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
            // ptNumSolicitud.SetValue( v.NumRadicado )
            this.ptNumSolicitud.setValue(this.util.getInt(varputhissolicitud.get('numradicado')));
            this.executeDependecyRulesptnumsolicitud('SetValue', true);
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
     * Evaluate dependendy rules for pt_p_atrTipo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrtipo(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrTipo();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrTipo();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuatrTipo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrTipo argument
     */
    private executeDependecyRules1ptupuatrTipo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrTipoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrTipo argument
     */
    private executeDependecyRules1ptupuatrTipoActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.util.getInt(this.ptupuatrTipo.value))) {
            // p_thisSolicitud.SetVisible( FALSE )
            this.puthisSolicitud.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrTipo argument
     */
    private executeDependecyRules2ptupuatrTipo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrTipoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrTipo argument
     */
    private executeDependecyRules2ptupuatrTipoActions(): void {
        // v <> NULL AND v = 1 AND ptNumIdentUsuario <> NULL
        if (!this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 1) && !this.util.isNull(this.ptNumIdentUsuario.value)) {
            // ptNombre.SetValue( "DOCIDENTIFICACION" + ptNumIdentUsuario )
            this.ptNombre.setValue('DOCIDENTIFICACION' + this.ptNumIdentUsuario.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_atrTipo argument
     */
    private executeDependecyRules3ptupuatrTipo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3ptupuatrTipoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_atrTipo argument
     */
    private executeDependecyRules3ptupuatrTipoActions(): void {
        // v <> NULL AND v = 2 AND ptNumSolicitud <> NULL
        if (!this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 2) &&
            !this.util.isNull(this.util.getInt(this.ptNumSolicitud.value))) {
            // ptNombre.SetValue( "DOCSOLICITUD" + IntToStr( ptNumSolicitud ) + "_" +
            // IntToStr( getYear( systemDate() ) ) +
            // IntToStr( getMonth( systemDate() ) ) +
            // IntToStr( getDay( systemDate() ) ) +
            // IntToStr( getHour( systemTime( ) )) +
            // IntToStr( getMinute( systemTime(  ) )) +
            // IntToStr( getSecond( systemTime(  ) )) )
            this.ptNombre.setValue('DOCSOLICITUD' + this.stdFun.intToStr(this.util.getInt(this.ptNumSolicitud.value)) + '_' +
                this.stdFun.intToStr(this.stdFun.getYear(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getMonth(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getDay(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getHour(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getMinute(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getSecond(this.stdFun.systemtime())));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrTipo argument
     */
    public onptupuatrtipoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrtipo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptPersona argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptpersona(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptPersona.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptPersona();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptPersona();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptPersona argument
     */
    private executeDependecyRules1ptPersona(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptPersona,
                'numidentificacion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptPersonaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptPersona argument
     */
    private executeDependecyRules1ptPersonaActions(): void {
        const varptpersona = this.getFirstInstanceFromCache(this.ptPersona);
        // v <> NULL
        if (varptpersona && !this.util.isNull(varptpersona)) {
            // ptNumIdentUsuario.SetValue( v.numidentificacion )
            this.ptNumIdentUsuario.setValue(varptpersona.get('numidentificacion'));
            this.executeDependecyRulesptnumidentusuario('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptPersona argument
     */
    private executeDependecyRules2ptPersona(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptPersona,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptPersonaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptPersona argument
     */
    private executeDependecyRules2ptPersonaActions(): void {
        const varptpersona = this.getFirstInstanceFromCache(this.ptPersona);
        // v = NULL
        if (varptpersona && this.util.isNull(varptpersona)) {
            // ptNumIdentUsuario.SetValue( NULL )
            this.ptNumIdentUsuario.setValue(null);
            this.executeDependecyRulesptnumidentusuario('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptPersona argument
     */
    public onptpersonaChange(): void {
        this.executeDependecyRulesptpersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptNumSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptnumsolicitud(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptNumSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptNumSolicitud argument
     */
    private executeDependecyRules1ptNumSolicitud(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptNumSolicitudActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptNumSolicitud argument
     */
    private executeDependecyRules1ptNumSolicitudActions(): void {
        // v <> NULL AND pt_p_atrTipo <> NULL AND pt_p_atrTipo = 2
        if (!this.util.isNull(this.util.getInt(this.ptNumSolicitud.value)) &&
            !this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 2)) {
            // ptNombre.SetValue( "DOCSOLICITUD" + IntToStr( v ) + "_" +
            // IntToStr( getYear( systemDate() ) ) +
            // IntToStr( getMonth( systemDate() ) ) +
            // IntToStr( getDay( systemDate() ) ) +
            // IntToStr( getHour( systemTime( ) )) +
            // IntToStr( getMinute( systemTime(  ) )) +
            // IntToStr( getSecond( systemTime(  ) )) )
            this.ptNombre.setValue('DOCSOLICITUD' + this.stdFun.intToStr(this.util.getInt(this.ptNumSolicitud.value)) + '_' +
                this.stdFun.intToStr(this.stdFun.getYear(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getMonth(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getDay(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getHour(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getMinute(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getSecond(this.stdFun.systemtime())));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptNumSolicitud argument
     */
    public onptnumsolicitudChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptnumsolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptNumIdentUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptnumidentusuario(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptNumIdentUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptNumIdentUsuario argument
     */
    private executeDependecyRules1ptNumIdentUsuario(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptNumIdentUsuarioActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptNumIdentUsuario argument
     */
    private executeDependecyRules1ptNumIdentUsuarioActions(): void {
        // v <> NULL AND pt_p_atrTipo <> NULL AND pt_p_atrTipo = 1
        if (!this.util.isNull(this.ptNumIdentUsuario.value) && !this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 1)) {
            // ptNombre.SetValue( "DOCIDENTIFICACION" + v )
            this.ptNombre.setValue('DOCIDENTIFICACION' + this.ptNumIdentUsuario.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptNumIdentUsuario argument
     */
    public onptnumidentusuarioChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptnumidentusuario('SetValue', false);
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
    }
}
