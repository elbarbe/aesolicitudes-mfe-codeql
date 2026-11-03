import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudIIUuInfoContratanteIDINCLComponent } from './iiu_infocontratanteidincl.component';
import { SolicitudIMDIUuInfoContratantePRComponent } from './imdiu_infocontratantepr.component';
import { SolicitudIIUuInfoContratanteContactoINCComponent } from './iiu_infocontratantecontactoinc.component';

import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements MDIU iMDIU_InfoContratanteINCL of Solicitud »
 */
@Component({
    selector: 'imes-solicitud-imdiu-infocontratanteincl',
    templateUrl: './imdiu_infocontratanteincl.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudIMDIUuInfoContratanteINCLComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudIIUuInfoContratanteIDINCLComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SolicitudIMDIUuInfoContratantePRComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SolicitudIIUuInfoContratanteContactoINCComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;

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
    constructor(public override appGlobalInfo: AppGlobalInfo, public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1431957012480960UIMaDet_5';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.imdiuuinfocontratanteincl;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_mdiu_iMDIU_InfoContratanteINCL',
            'Información de Contratante');
        // Create the details and assign the master detail container
        this.master = new SolicitudIIUuInfoContratanteIDINCLComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_5Det_6',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo', 'AreaMedica']);
        this.d0 = new SolicitudIMDIUuInfoContratantePRComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_5Det_3',
            ['Admin', 'SuperAdmin', 'Asesor', 'Gestor', 'MesaDeApoyo', 'Afiliaciones']);
        this.d1 = new SolicitudIIUuInfoContratanteContactoINCComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
        this.loadDetailsOnDemand = false;
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public override initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        if (this.d0Visible && this.d0 != null) {
            this.d0.order = 0;
            this.d0.iuId = this.iuId + 'D0';
            this.d0.initializeComponents();
            this.d0.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_iMDIU_InfoContratanteINCL_detail_Clas_1431957012480960UIMaDet_5Det_6',
                'Información de Contratante');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_iMDIU_InfoContratanteINCL_detail_Clas_1431957012480960UIMaDet_5Det_3',
                'Datos de contacto');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        super.initializeComponents();
    }

}
