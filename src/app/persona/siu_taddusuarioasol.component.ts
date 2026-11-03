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
    selector: 'imes-persona-siu-taddusuarioasol',
    templateUrl: './siu_taddusuarioasol.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaSIUuTADDUSUARIOASOLComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrTipoIdentificacion: FieldOVPreload;
    public ptupuagrDepartamentoNacimiento: FieldOVPreload;
    public ptupuagrMunicipioNacimiento: FieldOVPreload;
    public ptupuagrEstadoCivil: FieldOVPreload;
    public ptupuatrNumIdentificacion: Field;
    public ptupuatrPrimerNombre: Field;
    public ptupuatrSegundoNombre: Field;
    public ptupuatrPrimerApellido: Field;
    public ptupuatrSegundoApellido: Field;
    public ptupuatrFechaNacimiento: Field;
    public ptupuatrGenero: FieldDefinedSelection;
    public ptupuatrIndicadorExtranjero: FieldDefinedSelection;
    public ptupuatrTelefonoFijo: Field;
    public ptupuatrTelefonoCelular: Field;
    public ptupuatrCorreoElectronico: Field;
    public ptupuagrDepartamento: FieldOVPreload;
    public ptupuagrMunicipio: FieldOVPreload;
    public ptupuatrDireccionCompleta: Field;
    public ptupuatrRural: FieldDefinedSelection;
    public ptupuCodigo: Field;
    public ptupuTieneEPSSanitas: Field;
    public ptupuRechazadoAfiliacion: Field;
    public ptupuagrPais: FieldOVLenseSearch;
    public ptSolicitud: FieldOVLenseSearch;
    public ptDireccionesTitular: FieldOVPreload;
    public ptReplicarDireccion: FieldDefinedSelection;
    public ptDireccionesXClass: FieldDefinedSelection;
    public ptEstadoPersona: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1431886233600805Ser_51UIServ_1';
        this.className = ModelConstants.Persona.name;
        this.iuName = ModelConstants.Persona.siuutaddusuarioasol;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TADDUSUARIOASOL';
        this.title = this.langMng.translateText('cls_Persona_svc_TADDUSUARIOASOL',
            'Añadir usuario');

        // Create inbound argument components
        this.ptupuagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuagrDepartamentoNacimiento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipioNacimiento = new FieldOVPreload(this.langMng);
        this.ptupuagrEstadoCivil = new FieldOVPreload(this.langMng);
        this.ptupuatrNumIdentificacion = new Field(this.langMng);
        this.ptupuatrPrimerNombre = new Field(this.langMng);
        this.ptupuatrSegundoNombre = new Field(this.langMng);
        this.ptupuatrPrimerApellido = new Field(this.langMng);
        this.ptupuatrSegundoApellido = new Field(this.langMng);
        this.ptupuatrFechaNacimiento = new Field(this.langMng);
        this.ptupuatrGenero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrIndicadorExtranjero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrTelefonoFijo = new Field(this.langMng);
        this.ptupuatrTelefonoCelular = new Field(this.langMng);
        this.ptupuatrCorreoElectronico = new Field(this.langMng);
        this.ptupuagrDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipio = new FieldOVPreload(this.langMng);
        this.ptupuatrDireccionCompleta = new Field(this.langMng);
        this.ptupuatrRural = new FieldDefinedSelection(this.langMng);
        this.ptupuCodigo = new Field(this.langMng);
        this.ptupuTieneEPSSanitas = new Field(this.langMng);
        this.ptupuRechazadoAfiliacion = new Field(this.langMng);
        this.ptupuagrPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptDireccionesTitular = new FieldOVPreload(this.langMng);
        this.ptReplicarDireccion = new FieldDefinedSelection(this.langMng);
        this.ptDireccionesXClass = new FieldDefinedSelection(this.langMng);
        this.ptEstadoPersona = new FieldOVLenseSearch(this.langMng, this.util);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrTipoIdentificacion.nameInRequest = 'pt_p_agrtipoidentificacion';
        this.ptupuagrTipoIdentificacion.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrTipoIdentificacion',
            'Tipo identificación');
        this.ptupuagrTipoIdentificacion.mandatory = true;
        this.ptupuagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuagrTipoIdentificacion.maxLength = 170;
        this.ptupuagrTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuagrTipoIdentificacion);

        this.ptupuagrDepartamentoNacimiento.nameInRequest = 'pt_p_agrdepartamentonacimiento';
        this.ptupuagrDepartamentoNacimiento.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrDepartamentoNacimiento',
            'Departamento nacimiento');
        this.ptupuagrDepartamentoNacimiento.mandatory = false;
        this.ptupuagrDepartamentoNacimiento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamentoNacimiento.maxLength = 150;
        this.ptupuagrDepartamentoNacimiento.assignCSS();
        this.fields.push(this.ptupuagrDepartamentoNacimiento);

        this.ptupuagrMunicipioNacimiento.nameInRequest = 'pt_p_agrmunicipionacimiento';
        this.ptupuagrMunicipioNacimiento.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrMunicipioNacimiento',
            'Municipio nacimiento');
        this.ptupuagrMunicipioNacimiento.mandatory = false;
        this.ptupuagrMunicipioNacimiento.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipioNacimiento.maxLength = 150;
        this.ptupuagrMunicipioNacimiento.assignCSS();
        this.fields.push(this.ptupuagrMunicipioNacimiento);

        this.ptupuagrEstadoCivil.nameInRequest = 'pt_p_agrestadocivil';
        this.ptupuagrEstadoCivil.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrEstadoCivil',
            'EstadoCivil');
        this.ptupuagrEstadoCivil.mandatory = true;
        this.ptupuagrEstadoCivil.dataType = ModelConstants.Estadocivil.name;
        this.ptupuagrEstadoCivil.maxLength = 100;
        this.ptupuagrEstadoCivil.assignCSS();
        this.fields.push(this.ptupuagrEstadoCivil);

        this.ptupuatrNumIdentificacion.nameInRequest = 'pt_p_atrnumidentificacion';
        this.ptupuatrNumIdentificacion.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrNumIdentificacion',
            'Nº Identificación');
        this.ptupuatrNumIdentificacion.mandatory = true;
        this.ptupuatrNumIdentificacion.dataType = Field.dtString;
        this.ptupuatrNumIdentificacion.maxLength = 60;
        this.ptupuatrNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuatrNumIdentificacion);

        this.ptupuatrPrimerNombre.nameInRequest = 'pt_p_atrprimernombre';
        this.ptupuatrPrimerNombre.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrPrimerNombre',
            'Primer nombre');
        this.ptupuatrPrimerNombre.mandatory = true;
        this.ptupuatrPrimerNombre.dataType = Field.dtString;
        this.ptupuatrPrimerNombre.maxLength = 50;
        this.ptupuatrPrimerNombre.assignCSS();
        this.fields.push(this.ptupuatrPrimerNombre);

        this.ptupuatrSegundoNombre.nameInRequest = 'pt_p_atrsegundonombre';
        this.ptupuatrSegundoNombre.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrSegundoNombre',
            'Segundo nombre');
        this.ptupuatrSegundoNombre.mandatory = false;
        this.ptupuatrSegundoNombre.dataType = Field.dtString;
        this.ptupuatrSegundoNombre.maxLength = 50;
        this.ptupuatrSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrSegundoNombre);

        this.ptupuatrPrimerApellido.nameInRequest = 'pt_p_atrprimerapellido';
        this.ptupuatrPrimerApellido.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrPrimerApellido',
            'Primer Apellido');
        this.ptupuatrPrimerApellido.mandatory = true;
        this.ptupuatrPrimerApellido.dataType = Field.dtString;
        this.ptupuatrPrimerApellido.maxLength = 50;
        this.ptupuatrPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrPrimerApellido);

        this.ptupuatrSegundoApellido.nameInRequest = 'pt_p_atrsegundoapellido';
        this.ptupuatrSegundoApellido.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrSegundoApellido',
            'Segundo Apellido');
        this.ptupuatrSegundoApellido.mandatory = false;
        this.ptupuatrSegundoApellido.dataType = Field.dtString;
        this.ptupuatrSegundoApellido.maxLength = 50;
        this.ptupuatrSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrSegundoApellido);

        this.ptupuatrFechaNacimiento.nameInRequest = 'pt_p_atrfechanacimiento';
        this.ptupuatrFechaNacimiento.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrFechaNacimiento',
            'Fecha nacimiento');
        this.ptupuatrFechaNacimiento.mandatory = true;
        this.ptupuatrFechaNacimiento.dataType = Field.dtDate;
        this.ptupuatrFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuatrFechaNacimiento);

        this.ptupuatrGenero.nameInRequest = 'pt_p_atrgenero';
        this.ptupuatrGenero.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrGenero',
            'Género');
        this.ptupuatrGenero.mandatory = true;
        this.ptupuatrGenero.dataType = Field.dtString;
        this.ptupuatrGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuatrGenero.maxLength = 1;
        this.ptupuatrGenero.assignCSS();
        this.fields.push(this.ptupuatrGenero);

        this.ptupuatrIndicadorExtranjero.nameInRequest = 'pt_p_atrindicadorextranjero';
        this.ptupuatrIndicadorExtranjero.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrIndicadorExtranjero',
            'Indicador extranjero');
        this.ptupuatrIndicadorExtranjero.mandatory = true;
        this.ptupuatrIndicadorExtranjero.dataType = Field.dtBool;
        this.ptupuatrIndicadorExtranjero.options = DefinedSelections.DS_SINO;
        this.ptupuatrIndicadorExtranjero.assignCSS();
        this.fields.push(this.ptupuatrIndicadorExtranjero);

        this.ptupuatrTelefonoFijo.nameInRequest = 'pt_p_atrtelefonofijo';
        this.ptupuatrTelefonoFijo.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrTelefonoFijo',
            'Teléfono fijo');
        this.ptupuatrTelefonoFijo.mandatory = false;
        this.ptupuatrTelefonoFijo.dataType = Field.dtString;
        this.ptupuatrTelefonoFijo.maxLength = 15;
        this.ptupuatrTelefonoFijo.assignCSS();
        this.fields.push(this.ptupuatrTelefonoFijo);

        this.ptupuatrTelefonoCelular.nameInRequest = 'pt_p_atrtelefonocelular';
        this.ptupuatrTelefonoCelular.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrTelefonoCelular',
            'Teléfono celular');
        this.ptupuatrTelefonoCelular.mandatory = false;
        this.ptupuatrTelefonoCelular.dataType = Field.dtString;
        this.ptupuatrTelefonoCelular.maxLength = 15;
        this.ptupuatrTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuatrTelefonoCelular);

        this.ptupuatrCorreoElectronico.nameInRequest = 'pt_p_atrcorreoelectronico';
        this.ptupuatrCorreoElectronico.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrCorreoElectronico',
            'Correo electrónico');
        this.ptupuatrCorreoElectronico.mandatory = false;
        this.ptupuatrCorreoElectronico.dataType = Field.dtString;
        this.ptupuatrCorreoElectronico.maxLength = 100;
        this.ptupuatrCorreoElectronico.assignCSS();
        this.fields.push(this.ptupuatrCorreoElectronico);

        this.ptupuagrDepartamento.nameInRequest = 'pt_p_agrdepartamento';
        this.ptupuagrDepartamento.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrDepartamento',
            'Departamento');
        this.ptupuagrDepartamento.mandatory = true;
        this.ptupuagrDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamento.maxLength = 150;
        this.ptupuagrDepartamento.assignCSS();
        this.fields.push(this.ptupuagrDepartamento);

        this.ptupuagrMunicipio.nameInRequest = 'pt_p_agrmunicipio';
        this.ptupuagrMunicipio.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrMunicipio',
            'Municipio');
        this.ptupuagrMunicipio.mandatory = true;
        this.ptupuagrMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipio.maxLength = 150;
        this.ptupuagrMunicipio.assignCSS();
        this.fields.push(this.ptupuagrMunicipio);

        this.ptupuatrDireccionCompleta.nameInRequest = 'pt_p_atrdireccioncompleta';
        this.ptupuatrDireccionCompleta.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrDireccionCompleta',
            'Dirección completa');
        this.ptupuatrDireccionCompleta.mandatory = true;
        this.ptupuatrDireccionCompleta.dataType = Field.dtString;
        this.ptupuatrDireccionCompleta.maxLength = 250;
        this.ptupuatrDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuatrDireccionCompleta);

        this.ptupuatrRural.nameInRequest = 'pt_p_atrrural';
        this.ptupuatrRural.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_atrRural',
            'Rural');
        this.ptupuatrRural.mandatory = true;
        this.ptupuatrRural.dataType = Field.dtBool;
        this.ptupuatrRural.options = DefinedSelections.DS_SINO;
        this.ptupuatrRural.assignCSS();
        this.fields.push(this.ptupuatrRural);

        this.ptupuCodigo.nameInRequest = 'pt_p_codigo';
        this.ptupuCodigo.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_Codigo',
            'Código');
        this.ptupuCodigo.mandatory = false;
        this.ptupuCodigo.dataType = Field.dtInt;
        this.ptupuCodigo.assignCSS();
        this.fields.push(this.ptupuCodigo);

        this.ptupuTieneEPSSanitas.nameInRequest = 'pt_p_tieneepssanitas';
        this.ptupuTieneEPSSanitas.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_TieneEPSSanitas',
            'Tiene EPS Sanitas');
        this.ptupuTieneEPSSanitas.mandatory = true;
        this.ptupuTieneEPSSanitas.dataType = Field.dtBool;
        this.ptupuTieneEPSSanitas.assignCSS();
        this.fields.push(this.ptupuTieneEPSSanitas);

        this.ptupuRechazadoAfiliacion.nameInRequest = 'pt_p_rechazadoafiliacion';
        this.ptupuRechazadoAfiliacion.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_RechazadoAfiliacion',
            'Rechazado Afiliación');
        this.ptupuRechazadoAfiliacion.mandatory = false;
        this.ptupuRechazadoAfiliacion.dataType = Field.dtString;
        this.ptupuRechazadoAfiliacion.maxLength = 50;
        this.ptupuRechazadoAfiliacion.assignCSS();
        this.fields.push(this.ptupuRechazadoAfiliacion);

        this.ptupuagrPais.nameInRequest = 'pt_p_agrpais';
        this.ptupuagrPais.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_pt_p_agrPais',
            'País');
        this.ptupuagrPais.mandatory = false;
        this.ptupuagrPais.dataType = ModelConstants.Pais.name;
        this.ptupuagrPais.maxLength = 50;
        this.ptupuagrPais.assignCSS();
        this.fields.push(this.ptupuagrPais);

        this.ptSolicitud.nameInRequest = 'ptsolicitud';
        this.ptSolicitud.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_ptSolicitud',
            'Solicitud');
        this.ptSolicitud.mandatory = true;
        this.ptSolicitud.dataType = ModelConstants.Solicitud.name;
        this.ptSolicitud.maxLength = 50;
        this.ptSolicitud.assignCSS();
        this.fields.push(this.ptSolicitud);

        this.ptDireccionesTitular.nameInRequest = 'ptdireccionestitular';
        this.ptDireccionesTitular.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_ptDireccionesTitular',
            'Direcciones titular');
        this.ptDireccionesTitular.mandatory = false;
        this.ptDireccionesTitular.dataType = ModelConstants.Direccion.name;
        this.ptDireccionesTitular.maxLength = 400;
        this.ptDireccionesTitular.assignCSS();
        this.fields.push(this.ptDireccionesTitular);

        this.ptReplicarDireccion.nameInRequest = 'ptreplicardireccion';
        this.ptReplicarDireccion.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_ptReplicarDireccion',
            'Replicar dirección');
        this.ptReplicarDireccion.mandatory = true;
        this.ptReplicarDireccion.dataType = Field.dtBool;
        this.ptReplicarDireccion.options = DefinedSelections.DS_SINO;
        this.ptReplicarDireccion.assignCSS();
        this.fields.push(this.ptReplicarDireccion);

        this.ptDireccionesXClass.nameInRequest = 'ptdireccionesxclass';
        this.ptDireccionesXClass.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_ptDireccionesXClass',
            'Direcciones');
        this.ptDireccionesXClass.mandatory = false;
        this.ptDireccionesXClass.dataType = Field.dtString;
        this.ptDireccionesXClass.options = DefinedSelections.DS_GENERO;
        this.ptDireccionesXClass.maxLength = 1;
        this.ptDireccionesXClass.assignCSS();
        this.fields.push(this.ptDireccionesXClass);

        this.ptEstadoPersona.nameInRequest = 'ptestadopersona';
        this.ptEstadoPersona.alias = this.langMng.translateText(
            'cls_Persona_svc_TADDUSUARIOASOL_inArg_ptEstadoPersona',
            'Estado Persona');
        this.ptEstadoPersona.mandatory = false;
        this.ptEstadoPersona.dataType = ModelConstants.Estadopersona.name;
        this.ptEstadoPersona.maxLength = 150;
        this.ptEstadoPersona.assignCSS();
        this.fields.push(this.ptEstadoPersona);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrIndicadorExtranjero
            const defValptupuatrIndicadorExtranjero = new Promise<void>((resolveDefValue) => {
                this.ptupuatrIndicadorExtranjero.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrIndicadorExtranjero);

            // pt_p_atrRural
            const defValptupuatrRural = new Promise<void>((resolveDefValue) => {
                this.ptupuatrRural.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrRural);

            // pt_p_TieneEPSSanitas
            const defValptupuTieneEPSSanitas = new Promise<void>((resolveDefValue) => {
                this.ptupuTieneEPSSanitas.setValue(false);
                this.loadPreloadptupuagrmunicipio();
                resolveDefValue();
            });
            promiseArr.push(defValptupuTieneEPSSanitas);

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
            if (lastRole === 'TipoIdentificacion') {
                this.ptupuagrTipoIdentificacion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
                this.ptupuagrTipoIdentificacion.enabled = false;
                this.executeDependecyRulesptupuagrtipoidentificacion('SetEnabled', true);
            }
            if (lastRole === 'DepartamentoNacimiento') {
                this.ptupuagrDepartamentoNacimiento.setValue(lastRoleOid);
                this.ptupuagrDepartamentoNacimiento.enabled = false;
                this.loadPreloadptupuagrmunicipionacimiento();
            }
            if (lastRole === 'MunicipioNacimiento') {
                this.ptupuagrMunicipioNacimiento.setValue(lastRoleOid);
                this.ptupuagrMunicipioNacimiento.enabled = false;
            }
            if (lastRole === 'EstadoCivil') {
                this.ptupuagrEstadoCivil.setValue(lastRoleOid);
                this.ptupuagrEstadoCivil.enabled = false;
            }
            if (lastRole === 'Solicitud') {
                this.ptSolicitud.setValue(lastRoleOid);
                this.executeDependecyRulesptsolicitud('SetValue', true);
                this.ptSolicitud.enabled = false;
                this.executeDependecyRulesptsolicitud('SetEnabled', true);
            }
            if (lastRole === 'EstadoPersona') {
                this.ptEstadoPersona.setValue(lastRoleOid);
                this.executeDependecyRulesptestadopersona('SetValue', true);
                this.ptEstadoPersona.enabled = false;
                this.executeDependecyRulesptestadopersona('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrTipoIdentificacion
        const navFiltersptupuagrTipoIdentificacion: string[] = [];
        navFiltersptupuagrTipoIdentificacion.push('Persona_TADDUSUARIOASOL_pt_p_agrTipoIdentificacion_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', navFiltersptupuagrTipoIdentificacion, this.getNavigationFilterVariables(), 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuagrTipoIdentificacion.loadPreload([]);
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

        // ptupuagrDepartamentoNacimiento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamentoNacimiento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamentoNacimiento.loadPreload([]);
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

        // ptupuagrEstadoCivil
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('EstadoCivil', 'IC_EstadoCivil', [], null, 'OC_EstadoCivil').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrEstadoCivil.loadPreload(response.results);
                } else {
                    this.ptupuagrEstadoCivil.loadPreload([]);
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
    }

    /**
     * Search the preload values of field pt_p_agrMunicipioNacimiento
     */
    private loadPreloadptupuagrmunicipionacimiento(): void {

        if (this.ptupuagrDepartamentoNacimiento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Persona_TADDUSUARIOASOL_pt_p_agrMunicipioNacimiento_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipioNacimiento.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipioNacimiento.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipioNacimiento.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipioNacimiento.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_agrMunicipio
     */
    private loadPreloadptupuagrmunicipio(): void {

        if (this.ptupuagrDepartamento.getSelectedInstances().length === 1 &&
            !this.util.isNull(this.ptupuTieneEPSSanitas.value)) {
            const navFilters: string[] = [];
            navFilters.push('Persona_TADDUSUARIOASOL_pt_p_agrMunicipio_NavFilter0');
            navFilters.push('Persona_TADDUSUARIOASOL_pt_p_agrMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
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
     * Search the preload values of field ptDireccionesTitular
     */
    private loadPreloadptdireccionestitular(): void {

        if (this.ptSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Persona_TADDUSUARIOASOL_ptDireccionesTitular_NavFilter0');
            this.util.searchPreload('Direccion', 'IC_Direccion', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptDireccionesTitular.loadPreload(response.results);
                    } else {
                        this.ptDireccionesTitular.loadPreload([]);
                    }
                    if (this.ptDireccionesTitular.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptdireccionestitular('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptDireccionesTitular.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptDireccionesTitular.getSelectedInstances().length > 0) {
                this.ptDireccionesTitular.cleanPreload();
                this.executeDependecyRulesptdireccionestitular('SetValue', true);
            } else {
                this.ptDireccionesTitular.cleanPreload();
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
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrPais'.toLowerCase()) {
            this.ptupuagrPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrpais('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptSolicitud'.toLowerCase()) {
            this.ptSolicitud.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptsolicitud('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptEstadoPersona'.toLowerCase()) {
            this.ptEstadoPersona.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptestadopersona('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrtipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptupuagrTipoIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2ptupuagrTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nombrecorto');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.nombrecorto = "MS"
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(varptupuagrtipoidentificacion.get('nombrecorto'), 'MS')) {
            // pt_p_atrPrimerNombre.SetActive( FALSE )
            this.ptupuatrPrimerNombre.enabled = false;
            // pt_p_atrPrimerNombre.SetValue( "HIJODE" )
            this.ptupuatrPrimerNombre.setValue('HIJODE');
            // pt_p_atrFechaNacimiento.SetActive( FALSE )
            this.ptupuatrFechaNacimiento.enabled = false;
            // pt_p_atrFechaNacimiento.SetValue( systemdate() )
            this.ptupuatrFechaNacimiento.setValue(this.stdFun.systemDate());
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nombrecorto');
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, this.appGlobalInfo.getLoggedUserInfo().oid,
                'moddbasicospersona');
        }
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        let varAgentAsesor!: InstanceCache;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            varAgentAsesor = this.cacheDependencyRules.getInstance(ModelConstants.Asesor.name,
                this.appGlobalInfo.getLoggedUserInfo().oid);
        }
        // v <> NULL AND v.nombrecorto <> "MS" AND (AGENT_Asesor = NULL OR agent_asesor.moddbasicospersona = TRUE)
        if (varptupuagrtipoidentificacion && varAgentAsesor && !this.util.isNull(varptupuagrtipoidentificacion) &&
            !this.util.valueEquals(varptupuagrtipoidentificacion.get('nombrecorto'), 'MS') && (this.util.isNull(varAgentAsesor) ||
            this.util.valueEquals(this.util.getBool(varAgentAsesor.get('moddbasicospersona')), true))) {
            // pt_p_atrPrimerNombre.SetActive( TRUE )
            this.ptupuatrPrimerNombre.enabled = true;
            // pt_p_atrFechaNacimiento.SetActive( TRUE )
            this.ptupuatrFechaNacimiento.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrTipoIdentificacion argument
     */
    public onptupuagrtipoidentificacionChange(): void {
        this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrNumIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrnumidentificacion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptupuatrNumIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules1ptupuatrNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrNumIdentificacionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules1ptupuatrNumIdentificacionActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.ptupuatrNumIdentificacion.value)) {
            // pt_p_atrDireccionCompleta.SetValue( NULL )
            this.ptupuatrDireccionCompleta.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrNumIdentificacion argument
     */
    public onptupuatrnumidentificacionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrnumidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrIndicadorExtranjero argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrindicadorextranjero(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrIndicadorExtranjero();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrIndicadorExtranjero();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuatrIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuatrIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.ptupuatrIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), true)) {
            // pt_p_agrDepartamentoNacimiento.SetValue( NULL )
            this.ptupuagrDepartamentoNacimiento.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrDepartamentoNacimiento.SetActive( FALSE )
            this.ptupuagrDepartamentoNacimiento.enabled = false;
            // pt_p_agrDepartamentoNacimiento.SetMandatory( FALSE )
            this.ptupuagrDepartamentoNacimiento.mandatory = false;
            // pt_p_agrMunicipioNacimiento.SetValue( NULL )
            this.ptupuagrMunicipioNacimiento.setValue(null);
            // pt_p_agrMunicipioNacimiento.SetActive( FALSE )
            this.ptupuagrMunicipioNacimiento.enabled = false;
            // pt_p_agrMunicipioNacimiento.SetMandatory( FALSE )
            this.ptupuagrMunicipioNacimiento.mandatory = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuatrIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuatrIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.ptupuatrIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), false)) {
            // pt_p_agrDepartamentoNacimiento.SetActive( TRUE )
            this.ptupuagrDepartamentoNacimiento.enabled = true;
            // pt_p_agrDepartamentoNacimiento.SetMandatory( TRUE )
            this.ptupuagrDepartamentoNacimiento.mandatory = true;
            // pt_p_agrMunicipioNacimiento.SetActive( TRUE )
            this.ptupuagrMunicipioNacimiento.enabled = true;
            // pt_p_agrMunicipioNacimiento.SetMandatory( TRUE )
            this.ptupuagrMunicipioNacimiento.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrIndicadorExtranjero argument
     */
    public onptupuatrindicadorextranjeroChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_Codigo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupucodigo(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuCodigo();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuCodigo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_Codigo argument
     */
    private executeDependecyRules1ptupuCodigo(): void {
        this.cacheDependencyRules.counter++;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, this.appGlobalInfo.getLoggedUserInfo().oid,
                'moddbasicospersona');
        }
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuCodigoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_Codigo argument
     */
    private executeDependecyRules1ptupuCodigoActions(): void {
        let varAgentAsesor!: InstanceCache;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            varAgentAsesor = this.cacheDependencyRules.getInstance(ModelConstants.Asesor.name,
                this.appGlobalInfo.getLoggedUserInfo().oid);
        }
        // v > 0 AND AGENT_Asesor <> NULL AND agent_asesor.moddbasicospersona = false
        if (varAgentAsesor && this.util.getInt(this.ptupuCodigo.value) > this.util.getInt('0') && !this.util.isNull(varAgentAsesor) &&
            this.util.valueEquals(this.util.getBool(varAgentAsesor.get('moddbasicospersona')), false)) {
            // pt_p_agrDepartamentoNacimiento.SetActive( FALSE )
            this.ptupuagrDepartamentoNacimiento.enabled = false;
            // pt_p_agrEstadoCivil.SetActive( FALSE )
            this.ptupuagrEstadoCivil.enabled = false;
            // pt_p_agrMunicipioNacimiento.SetActive( FALSE )
            this.ptupuagrMunicipioNacimiento.enabled = false;
            // pt_p_atrFechaNacimiento.SetActive( FALSE )
            this.ptupuatrFechaNacimiento.enabled = false;
            // pt_p_atrGenero.SetActive( FALSE )
            this.ptupuatrGenero.enabled = false;
            // pt_p_atrIndicadorExtranjero.SetActive( FALSE )
            this.ptupuatrIndicadorExtranjero.enabled = false;
            this.executeDependecyRulesptupuatrindicadorextranjero('SetActive', true);
            // pt_p_atrPrimerApellido.SetActive( FALSE )
            this.ptupuatrPrimerApellido.enabled = false;
            // pt_p_atrPrimerNombre.SetActive( FALSE )
            this.ptupuatrPrimerNombre.enabled = false;
            // pt_p_atrSegundoApellido.SetActive( FALSE )
            this.ptupuatrSegundoApellido.enabled = false;
            // pt_p_atrSegundoNombre.SetActive( FALSE )
            this.ptupuatrSegundoNombre.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_Codigo argument
     */
    private executeDependecyRules2ptupuCodigo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuCodigoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_Codigo argument
     */
    private executeDependecyRules2ptupuCodigoActions(): void {
        // v = NULL OR v = 0
        if (this.util.isNull(this.util.getInt(this.ptupuCodigo.value)) ||
            this.util.valueEquals(this.util.getInt(this.ptupuCodigo.value), 0)) {
            // pt_p_agrDepartamentoNacimiento.SetActive( TRUE )
            this.ptupuagrDepartamentoNacimiento.enabled = true;
            // pt_p_agrEstadoCivil.SetActive( TRUE )
            this.ptupuagrEstadoCivil.enabled = true;
            // pt_p_agrMunicipioNacimiento.SetActive( TRUE )
            this.ptupuagrMunicipioNacimiento.enabled = true;
            // pt_p_atrFechaNacimiento.SetActive( TRUE )
            this.ptupuatrFechaNacimiento.enabled = true;
            // pt_p_atrGenero.SetActive( TRUE )
            this.ptupuatrGenero.enabled = true;
            // pt_p_atrIndicadorExtranjero.SetActive( TRUE )
            this.ptupuatrIndicadorExtranjero.enabled = true;
            this.executeDependecyRulesptupuatrindicadorextranjero('SetActive', true);
            // pt_p_atrPrimerApellido.SetActive( TRUE )
            this.ptupuatrPrimerApellido.enabled = true;
            // pt_p_atrPrimerNombre.SetActive( TRUE )
            this.ptupuatrPrimerNombre.enabled = true;
            // pt_p_atrSegundoApellido.SetActive( TRUE )
            this.ptupuatrSegundoApellido.enabled = true;
            // pt_p_atrSegundoNombre.SetActive( TRUE )
            this.ptupuatrSegundoNombre.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_Codigo argument
     */
    public onptupucodigoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupucodigo('SetValue', false);
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
     * Evaluate dependendy rules for ptSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptsolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptsolicitud();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptdireccionestitular();
        }
        if ('SetValue' === event && this.ptSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptSolicitud();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptSolicitud argument
     */
    private setSuppInfoptsolicitud(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.ptSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptSolicitud.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptSolicitud.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for ptSolicitud argument
     */
    private executeDependecyRules1ptSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptSolicitud,
                'titularpersona.tipopersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptSolicitud argument
     */
    private executeDependecyRules1ptSolicitudActions(): void {
        const varptsolicitud = this.getFirstInstanceFromCache(this.ptSolicitud);
        // v <> NULL AND v.TitularPersona.TipoPersona = "N"
        if (varptsolicitud && !this.util.isNull(varptsolicitud) &&
            this.util.valueEquals(varptsolicitud.get('titularpersona.tipopersona'), 'N')) {
            // ptReplicarDireccion.SetVisible( TRUE )
            this.ptReplicarDireccion.visible = true;
            // ptReplicarDireccion.SetValue( FALSE )
            this.ptReplicarDireccion.setValue(false);
            this.executeDependecyRulesptreplicardireccion('SetValue', true);
            // ptDireccionesTitular.SetVisible( TRUE )
            this.ptDireccionesTitular.visible = true;
            // pt_p_atrIndicadorExtranjero.SetValue( FALSE )
            this.ptupuatrIndicadorExtranjero.setValue(false);
            this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptSolicitud argument
     */
    private executeDependecyRules2ptSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptSolicitud,
                'titularpersona.tipopersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptSolicitud argument
     */
    private executeDependecyRules2ptSolicitudActions(): void {
        const varptsolicitud = this.getFirstInstanceFromCache(this.ptSolicitud);
        // v <> NULL AND v.TitularPersona.TipoPersona <> "N"
        if (varptsolicitud && !this.util.isNull(varptsolicitud) &&
            !this.util.valueEquals(varptsolicitud.get('titularpersona.tipopersona'), 'N')) {
            // ptReplicarDireccion.SetVisible( FALSE )
            this.ptReplicarDireccion.visible = false;
            // ptReplicarDireccion.SetValue( FALSE )
            this.ptReplicarDireccion.setValue(false);
            this.executeDependecyRulesptreplicardireccion('SetValue', true);
            // ptDireccionesTitular.SetVisible( FALSE )
            this.ptDireccionesTitular.visible = false;
            // ptDireccionesTitular.SetValue( NULL )
            this.ptDireccionesTitular.setValue(null);
            this.executeDependecyRulesptdireccionestitular('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the ptSolicitud lense search argument
     */
    public onptsolicitudChange(): void {
        this.executeLenseSearch(this.ptSolicitud, ModelConstants.Solicitud.name, 'IC_Solicitud',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptsolicitud();
            }
            if (foundInstances === 1) {
                this.processptsolicitudSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptSolicitud lense search argument
     */
    public processptsolicitudSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptSolicitud.searchResults.length > index) {
            selectedInstance = this.ptSolicitud.searchResults[index];
        }
        // Clean the result list
        this.ptSolicitud.searchResults = [];
        if (selectedInstance) {
            if (!this.ptSolicitud.allowMultiSelect) {
                this.ptSolicitud.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptSolicitud.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptsolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptSolicitud lense search argument
     */
    public cleanptsolicitud(): void {
        this.clearValidationMessages();
        this.ptSolicitud.clean();
        this.executeDependecyRulesptsolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptDireccionesTitular argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptdireccionestitular(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptDireccionesTitular.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptDireccionesTitular();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptDireccionesTitular argument
     */
    private executeDependecyRules1ptDireccionesTitular(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptDireccionesTitular,
                'departamento.Codigo,municipio.Codigo,pais.Codigo,direccioncompleta,rural');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptDireccionesTitularActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptDireccionesTitular argument
     */
    private executeDependecyRules1ptDireccionesTitularActions(): void {
        const varptdireccionestitular = this.getFirstInstanceFromCache(this.ptDireccionesTitular);
        // v <> NULL
        if (varptdireccionestitular && !this.util.isNull(varptdireccionestitular)) {
            // pt_p_agrDepartamento.SetValue( v.departamento )
            this.ptupuagrDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varptdireccionestitular.get('departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // pt_p_agrMunicipio.SetValue( v.municipio )
            this.ptupuagrMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varptdireccionestitular.get('municipio.Codigo'))));
            // pt_p_agrPais.SetValue( v.pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varptdireccionestitular.get('pais.Codigo')));
            this.executeDependecyRulesptupuagrpais('SetValue', true);
            // pt_p_atrDireccionCompleta.SetValue( v.direccioncompleta )
            this.ptupuatrDireccionCompleta.setValue(varptdireccionestitular.get('direccioncompleta'));
            // pt_p_atrRural.SetValue( v.rural )
            this.ptupuatrRural.setValue(this.util.getBool(varptdireccionestitular.get('rural')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptDireccionesTitular argument
     */
    public onptdireccionestitularChange(): void {
        this.executeDependecyRulesptdireccionestitular('SetValue', false);
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
        if ('SetValue' === event) {
            this.executeDependecyRules1ptReplicarDireccion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptReplicarDireccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptReplicarDireccion argument
     */
    private executeDependecyRules1ptReplicarDireccion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptReplicarDireccionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptReplicarDireccion argument
     */
    private executeDependecyRules1ptReplicarDireccionActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.ptReplicarDireccion.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptReplicarDireccion.value), true)) {
            // ptDireccionesTitular.SetVisible( TRUE )
            this.ptDireccionesTitular.visible = true;
            // ptDireccionesTitular.SetActive( TRUE )
            this.ptDireccionesTitular.enabled = true;
            this.executeDependecyRulesptdireccionestitular('SetActive', true);
            // ptDireccionesXClass.SetActive( FALSE )
            this.ptDireccionesXClass.enabled = false;
            this.executeDependecyRulesptdireccionesxclass('SetActive', true);
            // ptDireccionesXClass.SetValue( NULL )
            this.ptDireccionesXClass.setValue(null);
            this.executeDependecyRulesptdireccionesxclass('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptReplicarDireccion argument
     */
    private executeDependecyRules2ptReplicarDireccion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptReplicarDireccionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptReplicarDireccion argument
     */
    private executeDependecyRules2ptReplicarDireccionActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.ptReplicarDireccion.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptReplicarDireccion.value), false)) {
            // ptDireccionesTitular.SetVisible( FALSE )
            this.ptDireccionesTitular.visible = false;
            // ptDireccionesTitular.SetValue( NULL )
            this.ptDireccionesTitular.setValue(null);
            this.executeDependecyRulesptdireccionestitular('SetValue', true);
            // ptDireccionesXClass.SetActive( TRUE )
            this.ptDireccionesXClass.enabled = true;
            this.executeDependecyRulesptdireccionesxclass('SetActive', true);
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
     * Evaluate dependendy rules for ptDireccionesXClass argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptdireccionesxclass(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptDireccionesXClass();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptDireccionesXClass argument
     */
    private executeDependecyRules1ptDireccionesXClass(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptDireccionesXClassActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptDireccionesXClass argument
     */
    private executeDependecyRules1ptDireccionesXClassActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.ptDireccionesXClass.value)) {
            // pt_p_atrDireccionCompleta.SetValue( NULL )
            this.ptupuatrDireccionCompleta.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptDireccionesXClass argument
     */
    public onptdireccionesxclassChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptdireccionesxclass('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptEstadoPersona argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptestadopersona(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptestadopersona();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptEstadoPersona argument
     */
    private setSuppInfoptestadopersona(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptEstadoPersona.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Estadopersona.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptEstadoPersona.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptEstadoPersona.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Estadopersona.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptEstadoPersona.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the ptEstadoPersona lense search argument
     */
    public onptestadopersonaChange(): void {
        this.executeLenseSearch(this.ptEstadoPersona, ModelConstants.Estadopersona.name, 'IC_EstadoPersona',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptestadopersona();
            }
            if (foundInstances === 1) {
                this.processptestadopersonaSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptEstadoPersona lense search argument
     */
    public processptestadopersonaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptEstadoPersona.searchResults.length > index) {
            selectedInstance = this.ptEstadoPersona.searchResults[index];
        }
        // Clean the result list
        this.ptEstadoPersona.searchResults = [];
        if (selectedInstance) {
            if (!this.ptEstadoPersona.allowMultiSelect) {
                this.ptEstadoPersona.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptEstadoPersona.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptestadopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptEstadoPersona lense search argument
     */
    public cleanptestadopersona(): void {
        this.clearValidationMessages();
        this.ptEstadoPersona.clean();
        this.executeDependecyRulesptestadopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_agrDepartamentoNacimiento argument
     */
    public onptupuagrdepartamentonacimientoChange(): void {
        this.loadPreloadptupuagrmunicipionacimiento();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_agrDepartamento argument
     */
    public onptupuagrdepartamentoChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_TieneEPSSanitas argument
     */
    public onptuputieneepssanitasChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pais';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptEstadoPersona'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptEstadoPersona.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_EstadoPersona';
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
            isVisible = this.ptupuagrTipoIdentificacion.visible ||
                this.ptupuatrNumIdentificacion.visible;
        }
        if (groupId === '1') {
            isVisible = this.ptupuatrPrimerNombre.visible ||
                this.ptupuatrSegundoNombre.visible ||
                this.ptupuatrPrimerApellido.visible ||
                this.ptupuatrSegundoApellido.visible ||
                this.ptupuatrFechaNacimiento.visible ||
                this.ptupuatrGenero.visible ||
                this.ptupuatrIndicadorExtranjero.visible ||
                this.ptupuagrDepartamentoNacimiento.visible ||
                this.ptupuagrMunicipioNacimiento.visible ||
                this.ptupuagrEstadoCivil.visible;
        }
        if (groupId === '2') {
            isVisible = this.ptReplicarDireccion.visible ||
                this.ptDireccionesTitular.visible ||
                this.ptDireccionesXClass.visible ||
                this.ptupuatrDireccionCompleta.visible ||
                this.ptupuagrDepartamento.visible ||
                this.ptupuagrMunicipio.visible ||
                this.ptupuatrRural.visible ||
                this.ptupuatrCorreoElectronico.visible ||
                this.ptupuatrTelefonoFijo.visible ||
                this.ptupuatrTelefonoCelular.visible;
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
                'Seleccione usuario');
        }
        if (groupId === '1') {
            alias = this.langMng.translateText('1',
                'Datos básicos');
        }
        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Datos de contacto');
        }
        return alias;
    }
}
