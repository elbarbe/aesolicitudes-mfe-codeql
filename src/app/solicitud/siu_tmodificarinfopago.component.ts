import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-solicitud-siu-tmodificarinfopago',
    templateUrl: './siu_tmodificarinfopago.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTMODIFICARINFOPAGOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptupuevcPeriodicidad: FieldOVPreload;
    public ptupuevcFormaPago: FieldOVPreload;
    public ptupuvalorCuota: Field;
    public ptupuvalorDtoComercialSim: Field;
    public ptupuValorDtoFinanciero: Field;
    public puValorCuotaInscripcion: Field;
    public puSubtotal: Field;
    public puBaseGrabable: Field;
    public puPorcenIVA: Field;
    public puIVA: Field;
    public puTotal: Field;

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
        this.idXML = 'Clas_1431957012480960Ser_39UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutmodificarinfopago;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TMODIFICARINFOPAGO';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TMODIFICARINFOPAGO',
            'Información del pago');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuevcPeriodicidad = new FieldOVPreload(this.langMng);
        this.ptupuevcFormaPago = new FieldOVPreload(this.langMng);
        this.ptupuvalorCuota = new Field(this.langMng);
        this.ptupuvalorDtoComercialSim = new Field(this.langMng);
        this.ptupuValorDtoFinanciero = new Field(this.langMng);
        this.puValorCuotaInscripcion = new Field(this.langMng);
        this.puSubtotal = new Field(this.langMng);
        this.puBaseGrabable = new Field(this.langMng);
        this.puPorcenIVA = new Field(this.langMng);
        this.puIVA = new Field(this.langMng);
        this.puTotal = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisSolicitud.nameInRequest = 'p_thissolicitud';
        this.puthisSolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptupuevcPeriodicidad.nameInRequest = 'pt_p_evcperiodicidad';
        this.ptupuevcPeriodicidad.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_pt_p_evcPeriodicidad',
            'Periodicidad pago');
        this.ptupuevcPeriodicidad.mandatory = true;
        this.ptupuevcPeriodicidad.dataType = ModelConstants.Periodicidad.name;
        this.ptupuevcPeriodicidad.maxLength = 150;
        this.ptupuevcPeriodicidad.assignCSS();
        this.fields.push(this.ptupuevcPeriodicidad);

        this.ptupuevcFormaPago.nameInRequest = 'pt_p_evcformapago';
        this.ptupuevcFormaPago.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_pt_p_evcFormaPago',
            'Forma Pago');
        this.ptupuevcFormaPago.mandatory = true;
        this.ptupuevcFormaPago.dataType = ModelConstants.Formapago.name;
        this.ptupuevcFormaPago.maxLength = 150;
        this.ptupuevcFormaPago.assignCSS();
        this.fields.push(this.ptupuevcFormaPago);

        this.ptupuvalorCuota.nameInRequest = 'pt_p_valorcuota';
        this.ptupuvalorCuota.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_pt_p_valorCuota',
            'Valor cuota');
        this.ptupuvalorCuota.mandatory = false;
        this.ptupuvalorCuota.dataType = Field.dtInt;
        this.ptupuvalorCuota.assignCSS();
        this.fields.push(this.ptupuvalorCuota);

        this.ptupuvalorDtoComercialSim.nameInRequest = 'pt_p_valordtocomercialsim';
        this.ptupuvalorDtoComercialSim.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_pt_p_valorDtoComercialSim',
            'Dto. Comercial Simultaneidad');
        this.ptupuvalorDtoComercialSim.mandatory = false;
        this.ptupuvalorDtoComercialSim.dataType = Field.dtInt;
        this.ptupuvalorDtoComercialSim.assignCSS();
        this.fields.push(this.ptupuvalorDtoComercialSim);

        this.ptupuValorDtoFinanciero.nameInRequest = 'pt_p_valordtofinanciero';
        this.ptupuValorDtoFinanciero.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_pt_p_ValorDtoFinanciero',
            'Valor Dto. Financiero');
        this.ptupuValorDtoFinanciero.mandatory = false;
        this.ptupuValorDtoFinanciero.dataType = Field.dtInt;
        this.ptupuValorDtoFinanciero.assignCSS();
        this.fields.push(this.ptupuValorDtoFinanciero);

        this.puValorCuotaInscripcion.nameInRequest = 'p_valorcuotainscripcion';
        this.puValorCuotaInscripcion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_ValorCuotaInscripcion',
            'Valor cuota inscripción');
        this.puValorCuotaInscripcion.mandatory = false;
        this.puValorCuotaInscripcion.dataType = Field.dtInt;
        this.puValorCuotaInscripcion.assignCSS();
        this.fields.push(this.puValorCuotaInscripcion);

        this.puSubtotal.nameInRequest = 'p_subtotal';
        this.puSubtotal.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_Subtotal',
            'Subtotal');
        this.puSubtotal.mandatory = false;
        this.puSubtotal.dataType = Field.dtInt;
        this.puSubtotal.assignCSS();
        this.fields.push(this.puSubtotal);

        this.puBaseGrabable.nameInRequest = 'p_basegrabable';
        this.puBaseGrabable.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_BaseGrabable',
            'Base grabable');
        this.puBaseGrabable.mandatory = false;
        this.puBaseGrabable.dataType = Field.dtInt;
        this.puBaseGrabable.assignCSS();
        this.fields.push(this.puBaseGrabable);

        this.puPorcenIVA.nameInRequest = 'p_porceniva';
        this.puPorcenIVA.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_PorcenIVA',
            '% IVA');
        this.puPorcenIVA.mandatory = false;
        this.puPorcenIVA.dataType = Field.dtReal;
        this.puPorcenIVA.assignCSS();
        this.fields.push(this.puPorcenIVA);

        this.puIVA.nameInRequest = 'p_iva';
        this.puIVA.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_IVA',
            'IVA');
        this.puIVA.mandatory = false;
        this.puIVA.dataType = Field.dtInt;
        this.puIVA.assignCSS();
        this.fields.push(this.puIVA);

        this.puTotal.nameInRequest = 'p_total';
        this.puTotal.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TMODIFICARINFOPAGO_inArg_p_Total',
            'Total');
        this.puTotal.mandatory = false;
        this.puTotal.dataType = Field.dtInt;
        this.puTotal.assignCSS();
        this.fields.push(this.puTotal);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_valorDtoComercialSim
            const defValptupuvalorDtoComercialSim = new Promise<void>((resolveDefValue) => {
                this.ptupuvalorDtoComercialSim.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValptupuvalorDtoComercialSim);

            // pt_p_ValorDtoFinanciero
            const defValptupuValorDtoFinanciero = new Promise<void>((resolveDefValue) => {
                this.ptupuValorDtoFinanciero.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValptupuValorDtoFinanciero);

            // p_ValorCuotaInscripcion
            const defValpuValorCuotaInscripcion = new Promise<void>((resolveDefValue) => {
                this.puValorCuotaInscripcion.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuValorCuotaInscripcion);

            // p_Subtotal
            const defValpuSubtotal = new Promise<void>((resolveDefValue) => {
                this.puSubtotal.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuSubtotal);

            // p_BaseGrabable
            const defValpuBaseGrabable = new Promise<void>((resolveDefValue) => {
                this.puBaseGrabable.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuBaseGrabable);

            // p_PorcenIVA
            const defValpuPorcenIVA = new Promise<void>((resolveDefValue) => {
                this.puPorcenIVA.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuPorcenIVA);

            // p_IVA
            const defValpuIVA = new Promise<void>((resolveDefValue) => {
                this.puIVA.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuIVA);

            // p_Total
            const defValpuTotal = new Promise<void>((resolveDefValue) => {
                this.puTotal.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuTotal);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Solicitud'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisSolicitud.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhissolicitud('SetValue', true);
            this.puthisSolicitud.enabled = false;
            this.executeDependecyRulesputhissolicitud('SetEnabled', true);
        }
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'Periodicidad') {
                this.ptupuevcPeriodicidad.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevcperiodicidad('SetValue', true);
                this.ptupuevcPeriodicidad.enabled = false;
                this.executeDependecyRulesptupuevcperiodicidad('SetEnabled', true);
            }
            if (lastRole === 'FormaPago') {
                this.ptupuevcFormaPago.setValue(lastRoleOid);
                this.ptupuevcFormaPago.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of field pt_p_evcPeriodicidad
     */
    private loadPreloadptupuevcperiodicidad(): void {

        if (this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODIFICARINFOPAGO_pt_p_evcPeriodicidad_NavFilter0');
            this.util.searchPreload('Periodicidad', 'IC_Periodicidad', navFilters, this.getNavigationFilterVariables(),
                'OC_Periodicidad').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuevcPeriodicidad.loadPreload(response.results);
                    } else {
                        this.ptupuevcPeriodicidad.loadPreload([]);
                    }
                    if (this.ptupuevcPeriodicidad.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptupuevcperiodicidad('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuevcPeriodicidad.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptupuevcPeriodicidad.getSelectedInstances().length > 0) {
                this.ptupuevcPeriodicidad.cleanPreload();
                this.executeDependecyRulesptupuevcperiodicidad('SetValue', true);
            } else {
                this.ptupuevcPeriodicidad.cleanPreload();
            }
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_evcFormaPago
     */
    private loadPreloadptupuevcformapago(): void {

        if (this.puthisSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TMODIFICARINFOPAGO_pt_p_evcFormaPago_NavFilter0');
            navFilters.push('Solicitud_TMODIFICARINFOPAGO_pt_p_evcFormaPago_NavFilter1');
            this.util.searchPreload('FormaPago', 'IC_FormaPago', navFilters, this.getNavigationFilterVariables(), 'OC_FormaPago').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuevcFormaPago.loadPreload(response.results);
                    } else {
                        this.ptupuevcFormaPago.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuevcFormaPago.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuevcFormaPago.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisSolicitud'.toLowerCase()) {
            this.puthisSolicitud.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhissolicitud('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhissolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhissolicitud();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptupuevcperiodicidad();
            this.loadPreloadptupuevcformapago();
        }
        if ('SetValue' === event && this.puthisSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisSolicitud();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisSolicitud();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puthisSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisSolicitud argument
     */
    private setSuppInfoputhissolicitud(): void {

        const displaySetIC = 'Ae_solicitudes.Numero_solicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitud.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisSolicitud.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitud.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisSolicitud.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisSolicitud argument
     */
    private executeDependecyRules1puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'formapago.Codigo,periodicidad.Codigo,valorcuota,valordtocomercialsim,valordtofinanciero,drvbasegrabable,drviva' +
                ',drvporceniva,drvsubtotal,drvtotal,valorcuotainscrip');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisSolicitud argument
     */
    private executeDependecyRules1puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud)) {
            // pt_p_evcFormaPago.SetValue( v.formapago )
            this.ptupuevcFormaPago.setValue(this.util.oidBuilder.buildOidFormaPago(
                this.util.getInt(varputhissolicitud.get('formapago.Codigo'))));
            // pt_p_evcPeriodicidad.SetValue( v.periodicidad )
            this.ptupuevcPeriodicidad.setValue(this.util.oidBuilder.buildOidPeriodicidad(
                this.util.getInt(varputhissolicitud.get('periodicidad.Codigo'))));
            this.executeDependecyRulesptupuevcperiodicidad('SetValue', true);
            // pt_p_valorCuota.SetValue( round(v.valorcuota) )
            this.ptupuvalorCuota.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('valorcuota'))));
            // pt_p_valorDtoComercialSim.SetValue( round(v.valordtocomercialsim) )
            this.ptupuvalorDtoComercialSim.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('valordtocomercialsim'))));
            // pt_p_ValorDtoFinanciero.SetValue( round(v.valordtofinanciero) )
            this.ptupuValorDtoFinanciero.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('valordtofinanciero'))));
            // p_BaseGrabable.SetValue( round(v.drvbasegrabable) )
            this.puBaseGrabable.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('drvbasegrabable'))));
            // p_BaseGrabable.SetActive( FALSE )
            this.puBaseGrabable.enabled = false;
            // p_IVA.SetValue( round(v.drviva) )
            this.puIVA.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('drviva'))));
            // p_IVA.SetActive( FALSE )
            this.puIVA.enabled = false;
            // p_PorcenIVA.SetValue( v.drvporceniva )
            this.puPorcenIVA.setValue(this.util.getReal(varputhissolicitud.get('drvporceniva')));
            // p_PorcenIVA.SetActive( FALSE )
            this.puPorcenIVA.enabled = false;
            // p_Subtotal.SetValue( round(v.drvsubtotal) )
            this.puSubtotal.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('drvsubtotal'))));
            // p_Subtotal.SetActive( FALSE )
            this.puSubtotal.enabled = false;
            // p_thisSolicitud.SetVisible( FALSE )
            this.puthisSolicitud.visible = false;
            // p_Total.SetValue( round(v.drvtotal) )
            this.puTotal.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('drvtotal'))));
            // p_Total.SetActive( FALSE )
            this.puTotal.enabled = false;
            // p_ValorCuotaInscripcion.SetValue( round(v.valorcuotainscrip) )
            this.puValorCuotaInscripcion.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('valorcuotainscrip'))));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisSolicitud argument
     */
    private executeDependecyRules2puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'tipocontrato,tramite');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisSolicitud argument
     */
    private executeDependecyRules2puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.tipocontrato = 1 AND v.tramite = 2
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) &&
            this.util.valueEquals(this.util.getInt(varputhissolicitud.get('tipocontrato')), 1) &&
            this.util.valueEquals(this.util.getInt(varputhissolicitud.get('tramite')), 2)) {
            // pt_p_evcPeriodicidad.SetActive( FALSE )
            this.ptupuevcPeriodicidad.enabled = false;
            this.executeDependecyRulesptupuevcperiodicidad('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_thisSolicitud argument
     */
    private executeDependecyRules3puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'ae_solicitudes.plant.esvoluntario');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_thisSolicitud argument
     */
    private executeDependecyRules3puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.Ae_solicitudes.plant.esvoluntario = TRUE
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.esvoluntario')), true)) {
            // pt_p_valorCuota.SetActive( false )
            this.ptupuvalorCuota.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisSolicitud lense search argument
     */
    public onputhissolicitudChange(): void {
        this.executeLenseSearch(this.puthisSolicitud, ModelConstants.Solicitud.name, 'IC_Solicitud',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhissolicitud();
            }
            if (foundInstances === 1) {
                this.processputhissolicitudSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisSolicitud lense search argument
     */
    public processputhissolicitudSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisSolicitud.searchResults.length > index) {
            selectedInstance = this.puthisSolicitud.searchResults[index];
        }
        // Clean the result list
        this.puthisSolicitud.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisSolicitud.allowMultiSelect) {
                this.puthisSolicitud.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisSolicitud.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhissolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisSolicitud lense search argument
     */
    public cleanputhissolicitud(): void {
        this.clearValidationMessages();
        this.puthisSolicitud.clean();
        this.executeDependecyRulesputhissolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcPeriodicidad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevcperiodicidad(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuevcPeriodicidad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuevcPeriodicidad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_evcPeriodicidad argument
     */
    private executeDependecyRules1ptupuevcPeriodicidad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'ae_solicitudes.plant.esvoluntario,drvimptarifaplanvol,Ae_solicitudes.id_solicitud');
        this.addQueryInstanceFromField(this.ptupuevcPeriodicidad,
                'drvnumpagos');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuevcPeriodicidadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_evcPeriodicidad argument
     */
    private executeDependecyRules1ptupuevcPeriodicidadActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        const varptupuevcperiodicidad = this.getFirstInstanceFromCache(this.ptupuevcPeriodicidad);
        // v <> NULL AND p_thissolicitud.ae_solicitudes.plant.esvoluntario = TRUE
        if (varputhissolicitud && varptupuevcperiodicidad && !this.util.isNull(varptupuevcperiodicidad) &&
            this.util.valueEquals(this.util.getBool(varputhissolicitud.get('ae_solicitudes.plant.esvoluntario')), true)) {
            // pt_p_valorCuota.SetValue( round(p_thissolicitud.drvimptarifaplanvol / v.drvnumpagos) )
            this.ptupuvalorCuota.setValue(this.stdFun.round(this.util.getReal(varputhissolicitud.get('drvimptarifaplanvol')) / this.util.getInt(varptupuevcperiodicidad.get('drvnumpagos'))));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_evcPeriodicidad argument
     */
    public onptupuevcperiodicidadChange(): void {
        this.executeDependecyRulesptupuevcperiodicidad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Radicados_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
