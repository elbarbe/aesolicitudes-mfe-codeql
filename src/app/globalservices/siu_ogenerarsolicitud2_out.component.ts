import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { AbstractIU } from '../common/baseIUElements';
import { Field } from '../common/baseIUElements';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
/**
 * « Implements outbound arguments global SIU SIU_OGENERARSOLICITUD2 »
 */
    selector: 'imes-gs-siu-ogenerarsolicitud2-out',
    templateUrl: './siu_ogenerarsolicitud2_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGENERARSOLICITUD2uOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument pt_ps_NumSolicitud */
    public ptupsuNumSolicitud: Field;
    /** Outbound argument pt_ps_ErrorWS */
    public ptupsuErrorWS: Field;

    /** Service request */
    private serviceRequest: any;
    /** Service response */
    private serviceResponse: any;
    /** Exchange info */
    private exchangeInfo: ExchangeInfo = new ExchangeInfo();

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param condNavMng Conditinal navigation manager
     */
    constructor(
        protected override appGlobalInfo: AppGlobalInfo,
        protected override util: Util,
        protected override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.className = ModelConstants.Globalservices.name;
        this.iuName = 'siu_ogenerarsolicitud2_out';
        this.title = this.langMng.translateText('gs_OGENERARSOLICITUD2',
            'Replicar solicitud');

        // Create outbound argument components
        this.ptupsuNumSolicitud = new Field(this.langMng);
        this.ptupsuErrorWS = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initialize(): void {
        this.ptupsuNumSolicitud.nameInRequest = 'pt_ps_numsolicitud';
        this.ptupsuNumSolicitud.alias = this.langMng.translateText(
            'gs_OGENERARSOLICITUD2_outArg_pt_ps_NumSolicitud',
            'Número Solicitud');
        this.ptupsuNumSolicitud.dataType = Field.dtString;
        this.ptupsuNumSolicitud.maxLength = 50;
        this.ptupsuNumSolicitud.enabled = false;
        this.ptupsuNumSolicitud.assignCSS();

        this.ptupsuErrorWS.nameInRequest = 'pt_ps_errorws';
        this.ptupsuErrorWS.alias = this.langMng.translateText(
            'gs_OGENERARSOLICITUD2_outArg_pt_ps_ErrorWS',
            'Errores llamadas al CORE');
        this.ptupsuErrorWS.dataType = Field.dtText;
        this.ptupsuErrorWS.enabled = false;
        this.ptupsuErrorWS.assignCSS();

        // Get request and response from the exchange information
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);
        if (this.exchangeInfo) {
            this.serviceRequest = this.exchangeInfo.customData.request;
            this.serviceResponse = this.exchangeInfo.customData.response;
            if (this.serviceRequest && this.serviceResponse) {
                this.initializeFromResponse();
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    public override processCancel(lastExecutionSuccess?: boolean): void {
        if (this.exchangeInfo?.comeBackContext?.exchangeInfo?.targetIUName?.toLowerCase().startsWith('piu') ) {
            super.processCancel(lastExecutionSuccess);
        } else {
            this.util.navigateToMain();
        }
    }


     /**
     * Initialize the scenario using the response information
     */
    public initializeFromResponse(): void {
        this.ptupsuNumSolicitud.value =
            this.serviceResponse[this.ptupsuNumSolicitud.nameInRequest];
        this.ptupsuErrorWS.value =
            this.serviceResponse[this.ptupsuErrorWS.nameInRequest];
    }

}
