import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { SolicitudFilterFuSolicitudConsultaRadicado} from './filters/solicitudfilterfusolicitudconsultaradicado';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_ConsultarRadicado of Solicitud »
 */
@Component({
    selector: 'imes-solicitud-piu-consultarradicado',
    templateUrl: './piu_consultarradicado.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudPIUuConsultarRadicadoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsaeusolicitudesdnumerousolicitud = 'Nº Solicitud';
    private readonly dsaeusolicitudesdproductotddescripcion = 'Producto';
    private readonly dsaeusolicitudesdplantdnombre = 'Plan';
    private readonly dstramite = 'Trámite';

    /** Filters */
    public f0: SolicitudFilterFuSolicitudConsultaRadicado;

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
        this.idXML = 'Clas_1431957012480960UIPobCl_2';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.iuName = ModelConstants.Solicitud.piuuconsultarradicado;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_piu_PIU_ConsultarRadicado',
            'Consultar radicado');
        this.f0 = new SolicitudFilterFuSolicitudConsultaRadicado(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431957012480960CjtoVis_2ICtjoVis_5';
        dsItem.name = 'ae_solicitudes.numero_solicitud';
        dsItem.field = 'ae_solicitudes-numero_solicitud';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_PIUConsultaRad_item_Clas_1431957012480960CjtoVis_2ICtjoVis_5',
            this.dsaeusolicitudesdnumerousolicitud);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431957012480960CjtoVis_2ICtjoVis_2';
        dsItem.name = 'ae_solicitudes.productot.descripcion';
        dsItem.field = 'ae_solicitudes-productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_PIUConsultaRad_item_Clas_1431957012480960CjtoVis_2ICtjoVis_2',
            this.dsaeusolicitudesdproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431957012480960CjtoVis_2ICtjoVis_3';
        dsItem.name = 'ae_solicitudes.plant.nombre';
        dsItem.field = 'ae_solicitudes-plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_PIUConsultaRad_item_Clas_1431957012480960CjtoVis_2ICtjoVis_3',
            this.dsaeusolicitudesdplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431957012480960CjtoVis_2ICtjoVis_4';
        dsItem.name = 'tramite';
        dsItem.field = 'tramite';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_PIUConsultaRad_item_Clas_1431957012480960CjtoVis_2ICtjoVis_4',
            this.dstramite);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_TRAMITE;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431957012480960AccOfer_11ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_Solicitud_PIUConsultaRad_item_Clas_1431957012480960AccOfer_11ElemAcc_3',
            'Modificar trámite');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuudummyuredirigir;
        accItem.setNoShowProperties('dummy_Redirigir', 'p_thissolicitud_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_SolicitudFechaCreacion', value: 'Por fecha elaboración'});
        this.orderCriteria = 'OC_SolicitudFechaCreacion';
    }
}
