import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_InfoContratanteNATCol of Solicitud »
 */
export class SolicitudIIUuInfoContratanteNATColComponent extends AbstractIIU {

    /** Display Set elements */
    public dseContratanteDiplomatico: FieldDefinedSelection;
    public dseContratantePrimerNombre: Field;
    public dseContratanteSegundoNombre: Field;
    public dseContratantePrimerApellido: Field;
    public dseContratanteSegundoApellido: Field;
    public dseContratanteFechaNacimiento: Field;
    public dseContratanteGenero: FieldDefinedSelection;
    public dseContratanteIndicadorExtranjero: FieldDefinedSelection;
    public dseContratanteDepartamentoNacDescripcion: Field;
    public dseContratanteMunicipioNacDescripcion: Field;
    public dsedrvCambiarBenefCont: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431957012480960UIInst_23';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo', 'AreaMedica']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoContratanteNATCol',
            'Persona natural');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseContratanteDiplomatico = new FieldDefinedSelection(this.langMng);
        this.dseContratantePrimerNombre = new Field(this.langMng);
        this.dseContratanteSegundoNombre = new Field(this.langMng);
        this.dseContratantePrimerApellido = new Field(this.langMng);
        this.dseContratanteSegundoApellido = new Field(this.langMng);
        this.dseContratanteFechaNacimiento = new Field(this.langMng);
        this.dseContratanteGenero = new FieldDefinedSelection(this.langMng);
        this.dseContratanteIndicadorExtranjero = new FieldDefinedSelection(this.langMng);
        this.dseContratanteDepartamentoNacDescripcion = new Field(this.langMng);
        this.dseContratanteMunicipioNacDescripcion = new Field(this.langMng);
        this.dsedrvCambiarBenefCont = new FieldDefinedSelection(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseContratanteDiplomatico.nameInRequest = 'contratante.diplomatico';
        this.dseContratanteDiplomatico.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_20',
            'Diplomático');
        this.dseContratanteDiplomatico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_20', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteDiplomatico.enabled = false;
        this.dseContratanteDiplomatico.mandatory = false;
        this.dseContratanteDiplomatico.dataType = Field.dtBool;
        this.dseContratanteDiplomatico.options = DefinedSelections.DS_SINO;
        this.dseContratanteDiplomatico.assignCSS();
        this.fields.push(this.dseContratanteDiplomatico);

        this.dseContratantePrimerNombre.nameInRequest = 'contratante.primernombre';
        this.dseContratantePrimerNombre.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_6',
            'Primer nombre');
        this.dseContratantePrimerNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_6', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratantePrimerNombre.enabled = false;
        this.dseContratantePrimerNombre.mandatory = false;
        this.dseContratantePrimerNombre.dataType = Field.dtString;
        this.dseContratantePrimerNombre.maxLength = 50;
        this.dseContratantePrimerNombre.assignCSS();
        this.fields.push(this.dseContratantePrimerNombre);

        this.dseContratanteSegundoNombre.nameInRequest = 'contratante.segundonombre';
        this.dseContratanteSegundoNombre.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_7',
            'Segundo nombre');
        this.dseContratanteSegundoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_7', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteSegundoNombre.enabled = false;
        this.dseContratanteSegundoNombre.mandatory = false;
        this.dseContratanteSegundoNombre.dataType = Field.dtString;
        this.dseContratanteSegundoNombre.maxLength = 50;
        this.dseContratanteSegundoNombre.assignCSS();
        this.fields.push(this.dseContratanteSegundoNombre);

        this.dseContratantePrimerApellido.nameInRequest = 'contratante.primerapellido';
        this.dseContratantePrimerApellido.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_8',
            'Primer apellido');
        this.dseContratantePrimerApellido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_8', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratantePrimerApellido.enabled = false;
        this.dseContratantePrimerApellido.mandatory = false;
        this.dseContratantePrimerApellido.dataType = Field.dtString;
        this.dseContratantePrimerApellido.maxLength = 50;
        this.dseContratantePrimerApellido.assignCSS();
        this.fields.push(this.dseContratantePrimerApellido);

        this.dseContratanteSegundoApellido.nameInRequest = 'contratante.segundoapellido';
        this.dseContratanteSegundoApellido.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_9',
            'Segundo apellido');
        this.dseContratanteSegundoApellido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_9', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteSegundoApellido.enabled = false;
        this.dseContratanteSegundoApellido.mandatory = false;
        this.dseContratanteSegundoApellido.dataType = Field.dtString;
        this.dseContratanteSegundoApellido.maxLength = 50;
        this.dseContratanteSegundoApellido.assignCSS();
        this.fields.push(this.dseContratanteSegundoApellido);

        this.dseContratanteFechaNacimiento.nameInRequest = 'contratante.fechanacimiento';
        this.dseContratanteFechaNacimiento.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_10',
            'Fecha nacimiento');
        this.dseContratanteFechaNacimiento.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteFechaNacimiento.enabled = false;
        this.dseContratanteFechaNacimiento.mandatory = false;
        this.dseContratanteFechaNacimiento.dataType = Field.dtDate;
        this.dseContratanteFechaNacimiento.assignCSS();
        this.fields.push(this.dseContratanteFechaNacimiento);

        this.dseContratanteGenero.nameInRequest = 'contratante.genero';
        this.dseContratanteGenero.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_11',
            'Género');
        this.dseContratanteGenero.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_11', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteGenero.enabled = false;
        this.dseContratanteGenero.mandatory = false;
        this.dseContratanteGenero.dataType = Field.dtString;
        this.dseContratanteGenero.maxLength = 1;
        this.dseContratanteGenero.options = DefinedSelections.DS_GENERO;
        this.dseContratanteGenero.assignCSS();
        this.fields.push(this.dseContratanteGenero);

        this.dseContratanteIndicadorExtranjero.nameInRequest = 'contratante.indicadorextranjero';
        this.dseContratanteIndicadorExtranjero.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_21',
            'Indicador extranjero');
        this.dseContratanteIndicadorExtranjero.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_21', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteIndicadorExtranjero.enabled = false;
        this.dseContratanteIndicadorExtranjero.mandatory = false;
        this.dseContratanteIndicadorExtranjero.dataType = Field.dtBool;
        this.dseContratanteIndicadorExtranjero.options = DefinedSelections.DS_SINO;
        this.dseContratanteIndicadorExtranjero.assignCSS();
        this.fields.push(this.dseContratanteIndicadorExtranjero);

        this.dseContratanteDepartamentoNacDescripcion.nameInRequest = 'contratante.departamentonac.descripcion';
        this.dseContratanteDepartamentoNacDescripcion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_13',
            'Departamento nacimiento');
        this.dseContratanteDepartamentoNacDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_13', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteDepartamentoNacDescripcion.enabled = false;
        this.dseContratanteDepartamentoNacDescripcion.mandatory = false;
        this.dseContratanteDepartamentoNacDescripcion.dataType = Field.dtString;
        this.dseContratanteDepartamentoNacDescripcion.maxLength = 150;
        this.dseContratanteDepartamentoNacDescripcion.assignCSS();
        this.fields.push(this.dseContratanteDepartamentoNacDescripcion);

        this.dseContratanteMunicipioNacDescripcion.nameInRequest = 'contratante.municipionac.descripcion';
        this.dseContratanteMunicipioNacDescripcion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_14',
            'Municipio nacimiento');
        this.dseContratanteMunicipioNacDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_14', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteMunicipioNacDescripcion.enabled = false;
        this.dseContratanteMunicipioNacDescripcion.mandatory = false;
        this.dseContratanteMunicipioNacDescripcion.dataType = Field.dtString;
        this.dseContratanteMunicipioNacDescripcion.maxLength = 150;
        this.dseContratanteMunicipioNacDescripcion.assignCSS();
        this.fields.push(this.dseContratanteMunicipioNacDescripcion);

        this.dsedrvCambiarBenefCont.nameInRequest = 'drvcambiarbenefcont';
        this.dsedrvCambiarBenefCont.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratNAT_item_Clas_1431957012480960CjtoVis_5ICtjoVis_23',
            'Puede cambiar beneficios del contratante');
        this.dsedrvCambiarBenefCont.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_5ICtjoVis_23', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dsedrvCambiarBenefCont.enabled = false;
        this.dsedrvCambiarBenefCont.mandatory = false;
        this.dsedrvCambiarBenefCont.dataType = Field.dtBool;
        this.dsedrvCambiarBenefCont.options = DefinedSelections.DS_SINO;
        this.dsedrvCambiarBenefCont.assignCSS();
        this.fields.push(this.dsedrvCambiarBenefCont);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431957012480960AccOfer_21ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudContraPerNatCOL_item_Clas_1431957012480960AccOfer_21ElemAcc_1',
            'Modificar direcciones');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutmoddirscontratante;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvyatienecontratante'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431957012480960AccOfer_21ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudContraPerNatCOL_item_Clas_1431957012480960AccOfer_21ElemAcc_2',
            'Firma Contratante');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutcrearomodfirmacontinc;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['tipocontrato'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 0) {
                isEnabled = this.checkPrecondicionInAdvanceNum0(row);
            }
            if (actionId === 1) {
                isEnabled = this.checkPrecondicionInAdvanceNum1(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum0(row: any): boolean {
        // drvYaTieneContratante = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvyatienecontratante')), true))) {
            return false;
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 1
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum1(row: any): boolean {
        // tipoContrato = 3
        if (!(this.util.valueEquals(this.util.getInt(this.getRowData(row, 'tipocontrato')), 3))) {
            return false;
        }
        return true;
    }
}
