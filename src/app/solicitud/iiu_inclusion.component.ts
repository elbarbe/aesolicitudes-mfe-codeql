import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldBlob, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_Inclusion of Solicitud »
 */
export class SolicitudIIUuInclusionComponent extends AbstractIIU {

    /** Display Set elements */
    public dseAeusolicitudesNumerousolicitud: Field;
    public dseAeusolicitudesFechauasignacion: Field;
    public dseFInicioContrato: Field;
    public dsetipoContrato: FieldDefinedSelection;
    public dsedrvGrupoAsociado: Field;
    public dseNumContratoInclusion: Field;
    public dseNumFamilia: Field;
    public dseEnvioCarnetFisico: FieldDefinedSelection;
    public dseFirmaImagenFirma: FieldBlob;

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
        this.idXML = 'Clas_1431957012480960UIInst_9';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_Inclusion',
            'Información de Solicitud');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseAeusolicitudesNumerousolicitud = new Field(this.langMng);
        this.dseAeusolicitudesFechauasignacion = new Field(this.langMng);
        this.dseFInicioContrato = new Field(this.langMng);
        this.dsetipoContrato = new FieldDefinedSelection(this.langMng);
        this.dsedrvGrupoAsociado = new Field(this.langMng);
        this.dseNumContratoInclusion = new Field(this.langMng);
        this.dseNumFamilia = new Field(this.langMng);
        this.dseEnvioCarnetFisico = new FieldDefinedSelection(this.langMng);
        this.dseFirmaImagenFirma = new FieldBlob(this.langMng);
        this.cssClasses += 'cssNavPrimero';
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseAeusolicitudesNumerousolicitud.nameInRequest = 'ae_solicitudes.numero_solicitud';
        this.dseAeusolicitudesNumerousolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_11',
            'Nº Solicitud');
        this.dseAeusolicitudesNumerousolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_11', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseAeusolicitudesNumerousolicitud.enabled = false;
        this.dseAeusolicitudesNumerousolicitud.mandatory = false;
        this.dseAeusolicitudesNumerousolicitud.dataType = Field.dtString;
        this.dseAeusolicitudesNumerousolicitud.maxLength = 50;
        this.dseAeusolicitudesNumerousolicitud.assignCSS();
        this.fields.push(this.dseAeusolicitudesNumerousolicitud);

        this.dseAeusolicitudesFechauasignacion.nameInRequest = 'ae_solicitudes.fecha_asignacion';
        this.dseAeusolicitudesFechauasignacion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_12',
            'Fecha asignación');
        this.dseAeusolicitudesFechauasignacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_12', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseAeusolicitudesFechauasignacion.enabled = false;
        this.dseAeusolicitudesFechauasignacion.mandatory = false;
        this.dseAeusolicitudesFechauasignacion.dataType = Field.dtDate;
        this.dseAeusolicitudesFechauasignacion.assignCSS();
        this.fields.push(this.dseAeusolicitudesFechauasignacion);

        this.dseFInicioContrato.nameInRequest = 'finiciocontrato';
        this.dseFInicioContrato.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_3',
            'Fecha inicio contratación');
        this.dseFInicioContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseFInicioContrato.enabled = false;
        this.dseFInicioContrato.mandatory = false;
        this.dseFInicioContrato.dataType = Field.dtDate;
        this.dseFInicioContrato.assignCSS();
        this.fields.push(this.dseFInicioContrato);

        this.dsetipoContrato.nameInRequest = 'tipocontrato';
        this.dsetipoContrato.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_7',
            'Tipo Contrato');
        this.dsetipoContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_7', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dsetipoContrato.enabled = false;
        this.dsetipoContrato.mandatory = false;
        this.dsetipoContrato.dataType = Field.dtNat;
        this.dsetipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.dsetipoContrato.assignCSS();
        this.fields.push(this.dsetipoContrato);

        this.dsedrvGrupoAsociado.nameInRequest = 'drvgrupoasociado';
        this.dsedrvGrupoAsociado.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_10',
            'Grupo asociado');
        this.dsedrvGrupoAsociado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dsedrvGrupoAsociado.enabled = false;
        this.dsedrvGrupoAsociado.mandatory = false;
        this.dsedrvGrupoAsociado.dataType = Field.dtString;
        this.dsedrvGrupoAsociado.maxLength = 150;
        this.dsedrvGrupoAsociado.assignCSS();
        this.fields.push(this.dsedrvGrupoAsociado);

        this.dseNumContratoInclusion.nameInRequest = 'numcontratoinclusion';
        this.dseNumContratoInclusion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_8',
            'Contrato');
        this.dseNumContratoInclusion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_8', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseNumContratoInclusion.enabled = false;
        this.dseNumContratoInclusion.mandatory = false;
        this.dseNumContratoInclusion.dataType = Field.dtString;
        this.dseNumContratoInclusion.maxLength = 50;
        this.dseNumContratoInclusion.assignCSS();
        this.fields.push(this.dseNumContratoInclusion);

        this.dseNumFamilia.nameInRequest = 'numfamilia';
        this.dseNumFamilia.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_9',
            'Nº Familia');
        this.dseNumFamilia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_9', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseNumFamilia.enabled = false;
        this.dseNumFamilia.mandatory = false;
        this.dseNumFamilia.dataType = Field.dtString;
        this.dseNumFamilia.maxLength = 5;
        this.dseNumFamilia.assignCSS();
        this.fields.push(this.dseNumFamilia);

        this.dseEnvioCarnetFisico.nameInRequest = 'enviocarnetfisico';
        this.dseEnvioCarnetFisico.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_13',
            'Envío carnet físico');
        this.dseEnvioCarnetFisico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_13', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseEnvioCarnetFisico.enabled = false;
        this.dseEnvioCarnetFisico.mandatory = false;
        this.dseEnvioCarnetFisico.dataType = Field.dtBool;
        this.dseEnvioCarnetFisico.options = DefinedSelections.DS_SINO;
        this.dseEnvioCarnetFisico.assignCSS();
        this.fields.push(this.dseEnvioCarnetFisico);

        this.dseFirmaImagenFirma.nameInRequest = 'firma.imagenfirma';
        this.dseFirmaImagenFirma.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUInclusion_item_Clas_1431957012480960CjtoVis_12ICtjoVis_14',
            'Firma');
        this.dseFirmaImagenFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_12ICtjoVis_14', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseFirmaImagenFirma.enabled = false;
        this.dseFirmaImagenFirma.mandatory = false;
        this.dseFirmaImagenFirma.dataType = Field.dtBlob;
        this.dseFirmaImagenFirma.assignCSS();
        this.fields.push(this.dseFirmaImagenFirma);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431957012480960AccOfer_18ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroIncl_item_Clas_1431957012480960AccOfer_18ElemAcc_2',
            'Firma solicitud');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutcrearomodfirma;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431957012480960AccOfer_18ElemAcc_8';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroIncl_item_Clas_1431957012480960AccOfer_18ElemAcc_8',
            'Modificar encabezado');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutmodencabezadoincl;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431957012480960AccOfer_18ElemAcc_10';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroIncl_item_Clas_1431957012480960AccOfer_18ElemAcc_10',
            'Modificar marca carnet');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuumodmarcacarnet;
        accItem.setShowInModalProperties('imes-solicitud-siu-modmarcacarnet',
            this.langMng.translateText(
            'cls_Solicitud_svc_modMarcaCarnet',
            'Modificar marca carnet'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['completada'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431957012480960AccOfer_18ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroIncl_item_Clas_1431957012480960AccOfer_18ElemAcc_6',
            'Marcar completada');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name,
            ModelConstants.Asesor.name, ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutmarcarcompletada;
        accItem.setNoShowProperties('TMARCARCOMPLETADA', 'p_thissolicitud_oid', '', false);
        accItem.preconditionAttributes.push(
            { agents: ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo'],
              attributes: ['numcontrato'] });
        accItem.preconditionAttributes.push(
            { agents: ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo'],
              attributes: ['datospagook'] });
        accItem.preconditionAttributes.push(
            { agents: ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo'],
              attributes: ['drvyatienecontratante'] });
        accItem.preconditionAttributes.push(
            { agents: ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo'],
              attributes: ['tipocontrato', 'contratantepersona.tipopersona', 'drvcontratanteestitular', 'tramite'] });
        accItem.closeOrigin = true;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1431957012480960AccOfer_18ElemAcc_9';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroIncl_item_Clas_1431957012480960AccOfer_18ElemAcc_9',
            'Ver PDF');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuuenviarsmsinfopago;
        accItem.setNoShowProperties('enviarSMSInfoPago', 'p_thissolicitud_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1431957012480960NavOfer_8ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Solicitud_nav_N_Solicitud_Maestro_item_Clas_1431957012480960NavOfer_8ElemNav_1',
            'Subir documentos');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        navItem.targetClass = ModelConstants.Documentog.name;
        navItem.targetUI = ModelConstants.Documentog.piuudocumentog;
        navItem.rolePath = 'Solicitud';
        navItem.targetType  = ScenarioType.Population;
        this.navigations.push(navItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 2) {
                isEnabled = this.checkPrecondicionInAdvanceNum2(row);
            }
            if (actionId === 3) {
                isEnabled = this.checkPrecondicionInAdvanceNum3(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 2
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum2(row: any): boolean {
        // Completada = false
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'completada')), false))) {
            return false;
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 3
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum3(row: any): boolean {
        // NumContrato = NULL
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
            'Gestor', 'MesaDeApoyo']) && !(this.util.isNull(this.getRowData(row, 'numcontrato')))) {
            return false;
        }
        // datosPagoOK = true
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
            'Gestor', 'MesaDeApoyo']) && !(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'datospagook')), true))) {
            return false;
        }
        // drvYaTieneContratante = true
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
            'Gestor', 'MesaDeApoyo']) && !(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvyatienecontratante')),
            true))) {
            return false;
        }
        // (tipoContrato = 1 AND ContratantePersona.TipoPersona = "N" AND drvContratanteEsTitular = true) OR (tipoContrato <> 1 OR ContratantePersona.TipoPersona <> "N" OR Tramite = 2)
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
            'Gestor', 'MesaDeApoyo']) && !((this.util.valueEquals(this.util.getInt(this.getRowData(row, 'tipocontrato')), 1) &&
            this.util.valueEquals(this.getRowData(row, 'contratantepersona-tipopersona'), 'N') &&
            this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvcontratanteestitular')), true)) ||
            (!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'tipocontrato')), 1) ||
            !this.util.valueEquals(this.getRowData(row, 'contratantepersona-tipopersona'), 'N') ||
            this.util.valueEquals(this.util.getInt(this.getRowData(row, 'tramite')), 2)))) {
            return false;
        }
        return true;
    }
}
