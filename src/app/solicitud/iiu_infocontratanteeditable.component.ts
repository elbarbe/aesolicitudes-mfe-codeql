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
import { SolicitudSIUuTINDICARCONTRATANTE2Component } from './siu_tindicarcontratante2.component';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_InfoContratanteEditable of Solicitud »
 */
export class SolicitudIIUuInfoContratanteEditableComponent extends AbstractIIU {

    /** Display Set elements */
    public dseAeusolicitudesNumerousolicitud: Field;

    /** Associated service */
    public asrv: SolicitudSIUuTINDICARCONTRATANTE2Component;

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
        this.idXML = 'Clas_1431957012480960UIInst_18';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoContratanteEditable',
            'Información del contratante');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        // Associated service
        this.asrv = new SolicitudSIUuTINDICARCONTRATANTE2Component(appGlobalInfo,
            util, changeDetectorRef, langMng, stdFun, condNavMng, usrFunc);
        this.asrv.queryContainer = this;
        this.associatedService = this.asrv;

        this.dseAeusolicitudesNumerousolicitud = new Field(this.langMng);
        this.cssClasses += 'cssDSNoShow';
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
        accItem.idXML = 'Clas_1431957012480960AccOfer_16ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_IIUInfoContratanteEditable_item_Clas_1431957012480960AccOfer_16ElemAcc_1',
            'Contratos asociados');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgseleccontratoasoc;
        accItem.setShowInModalProperties('imes-gs-siu-tgseleccontratoasoc',
            this.langMng.translateText(
            'gs_TGSELECCONTRATOASOC',
            'Contratos asociados'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }
}
