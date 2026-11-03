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
import { SolicitudSIUuTINDICARTITULAR2Component } from './siu_tindicartitular2.component';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_InfoTitularEditable of Solicitud »
 */
export class SolicitudIIUuInfoTitularEditableComponent extends AbstractIIU {

    /** Display Set elements */
    public dseAeusolicitudesNumerousolicitud: Field;

    /** Associated service */
    public asrv: SolicitudSIUuTINDICARTITULAR2Component;

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
        this.idXML = 'Clas_1431957012480960UIInst_20';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoTitularEditable',
            'Información del titular');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        // Associated service
        this.asrv = new SolicitudSIUuTINDICARTITULAR2Component(appGlobalInfo,
            util, changeDetectorRef, langMng, stdFun, condNavMng, usrFunc);
        this.asrv.queryContainer = this;
        this.associatedService = this.asrv;

        this.dseAeusolicitudesNumerousolicitud = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseAeusolicitudesNumerousolicitud.nameInRequest = 'ae_solicitudes.numero_solicitud';
        this.dseAeusolicitudesNumerousolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_ds_IC_Solicitud_item_Clas_1431957012480960CjtoVis_11ICtjoVis_3',
            'Nº Solicitud');
        this.dseAeusolicitudesNumerousolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_11ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseAeusolicitudesNumerousolicitud.enabled = false;
        this.dseAeusolicitudesNumerousolicitud.mandatory = false;
        this.dseAeusolicitudesNumerousolicitud.dataType = Field.dtString;
        this.dseAeusolicitudesNumerousolicitud.maxLength = 50;
        this.dseAeusolicitudesNumerousolicitud.assignCSS();
        this.fields.push(this.dseAeusolicitudesNumerousolicitud);


        // Associated service
        this.asrv.initializeComponents();
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431957012480960AccOfer_17ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_IIUInfoTitularEditable_item_Clas_1431957012480960AccOfer_17ElemAcc_1',
            'Contratos asociados');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgseleccontratoasoctit;
        accItem.setShowInModalProperties('imes-gs-siu-tgseleccontratoasoctit',
            this.langMng.translateText(
            'gs_TGSELECCONTRATOASOCTIT',
            'Contratos asociados'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431957012480960AccOfer_17ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_IIUInfoTitularEditable_item_Clas_1431957012480960AccOfer_17ElemAcc_2',
            'Modificar direcciones');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutmoddirstitular;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvyatienetitular'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['numfamilia'] });
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
            if (actionId === 1) {
                isEnabled = this.checkPrecondicionInAdvanceNum1(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 1
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum1(row: any): boolean {
        // drvYaTieneTitular = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvyatienetitular')), true))) {
            return false;
        }
        // NumFamilia <> NULL
        if (!(!this.util.isNull(this.getRowData(row, 'numfamilia')))) {
            return false;
        }
        return true;
    }
}
