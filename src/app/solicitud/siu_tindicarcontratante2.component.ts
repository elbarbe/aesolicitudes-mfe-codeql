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
    selector: 'imes-solicitud-siu-tindicarcontratante2',
    templateUrl: './siu_tindicarcontratante2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTINDICARCONTRATANTE2Component extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
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
    public ptupuNumIdentificacion: Field;
    public ptupuevcTipoIdentificacion: FieldOVPreload;
    public ptupuatrRazonSocial: Field;
    public ptupDCDireccionCompleta: Field;
    public ptupDCDepartamento: FieldOVPreload;
    public ptupDCMunicipio: FieldOVPreload;
    public ptupDCRural: FieldDefinedSelection;
    public ptupDCTelefonoFijo: Field;
    public ptupDCTelefonoCelular: Field;
    public ptupuPais: FieldOVLenseSearch;
    public ptupuCodigoCORE: Field;
    public ptuTieneEPSSanitas: FieldDefinedSelection;
    public ptuRechazadoAfiliacion: Field;
    public pDCPais: FieldOVLenseSearch;
    public puTitularBeneficios: FieldDefinedSelection;
    public ptuDiplomatico: FieldDefinedSelection;
    public ptuDireccionesXClass: FieldDefinedSelection;
    public ptReplicarDireccion: FieldDefinedSelection;
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
        this.idXML = 'Clas_1431957012480960Ser_86UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutindicarcontratante2;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TINDICARCONTRATANTE2';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TINDICARCONTRATANTE2',
            'Indicar Contratante');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
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
        this.ptupuNumIdentificacion = new Field(this.langMng);
        this.ptupuevcTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuatrRazonSocial = new Field(this.langMng);
        this.ptupDCDireccionCompleta = new Field(this.langMng);
        this.ptupDCDepartamento = new FieldOVPreload(this.langMng);
        this.ptupDCMunicipio = new FieldOVPreload(this.langMng);
        this.ptupDCRural = new FieldDefinedSelection(this.langMng);
        this.ptupDCTelefonoFijo = new Field(this.langMng);
        this.ptupDCTelefonoCelular = new Field(this.langMng);
        this.ptupuPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuCodigoCORE = new Field(this.langMng);
        this.ptuTieneEPSSanitas = new FieldDefinedSelection(this.langMng);
        this.ptuRechazadoAfiliacion = new Field(this.langMng);
        this.pDCPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.puTitularBeneficios = new FieldDefinedSelection(this.langMng);
        this.ptuDiplomatico = new FieldDefinedSelection(this.langMng);
        this.ptuDireccionesXClass = new FieldDefinedSelection(this.langMng);
        this.ptReplicarDireccion = new FieldDefinedSelection(this.langMng);
        this.ptEstadoPersona = new FieldOVLenseSearch(this.langMng, this.util);

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
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptupuPrimerNombre.nameInRequest = 'pt_p_primernombre';
        this.ptupuPrimerNombre.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_PrimerNombre',
            'Primer nombre');
        this.ptupuPrimerNombre.mandatory = false;
        this.ptupuPrimerNombre.dataType = Field.dtString;
        this.ptupuPrimerNombre.maxLength = 50;
        this.ptupuPrimerNombre.assignCSS();
        this.fields.push(this.ptupuPrimerNombre);

        this.ptupuSegundoNombre.nameInRequest = 'pt_p_segundonombre';
        this.ptupuSegundoNombre.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_SegundoNombre',
            'Segundo nombre');
        this.ptupuSegundoNombre.mandatory = false;
        this.ptupuSegundoNombre.dataType = Field.dtString;
        this.ptupuSegundoNombre.maxLength = 50;
        this.ptupuSegundoNombre.assignCSS();
        this.fields.push(this.ptupuSegundoNombre);

        this.ptupuPrimerApellido.nameInRequest = 'pt_p_primerapellido';
        this.ptupuPrimerApellido.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_PrimerApellido',
            'Primer Apellido');
        this.ptupuPrimerApellido.mandatory = false;
        this.ptupuPrimerApellido.dataType = Field.dtString;
        this.ptupuPrimerApellido.maxLength = 50;
        this.ptupuPrimerApellido.assignCSS();
        this.fields.push(this.ptupuPrimerApellido);

        this.ptupuSegundoApellido.nameInRequest = 'pt_p_segundoapellido';
        this.ptupuSegundoApellido.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_SegundoApellido',
            'Segundo Apellido');
        this.ptupuSegundoApellido.mandatory = false;
        this.ptupuSegundoApellido.dataType = Field.dtString;
        this.ptupuSegundoApellido.maxLength = 50;
        this.ptupuSegundoApellido.assignCSS();
        this.fields.push(this.ptupuSegundoApellido);

        this.ptupuFechaNacimiento.nameInRequest = 'pt_p_fechanacimiento';
        this.ptupuFechaNacimiento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_FechaNacimiento',
            'Fecha nacimiento');
        this.ptupuFechaNacimiento.mandatory = false;
        this.ptupuFechaNacimiento.dataType = Field.dtDate;
        this.ptupuFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuFechaNacimiento);

        this.ptupuGenero.nameInRequest = 'pt_p_genero';
        this.ptupuGenero.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_Genero',
            'Género');
        this.ptupuGenero.mandatory = false;
        this.ptupuGenero.dataType = Field.dtString;
        this.ptupuGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuGenero.maxLength = 1;
        this.ptupuGenero.assignCSS();
        this.fields.push(this.ptupuGenero);

        this.ptupuIndicadorExtranjero.nameInRequest = 'pt_p_indicadorextranjero';
        this.ptupuIndicadorExtranjero.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_IndicadorExtranjero',
            'Indicador extranjero');
        this.ptupuIndicadorExtranjero.mandatory = true;
        this.ptupuIndicadorExtranjero.dataType = Field.dtBool;
        this.ptupuIndicadorExtranjero.options = DefinedSelections.DS_SINO;
        this.ptupuIndicadorExtranjero.assignCSS();
        this.ptupuIndicadorExtranjero.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuIndicadorExtranjero);

        this.ptupuTelefonoFijo.nameInRequest = 'pt_p_telefonofijo';
        this.ptupuTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_TelefonoFijo',
            'Teléfono fijo');
        this.ptupuTelefonoFijo.mandatory = false;
        this.ptupuTelefonoFijo.dataType = Field.dtString;
        this.ptupuTelefonoFijo.maxLength = 15;
        this.ptupuTelefonoFijo.assignCSS();
        this.ptupuTelefonoFijo.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuTelefonoFijo);

        this.ptupuTelefonoCelular.nameInRequest = 'pt_p_telefonocelular';
        this.ptupuTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_TelefonoCelular',
            'Teléfono celular');
        this.ptupuTelefonoCelular.mandatory = false;
        this.ptupuTelefonoCelular.dataType = Field.dtString;
        this.ptupuTelefonoCelular.maxLength = 15;
        this.ptupuTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuTelefonoCelular);

        this.ptupuCorreoElectronico.nameInRequest = 'pt_p_correoelectronico';
        this.ptupuCorreoElectronico.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_CorreoElectronico',
            'Correo electrónico');
        this.ptupuCorreoElectronico.mandatory = false;
        this.ptupuCorreoElectronico.dataType = Field.dtString;
        this.ptupuCorreoElectronico.maxLength = 100;
        this.ptupuCorreoElectronico.assignCSS();
        this.fields.push(this.ptupuCorreoElectronico);

        this.ptupuevcDepartamentoNac.nameInRequest = 'pt_p_evcdepartamentonac';
        this.ptupuevcDepartamentoNac.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_evcDepartamentoNac',
            'Departamento nacimiento');
        this.ptupuevcDepartamentoNac.mandatory = false;
        this.ptupuevcDepartamentoNac.dataType = ModelConstants.Departamento.name;
        this.ptupuevcDepartamentoNac.maxLength = 150;
        this.ptupuevcDepartamentoNac.assignCSS();
        this.ptupuevcDepartamentoNac.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuevcDepartamentoNac);

        this.ptupuevcMunicipioNac.nameInRequest = 'pt_p_evcmunicipionac';
        this.ptupuevcMunicipioNac.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_evcMunicipioNac',
            'Municipio nacimiento');
        this.ptupuevcMunicipioNac.mandatory = false;
        this.ptupuevcMunicipioNac.dataType = ModelConstants.Municipio.name;
        this.ptupuevcMunicipioNac.maxLength = 150;
        this.ptupuevcMunicipioNac.assignCSS();
        this.fields.push(this.ptupuevcMunicipioNac);

        this.ptupuevcEstadoCivil.nameInRequest = 'pt_p_evcestadocivil';
        this.ptupuevcEstadoCivil.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_evcEstadoCivil',
            'Estado civil');
        this.ptupuevcEstadoCivil.mandatory = false;
        this.ptupuevcEstadoCivil.dataType = ModelConstants.Estadocivil.name;
        this.ptupuevcEstadoCivil.maxLength = 100;
        this.ptupuevcEstadoCivil.assignCSS();
        this.fields.push(this.ptupuevcEstadoCivil);

        this.ptupuDireccionCompleta.nameInRequest = 'pt_p_direccioncompleta';
        this.ptupuDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_DireccionCompleta',
            'Dirección completa');
        this.ptupuDireccionCompleta.mandatory = false;
        this.ptupuDireccionCompleta.dataType = Field.dtString;
        this.ptupuDireccionCompleta.maxLength = 250;
        this.ptupuDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuDireccionCompleta);

        this.ptupuRural.nameInRequest = 'pt_p_rural';
        this.ptupuRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_Rural',
            'Rural');
        this.ptupuRural.mandatory = true;
        this.ptupuRural.dataType = Field.dtBool;
        this.ptupuRural.options = DefinedSelections.DS_SINO;
        this.ptupuRural.value = false;
        this.ptupuRural.assignCSS();
        this.fields.push(this.ptupuRural);

        this.ptupuevcDepartamento.nameInRequest = 'pt_p_evcdepartamento';
        this.ptupuevcDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_evcDepartamento',
            'Departamento');
        this.ptupuevcDepartamento.mandatory = false;
        this.ptupuevcDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuevcDepartamento.maxLength = 150;
        this.ptupuevcDepartamento.assignCSS();
        this.fields.push(this.ptupuevcDepartamento);

        this.ptupuevcMunicipio.nameInRequest = 'pt_p_evcmunicipio';
        this.ptupuevcMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_evcMunicipio',
            'Municipio');
        this.ptupuevcMunicipio.mandatory = false;
        this.ptupuevcMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuevcMunicipio.maxLength = 150;
        this.ptupuevcMunicipio.assignCSS();
        this.fields.push(this.ptupuevcMunicipio);

        this.ptupuNumIdentificacion.nameInRequest = 'pt_p_numidentificacion';
        this.ptupuNumIdentificacion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_NumIdentificacion',
            'Nº Identificación');
        this.ptupuNumIdentificacion.mandatory = true;
        this.ptupuNumIdentificacion.dataType = Field.dtString;
        this.ptupuNumIdentificacion.maxLength = 60;
        this.ptupuNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuNumIdentificacion);

        this.ptupuevcTipoIdentificacion.nameInRequest = 'pt_p_evctipoidentificacion';
        this.ptupuevcTipoIdentificacion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_evcTipoIdentificacion',
            'Tipo identificación');
        this.ptupuevcTipoIdentificacion.mandatory = true;
        this.ptupuevcTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuevcTipoIdentificacion.maxLength = 170;
        this.ptupuevcTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuevcTipoIdentificacion);

        this.ptupuatrRazonSocial.nameInRequest = 'pt_p_atrrazonsocial';
        this.ptupuatrRazonSocial.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_atrRazonSocial',
            'Razón Social');
        this.ptupuatrRazonSocial.mandatory = false;
        this.ptupuatrRazonSocial.dataType = Field.dtString;
        this.ptupuatrRazonSocial.maxLength = 254;
        this.ptupuatrRazonSocial.assignCSS();
        this.fields.push(this.ptupuatrRazonSocial);

        this.ptupDCDireccionCompleta.nameInRequest = 'pt_pdcdireccioncompleta';
        this.ptupDCDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_pDCDireccionCompleta',
            'Dirección completa');
        this.ptupDCDireccionCompleta.mandatory = true;
        this.ptupDCDireccionCompleta.dataType = Field.dtString;
        this.ptupDCDireccionCompleta.maxLength = 250;
        this.ptupDCDireccionCompleta.assignCSS();
        this.fields.push(this.ptupDCDireccionCompleta);

        this.ptupDCDepartamento.nameInRequest = 'pt_pdcdepartamento';
        this.ptupDCDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_pDCDepartamento',
            'Departamento');
        this.ptupDCDepartamento.mandatory = true;
        this.ptupDCDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupDCDepartamento.maxLength = 150;
        this.ptupDCDepartamento.assignCSS();
        this.fields.push(this.ptupDCDepartamento);

        this.ptupDCMunicipio.nameInRequest = 'pt_pdcmunicipio';
        this.ptupDCMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_pDCMunicipio',
            'Municipio');
        this.ptupDCMunicipio.mandatory = true;
        this.ptupDCMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupDCMunicipio.maxLength = 150;
        this.ptupDCMunicipio.assignCSS();
        this.fields.push(this.ptupDCMunicipio);

        this.ptupDCRural.nameInRequest = 'pt_pdcrural';
        this.ptupDCRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_pDCRural',
            'Rural');
        this.ptupDCRural.mandatory = true;
        this.ptupDCRural.dataType = Field.dtBool;
        this.ptupDCRural.options = DefinedSelections.DS_SINO;
        this.ptupDCRural.value = false;
        this.ptupDCRural.assignCSS();
        this.fields.push(this.ptupDCRural);

        this.ptupDCTelefonoFijo.nameInRequest = 'pt_pdctelefonofijo';
        this.ptupDCTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_pDCTelefonoFijo',
            'Teléfono fijo');
        this.ptupDCTelefonoFijo.mandatory = false;
        this.ptupDCTelefonoFijo.dataType = Field.dtString;
        this.ptupDCTelefonoFijo.maxLength = 15;
        this.ptupDCTelefonoFijo.assignCSS();
        this.ptupDCTelefonoFijo.addCSSClass('beginNewLine');
        this.fields.push(this.ptupDCTelefonoFijo);

        this.ptupDCTelefonoCelular.nameInRequest = 'pt_pdctelefonocelular';
        this.ptupDCTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_pDCTelefonoCelular',
            'Teléfono celular');
        this.ptupDCTelefonoCelular.mandatory = false;
        this.ptupDCTelefonoCelular.dataType = Field.dtString;
        this.ptupDCTelefonoCelular.maxLength = 15;
        this.ptupDCTelefonoCelular.assignCSS();
        this.fields.push(this.ptupDCTelefonoCelular);

        this.ptupuPais.nameInRequest = 'pt_p_pais';
        this.ptupuPais.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_Pais',
            'País');
        this.ptupuPais.mandatory = false;
        this.ptupuPais.dataType = ModelConstants.Pais.name;
        this.ptupuPais.maxLength = 50;
        this.ptupuPais.assignCSS();
        this.fields.push(this.ptupuPais);

        this.ptupuCodigoCORE.nameInRequest = 'pt_p_codigocore';
        this.ptupuCodigoCORE.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_p_CodigoCORE',
            'pt_p_CodigoCORE');
        this.ptupuCodigoCORE.mandatory = false;
        this.ptupuCodigoCORE.dataType = Field.dtInt;
        this.ptupuCodigoCORE.assignCSS();
        this.fields.push(this.ptupuCodigoCORE);

        this.ptuTieneEPSSanitas.nameInRequest = 'pt_tieneepssanitas';
        this.ptuTieneEPSSanitas.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_TieneEPSSanitas',
            'FALSE');
        this.ptuTieneEPSSanitas.mandatory = true;
        this.ptuTieneEPSSanitas.dataType = Field.dtBool;
        this.ptuTieneEPSSanitas.options = DefinedSelections.DS_SINO;
        this.ptuTieneEPSSanitas.value = false;
        this.ptuTieneEPSSanitas.assignCSS();
        this.fields.push(this.ptuTieneEPSSanitas);

        this.ptuRechazadoAfiliacion.nameInRequest = 'pt_rechazadoafiliacion';
        this.ptuRechazadoAfiliacion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_RechazadoAfiliacion',
            'pt_RechazadoAfiliacion');
        this.ptuRechazadoAfiliacion.mandatory = false;
        this.ptuRechazadoAfiliacion.dataType = Field.dtString;
        this.ptuRechazadoAfiliacion.maxLength = 50;
        this.ptuRechazadoAfiliacion.assignCSS();
        this.fields.push(this.ptuRechazadoAfiliacion);

        this.pDCPais.nameInRequest = 'pdcpais';
        this.pDCPais.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pDCPais',
            'País');
        this.pDCPais.mandatory = false;
        this.pDCPais.dataType = ModelConstants.Pais.name;
        this.pDCPais.maxLength = 50;
        this.pDCPais.assignCSS();
        this.fields.push(this.pDCPais);

        this.puTitularBeneficios.nameInRequest = 'p_titularbeneficios';
        this.puTitularBeneficios.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_p_TitularBeneficios',
            'Titular con beneficios');
        this.puTitularBeneficios.mandatory = true;
        this.puTitularBeneficios.dataType = Field.dtBool;
        this.puTitularBeneficios.options = DefinedSelections.DS_SINO;
        this.puTitularBeneficios.assignCSS();
        this.fields.push(this.puTitularBeneficios);

        this.ptuDiplomatico.nameInRequest = 'pt_diplomatico';
        this.ptuDiplomatico.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_Diplomatico',
            'Diplomático');
        this.ptuDiplomatico.mandatory = true;
        this.ptuDiplomatico.dataType = Field.dtBool;
        this.ptuDiplomatico.options = DefinedSelections.DS_SINO;
        this.ptuDiplomatico.value = false;
        this.ptuDiplomatico.assignCSS();
        this.fields.push(this.ptuDiplomatico);

        this.ptuDireccionesXClass.nameInRequest = 'pt_direccionesxclass';
        this.ptuDireccionesXClass.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_pt_DireccionesXClass',
            'Direcciones');
        this.ptuDireccionesXClass.mandatory = false;
        this.ptuDireccionesXClass.dataType = Field.dtString;
        this.ptuDireccionesXClass.options = DefinedSelections.DS_GENERO;
        this.ptuDireccionesXClass.maxLength = 1;
        this.ptuDireccionesXClass.assignCSS();
        this.fields.push(this.ptuDireccionesXClass);

        this.ptReplicarDireccion.nameInRequest = 'ptreplicardireccion';
        this.ptReplicarDireccion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_ptReplicarDireccion',
            'Replicar');
        this.ptReplicarDireccion.mandatory = true;
        this.ptReplicarDireccion.dataType = Field.dtBool;
        this.ptReplicarDireccion.options = DefinedSelections.DS_SINO;
        this.ptReplicarDireccion.assignCSS();
        this.fields.push(this.ptReplicarDireccion);

        this.ptEstadoPersona.nameInRequest = 'ptestadopersona';
        this.ptEstadoPersona.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARCONTRATANTE2_inArg_ptEstadoPersona',
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

            // pt_p_IndicadorExtranjero
            const defValptupuIndicadorExtranjero = new Promise<void>((resolveDefValue) => {
                this.ptupuIndicadorExtranjero.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValptupuIndicadorExtranjero);

            // p_TitularBeneficios
            const defValpuTitularBeneficios = new Promise<void>((resolveDefValue) => {
                this.puTitularBeneficios.setValue(true);
                this.loadPreloadptupuevcmunicipio();
                resolveDefValue();
            });
            promiseArr.push(defValpuTitularBeneficios);

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
            if (lastRole === 'TipoIdentificacion') {
                this.ptupuevcTipoIdentificacion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevctipoidentificacion('SetValue', true);
                this.ptupuevcTipoIdentificacion.enabled = false;
                this.executeDependecyRulesptupuevctipoidentificacion('SetEnabled', true);
            }
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
        this.util.searchPreload('EstadoCivil', 'IC_EstadoCivil', [], null, '').then(
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
        navFiltersptupuevcTipoIdentificacion.push('Solicitud_TINDICARCONTRATANTE2_pt_p_evcTipoIdentificacion_NavFilter0');
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

        // ptupDCDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
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
     * Search the preload values of field pt_p_evcMunicipioNac
     */
    private loadPreloadptupuevcmunicipionac(): void {

        if (this.ptupuevcDepartamentoNac.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TINDICARCONTRATANTE2_pt_p_evcMunicipioNac_NavFilter0');
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
            !this.util.isNull(this.puTitularBeneficios.value) &&
            !this.util.isNull(this.ptuTieneEPSSanitas.value)) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TINDICARCONTRATANTE2_pt_p_evcMunicipio_NavFilter0');
            navFilters.push('Solicitud_TINDICARCONTRATANTE2_pt_p_evcMunicipio_NavFilter1');
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
     * Search the preload values of field pt_pDCMunicipio
     */
    private loadPreloadptupdcmunicipio(): void {

        if (this.ptupDCDepartamento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TINDICARCONTRATANTE2_pt_pDCMunicipio_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptEstadoPersona'.toLowerCase()) {
            this.ptEstadoPersona.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptestadopersona('SetValue', false);
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
        // Rule 5
        if ('SetValue' === event) {
            this.executeDependecyRules5puthisSolicitud();
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
            // pt_Diplomatico.SetActive( FALSE )
            this.ptuDiplomatico.enabled = false;
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
                'direccion.Identificador,direccion.departamento.Codigo,direccion.municipio.Codigo,direccion.direccioncompleta' +
                ',direccion.rural,direccion.pais.Codigo');
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
            // pt_pDCDepartamento.SetValue( v.direccion.departamento )
            this.ptupDCDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('direccion.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupdcmunicipio');
            // pt_pDCMunicipio.SetValue( v.direccion.municipio )
            this.ptupDCMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('direccion.municipio.Codigo'))));
            // pt_pDCDireccionCompleta.SetValue( v.direccion.direccioncompleta )
            this.ptupDCDireccionCompleta.setValue(varputhissolicitud.get('direccion.direccioncompleta'));
            // pt_pDCRural.SetValue( v.direccion.rural )
            this.ptupDCRural.setValue(this.util.getBool(varputhissolicitud.get('direccion.rural')));
            // pDCPais.SetValue( v.direccion.pais )
            this.pDCPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhissolicitud.get('direccion.pais.Codigo')));
            this.executeDependecyRulespdcpais('SetValue', true);
            // pt_p_Pais.SetValue( v.direccion.pais )
            this.ptupuPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhissolicitud.get('direccion.pais.Codigo')));
            this.executeDependecyRulesptupupais('SetValue', true);
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
                'contratante.Solicitud.Ae_solicitudes.id_solicitud');
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
        // v <> NULL AND v.contratante <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidContratante(
            this.util.getInt(varputhissolicitud.get('contratante.Solicitud.Ae_solicitudes.id_solicitud'))))) {
            // pt_DireccionesXClass.SetValue( NULL )
            this.ptuDireccionesXClass.setValue(null);
            this.executeDependecyRulesptudireccionesxclass('SetValue', true);
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
                'contratantepersona.Identificador,contratantepersona.estadocivil.Codigo,contratantepersona.codigo' +
                ',contratantepersona.tieneepssanitas,contratantepersona.estadopersona.Codigo,contratantepersona.rechazadoafiliacion');
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
        // v <> NULL AND v.contratantepersona <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidPersona(
            this.util.getInt(varputhissolicitud.get('contratantepersona.Identificador'))))) {
            // pt_p_evcEstadoCivil.SetValue( v.contratantepersona.estadocivil )
            this.ptupuevcEstadoCivil.setValue(this.util.oidBuilder.buildOidEstadoCivil(
                this.util.getInt(varputhissolicitud.get('contratantepersona.estadocivil.Codigo'))));
            // pt_p_CodigoCORE.SetValue( v.contratantepersona.codigo )
            this.ptupuCodigoCORE.setValue(this.util.getInt(varputhissolicitud.get('contratantepersona.codigo')));
            this.executeDependecyRulesptupucodigocore('SetValue', true);
            // pt_TieneEPSSanitas.SetValue( v.contratantepersona.tieneepssanitas )
            this.ptuTieneEPSSanitas.setValue(this.util.getBool(varputhissolicitud.get('contratantepersona.tieneepssanitas')));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // ptEstadoPersona.SetValue( v.contratantepersona.estadopersona )
            this.ptEstadoPersona.setValue(this.util.oidBuilder.buildOidEstadoPersona(
                this.util.getInt(varputhissolicitud.get('contratantepersona.estadopersona.Codigo'))));
            this.executeDependecyRulesptestadopersona('SetValue', true);
            // pt_RechazadoAfiliacion.SetValue( v.contratantepersona.rechazadoafiliacion )
            this.ptuRechazadoAfiliacion.setValue(varputhissolicitud.get('contratantepersona.rechazadoafiliacion'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 5 for p_thisSolicitud argument
     */
    private executeDependecyRules5puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'contratante.Solicitud.Ae_solicitudes.id_solicitud,contratante.tipoidentificacion.Codigo,contratante.numidentificacion' +
                ',contratante.primernombre,contratante.segundonombre,contratante.primerapellido,contratante.segundoapellido' +
                ',contratante.titularconbeneficios,contratante.drvbeneficiosactivo,contratante.fechanacimiento,contratante.genero' +
                ',contratante.indicadorextranjero,contratante.departamentonac.Codigo,contratante.municipionac.Codigo' +
                ',contratante.razonsocial,contratante.telefonofijores,contratante.telefonocelularres,contratante.correoelectronico' +
                ',contratante.telefonofijo,contratante.telefonocelular,contratante.departamentores.Codigo' +
                ',contratante.municipiores.Codigo,contratante.direccionres,contratante.ruraldirres');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules5puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 5 for p_thisSolicitud argument
     */
    private executeDependecyRules5puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.contratante <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidContratante(
            this.util.getInt(varputhissolicitud.get('contratante.Solicitud.Ae_solicitudes.id_solicitud'))))) {
            // pt_p_evcTipoIdentificacion.SetValue( v.contratante.tipoidentificacion )
            this.ptupuevcTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varputhissolicitud.get('contratante.tipoidentificacion.Codigo'))));
            this.executeDependecyRulesptupuevctipoidentificacion('SetValue', true);
            // pt_p_NumIdentificacion.SetValue( v.contratante.numidentificacion )
            this.ptupuNumIdentificacion.setValue(varputhissolicitud.get('contratante.numidentificacion'));
            this.executeDependecyRulesptupunumidentificacion('SetValue', true);
            // pt_p_PrimerNombre.SetValue( v.contratante.primernombre )
            this.ptupuPrimerNombre.setValue(varputhissolicitud.get('contratante.primernombre'));
            // pt_p_SegundoNombre.SetValue( v.contratante.segundonombre )
            this.ptupuSegundoNombre.setValue(varputhissolicitud.get('contratante.segundonombre'));
            // pt_p_PrimerApellido.SetValue( v.contratante.primerapellido )
            this.ptupuPrimerApellido.setValue(varputhissolicitud.get('contratante.primerapellido'));
            // pt_p_SegundoApellido.SetValue( v.contratante.segundoapellido )
            this.ptupuSegundoApellido.setValue(varputhissolicitud.get('contratante.segundoapellido'));
            // p_TitularBeneficios.SetValue( v.contratante.titularconbeneficios )
            this.puTitularBeneficios.setValue(this.util.getBool(varputhissolicitud.get('contratante.titularconbeneficios')));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // p_TitularBeneficios.SetActive( v.contratante.drvbeneficiosactivo )
            this.puTitularBeneficios.enabled = this.util.getBool(varputhissolicitud.get('contratante.drvbeneficiosactivo'));
            // pt_p_FechaNacimiento.SetValue( v.contratante.fechanacimiento )
            this.ptupuFechaNacimiento.setValue(this.util.getDate(varputhissolicitud.get('contratante.fechanacimiento')));
            // pt_p_Genero.SetValue( v.contratante.genero )
            this.ptupuGenero.setValue(varputhissolicitud.get('contratante.genero'));
            // pt_p_IndicadorExtranjero.SetValue( v.contratante.indicadorextranjero )
            this.ptupuIndicadorExtranjero.setValue(this.util.getBool(varputhissolicitud.get('contratante.indicadorextranjero')));
            this.executeDependecyRulesptupuindicadorextranjero('SetValue', true);
            // pt_p_evcDepartamentoNac.SetValue( v.contratante.departamentonac )
            this.ptupuevcDepartamentoNac.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('contratante.departamentonac.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipionac');
            // pt_p_evcMunicipioNac.SetValue( v.contratante.municipionac )
            this.ptupuevcMunicipioNac.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('contratante.municipionac.Codigo'))));
            // pt_p_atrRazonSocial.SetValue( v.contratante.razonsocial )
            this.ptupuatrRazonSocial.setValue(varputhissolicitud.get('contratante.razonsocial'));
            // pt_p_TelefonoFijo.SetValue( v.contratante.telefonofijores )
            this.ptupuTelefonoFijo.setValue(varputhissolicitud.get('contratante.telefonofijores'));
            // pt_p_TelefonoCelular.SetValue( v.contratante.telefonocelularres )
            this.ptupuTelefonoCelular.setValue(varputhissolicitud.get('contratante.telefonocelularres'));
            // pt_p_CorreoElectronico.SetValue( v.contratante.correoelectronico )
            this.ptupuCorreoElectronico.setValue(varputhissolicitud.get('contratante.correoelectronico'));
            // pt_pDCTelefonoFijo.SetValue( v.contratante.telefonofijo )
            this.ptupDCTelefonoFijo.setValue(varputhissolicitud.get('contratante.telefonofijo'));
            // pt_pDCTelefonoCelular.SetValue( v.contratante.telefonocelular )
            this.ptupDCTelefonoCelular.setValue(varputhissolicitud.get('contratante.telefonocelular'));
            // pt_p_evcDepartamento.SetValue( v.contratante.departamentores )
            this.ptupuevcDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('contratante.departamentores.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // pt_p_evcMunicipio.SetValue( v.contratante.municipiores )
            this.ptupuevcMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('contratante.municipiores.Codigo'))));
            // pt_p_DireccionCompleta.SetValue( v.contratante.direccionres )
            this.ptupuDireccionCompleta.setValue(varputhissolicitud.get('contratante.direccionres'));
            // pt_p_Rural.SetValue( v.contratante.ruraldirres )
            this.ptupuRural.setValue(this.util.getBool(varputhissolicitud.get('contratante.ruraldirres')));
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
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuIndicadorExtranjero();
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
        // v <> NULL AND v = TRUE
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
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'nit,Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuIndicadorExtranjeroActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuIndicadorExtranjeroActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL AND v = FALSE AND pt_p_evcTipoIdentificacion <> NULL AND pt_p_evctipoidentificacion.nit = FALSE
        if (varptupuevctipoidentificacion && !this.util.isNull(this.util.getBool(this.ptupuIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuIndicadorExtranjero.value), false) &&
            !this.util.isNull(varptupuevctipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuevctipoidentificacion.get('nit')), false)) {
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
     * Dependency rule 3 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules3ptupuIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3ptupuIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_IndicadorExtranjero argument
     */
    private executeDependecyRules3ptupuIndicadorExtranjeroActions(): void {
        // v = NULL
        if (this.util.isNull(this.util.getBool(this.ptupuIndicadorExtranjero.value))) {
            // pt_p_IndicadorExtranjero.SetValue( FALSE )
            this.ptupuIndicadorExtranjero.setValue(false);
            this.executeDependecyRulesptupuindicadorextranjero('SetValue', true);
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
     * Evaluate dependendy rules for pt_p_NumIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupunumidentificacion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptupuNumIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuNumIdentificacion();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuNumIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_NumIdentificacion argument
     */
    private executeDependecyRules1ptupuNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuNumIdentificacionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_NumIdentificacion argument
     */
    private executeDependecyRules1ptupuNumIdentificacionActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.ptupuNumIdentificacion.value)) {
            // p_TitularBeneficios.SetValue( FALSE )
            this.puTitularBeneficios.setValue(false);
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_NumIdentificacion argument
     */
    private executeDependecyRules2ptupuNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'nit,Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuNumIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_NumIdentificacion argument
     */
    private executeDependecyRules2ptupuNumIdentificacionActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL AND pt_p_evcTipoIdentificacion <> NULL AND pt_p_evctipoidentificacion.nit = true AND pt_p_CodigoCORE > 0
        if (varptupuevctipoidentificacion && !this.util.isNull(this.ptupuNumIdentificacion.value) &&
            !this.util.isNull(varptupuevctipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuevctipoidentificacion.get('nit')), true) &&
            this.util.getInt(this.ptupuCodigoCORE.value) > this.util.getInt('0')) {
            // pt_p_CorreoElectronico.SetActive( FALSE )
            this.ptupuCorreoElectronico.enabled = false;
            // pt_p_atrRazonSocial.SetActive( FALSE )
            this.ptupuatrRazonSocial.enabled = false;
            // pt_DireccionesXClass.SetActive( FALSE )
            this.ptuDireccionesXClass.enabled = false;
            this.executeDependecyRulesptudireccionesxclass('SetActive', true);
            // pt_p_DireccionCompleta.SetActive( FALSE )
            this.ptupuDireccionCompleta.enabled = false;
            // pt_p_evcDepartamento.SetActive( FALSE )
            this.ptupuevcDepartamento.enabled = false;
            // pt_p_evcMunicipio.SetActive( FALSE )
            this.ptupuevcMunicipio.enabled = false;
            // pt_p_Rural.SetActive( FALSE )
            this.ptupuRural.enabled = false;
            // pt_p_TelefonoFijo.SetActive( FALSE )
            this.ptupuTelefonoFijo.enabled = false;
            // pt_p_TelefonoCelular.SetActive( FALSE )
            this.ptupuTelefonoCelular.enabled = false;
            // ptReplicarDireccion.SetActive( FALSE )
            this.ptReplicarDireccion.enabled = false;
            this.executeDependecyRulesptreplicardireccion('SetActive', true);
            // pt_pDCDireccionCompleta.SetActive( FALSE )
            this.ptupDCDireccionCompleta.enabled = false;
            // pt_pDCDepartamento.SetActive( FALSE )
            this.ptupDCDepartamento.enabled = false;
            // pt_pDCMunicipio.SetActive( FALSE )
            this.ptupDCMunicipio.enabled = false;
            // pt_pDCRural.SetActive( FALSE )
            this.ptupDCRural.enabled = false;
            // pt_pDCTelefonoFijo.SetActive( FALSE )
            this.ptupDCTelefonoFijo.enabled = false;
            // pt_pDCTelefonoCelular.SetActive( FALSE )
            this.ptupDCTelefonoCelular.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_NumIdentificacion argument
     */
    private executeDependecyRules3ptupuNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'nit,Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3ptupuNumIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_NumIdentificacion argument
     */
    private executeDependecyRules3ptupuNumIdentificacionActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL AND pt_p_evcTipoIdentificacion <> NULL AND pt_p_evctipoidentificacion.nit = true AND pt_p_CodigoCORE = NULL
        if (varptupuevctipoidentificacion && !this.util.isNull(this.ptupuNumIdentificacion.value) &&
            !this.util.isNull(varptupuevctipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuevctipoidentificacion.get('nit')), true) &&
            this.util.isNull(this.util.getInt(this.ptupuCodigoCORE.value))) {
            // pt_p_CorreoElectronico.SetActive( TRUE )
            this.ptupuCorreoElectronico.enabled = true;
            // pt_p_atrRazonSocial.SetActive( TRUE )
            this.ptupuatrRazonSocial.enabled = true;
            // pt_DireccionesXClass.SetActive( TRUE )
            this.ptuDireccionesXClass.enabled = true;
            this.executeDependecyRulesptudireccionesxclass('SetActive', true);
            // pt_p_DireccionCompleta.SetActive( TRUE )
            this.ptupuDireccionCompleta.enabled = true;
            // pt_p_evcDepartamento.SetActive( TRUE )
            this.ptupuevcDepartamento.enabled = true;
            // pt_p_evcMunicipio.SetActive( TRUE )
            this.ptupuevcMunicipio.enabled = true;
            // pt_p_Rural.SetActive( TRUE )
            this.ptupuRural.enabled = true;
            // pt_p_TelefonoFijo.SetActive( TRUE )
            this.ptupuTelefonoFijo.enabled = true;
            // pt_p_TelefonoCelular.SetActive( TRUE )
            this.ptupuTelefonoCelular.enabled = true;
            // ptReplicarDireccion.SetActive( TRUE )
            this.ptReplicarDireccion.enabled = true;
            this.executeDependecyRulesptreplicardireccion('SetActive', true);
            // pt_pDCDireccionCompleta.SetActive( TRUE )
            this.ptupDCDireccionCompleta.enabled = true;
            // pt_pDCDepartamento.SetActive( TRUE )
            this.ptupDCDepartamento.enabled = true;
            // pt_pDCMunicipio.SetActive( TRUE )
            this.ptupDCMunicipio.enabled = true;
            // pt_pDCRural.SetActive( TRUE )
            this.ptupDCRural.enabled = true;
            // pt_pDCTelefonoFijo.SetActive( TRUE )
            this.ptupDCTelefonoFijo.enabled = true;
            // pt_pDCTelefonoCelular.SetActive( TRUE )
            this.ptupDCTelefonoCelular.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_NumIdentificacion argument
     */
    public onptupunumidentificacionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupunumidentificacion('SetValue', false);
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
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptupuevcTipoIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuevcTipoIdentificacion();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuevcTipoIdentificacion();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4ptupuevcTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuevcTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'Codigo');
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
        // v <> NULL
        if (varptupuevctipoidentificacion && !this.util.isNull(varptupuevctipoidentificacion)) {
            // p_TitularBeneficios.SetValue( FALSE )
            this.puTitularBeneficios.setValue(false);
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuevcTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'diplomatico');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuevcTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuevcTipoIdentificacionActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL
        if (varptupuevctipoidentificacion && !this.util.isNull(varptupuevctipoidentificacion)) {
            // pt_Diplomatico.SetValue( v.diplomatico )
            this.ptuDiplomatico.setValue(this.util.getBool(varptupuevctipoidentificacion.get('diplomatico')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules3ptupuevcTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3ptupuevcTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules3ptupuevcTipoIdentificacionActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL AND v.nit = TRUE
        if (varptupuevctipoidentificacion && !this.util.isNull(varptupuevctipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuevctipoidentificacion.get('nit')), true)) {
            // p_TitularBeneficios.SetValue( FALSE )
            this.puTitularBeneficios.setValue(false);
            this.pendingDependencyRules.push('loadPreloadptupuevcmunicipio');
            // p_TitularBeneficios.SetVisible( FALSE )
            this.puTitularBeneficios.visible = false;
            // pt_p_PrimerNombre.SetMandatory( FALSE )
            this.ptupuPrimerNombre.mandatory = false;
            // pt_p_PrimerApellido.SetMandatory( FALSE )
            this.ptupuPrimerApellido.mandatory = false;
            // pt_p_Genero.SetMandatory( FALSE )
            this.ptupuGenero.mandatory = false;
            // pt_p_evcEstadoCivil.SetMandatory( FALSE )
            this.ptupuevcEstadoCivil.mandatory = false;
            // pt_p_FechaNacimiento.SetMandatory( FALSE )
            this.ptupuFechaNacimiento.mandatory = false;
            // pt_Diplomatico.SetVisible( FALSE )
            this.ptuDiplomatico.visible = false;
            // pt_p_evcDepartamentoNac.SetMandatory( FALSE )
            this.ptupuevcDepartamentoNac.mandatory = false;
            // pt_p_evcMunicipioNac.SetMandatory( FALSE )
            this.ptupuevcMunicipioNac.mandatory = false;
            // pt_p_Rural.SetValue( FALSE )
            this.ptupuRural.setValue(false);
            // pt_p_PrimerNombre.SetVisible( FALSE )
            this.ptupuPrimerNombre.visible = false;
            // pt_p_atrRazonSocial.SetVisible( TRUE )
            this.ptupuatrRazonSocial.visible = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules4ptupuevcTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4ptupuevcTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for pt_p_evcTipoIdentificacion argument
     */
    private executeDependecyRules4ptupuevcTipoIdentificacionActions(): void {
        const varptupuevctipoidentificacion = this.getFirstInstanceFromCache(this.ptupuevcTipoIdentificacion);
        // v <> NULL AND v.nit = FALSE
        if (varptupuevctipoidentificacion && !this.util.isNull(varptupuevctipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuevctipoidentificacion.get('nit')), false)) {
            // pt_p_PrimerNombre.SetMandatory( TRUE )
            this.ptupuPrimerNombre.mandatory = true;
            // pt_p_PrimerApellido.SetMandatory( TRUE )
            this.ptupuPrimerApellido.mandatory = true;
            // pt_p_Genero.SetMandatory( TRUE )
            this.ptupuGenero.mandatory = true;
            // pt_p_evcEstadoCivil.SetMandatory( TRUE )
            this.ptupuevcEstadoCivil.mandatory = true;
            // pt_p_FechaNacimiento.SetMandatory( TRUE )
            this.ptupuFechaNacimiento.mandatory = true;
            // pt_Diplomatico.SetVisible( TRUE )
            this.ptuDiplomatico.visible = true;
            // pt_p_evcDepartamentoNac.SetMandatory( pt_p_IndicadorExtranjero = FALSE )
            this.ptupuevcDepartamentoNac.mandatory = this.util.valueEquals(this.util.getBool(this.ptupuIndicadorExtranjero.value), false);
            // pt_p_evcMunicipioNac.SetMandatory( pt_p_IndicadorExtranjero = FALSE )
            this.ptupuevcMunicipioNac.mandatory = this.util.valueEquals(this.util.getBool(this.ptupuIndicadorExtranjero.value), false);
            // pt_p_PrimerNombre.SetVisible( TRUE )
            this.ptupuPrimerNombre.visible = true;
            // pt_p_atrRazonSocial.SetVisible( FALSE )
            this.ptupuatrRazonSocial.visible = false;
            // p_TitularBeneficios.SetVisible( TRUE )
            this.puTitularBeneficios.visible = true;
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
     * Evaluate dependendy rules for pt_p_CodigoCORE argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupucodigocore(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuCodigoCORE();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuCodigoCORE();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_CodigoCORE argument
     */
    private executeDependecyRules1ptupuCodigoCORE(): void {
        this.cacheDependencyRules.counter++;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, this.appGlobalInfo.getLoggedUserInfo().oid,
                'moddbasicospersona');
        }
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuCodigoCOREActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_CodigoCORE argument
     */
    private executeDependecyRules1ptupuCodigoCOREActions(): void {
        let varAgentAsesor!: InstanceCache;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf([ModelConstants.Asesor.name])) {
            varAgentAsesor = this.cacheDependencyRules.getInstance(ModelConstants.Asesor.name,
                this.appGlobalInfo.getLoggedUserInfo().oid);
        }
        // v > 0 AND AGENT_Asesor <> NULL AND agent_asesor.moddbasicospersona = false
        if (varAgentAsesor && this.util.getInt(this.ptupuCodigoCORE.value) > this.util.getInt('0') &&
            !this.util.isNull(varAgentAsesor) && this.util.valueEquals(this.util.getBool(varAgentAsesor.get('moddbasicospersona')),
            false)) {
            // pt_p_evcDepartamentoNac.SetActive( FALSE )
            this.ptupuevcDepartamentoNac.enabled = false;
            // pt_p_evcMunicipioNac.SetActive( FALSE )
            this.ptupuevcMunicipioNac.enabled = false;
            // pt_p_evcEstadoCivil.SetActive( FALSE )
            this.ptupuevcEstadoCivil.enabled = false;
            // pt_p_FechaNacimiento.SetActive( FALSE )
            this.ptupuFechaNacimiento.enabled = false;
            // pt_p_Genero.SetActive( FALSE )
            this.ptupuGenero.enabled = false;
            // pt_p_IndicadorExtranjero.SetActive( FALSE )
            this.ptupuIndicadorExtranjero.enabled = false;
            this.executeDependecyRulesptupuindicadorextranjero('SetActive', true);
            // pt_p_PrimerApellido.SetActive( FALSE )
            this.ptupuPrimerApellido.enabled = false;
            // pt_p_PrimerNombre.SetActive( FALSE )
            this.ptupuPrimerNombre.enabled = false;
            // pt_p_SegundoApellido.SetActive( FALSE )
            this.ptupuSegundoApellido.enabled = false;
            // pt_p_SegundoNombre.SetActive( FALSE )
            this.ptupuSegundoNombre.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_CodigoCORE argument
     */
    private executeDependecyRules2ptupuCodigoCORE(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuCodigoCOREActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_CodigoCORE argument
     */
    private executeDependecyRules2ptupuCodigoCOREActions(): void {
        // v = NULL OR v = 0
        if (this.util.isNull(this.util.getInt(this.ptupuCodigoCORE.value)) ||
            this.util.valueEquals(this.util.getInt(this.ptupuCodigoCORE.value), 0)) {
            // pt_p_evcDepartamentoNac.SetActive( TRUE )
            this.ptupuevcDepartamentoNac.enabled = true;
            // pt_p_evcMunicipioNac.SetActive( TRUE )
            this.ptupuevcMunicipioNac.enabled = true;
            // pt_p_evcEstadoCivil.SetActive( TRUE )
            this.ptupuevcEstadoCivil.enabled = true;
            // pt_p_FechaNacimiento.SetActive( TRUE )
            this.ptupuFechaNacimiento.enabled = true;
            // pt_p_Genero.SetActive( TRUE )
            this.ptupuGenero.enabled = true;
            // pt_p_IndicadorExtranjero.SetActive( TRUE )
            this.ptupuIndicadorExtranjero.enabled = true;
            this.executeDependecyRulesptupuindicadorextranjero('SetActive', true);
            // pt_p_PrimerApellido.SetActive( TRUE )
            this.ptupuPrimerApellido.enabled = true;
            // pt_p_PrimerNombre.SetActive( TRUE )
            this.ptupuPrimerNombre.enabled = true;
            // pt_p_SegundoApellido.SetActive( TRUE )
            this.ptupuSegundoApellido.enabled = true;
            // pt_p_SegundoNombre.SetActive( TRUE )
            this.ptupuSegundoNombre.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_CodigoCORE argument
     */
    public onptupucodigocoreChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupucodigocore('SetValue', false);
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
     * Evaluate dependendy rules for pt_DireccionesXClass argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptudireccionesxclass(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptuDireccionesXClass();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_DireccionesXClass argument
     */
    private executeDependecyRules1ptuDireccionesXClass(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptuDireccionesXClassActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_DireccionesXClass argument
     */
    private executeDependecyRules1ptuDireccionesXClassActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.ptuDireccionesXClass.value)) {
            // pt_p_DireccionCompleta.SetValue( "" )
            this.ptupuDireccionCompleta.setValue('');
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_DireccionesXClass argument
     */
    public onptudireccionesxclassChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptudireccionesxclass('SetValue', false);
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
        // v <> NULL AND v = true
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
     * Manages the change for the p_TitularBeneficios argument
     */
    public onputitularbeneficiosChange(): void {
        this.loadPreloadptupuevcmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_TieneEPSSanitas argument
     */
    public onptutieneepssanitasChange(): void {
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

        switch (groupId) {
            case '5':
                isVisible = this.ptupuPrimerNombre.visible ||
                this.ptupuSegundoNombre.visible ||
                this.ptupuPrimerApellido.visible ||
                this.ptupuSegundoApellido.visible ||
                this.ptupuFechaNacimiento.visible ||
                this.ptupuGenero.visible ||
                this.ptupuIndicadorExtranjero.visible ||
                this.ptupuevcDepartamentoNac.visible ||
                this.ptupuevcMunicipioNac.visible ||
                this.ptupuevcEstadoCivil.visible;
                break;
            case '7':
                isVisible = this.ptupuatrRazonSocial.visible;
                break;
            case '8':
                isVisible = this.ptuDireccionesXClass.visible ||
                this.ptupuDireccionCompleta.visible ||
                this.ptupuevcDepartamento.visible ||
                this.ptupuevcMunicipio.visible ||
                this.ptupuRural.visible ||
                this.ptupuTelefonoFijo.visible ||
                this.ptupuTelefonoCelular.visible ||
                this.ptReplicarDireccion.visible ||
                this.ptupDCDireccionCompleta.visible ||
                this.ptupDCDepartamento.visible ||
                this.ptupDCMunicipio.visible ||
                this.ptupDCRural.visible ||
                this.ptupDCTelefonoFijo.visible ||
                this.ptupDCTelefonoCelular.visible;
                break;
            case '8_0':
                isVisible = this.ptuDireccionesXClass.visible ||
                this.ptupuDireccionCompleta.visible ||
                this.ptupuevcDepartamento.visible ||
                this.ptupuevcMunicipio.visible ||
                this.ptupuRural.visible ||
                this.ptupuTelefonoFijo.visible ||
                this.ptupuTelefonoCelular.visible;
                break;
            case '8_2':
                isVisible = this.ptupDCDireccionCompleta.visible ||
                this.ptupDCDepartamento.visible ||
                this.ptupDCMunicipio.visible ||
                this.ptupDCRural.visible ||
                this.ptupDCTelefonoFijo.visible ||
                this.ptupDCTelefonoCelular.visible;
                break;
            default:
                isVisible = false;
                break;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        switch (groupId) {
            case '5':
                alias = this.langMng.translateText('5',
                    'Persona Natural');
                break;
            case '7':
                alias = this.langMng.translateText('7',
                    'Persona Jurídica');
                break;
            case '8':
                alias = this.langMng.translateText('8',
                    'Direcciones');
                break;
            case '8_0':
                alias = this.langMng.translateText('8_0',
                    'Residencial');
                break;
            case '8_2':
                alias = this.langMng.translateText('8_2',
                    'Correspondencia');
                break;
            default:
                alias = '';
                break;
        }
        return alias;
    }
}
