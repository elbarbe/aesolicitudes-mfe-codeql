import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudIIUuInclusionComponent } from './iiu_inclusion.component';
import { SolicitudIMDIUuInfoContratanteINCColectComponent } from './imdiu_infocontratanteinccolect.component';
import { SolicitudIIUuInfoTitularEditableComponent } from './iiu_infotitulareditable.component';
import { SolicitudMDIUuUsuariosINCLComponent } from './mdiu_usuariosincl.component';
import { SolicitudIIUuInfoObservacionesComponent } from './iiu_infoobservaciones.component';

import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements MDIU MDIU_InclusionColectivo of Solicitud »
 */
import { GestionCache } from '../common/gestionCache';
import { BHServicesUtil } from '../bhcallutils/bhservicesutil';

@Component({
    selector: 'imes-solicitud-mdiu-inclusioncolectivo',
    templateUrl: './mdiu_inclusioncolectivo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudMDIUuInclusionColectivoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudIIUuInclusionComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SolicitudIMDIUuInfoContratanteINCColectComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SolicitudIIUuInfoTitularEditableComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: SolicitudMDIUuUsuariosINCLComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: SolicitudIIUuInfoObservacionesComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;

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
                public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions,
                private bhServicesUtil: BHServicesUtil, private gestionCache: GestionCache) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1431957012480960UIMaDet_4';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.mdiuuinclusioncolectivo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_mdiu_MDIU_InclusionColectivo',
            'Inclusión');
        // Create the details and assign the master detail container
        this.master = new SolicitudIIUuInclusionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_4Det_6',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new SolicitudIMDIUuInfoContratanteINCColectComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_4Det_5',
            ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d1 = new SolicitudIIUuInfoTitularEditableComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc, bhServicesUtil, gestionCache);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_4Det_3',
            ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d2 = new SolicitudMDIUuUsuariosINCLComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d2.masterDetailContainer = this;
        if (this.d2Visible) {
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_4Det_4',
            ['Funcionario', 'Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d3 = new SolicitudIIUuInfoObservacionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d3.masterDetailContainer = this;
        if (this.d3Visible) {
            this.details.push(this.d3);
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
                'cls_Solicitud_mdiu_MDIU_InclusionColectivo_detail_Clas_1431957012480960UIMaDet_4Det_6',
                'Información de Contratante');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_InclusionColectivo_detail_Clas_1431957012480960UIMaDet_4Det_5',
                'Información del Titular');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        if (this.d2Visible && this.d2 != null) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_InclusionColectivo_detail_Clas_1431957012480960UIMaDet_4Det_3',
                'Información personas a Afiliar');
            this.d2.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        if (this.d3Visible && this.d3 != null) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_InclusionColectivo_detail_Clas_1431957012480960UIMaDet_4Det_4',
                'Observaciones');
            this.d3.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        super.initializeComponents();
    }

}
