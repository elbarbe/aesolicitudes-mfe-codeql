import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_InfoContratanteJURCol of Solicitud »
 */
export class SolicitudIIUuInfoContratanteJURColComponent extends AbstractIIU {

    /** Display Set elements */
    public dseContratanteRazonSocial: Field;

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
        this.idXML = 'Clas_1431957012480960UIInst_22';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoContratanteJURCol',
            'Persona jurídica');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseContratanteRazonSocial = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseContratanteRazonSocial.nameInRequest = 'contratante.razonsocial';
        this.dseContratanteRazonSocial.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoContratJUR_item_Clas_1431957012480960CjtoVis_7ICtjoVis_1',
            'Razón Social');
        this.dseContratanteRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_7ICtjoVis_1', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContratanteRazonSocial.enabled = false;
        this.dseContratanteRazonSocial.mandatory = false;
        this.dseContratanteRazonSocial.dataType = Field.dtString;
        this.dseContratanteRazonSocial.maxLength = 254;
        this.dseContratanteRazonSocial.assignCSS();
        this.fields.push(this.dseContratanteRazonSocial);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431957012480960AccOfer_20ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudContratanteJurColec_item_Clas_1431957012480960AccOfer_20ElemAcc_1',
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
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum0(row: any): boolean {
        // tipoContrato = 3
        if (!(this.util.valueEquals(this.util.getInt(this.getRowData(row, 'tipocontrato')), 3))) {
            return false;
        }
        return true;
    }
}
