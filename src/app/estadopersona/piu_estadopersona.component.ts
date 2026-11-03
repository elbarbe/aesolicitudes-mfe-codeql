import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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
 * « Implements PIU PIU_EstadoPersona of EstadoPersona »
 */
@Component({
    selector: 'imes-estadopersona-piu-estadopersona',
    templateUrl: './piu_estadopersona.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoPersonaPIUuEstadoPersonaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsunbeneficiariodistino = 'Un beneficiario distinto';
    private readonly dsprohibidobeneficiarios = 'Prohibido beneficiarios';
    private readonly dsprohibidocontratante = 'Prohibido contratante';
    private readonly dsprohibidotitular = 'Prohibido titular';

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
        this.idXML = 'Clas_1431941021696517UIPobCl_1';
        this.className = ModelConstants.Estadopersona.name;
        this.classAlias = this.langMng.translateText('cls_EstadoPersona',
            'Estado persona');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Estadopersona.piuuestadopersona;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_EstadoPersona_piu_PIU_EstadoPersona',
            'Estados de persona');
        this.queryURL = '/api/EstadoPersonaApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941021696517CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_ds__Auto__item_Clas_1431941021696517CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941021696517CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_ds__Auto__item_Clas_1431941021696517CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941021696517CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'unbeneficiariodistino';
        dsItem.field = 'unbeneficiariodistino';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_ds__Auto__item_Clas_1431941021696517CjtoVis_AutoICtjoVis_3',
            this.dsunbeneficiariodistino);
        dsItem.agents = [ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941021696517CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'prohibidobeneficiarios';
        dsItem.field = 'prohibidobeneficiarios';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_ds__Auto__item_Clas_1431941021696517CjtoVis_AutoICtjoVis_4',
            this.dsprohibidobeneficiarios);
        dsItem.agents = [ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941021696517CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'prohibidocontratante';
        dsItem.field = 'prohibidocontratante';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_ds__Auto__item_Clas_1431941021696517CjtoVis_AutoICtjoVis_5',
            this.dsprohibidocontratante);
        dsItem.agents = [ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941021696517CjtoVis_AutoICtjoVis_6';
        dsItem.name = 'prohibidotitular';
        dsItem.field = 'prohibidotitular';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_ds__Auto__item_Clas_1431941021696517CjtoVis_AutoICtjoVis_6',
            this.dsprohibidotitular);
        dsItem.agents = [ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431941021696517AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoPersona_act_A_EstadoPersona_PIU_item_Clas_1431941021696517AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincestadospersona;
        accItem.setNoShowProperties('TGSINCESTADOSPERSONA', '', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
