import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudIIUuSolicitudVaciaComponent } from './iiu_solicitudvacia.component';
import { UsuarioRegPIUuUsuarioRegComponent } from '../usuarioreg/piu_usuarioreg.component';
import { UsuarioPIUuUsuariosDeContratoComponent } from '../usuario/piu_usuariosdecontrato.component';

import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements MDIU MDIU_UsuariosINCL of Solicitud »
 */
@Component({
    selector: 'imes-solicitud-mdiu-usuariosincl',
    templateUrl: './mdiu_usuariosincl.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudMDIUuUsuariosINCLComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudIIUuSolicitudVaciaComponent;

    /** Details */
    /** Detail component 0 */
    public d0: UsuarioRegPIUuUsuarioRegComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: UsuarioPIUuUsuariosDeContratoComponent;
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
        this.idXML = 'Clas_1431957012480960UIMaDet_7';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.mdiuuusuariosincl;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_mdiu_MDIU_UsuariosINCL',
            'Información personas a Afiliar');
        // Create the details and assign the master detail container
        this.master = new SolicitudIIUuSolicitudVaciaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_7Det_1',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new UsuarioRegPIUuUsuarioRegComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_7Det_2',
            ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d1 = new UsuarioPIUuUsuariosDeContratoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Solicitud_mdiu_MDIU_UsuariosINCL_detail_Clas_1431957012480960UIMaDet_7Det_1',
                'Usuarios registrados');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('UsuarioReg',
                this.master.getContext(), null, 'Solicitud', null, 'Solicitud', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_UsuariosINCL_detail_Clas_1431957012480960UIMaDet_7Det_2',
                'Nuevos usuarios');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Usuario',
                this.master.getContext(), null, 'Solicitud', null, 'Solicitud', ''));
        }
        super.initializeComponents();
    }

}
