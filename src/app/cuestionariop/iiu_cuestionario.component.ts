import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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
 * « Implements IIU IIU_Cuestionario of CuestionarioP »
 */
@Component({
    selector: 'imes-cuestionariop-iiu-cuestionario',
    templateUrl: './iiu_cuestionario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuestionarioPIIUuCuestionarioComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseUsuariodrvNombreCompleto: Field;
    public dseYaDiligenciado: Field;

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
        this.idXML = 'Clas_1432647237632788UIInst_1';
        this.className = ModelConstants.Cuestionariop.name;
        this.classAlias = this.langMng.translateText('cls_CuestionarioP',
            'Cuestionario');
        this.iuName = ModelConstants.Cuestionariop.iiuucuestionario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_CuestionarioP_iiu_IIU_Cuestionario',
            'Cuestionario médico');
        this.queryURL = '/api/CuestionarioPApi/GetPopulationDynamic';

        this.dseUsuariodrvNombreCompleto = new Field(this.langMng);
        this.dseYaDiligenciado = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseUsuariodrvNombreCompleto.nameInRequest = 'usuario.drvnombrecompleto';
        this.dseUsuariodrvNombreCompleto.alias = this.langMng.translateText(
            'cls_CuestionarioP_ds_DS_CuestionarioP_IIU_item_Clas_1432647237632788CjtoVis_1ICtjoVis_5',
            'Usuario');
        this.dseUsuariodrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1432647237632788CjtoVis_1ICtjoVis_5', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseUsuariodrvNombreCompleto.enabled = false;
        this.dseUsuariodrvNombreCompleto.mandatory = false;
        this.dseUsuariodrvNombreCompleto.dataType = Field.dtString;
        this.dseUsuariodrvNombreCompleto.maxLength = 200;
        this.dseUsuariodrvNombreCompleto.assignCSS();
        this.fields.push(this.dseUsuariodrvNombreCompleto);

        this.dseYaDiligenciado.nameInRequest = 'yadiligenciado';
        this.dseYaDiligenciado.alias = this.langMng.translateText(
            'cls_CuestionarioP_ds_DS_CuestionarioP_IIU_item_Clas_1432647237632788CjtoVis_1ICtjoVis_6',
            'Ya diligenciado');
        this.dseYaDiligenciado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1432647237632788CjtoVis_1ICtjoVis_6', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseYaDiligenciado.enabled = false;
        this.dseYaDiligenciado.mandatory = false;
        this.dseYaDiligenciado.dataType = Field.dtBool;
        this.dseYaDiligenciado.assignCSS();
        this.fields.push(this.dseYaDiligenciado);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1432647237632788AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_CuestionarioP_act_A_CuestionarioP_IIU_item_Clas_1432647237632788AccOfer_1ElemAcc_2',
            'Marcar como completado');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Cuestionariop.name;
        accItem.targetUI = ModelConstants.Cuestionariop.siuutcerrar;
        accItem.setNoShowProperties('TCERRAR', 'p_thiscuestionariop_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }
}
