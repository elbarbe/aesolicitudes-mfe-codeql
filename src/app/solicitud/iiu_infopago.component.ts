import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudSIUuTMODIFICARINFOPAGOComponent } from './siu_tmodificarinfopago.component';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_InfoPago of Solicitud »
 */
export class SolicitudIIUuInfoPagoComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNumRadicado: Field;

    /** Associated service */
    public asrv: SolicitudSIUuTMODIFICARINFOPAGOComponent;

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
        this.idXML = 'Clas_1431957012480960UIInst_8';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin',
            'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_InfoPago',
            'Información del pago');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        // Associated service
        this.asrv = new SolicitudSIUuTMODIFICARINFOPAGOComponent(appGlobalInfo,
            util, changeDetectorRef, langMng, stdFun, condNavMng, usrFunc);
        this.asrv.queryContainer = this;
        this.associatedService = this.asrv;

        this.dseNumRadicado = new Field(this.langMng);
        this.cssClasses += 'cssDSNoShow';
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseNumRadicado.nameInRequest = 'numradicado';
        this.dseNumRadicado.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_SolicitudIIUInfoPago_item_Clas_1431957012480960CjtoVis_10ICtjoVis_16',
            'Nº Solicitud');
        this.dseNumRadicado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_10ICtjoVis_16', ['Funcionario', 'Admin', 'SuperAdmin', 'Asesor', 'AreaMedica',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNumRadicado.enabled = false;
        this.dseNumRadicado.mandatory = false;
        this.dseNumRadicado.dataType = Field.dtInt;
        this.dseNumRadicado.assignCSS();
        this.fields.push(this.dseNumRadicado);


        // Associated service
        this.asrv.initializeComponents();
    }
}
