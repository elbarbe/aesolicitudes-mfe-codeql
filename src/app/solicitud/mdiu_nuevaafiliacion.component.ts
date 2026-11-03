import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudIIUuNuevaAfiliacionComponent } from './iiu_nuevaafiliacion.component';
import { SolicitudIIUuInfoContratanteEditableComponent } from './iiu_infocontratanteeditable.component';
import { UsuarioPIUuUsuariosDeContratoComponent } from '../usuario/piu_usuariosdecontrato.component';
import { SolicitudIIUuInfoObservacionesComponent } from './iiu_infoobservaciones.component';
import { SolicitudIIUuInfoPagoComponent } from './iiu_infopago.component';

import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements MDIU MDIU_NuevaAfiliacion of Solicitud »
 */
@Component({
    selector: 'imes-solicitud-mdiu-nuevaafiliacion',
    templateUrl: './mdiu_nuevaafiliacion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudMDIUuNuevaAfiliacionComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudIIUuNuevaAfiliacionComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SolicitudIIUuInfoContratanteEditableComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: UsuarioPIUuUsuariosDeContratoComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: SolicitudIIUuInfoObservacionesComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: SolicitudIIUuInfoPagoComponent;
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
                public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1431957012480960UIMaDet_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.mdiuunuevaafiliacion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_mdiu_MDIU_NuevaAfiliacion',
            'Nueva afiliación');
        // Create the details and assign the master detail container
        this.master = new SolicitudIIUuNuevaAfiliacionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_1Det_6',
            ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new SolicitudIIUuInfoContratanteEditableComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_1Det_3',
            ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d1 = new UsuarioPIUuUsuariosDeContratoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_1Det_4',
            ['Funcionario', 'Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d2 = new SolicitudIIUuInfoObservacionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d2.masterDetailContainer = this;
        if (this.d2Visible) {
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431957012480960UIMaDet_1Det_5',
            ['Funcionario', 'Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d3 = new SolicitudIIUuInfoPagoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Solicitud_mdiu_MDIU_NuevaAfiliacion_detail_Clas_1431957012480960UIMaDet_1Det_6',
                'Información del contratante');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_NuevaAfiliacion_detail_Clas_1431957012480960UIMaDet_1Det_3',
                'Información Personas a Afiliar');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Usuario',
                this.master.getContext(), null, 'Solicitud', null, 'Solicitud', ''));
        }
        if (this.d2Visible && this.d2 != null) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_NuevaAfiliacion_detail_Clas_1431957012480960UIMaDet_1Det_4',
                'Observaciones');
            this.d2.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        if (this.d3Visible && this.d3 != null) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Solicitud_mdiu_MDIU_NuevaAfiliacion_detail_Clas_1431957012480960UIMaDet_1Det_5',
                'Información del Pago');
            this.d3.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Solicitud',
                this.master.getContext(), null, '', null, 'Solicitud', ''));
        }
        super.initializeComponents();
    }

}
