import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_ObsEstado of ObsEstado »
 */
export class ObsEstadoPIUuObsEstadoComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsestadoanterior = 'Estado anterior';
    private readonly dsestadonuevo = 'Estado nuevo';
    private readonly dsagenteddrvnombrecompleto = 'Agente';
    private readonly dsobservacions = 'Observaciones';

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
        this.idXML = 'Clas_1434446856192292UIPobCl_1';
        this.className = ModelConstants.Obsestado.name;
        this.classAlias = this.langMng.translateText('cls_ObsEstado',
            'Observaciones');
        this.iuName = 'PIU_ObsEstado';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_ObsEstado_piu_PIU_ObsEstado',
            'Observaciones');
        this.queryURL = '/api/ObsEstadoApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446856192292CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_ObsEstado_ds_DS_ObsEstado_PIU_item_Clas_1434446856192292CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446856192292CjtoVis_1ICtjoVis_2';
        dsItem.name = 'estadoanterior';
        dsItem.field = 'estadoanterior';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_ObsEstado_ds_DS_ObsEstado_PIU_item_Clas_1434446856192292CjtoVis_1ICtjoVis_2',
            this.dsestadoanterior);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCUMENTOG;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446856192292CjtoVis_1ICtjoVis_3';
        dsItem.name = 'estadonuevo';
        dsItem.field = 'estadonuevo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_ObsEstado_ds_DS_ObsEstado_PIU_item_Clas_1434446856192292CjtoVis_1ICtjoVis_3',
            this.dsestadonuevo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCUMENTOG;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446856192292CjtoVis_1ICtjoVis_4';
        dsItem.name = 'agente.drvnombrecompleto';
        dsItem.field = 'agente-drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_ObsEstado_ds_DS_ObsEstado_PIU_item_Clas_1434446856192292CjtoVis_1ICtjoVis_4',
            this.dsagenteddrvnombrecompleto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446856192292CjtoVis_1ICtjoVis_5';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_ObsEstado_ds_DS_ObsEstado_PIU_item_Clas_1434446856192292CjtoVis_1ICtjoVis_5',
            this.dsobservacions);
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
        accItem.idXML = 'Clas_1434446856192292AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ObsEstado_act_A_ObsEstado_PIU_item_Clas_1434446856192292AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Obsestado.name;
        accItem.targetUI = ModelConstants.Obsestado.siuumodificar;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['documentog.estado'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;

        if (actionId === 0) {
            isEnabled = this.checkPrecondicionInAdvanceNum0(rows);
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum0(rows: any[]): boolean {
        for (const row of rows) {
            // DocumentoG.Estado <> 2
            if (!(!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'documentog-estado')), 2))) {
                return false;
            }
        }
        return true;
    }
}
