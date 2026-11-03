import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { GrupoAsociadoFilterFuGrupoAsociadoVarios} from './filters/grupoasociadofilterfugrupoasociadovarios';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_GrupoAsociado of GrupoAsociado »
 */
@Component({
    selector: 'imes-grupoasociado-piu-grupoasociado',
    templateUrl: './piu_grupoasociado.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsociadoPIUuGrupoAsociadoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplantdnombre = 'Plan';
    private readonly dscodigolegal = 'Código legal';
    private readonly dsdescripcion = 'Descripción';
    private readonly dscodtarifacore = 'Cod. Tarifa CORE';
    private readonly dsfinivigencia = 'F. Inicio Vigencia';
    private readonly dsffinvigencia = 'F. Fin Vigencia';
    private readonly dsestado = 'Estado';
    private readonly dsdisminucioncarencia = 'Disminución carencia';

    /** Filters */
    public f0: GrupoAsociadoFilterFuGrupoAsociadoVarios;

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
        this.idXML = 'Clas_1431875354624341UIPobCl_1';
        this.className = ModelConstants.Grupoasociado.name;
        this.classAlias = this.langMng.translateText('cls_GrupoAsociado',
            'Grupo Asociado');
        this.supplementaryInfoAtt.push('codigolegal');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Grupoasociado.piuugrupoasociado;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_GrupoAsociado_piu_PIU_GrupoAsociado',
            'Grupos Asociados');
        this.f0 = new GrupoAsociadoFilterFuGrupoAsociadoVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/GrupoAsociadoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_2';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_2',
            this.dsplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_4';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_4',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_5';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_5',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_10';
        dsItem.name = 'codtarifacore';
        dsItem.field = 'codtarifacore';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_10',
            this.dscodtarifacore);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_6';
        dsItem.name = 'finivigencia';
        dsItem.field = 'finivigencia';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_6',
            this.dsfinivigencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_7';
        dsItem.name = 'ffinvigencia';
        dsItem.field = 'ffinvigencia';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_7',
            this.dsffinvigencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_8';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_8',
            this.dsestado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431875354624341CjtoVis_2ICtjoVis_9';
        dsItem.name = 'disminucioncarencia';
        dsItem.field = 'disminucioncarencia';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_ds_DS_GrupoAsociado_PIU_item_Clas_1431875354624341CjtoVis_2ICtjoVis_9',
            this.dsdisminucioncarencia);
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
        accItem.idXML = 'Clas_1431875354624341AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_act_A_GrupoAsociado_PIU_item_Clas_1431875354624341AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Grupoasociado.name;
        accItem.targetUI = ModelConstants.Grupoasociado.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431875354624341AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_act_A_GrupoAsociado_PIU_item_Clas_1431875354624341AccOfer_1ElemAcc_4',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Grupoasociado.name;
        accItem.targetUI = ModelConstants.Grupoasociado.siuumodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431875354624341AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_act_A_GrupoAsociado_PIU_item_Clas_1431875354624341AccOfer_1ElemAcc_2',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuuogsincgruposasociados;
        accItem.setNoShowProperties('OGSINCGRUPOSASOCIADOS', '', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431875354624341AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsociado_act_A_GrupoAsociado_PIU_item_Clas_1431875354624341AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Grupoasociado.name;
        accItem.targetUI = ModelConstants.Grupoasociado.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisgrupoasociado_oid', '', false);
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
