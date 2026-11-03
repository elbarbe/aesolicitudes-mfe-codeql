import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { DocumentoGIIUuDocumentoGuMaestroComponent } from './iiu_documentog_maestro.component';
import { ObsEstadoPIUuObsEstadoComponent } from '../obsestado/piu_obsestado.component';

import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements MDIU MDIU_DocumentoG of DocumentoG »
 */
@Component({
    selector: 'imes-documentog-mdiu-documentog',
    templateUrl: './mdiu_documentog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoGMDIUuDocumentoGComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: DocumentoGIIUuDocumentoGuMaestroComponent;

    /** Details */
    /** Detail component 0 */
    public d0: ObsEstadoPIUuObsEstadoComponent;
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
        this.idXML = 'Clas_1434446200832109UIMaDet_1';
        this.className = ModelConstants.Documentog.name;
        this.iuName = ModelConstants.Documentog.mdiuudocumentog;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_DocumentoG_mdiu_MDIU_DocumentoG',
            'Detalles');
        // Create the details and assign the master detail container
        this.master = new DocumentoGIIUuDocumentoGuMaestroComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1434446200832109UIMaDet_1Det_1',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new ObsEstadoPIUuObsEstadoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_DocumentoG_mdiu_MDIU_DocumentoG_detail_Clas_1434446200832109UIMaDet_1Det_1',
                'Observaciones');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ObsEstado',
                this.master.getContext(), null, 'DocumentoG', null, 'DocumentoG', ''));
        }
        super.initializeComponents();
    }

}
