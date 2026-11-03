import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_UsuariosDeContrato of Usuario »
 */
export class UsuarioPIUuUsuariosDeContratoComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsidentificador = 'Nº';
    private readonly dsdrvidentificacion = 'Tipo y Nº Doc';
    private readonly dsprimernombre = 'Primer Nombre';
    private readonly dssegundonombre = 'Segundo Nombre';
    private readonly dsprimerapellido = 'Primer Apellido';
    private readonly dssegundoapellido = 'Segundo Apellido';
    private readonly dsparentescoddescripcion = 'Parentesco con el titular';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1432633737216826UIPobCl_1';
        this.className = ModelConstants.Usuario.name;
        this.classAlias = this.langMng.translateText('cls_Usuario',
            'Usuario');
        this.supplementaryInfoAtt.push('tipoidentificacion.nombrecorto');
        this.supplementaryInfoAtt.push('numidentificacion');
        this.iuName = 'PIU_UsuariosDeContrato';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin',
            'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Usuario_piu_PIU_UsuariosDeContrato',
            'Información Personas a Afiliar');
        this.queryURL = '/api/UsuarioApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_1';
        dsItem.name = 'identificador';
        dsItem.field = 'identificador';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_1',
            this.dsidentificador);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name,
            ModelConstants.Asesor.name, ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_2';
        dsItem.name = 'drvidentificacion';
        dsItem.field = 'drvidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_2',
            this.dsdrvidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_3';
        dsItem.name = 'primernombre';
        dsItem.field = 'primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_3',
            this.dsprimernombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_4';
        dsItem.name = 'segundonombre';
        dsItem.field = 'segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_4',
            this.dssegundonombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_5';
        dsItem.name = 'primerapellido';
        dsItem.field = 'primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_5',
            this.dsprimerapellido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_6';
        dsItem.name = 'segundoapellido';
        dsItem.field = 'segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_6',
            this.dssegundoapellido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432633737216826CjtoVis_2ICtjoVis_7';
        dsItem.name = 'parentesco.descripcion';
        dsItem.field = 'parentesco-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Usuario_ds_DS_UsuarioPIUUsuariosCont_item_Clas_1432633737216826CjtoVis_2ICtjoVis_7',
            this.dsparentescoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_9';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_9',
            'Añadir usuario');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Persona.name;
        accItem.targetUI = ModelConstants.Persona.siuutaddusuarioasol;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_1',
            'Modificar Usuario');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuario.name;
        accItem.targetUI = ModelConstants.Usuario.siuutmodusuario;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_2',
            'Atributos Usuario');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuario.name;
        accItem.targetUI = ModelConstants.Usuario.siuutmodificarattr;
        accItem.setShowInModalProperties('imes-usuario-siu-tmodificarattr',
            this.langMng.translateText(
            'cls_Usuario_svc_TMODIFICARATTR',
            'Modificar atributos de usuario'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_10';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_10',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Persona.name;
        accItem.targetUI = ModelConstants.Persona.siuuteliminar;
        accItem.setShowInModalProperties('imes-persona-siu-teliminar',
            this.langMng.translateText(
            'cls_Persona_svc_TELIMINAR',
            '¿Está seguro de que desea eliminar al usuario?'));
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_12';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_12',
            'Cuestionario médico');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuario.name;
        accItem.targetUI = ModelConstants.Usuario.siuushowcuesmedico;
        accItem.setNoShowProperties('showCuesMedico', 'p_thisusuario_oid', '', false);
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvaccesocuesmed'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 5;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_5',
            'Anexo de maternidad');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuario.name;
        accItem.targetUI = ModelConstants.Usuario.siuutcrearomodanexomat;
        accItem.setShowInModalProperties('imes-usuario-siu-tcrearomodanexomat',
            this.langMng.translateText(
            'cls_Usuario_svc_TCREAROMODANEXOMAT',
            'Anexo de maternidad'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvaceptaanexomat'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['usuariopersona.genero'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvtiempoembarazo'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 6;
        accItem.idXML = 'Clas_1432633737216826AccOfer_1ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Usuario_act_A_UsuarioPIUContrato_item_Clas_1432633737216826AccOfer_1ElemAcc_6',
            'Anexo neonatal');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuario.name;
        accItem.targetUI = ModelConstants.Usuario.siuutcrearomodanexoneo;
        accItem.setShowInModalProperties('imes-usuario-siu-tcrearomodanexoneo',
            this.langMng.translateText(
            'cls_Usuario_svc_TCREAROMODANEXONEO',
            'Anexo neonatal'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvaceptaanexoneo'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['usuariopersona.genero'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvtieneanexomat'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvtiempoembarazo'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_PorId', value: 'Identificador'});
        this.orderCriteria = 'OC_PorId';
    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;

        if (actionId === 4) {
            isEnabled = this.checkPrecondicionInAdvanceNum4(rows);
        }

        if (actionId === 5) {
            isEnabled = this.checkPrecondicionInAdvanceNum5(rows);
        }

        if (actionId === 6) {
            isEnabled = this.checkPrecondicionInAdvanceNum6(rows);
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 4
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum4(rows: any[]): boolean {
        for (const row of rows) {
            // drvAccesoCuesMed = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvaccesocuesmed')), true))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 5
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum5(rows: any[]): boolean {
        for (const row of rows) {
            // drvAceptaAnexoMat = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvaceptaanexomat')), true))) {
                return false;
            }
            // UsuarioPersona.Genero = "F"
            if (!(this.util.valueEquals(this.getRowData(row, 'usuariopersona-genero'), 'F'))) {
                return false;
            }
            // drvTiempoEmbarazo > 0
            if (!(this.util.getInt(this.getRowData(row, 'drvtiempoembarazo')) > this.util.getInt('0'))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 6
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum6(rows: any[]): boolean {
        for (const row of rows) {
            // drvAceptaAnexoNeo = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvaceptaanexoneo')), true))) {
                return false;
            }
            // UsuarioPersona.Genero = "F"
            if (!(this.util.valueEquals(this.getRowData(row, 'usuariopersona-genero'), 'F'))) {
                return false;
            }
            // drvTieneAnexoMat = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvtieneanexomat')), true))) {
                return false;
            }
            // drvTiempoEmbarazo > 0
            if (!(this.util.getInt(this.getRowData(row, 'drvtiempoembarazo')) > this.util.getInt('0'))) {
                return false;
            }
        }
        return true;
    }
}
