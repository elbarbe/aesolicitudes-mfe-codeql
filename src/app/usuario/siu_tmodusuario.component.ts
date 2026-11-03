import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { InstanceCache } from '../common/app.cachedependencyrules';
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
    selector: 'imes-usuario-siu-tmodusuario',
    templateUrl: './siu_tmodusuario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSIUuTMODUSUARIOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisUsuario: FieldOVLenseSearch;
    public ptupuPrimerNombre: Field;
    public ptupuSegundoNombre: Field;
    public ptupuPrimerApellido: Field;
    public ptupuSegundoApellido: Field;
    public ptupuFechaNacimiento: Field;
    public ptupuGenero: FieldDefinedSelection;
    public ptupuIndicadorExtranjero: FieldDefinedSelection;
    public ptupuTelefonoFijo: Field;
    public ptupuTelefonoCelular: Field;
    public ptupuCorreoElectronico: Field;
    public ptupuevcDepartamentoNac: FieldOVPreload;
    public ptupuevcMunicipioNac: FieldOVPreload;
    public ptupuevcEstadoCivil: FieldOVPreload;
    public ptupuDireccionCompleta: Field;
    public ptupuRural: FieldDefinedSelection;
    public ptupuevcDepartamento: FieldOVPreload;
    public ptupuevcMunicipio: FieldOVPreload;
    public ptuDireccion: FieldOVPreload;
    public ptuReplicarDireccion: FieldDefinedSelection;
    public ptupuNumIdentificacion: Field;
    public ptupuevcTipoIdentificacion: FieldOVPreload;
    public ptupuagrPais: FieldOVPreload;
    public ptuDireccionUsuario: FieldOVPreload;

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
        this.idXML = 'Clas_1432633737216826Ser_14UIServ_1';
        this.className = ModelConstants.Usuario.name;
        this.iuName = ModelConstants.Usuario.siuutmodusuario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODUSUARIO';
        this.title = this.langMng.translateText('cls_Usuario_svc_TMODUSUARIO',
            'Modificar usuario');

        // Create inbound argument components
        this.puthisUsuario = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuPrimerNombre = new Field(this.langMng);
        this.ptupuSegundoNombre = new Field(this.langMng);
        this.ptupuPrimerApellido = new Field(this.langMng);
        this.ptupuSegundoApellido = new Field(this.langMng);
        this.ptupuFechaNacimiento = new Field(this.langMng);
        this.ptupuGenero = new FieldDefinedSelection(this.langMng);
        this.ptupuIndicadorExtranjero = new FieldDefinedSelection(this.langMng);
        this.ptupuTelefonoFijo = new Field(this.langMng);
        this.ptupuTelefonoCelular = new Field(this.langMng);
        this.ptupuCorreoElectronico = new Field(this.langMng);
        this.ptupuevcDepartamentoNac = new FieldOVPreload(this.langMng);
        this.ptupuevcMunicipioNac = new FieldOVPreload(this.langMng);
        this.ptupuevcEstadoCivil = new FieldOVPreload(this.langMng);
        this.ptupuDireccionCompleta = new Field(this.langMng);
        this.ptupuRural = new FieldDefinedSelection(this.langMng);
        this.ptupuevcDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuevcMunicipio = new FieldOVPreload(this.langMng);
        this.ptuDireccion = new FieldOVPreload(this.langMng);
        this.ptuReplicarDireccion = new FieldDefinedSelection(this.langMng);
        this.ptupuNumIdentificacion = new Field(this.langMng);
        this.ptupuevcTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuagrPais = new FieldOVPreload(this.langMng);
        this.ptuDireccionUsuario = new FieldOVPreload(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisUsuario.nameInRequest = 'p_thisusuario';
        this.puthisUsuario.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_p_thisUsuario',
            'Usuario');
        this.puthisUsuario.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisUsuario.mandatory = true;
        this.puthisUsuario.dataType = ModelConstants.Usuario.name;
        this.puthisUsuario.maxLength = 80;
        this.puthisUsuario.assignCSS();
        this.fields.push(this.puthisUsuario);

        this.ptupuPrimerNombre.nameInRequest = 'pt_p_primernombre';
        this.ptupuPrimerNombre.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_PrimerNombre',
            'Primer nombre');
        this.ptupuPrimerNombre.mandatory = false;
        this.ptupuPrimerNombre.dataType = Field.dtString;
        this.ptupuPrimerNombre.maxLength = 50;
        this.ptupuPrimerNombre.assignCSS();
        this.ptupuPrimerNombre.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuPrimerNombre);

        this.ptupuSegundoNombre.nameInRequest = 'pt_p_segundonombre';
        this.ptupuSegundoNombre.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_SegundoNombre',
            'Segundo nombre');
        this.ptupuSegundoNombre.mandatory = false;
        this.ptupuSegundoNombre.dataType = Field.dtString;
        this.ptupuSegundoNombre.maxLength = 50;
        this.ptupuSegundoNombre.assignCSS();
        this.fields.push(this.ptupuSegundoNombre);

        this.ptupuPrimerApellido.nameInRequest = 'pt_p_primerapellido';
        this.ptupuPrimerApellido.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_PrimerApellido',
            'Primer Apellido');
        this.ptupuPrimerApellido.mandatory = false;
        this.ptupuPrimerApellido.dataType = Field.dtString;
        this.ptupuPrimerApellido.maxLength = 50;
        this.ptupuPrimerApellido.assignCSS();
        this.fields.push(this.ptupuPrimerApellido);

        this.ptupuSegundoApellido.nameInRequest = 'pt_p_segundoapellido';
        this.ptupuSegundoApellido.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_SegundoApellido',
            'Segundo Apellido');
        this.ptupuSegundoApellido.mandatory = false;
        this.ptupuSegundoApellido.dataType = Field.dtString;
        this.ptupuSegundoApellido.maxLength = 50;
        this.ptupuSegundoApellido.assignCSS();
        this.fields.push(this.ptupuSegundoApellido);

        this.ptupuFechaNacimiento.nameInRequest = 'pt_p_fechanacimiento';
        this.ptupuFechaNacimiento.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_FechaNacimiento',
            'Fecha nacimiento');
        this.ptupuFechaNacimiento.mandatory = true;
        this.ptupuFechaNacimiento.dataType = Field.dtDate;
        this.ptupuFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuFechaNacimiento);

        this.ptupuGenero.nameInRequest = 'pt_p_genero';
        this.ptupuGenero.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_Genero',
            'Género');
        this.ptupuGenero.mandatory = true;
        this.ptupuGenero.dataType = Field.dtString;
        this.ptupuGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuGenero.maxLength = 1;
        this.ptupuGenero.assignCSS();
        this.fields.push(this.ptupuGenero);

        this.ptupuIndicadorExtranjero.nameInRequest = 'pt_p_indicadorextranjero';
        this.ptupuIndicadorExtranjero.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_IndicadorExtranjero',
            'Indicador extranjero');
        this.ptupuIndicadorExtranjero.mandatory = true;
        this.ptupuIndicadorExtranjero.dataType = Field.dtBool;
        this.ptupuIndicadorExtranjero.options = DefinedSelections.DS_SINO;
        this.ptupuIndicadorExtranjero.assignCSS();
        this.fields.push(this.ptupuIndicadorExtranjero);

        this.ptupuTelefonoFijo.nameInRequest = 'pt_p_telefonofijo';
        this.ptupuTelefonoFijo.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_TelefonoFijo',
            'Teléfono fijo');
        this.ptupuTelefonoFijo.mandatory = false;
        this.ptupuTelefonoFijo.dataType = Field.dtString;
        this.ptupuTelefonoFijo.maxLength = 15;
        this.ptupuTelefonoFijo.assignCSS();
        this.fields.push(this.ptupuTelefonoFijo);

        this.ptupuTelefonoCelular.nameInRequest = 'pt_p_telefonocelular';
        this.ptupuTelefonoCelular.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_TelefonoCelular',
            'Teléfono celular');
        this.ptupuTelefonoCelular.mandatory = false;
        this.ptupuTelefonoCelular.dataType = Field.dtString;
        this.ptupuTelefonoCelular.maxLength = 15;
        this.ptupuTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuTelefonoCelular);

        this.ptupuCorreoElectronico.nameInRequest = 'pt_p_correoelectronico';
        this.ptupuCorreoElectronico.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_CorreoElectronico',
            'Correo electrónico');
        this.ptupuCorreoElectronico.mandatory = false;
        this.ptupuCorreoElectronico.dataType = Field.dtString;
        this.ptupuCorreoElectronico.maxLength = 100;
        this.ptupuCorreoElectronico.assignCSS();
        this.fields.push(this.ptupuCorreoElectronico);

        this.ptupuevcDepartamentoNac.nameInRequest = 'pt_p_evcdepartamentonac';
        this.ptupuevcDepartamentoNac.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_evcDepartamentoNac',
            'Departamento nacimiento');
        this.ptupuevcDepartamentoNac.mandatory = false;
        this.ptupuevcDepartamentoNac.dataType = ModelConstants.Departamento.name;
        this.ptupuevcDepartamentoNac.maxLength = 150;
        this.ptupuevcDepartamentoNac.assignCSS();
        this.ptupuevcDepartamentoNac.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuevcDepartamentoNac);

        this.ptupuevcMunicipioNac.nameInRequest = 'pt_p_evcmunicipionac';
        this.ptupuevcMunicipioNac.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_evcMunicipioNac',
            'Municipio nacimiento');
        this.ptupuevcMunicipioNac.mandatory = false;
        this.ptupuevcMunicipioNac.dataType = ModelConstants.Municipio.name;
        this.ptupuevcMunicipioNac.maxLength = 150;
        this.ptupuevcMunicipioNac.assignCSS();
        this.fields.push(this.ptupuevcMunicipioNac);

        this.ptupuevcEstadoCivil.nameInRequest = 'pt_p_evcestadocivil';
        this.ptupuevcEstadoCivil.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_evcEstadoCivil',
            'Estado civil');
        this.ptupuevcEstadoCivil.mandatory = true;
        this.ptupuevcEstadoCivil.dataType = ModelConstants.Estadocivil.name;
        this.ptupuevcEstadoCivil.maxLength = 100;
        this.ptupuevcEstadoCivil.assignCSS();
        this.fields.push(this.ptupuevcEstadoCivil);

        this.ptupuDireccionCompleta.nameInRequest = 'pt_p_direccioncompleta';
        this.ptupuDireccionCompleta.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_DireccionCompleta',
            'Dirección completa');
        this.ptupuDireccionCompleta.mandatory = true;
        this.ptupuDireccionCompleta.dataType = Field.dtString;
        this.ptupuDireccionCompleta.maxLength = 250;
        this.ptupuDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuDireccionCompleta);

        this.ptupuRural.nameInRequest = 'pt_p_rural';
        this.ptupuRural.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_Rural',
            'Rural');
        this.ptupuRural.mandatory = true;
        this.ptupuRural.dataType = Field.dtBool;
        this.ptupuRural.options = DefinedSelections.DS_SINO;
        this.ptupuRural.assignCSS();
        this.fields.push(this.ptupuRural);

        this.ptupuevcDepartamento.nameInRequest = 'pt_p_evcdepartamento';
        this.ptupuevcDepartamento.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_evcDepartamento',
            'Departamento');
        this.ptupuevcDepartamento.mandatory = true;
        this.ptupuevcDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuevcDepartamento.maxLength = 150;
        this.ptupuevcDepartamento.assignCSS();
        this.fields.push(this.ptupuevcDepartamento);

        this.ptupuevcMunicipio.nameInRequest = 'pt_p_evcmunicipio';
        this.ptupuevcMunicipio.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_evcMunicipio',
            'Municipio');
        this.ptupuevcMunicipio.mandatory = true;
        this.ptupuevcMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuevcMunicipio.maxLength = 150;
        this.ptupuevcMunicipio.assignCSS();
        this.fields.push(this.ptupuevcMunicipio);

        this.ptuDireccion.nameInRequest = 'pt_direccion';
        this.ptuDireccion.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_Direccion',
            'Direcciones titular');
        this.ptuDireccion.mandatory = false;
        this.ptuDireccion.dataType = ModelConstants.Direccion.name;
        this.ptuDireccion.maxLength = 400;
        this.ptuDireccion.assignCSS();
        this.fields.push(this.ptuDireccion);

        this.ptuReplicarDireccion.nameInRequest = 'pt_replicardireccion';
        this.ptuReplicarDireccion.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_ReplicarDireccion',
            'Replicar dirección titular');
        this.ptuReplicarDireccion.mandatory = true;
        this.ptuReplicarDireccion.dataType = Field.dtBool;
        this.ptuReplicarDireccion.options = DefinedSelections.DS_SINO;
        this.ptuReplicarDireccion.assignCSS();
        this.fields.push(this.ptuReplicarDireccion);

        this.ptupuNumIdentificacion.nameInRequest = 'pt_p_numidentificacion';
        this.ptupuNumIdentificacion.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_NumIdentificacion',
            'Nº Identificación');
        this.ptupuNumIdentificacion.mandatory = true;
        this.ptupuNumIdentificacion.dataType = Field.dtString;
        this.ptupuNumIdentificacion.maxLength = 60;
        this.ptupuNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuNumIdentificacion);

        this.ptupuevcTipoIdentificacion.nameInRequest = 'pt_p_evctipoidentificacion';
        this.ptupuevcTipoIdentificacion.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_evcTipoIdentificacion',
            'Tipo Identificación');
        this.ptupuevcTipoIdentificacion.mandatory = true;
        this.ptupuevcTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuevcTipoIdentificacion.maxLength = 170;
        this.ptupuevcTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuevcTipoIdentificacion);

        this.ptupuagrPais.nameInRequest = 'pt_p_agrpais';
        this.ptupuagrPais.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_p_agrPais',
            'País');
        this.ptupuagrPais.mandatory = false;
        this.ptupuagrPais.dataType = ModelConstants.Pais.name;
        this.ptupuagrPais.maxLength = 50;
        this.ptupuagrPais.assignCSS();
        this.fields.push(this.ptupuagrPais);

        this.ptuDireccionUsuario.nameInRequest = 'pt_direccionusuario';
        this.ptuDireccionUsuario.alias = this.langMng.translateText(
            'cls_Usuario_svc_TMODUSUARIO_inArg_pt_DireccionUsuario',
            'Direcciones');
        this.ptuDireccionUsuario.mandatory = false;
        this.ptuDireccionUsuario.dataType = ModelConstants.Direccion.name;
        this.ptuDireccionUsuario.maxLength = 400;
        this.ptuDireccionUsuario.assignCSS();
        this.fields.push(this.ptuDireccionUsuario);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_IndicadorExtranjero
            const defValptupuIndicadorExtranjero = new Promise<void>((resolveDefValue) => {
                this.ptupuIndicadorExtranjero.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValptupuIndicadorExtranjero);

            // pt_p_Rural
            const defValptupuRural = new Promise<void>((resolveDefValue) => {
                this.ptupuRural.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuRural);

            // pt_ReplicarDireccion
            const defValptuReplicarDireccion = new Promise<void>((resolveDefValue) => {
                this.ptuReplicarDireccion.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptuReplicarDireccion);

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
            ['Usuario'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisUsuario.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisusuario('SetValue', true);
            this.puthisUsuario.enabled = false;
            this.executeDependecyRulesputhisusuario('SetEnabled', true);
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcDepartamentoNac
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcDepartamentoNac.loadPreload(response.results);
                } else {
                    this.ptupuevcDepartamentoNac.loadPreload([]);
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

        // ptupuevcEstadoCivil
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('EstadoCivil', 'IC_EstadoCivil', [], null, 'OC_EstadoCivil').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcEstadoCivil.loadPreload(response.results);
                } else {
                    this.ptupuevcEstadoCivil.loadPreload([]);
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

        // ptupuevcDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
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

        // ptupuevcTipoIdentificacion
        const navFiltersptupuevcTipoIdentificacion: string[] = [];
        navFiltersptupuevcTipoIdentificacion.push('Usuario_TMODUSUARIO_pt_p_evcTipoIdentificacion_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', navFiltersptupuevcTipoIdentificacion, this.getNavigationFilterVariables(), 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuevcTipoIdentificacion.loadPreload([]);
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

        // ptupuagrPais
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Pais', 'IC_Pais', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrPais.loadPreload(response.results);
                } else {
                    this.ptupuagrPais.loadPreload([]);
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
     * Search the preload values of field pt_p_evcMunicipioNac
     */
    private loadPreloadptupuevcmunicipionac(): void {

        if (this.ptupuevcDepartamentoNac.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TMODUSUARIO_pt_p_evcMunicipioNac_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuevcMunicipioNac.loadPreload(response.results);
                    } else {
                        this.ptupuevcMunicipioNac.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuevcMunicipioNac.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuevcMunicipioNac.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_evcMunicipio
     */
    private loadPreloadptupuevcmunicipio(): void {

        if (this.ptupuevcDepartamento.getSelectedInstances().length === 1 &&
            this.puthisUsuario.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TMODUSUARIO_pt_p_evcMunicipio_NavFilter0');
            navFilters.push('Usuario_TMODUSUARIO_pt_p_evcMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
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
     * Search the preload values of field pt_Direccion
     */
    private loadPreloadptudireccion(): void {

        if (this.puthisUsuario.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TMODUSUARIO_pt_Direccion_NavFilter0');
            this.util.searchPreload('Direccion', 'IC_Direccion', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptuDireccion.loadPreload(response.results);
                    } else {
                        this.ptuDireccion.loadPreload([]);
                    }
                    if (this.ptuDireccion.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptudireccion('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptuDireccion.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptuDireccion.getSelectedInstances().length > 0) {
                this.ptuDireccion.cleanPreload();
                this.executeDependecyRulesptudireccion('SetValue', true);
            } else {
                this.ptuDireccion.cleanPreload();
            }
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_DireccionUsuario
     */
    private loadPreloadptudireccionusuario(): void {

        if (this.puthisUsuario.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Usuario_TMODUSUARIO_pt_DireccionUsuario_NavFilter0');
            this.util.searchPreload('Direccion', 'IC_Direccion', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptuDireccionUsuario.loadPreload(response.results);
                    } else {
                        this.ptuDireccionUsuario.loadPreload([]);
                    }
                    if (this.ptuDireccionUsuario.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptudireccionusuario('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptuDireccionUsuario.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptuDireccionUsuario.getSelectedInstances().length > 0) {
                this.ptuDireccionUsuario.cleanPreload();
                this.executeDependecyRulesptudireccionusuario('SetValue', true);
            } else {
                this.ptuDireccionUsuario.cleanPreload();
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisUsuario'.toLowerCase()) {
            this.puthisUsuario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisusuario('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisusuario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisusuario();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptupuevcmunicipio();
            this.loadPreloadptudireccion();
            this.loadPreloadptudireccionusuario();
        }
        if ('SetValue' === event && this.puthisUsuario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisUsuario();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisUsuario();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puthisUsuario();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4puthisUsuario();
        }
        // Rule 5
        if ('SetValue' === event) {
            this.executeDependecyRules5puthisUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisUsuario argument
     */
    private setSuppInfoputhisusuario(): void {

        const displaySetIC = 'TipoIdentificacion.NombreCorto,NumIdentificacion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisUsuario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisUsuario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisUsuario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Usuario.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisUsuario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisUsuario argument
     */
    private executeDependecyRules1puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'usuariopersona.departamentonacimiento.Codigo,usuariopersona.estadocivil.Codigo' +
                ',usuariopersona.municipionacimiento.Codigo,usuariopersona.fechanacimiento,usuariopersona.genero' +
                ',usuariopersona.indicadorextranjero,usuariopersona.primerapellido,usuariopersona.primernombre' +
                ',usuariopersona.segundoapellido,usuariopersona.segundonombre,usuariopersona.telefonocelular,usuariopersona.telefonofijo' +
                ',usuariopersona.correoelectronico,usuariopersona.tipoidentificacion.Codigo,usuariopersona.numidentificacion' +
                ',usuariopersona.Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisUsuario argument
     */
    private executeDependecyRules1puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        let rtnFunction0: any;
        // v <> NULL
        if (varputhisusuario && !this.util.isNull(varputhisusuario)) {
            this.usrFunc.fu_GetDirResidenciaPersona(this.util.oidBuilder.buildOidPersona(
                this.util.getInt(varputhisusuario.get('usuariopersona.Identificador')))).then((res0) => {
                rtnFunction0 = res0;
                // pt_p_evcDepartamentoNac.SetValue( v.usuariopersona.departamentonacimiento )
                this.ptupuevcDepartamentoNac.setValue(this.util.oidBuilder.buildOidDepartamento(
                    this.util.getInt(varputhisusuario.get('usuariopersona.departamentonacimiento.Codigo'))));
                this.pendingDependencyRules.push('loadPreloadptupuevcmunicipionac');
                // pt_p_evcEstadoCivil.SetValue( v.usuariopersona.estadocivil )
                this.ptupuevcEstadoCivil.setValue(this.util.oidBuilder.buildOidEstadoCivil(
                    this.util.getInt(varputhisusuario.get('usuariopersona.estadocivil.Codigo'))));
                // pt_p_evcMunicipioNac.SetValue( v.usuariopersona.municipionacimiento )
                this.ptupuevcMunicipioNac.setValue(this.util.oidBuilder.buildOidMunicipio(
                    this.util.getInt(varputhisusuario.get('usuariopersona.municipionacimiento.Codigo'))));
                // pt_p_FechaNacimiento.SetValue( v.usuariopersona.fechanacimiento )
                this.ptupuFechaNacimiento.setValue(this.util.getDate(varputhisusuario.get('usuariopersona.fechanacimiento')));
                // pt_p_Genero.SetValue( v.usuariopersona.genero )
                this.ptupuGenero.setValue(varputhisusuario.get('usuariopersona.genero'));
                // pt_p_IndicadorExtranjero.SetValue( v.usuariopersona.indicadorextranjero )
                this.ptupuIndicadorExtranjero.setValue(this.util.getBool(varputhisusuario.get('usuariopersona.indicadorextranjero')));
                this.executeDependecyRulesptupuindicadorextranjero('SetValue', true);
                // pt_p_PrimerApellido.SetValue( v.usuariopersona.primerapellido )
                this.ptupuPrimerApellido.setValue(varputhisusuario.get('usuariopersona.primerapellido'));
                // pt_p_PrimerNombre.SetValue( v.usuariopersona.primernombre )
                this.ptupuPrimerNombre.setValue(varputhisusuario.get('usuariopersona.primernombre'));
                // pt_p_SegundoApellido.SetValue( v.usuariopersona.segundoapellido )
                this.ptupuSegundoApellido.setValue(varputhisusuario.get('usuariopersona.segundoapellido'));
                // pt_p_SegundoNombre.SetValue( v.usuariopersona.segundonombre )
                this.ptupuSegundoNombre.setValue(varputhisusuario.get('usuariopersona.segundonombre'));
                // pt_p_TelefonoCelular.SetValue( v.usuariopersona.telefonocelular )
                this.ptupuTelefonoCelular.setValue(varputhisusuario.get('usuariopersona.telefonocelular'));
                // pt_p_TelefonoFijo.SetValue( v.usuariopersona.telefonofijo )
                this.ptupuTelefonoFijo.setValue(varputhisusuario.get('usuariopersona.telefonofijo'));
                // pt_p_CorreoElectronico.SetValue( v.usuariopersona.correoelectronico )
                this.ptupuCorreoElectronico.setValue(varputhisusuario.get('usuariopersona.correoelectronico'));
                // pt_ReplicarDireccion.SetValue( FALSE )
                this.ptuReplicarDireccion.setValue(false);
                this.executeDependecyRulesptureplicardireccion('SetValue', true);
                // pt_p_evcTipoIdentificacion.SetValue( v.usuariopersona.tipoidentificacion )
                this.ptupuevcTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                    this.util.getInt(varputhisusuario.get('usuariopersona.tipoidentificacion.Codigo'))));
                this.executeDependecyRulesptupuevctipoidentificacion('SetValue', true);
                // pt_p_NumIdentificacion.SetValue( v.usuariopersona.numidentificacion )
                this.ptupuNumIdentificacion.setValue(varputhisusuario.get('usuariopersona.numidentificacion'));
                // p_thisUsuario.SetVisible( FALSE )
                this.puthisUsuario.visible = false;
                // pt_p_agrPais.SetVisible( FALSE )
                this.ptupuagrPais.visible = false;
                // pt_DireccionUsuario.SetValue( fu_GetDirResidenciaPersona(v.usuariopersona) )
                this.ptuDireccionUsuario.setValue(rtnFunction0);
                this.executeDependecyRulesptudireccionusuario('SetValue', true);
                // pt_p_evcTipoIdentificacion.SetActive( FALSE )
                this.ptupuevcTipoIdentificacion.enabled = false;
                this.executeDependecyRulesptupuevctipoidentificacion('SetActive', true);
                // pt_p_NumIdentificacion.SetActive( FALSE )
                this.ptupuNumIdentificacion.enabled = false;

                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });

        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisUsuario argument
     */
    private executeDependecyRules2puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'usuariopersona.codigo');
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, this.appGlobalInfo.getLoggedUserInfo().oid,
                'moddbasicospersona');
        }
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisUsuario argument
     */
    private executeDependecyRules2puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        let varAgentAsesor!: InstanceCache;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            varAgentAsesor = this.cacheDependencyRules.getInstance(ModelConstants.Asesor.name,
                this.appGlobalInfo.getLoggedUserInfo().oid);
        }
        // v <> NULL AND v.usuariopersona.codigo > 0 AND AGENT_Asesor <> NULL AND agent_asesor.moddbasicospersona = false
        if (varputhisusuario && varAgentAsesor && !this.util.isNull(varputhisusuario) &&
            this.util.getInt(varputhisusuario.get('usuariopersona.codigo')) > 0 && !this.util.isNull(varAgentAsesor) &&
            this.util.valueEquals(this.util.getBool(varAgentAsesor.get('moddbasicospersona')), false)) {
            // pt_p_PrimerNombre.SetActive( FALSE )
            this.ptupuPrimerNombre.enabled = false;
            // pt_p_SegundoNombre.SetActive( FALSE )
            this.ptupuSegundoNombre.enabled = false;
            // pt_p_PrimerApellido.SetActive( FALSE )
            this.ptupuPrimerApellido.enabled = false;
            // pt_p_SegundoApellido.SetActive( FALSE )
            this.ptupuSegundoApellido.enabled = false;
            // pt_p_FechaNacimiento.SetActive( FALSE )
            this.ptupuFechaNacimiento.enabled = false;
            // pt_p_Genero.SetActive( FALSE )
            this.ptupuGenero.enabled = false;
            // pt_p_IndicadorExtranjero.SetActive( FALSE )
            this.ptupuIndicadorExtranjero.enabled = false;
            this.executeDependecyRulesptupuindicadorextranjero('SetActive', true);
            // pt_p_evcDepartamentoNac.SetActive( FALSE )
            this.ptupuevcDepartamentoNac.enabled = false;
            // pt_p_evcMunicipioNac.SetActive( FALSE )
            this.ptupuevcMunicipioNac.enabled = false;
            // pt_p_evcEstadoCivil.SetActive( FALSE )
            this.ptupuevcEstadoCivil.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_thisUsuario argument
     */
    private executeDependecyRules3puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'solicitud.titularpersona.tipopersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_thisUsuario argument
     */
    private executeDependecyRules3puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        // v <> NULL AND v.Solicitud.TitularPersona.TipoPersona =  "N"
        if (varputhisusuario && !this.util.isNull(varputhisusuario) &&
            this.util.valueEquals(varputhisusuario.get('solicitud.titularpersona.tipopersona'), 'N')) {
            // pt_Direccion.SetVisible( TRUE )
            this.ptuDireccion.visible = true;
            // pt_ReplicarDireccion.SetVisible( TRUE )
            this.ptuReplicarDireccion.visible = true;
            // pt_ReplicarDireccion.SetValue( FALSE )
            this.ptuReplicarDireccion.setValue(false);
            this.executeDependecyRulesptureplicardireccion('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for p_thisUsuario argument
     */
    private executeDependecyRules4puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'solicitud.titularpersona.tipopersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for p_thisUsuario argument
     */
    private executeDependecyRules4puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        // v <> NULL AND v.Solicitud.TitularPersona.TipoPersona <> "N"
        if (varputhisusuario && !this.util.isNull(varputhisusuario) &&
            !this.util.valueEquals(varputhisusuario.get('solicitud.titularpersona.tipopersona'), 'N')) {
            // pt_Direccion.SetVisible( FALSE )
            this.ptuDireccion.visible = false;
            // pt_ReplicarDireccion.SetVisible( FALSE )
            this.ptuReplicarDireccion.visible = false;
            // pt_ReplicarDireccion.SetValue( FALSE )
            this.ptuReplicarDireccion.setValue(false);
            this.executeDependecyRulesptureplicardireccion('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 5 for p_thisUsuario argument
     */
    private executeDependecyRules5puthisUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'drveseltitular');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules5puthisUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 5 for p_thisUsuario argument
     */
    private executeDependecyRules5puthisUsuarioActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        // v <> NULL AND v.drveseltitular = TRUE
        if (varputhisusuario && !this.util.isNull(varputhisusuario) &&
            this.util.valueEquals(this.util.getBool(varputhisusuario.get('drveseltitular')), true)) {
            // pt_Direccion.SetVisible( FALSE )
            this.ptuDireccion.visible = false;
            // pt_ReplicarDireccion.SetVisible( FALSE )
            this.ptuReplicarDireccion.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisUsuario lense search argument
     */
    public onputhisusuarioChange(): void {
        this.executeLenseSearch(this.puthisUsuario, ModelConstants.Usuario.name, 'IC_Usuario',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisusuario();
            }
            if (foundInstances === 1) {
                this.processputhisusuarioSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisUsuario lense search argument
     */
    public processputhisusuarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisUsuario.searchResults.length > index) {
            selectedInstance = this.puthisUsuario.searchResults[index];
        }
        // Clean the result list
        this.puthisUsuario.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisUsuario.allowMultiSelect) {
                this.puthisUsuario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisUsuario.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisUsuario lense search argument
     */
    public cleanputhisusuario(): void {
        this.clearValidationMessages();
        this.puthisUsuario.clean();
        this.executeDependecyRulesputhisusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_IndicadorExtranjero argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuindicadorextranjero(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuIndicadorExtranjero();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuIndicadorExtranjero();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.ptupuIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuIndicadorExtranjero.value), true)) {
            // pt_p_evcDepartamentoNac.SetValue( NULL )
            this.ptupuevcDepartamentoNac.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipionac');
            // pt_p_evcDepartamentoNac.SetMandatory( FALSE )
            this.ptupuevcDepartamentoNac.mandatory = false;
            // pt_p_evcDepartamentoNac.SetActive( FALSE )
            this.ptupuevcDepartamentoNac.enabled = false;
            // pt_p_evcMunicipioNac.SetValue( NULL )
            this.ptupuevcMunicipioNac.setValue(null);
            // pt_p_evcMunicipioNac.SetMandatory( FALSE )
            this.ptupuevcMunicipioNac.mandatory = false;
            // pt_p_evcMunicipioNac.SetActive( FALSE )
            this.ptupuevcMunicipioNac.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.ptupuIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuIndicadorExtranjero.value), false)) {
            // pt_p_evcDepartamentoNac.SetMandatory( TRUE )
            this.ptupuevcDepartamentoNac.mandatory = true;
            // pt_p_evcDepartamentoNac.SetActive( TRUE )
            this.ptupuevcDepartamentoNac.enabled = true;
            // pt_p_evcMunicipioNac.SetMandatory( TRUE )
            this.ptupuevcMunicipioNac.mandatory = true;
            // pt_p_evcMunicipioNac.SetActive( TRUE )
            this.ptupuevcMunicipioNac.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_IndicadorExtranjero argument
     */
    public onptupuindicadorextranjeroChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuindicadorextranjero('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_Direccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptudireccion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptuDireccion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuDireccion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptuDireccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_Direccion argument
     */
    private executeDependecyRules1ptuDireccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuDireccion,
                'direccioncompleta,departamento.Codigo,municipio.Codigo,rural,pais.Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuDireccionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_Direccion argument
     */
    private executeDependecyRules1ptuDireccionActions(): void {
        const varptudireccion = this.getFirstInstanceFromCache(this.ptuDireccion);
        // v <> NULL
        if (varptudireccion && !this.util.isNull(varptudireccion)) {
            // pt_p_DireccionCompleta.SetValue( v.direccioncompleta )
            this.ptupuDireccionCompleta.setValue(varptudireccion.get('direccioncompleta'));
            // pt_p_evcDepartamento.SetValue( v.departamento )
            this.ptupuevcDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varptudireccion.get('departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // pt_p_evcMunicipio.SetValue( v.municipio )
            this.ptupuevcMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varptudireccion.get('municipio.Codigo'))));
            // pt_p_Rural.SetValue( v.rural )
            this.ptupuRural.setValue(this.util.getBool(varptudireccion.get('rural')));
            // pt_p_agrPais.SetValue( v.pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varptudireccion.get('pais.Codigo')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_Direccion argument
     */
    private executeDependecyRules2ptuDireccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuario,
                'usuariopersona.Identificador,usuariopersona.tieneepssanitas,Solicitud.Ae_solicitudes.id_solicitud');
        this.addQueryInstanceFromField(this.ptuDireccion,
                'municipio.esvalidoeps');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptuDireccionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_Direccion argument
     */
    private executeDependecyRules2ptuDireccionActions(): void {
        const varputhisusuario = this.getFirstInstanceFromCache(this.puthisUsuario);
        const varptudireccion = this.getFirstInstanceFromCache(this.ptuDireccion);
        // v <> NULL AND p_thisusuario.usuariopersona <> NULL AND p_thisusuario.usuariopersona.tieneepssanitas = true AND v.municipio.e
        // validoeps = false
        if (varputhisusuario && varptudireccion && !this.util.isNull(varptudireccion) &&
            !this.util.isNull(this.util.oidBuilder.buildOidPersona(
            this.util.getInt(varputhisusuario.get('usuariopersona.Identificador')))) &&
            this.util.valueEquals(this.util.getBool(varputhisusuario.get('usuariopersona.tieneepssanitas')), true) &&
            this.util.valueEquals(this.util.getBool(varptudireccion.get('municipio.esvalidoeps')), false)) {
            // pt_p_DireccionCompleta.SetValue( NULL )
            this.ptupuDireccionCompleta.setValue(null);
            // pt_p_evcDepartamento.SetValue( NULL )
            this.ptupuevcDepartamento.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // pt_p_evcMunicipio.SetValue( NULL )
            this.ptupuevcMunicipio.setValue(null);
            // pt_p_Rural.SetValue( NULL )
            this.ptupuRural.setValue(null);
            // pt_p_agrPais.SetValue( NULL )
            this.ptupuagrPais.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_Direccion argument
     */
    public onptudireccionChange(): void {
        this.executeDependecyRulesptudireccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_ReplicarDireccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptureplicardireccion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuReplicarDireccion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptuReplicarDireccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_ReplicarDireccion argument
     */
    private executeDependecyRules1ptuReplicarDireccion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptuReplicarDireccionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_ReplicarDireccion argument
     */
    private executeDependecyRules1ptuReplicarDireccionActions(): void {
        // v = TRUE
        if (this.util.valueEquals(this.util.getBool(this.ptuReplicarDireccion.value), true)) {
            // pt_Direccion.SetActive( TRUE )
            this.ptuDireccion.enabled = true;
            this.executeDependecyRulesptudireccion('SetActive', true);
            // pt_DireccionUsuario.SetValue( NULL )
            this.ptuDireccionUsuario.setValue(null);
            this.executeDependecyRulesptudireccionusuario('SetValue', true);
            // pt_DireccionUsuario.SetActive( FALSE )
            this.ptuDireccionUsuario.enabled = false;
            this.executeDependecyRulesptudireccionusuario('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_ReplicarDireccion argument
     */
    private executeDependecyRules2ptuReplicarDireccion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptuReplicarDireccionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_ReplicarDireccion argument
     */
    private executeDependecyRules2ptuReplicarDireccionActions(): void {
        // v = FALSE
        if (this.util.valueEquals(this.util.getBool(this.ptuReplicarDireccion.value), false)) {
            // pt_Direccion.SetValue( NULL )
            this.ptuDireccion.setValue(null);
            this.executeDependecyRulesptudireccion('SetValue', true);
            // pt_Direccion.SetActive( FALSE )
            this.ptuDireccion.enabled = false;
            this.executeDependecyRulesptudireccion('SetActive', true);
            // pt_DireccionUsuario.SetActive( TRUE )
            this.ptuDireccionUsuario.enabled = true;
            this.executeDependecyRulesptudireccionusuario('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_ReplicarDireccion argument
     */
    public onptureplicardireccionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptureplicardireccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevctipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuevcTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuevcTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuevcTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'nombrecorto');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuevcTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuevcTipoIdentificacionActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL AND v.nombrecorto = "MS"
        if (varptupuevctipoidentificacion && !this.util.isNull(varptupuevctipoidentificacion) &&
            this.util.valueEquals(varptupuevctipoidentificacion.get('nombrecorto'), 'MS')) {
            // pt_p_PrimerNombre.SetActive( FALSE )
            this.ptupuPrimerNombre.enabled = false;
            // pt_p_FechaNacimiento.SetActive( FALSE )
            this.ptupuFechaNacimiento.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_evcTipoIdentificacion argument
     */
    public onptupuevctipoidentificacionChange(): void {
        this.executeDependecyRulesptupuevctipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_DireccionUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptudireccionusuario(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptuDireccionUsuario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuDireccionUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_DireccionUsuario argument
     */
    private executeDependecyRules1ptuDireccionUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuDireccionUsuario,
                'direccioncompleta,pais.Codigo,departamento.Codigo,municipio.Codigo,rural');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuDireccionUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_DireccionUsuario argument
     */
    private executeDependecyRules1ptuDireccionUsuarioActions(): void {
        const varptudireccionusuario = this.getFirstInstanceFromCache(this.ptuDireccionUsuario);
        // v <> NULL
        if (varptudireccionusuario && !this.util.isNull(varptudireccionusuario)) {
            // pt_p_DireccionCompleta.SetValue( v.direccioncompleta )
            this.ptupuDireccionCompleta.setValue(varptudireccionusuario.get('direccioncompleta'));
            // pt_p_agrPais.SetValue( v.pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varptudireccionusuario.get('pais.Codigo')));
            // pt_p_evcDepartamento.SetValue( v.departamento )
            this.ptupuevcDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varptudireccionusuario.get('departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // pt_p_evcMunicipio.SetValue( v.municipio )
            this.ptupuevcMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varptudireccionusuario.get('municipio.Codigo'))));
            // pt_p_Rural.SetValue( v.rural )
            this.ptupuRural.setValue(this.util.getBool(varptudireccionusuario.get('rural')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_DireccionUsuario argument
     */
    public onptudireccionusuarioChange(): void {
        this.executeDependecyRulesptudireccionusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_evcDepartamentoNac argument
     */
    public onptupuevcdepartamentonacChange(): void {
        this.loadPreloadptupuevcmunicipionac();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_evcDepartamento argument
     */
    public onptupuevcdepartamentoChange(): void {
        this.loadPreloadptupuevcmunicipio();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisUsuario'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisUsuario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Usuario_Null';
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
            isVisible = this.ptupuevcTipoIdentificacion.visible ||
                this.ptupuNumIdentificacion.visible ||
                this.ptupuPrimerNombre.visible ||
                this.ptupuSegundoNombre.visible ||
                this.ptupuPrimerApellido.visible ||
                this.ptupuSegundoApellido.visible ||
                this.ptupuFechaNacimiento.visible ||
                this.ptupuGenero.visible ||
                this.ptupuIndicadorExtranjero.visible ||
                this.ptupuevcDepartamentoNac.visible ||
                this.ptupuevcMunicipioNac.visible ||
                this.ptupuevcEstadoCivil.visible;
        }
        if (groupId === '1') {
            isVisible = this.ptuReplicarDireccion.visible ||
                this.ptuDireccion.visible ||
                this.ptuDireccionUsuario.visible ||
                this.ptupuDireccionCompleta.visible ||
                this.ptupuevcDepartamento.visible ||
                this.ptupuevcMunicipio.visible ||
                this.ptupuagrPais.visible ||
                this.ptupuRural.visible ||
                this.ptupuCorreoElectronico.visible ||
                this.ptupuTelefonoFijo.visible ||
                this.ptupuTelefonoCelular.visible;
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
                'Datos básicos');
        }
        if (groupId === '1') {
            alias = this.langMng.translateText('1',
                'Datos contacto');
        }
        return alias;
    }
}
