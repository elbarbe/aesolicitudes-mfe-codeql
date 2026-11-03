import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudIIUuInfoContratanteNATComponent } from './iiu_infocontratantenat.component';
import { SolicitudIIUuInfoContratanteJURComponent } from './iiu_infocontratantejur.component';

import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements MDIU iMDIU_InfoContratantePR of Solicitud »
 */
@Component({
    selector: 'imes-solicitud-imdiu-infocontratantepr',
    templateUrl: './imdiu_infocontratantepr.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudIMDIUuInfoContratantePRComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudIIUuInfoContratanteNATComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SolicitudIIUuInfoContratanteJURComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;

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
        this.idXML = 'Clas_1431957012480960UIMaDet_3';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.imdiuuinfocontratantepr;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo', 'AreaMedica']));
        this.title = this.langMng.translateText('cls_Solicitud_mdiu_iMDIU_InfoContratantePR',
            'Información de Contratante');
        // Create the details and assign the master detail container
        this.master = new SolicitudIIUuInfoContratanteNATComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_3Det_3',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new SolicitudIIUuInfoContratanteJURComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
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
                'cls_Solicitud_mdiu_iMDIU_InfoContratantePR_detail_Clas_1431957012480960UIMaDet_3Det_3',
                'Persona jurídica');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        super.initializeComponents();
    }

}
