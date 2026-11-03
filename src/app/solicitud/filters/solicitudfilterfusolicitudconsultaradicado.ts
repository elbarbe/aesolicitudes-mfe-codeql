import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVLenseSearch, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { ExchangeInfo } from '../../common/app.exchangeinfo';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';
import { AbstractPIU } from '../../common/abstractPIU';

import { QueryResponse } from 'src/app/common/answerRequestInformation';

/**
 * « Manages the filter F_SolicitudConsultaRadicado of class Solicitud »
 */
export class SolicitudFilterFuSolicitudConsultaRadicado extends AbstractFilter {

    /** Filter variables */
    public vfDesde: Field;
    public vfHasta: Field;
    public vouTipoDoc: FieldOVPreload;
    public vuNumDoc: Field;
    public voPersona: FieldOVLenseSearch;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param usrFunc User functions
     */
    constructor(public override appGlobalInfo: AppGlobalInfo,
                public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_Solicitud_filter_F_SolicitudConsultaRadicado',
            'Criterios de búsqueda');
        this.filterName = 'F_SolicitudConsultaRadicado';

        this.vfDesde = new Field(this.langMng);
        this.vfHasta = new Field(this.langMng);
        this.vouTipoDoc = new FieldOVPreload(this.langMng);
        this.vuNumDoc = new Field(this.langMng);
        this.voPersona = new FieldOVLenseSearch(this.langMng, this.util);
    }

    public override canBeExecuted(): boolean {
        if (!super.canBeExecuted()) {
            return false;
        }

        // Comprobamos que el periodo entre las fechas indicadas o supera el limite
        const diferencia = this.stdFun.daysDifferenceFromDate(this.vfDesde.value, this.vfHasta.value);
        let periodo = 30;
        if (this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes) {
            periodo = this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes;
        }
        let canExe = diferencia <= periodo;

        if (!canExe) {
            this.util.addErrorMessage('Las fechas introducidas superan el periodo máximo de ' + 
                periodo + ' días permitido. Modifique las fechas para ajustarse al periodo indicado');
        }
        return canExe;
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfDesde.nameInRequest = 'vfdesde';
        this.vfDesde.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_vfDesde',
            'Desde');
        this.vfDesde.visible = true;
        this.vfDesde.enabled = true;
        this.vfDesde.mandatory = false;
        this.vfDesde.dataType = Field.dtDate;
        this.vfDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesde);

        this.vfHasta.nameInRequest = 'vfhasta';
        this.vfHasta.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDate;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);

        this.vouTipoDoc.nameInRequest = 'vo_tipodoc';
        this.vouTipoDoc.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_vo_TipoDoc',
            'Tipo doc.');
        this.vouTipoDoc.visible = true;
        this.vouTipoDoc.enabled = true;
        this.vouTipoDoc.mandatory = false;
        this.vouTipoDoc.dataType = ModelConstants.Tipoidentificacion.name;
        this.vouTipoDoc.preloadValues = [];
        this.vouTipoDoc.allowMultiSelect = false;
        this.vouTipoDoc.maxLength = 170;
        this.vouTipoDoc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouTipoDoc);

        this.vuNumDoc.nameInRequest = 'v_numdoc';
        this.vuNumDoc.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_v_NumDoc',
            'Nº documento');
        this.vuNumDoc.visible = true;
        this.vuNumDoc.enabled = true;
        this.vuNumDoc.mandatory = false;
        this.vuNumDoc.dataType = Field.dtString;
        this.vuNumDoc.maxLength = 60;
        this.vuNumDoc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuNumDoc);

        this.voPersona.nameInRequest = 'vopersona';
        this.voPersona.alias = this.langMng.translateText(
            'cls_Solicitud_filter_F_SolicitudConsultaRadicado_fvar_voPersona',
            'Persona');
        this.voPersona.visible = true;
        this.voPersona.enabled = true;
        this.voPersona.mandatory = false;
        this.voPersona.dataType = ModelConstants.Persona.name;
        this.voPersona.text = '';
        this.voPersona.searchResults = [];
        this.voPersona.allowMultiSelect = false;
        this.voPersona.maxLength = 454;
        this.voPersona.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.voPersona);
        this.voPersona.enabled = false;
    }

    public buscarPersona(): void {
        this.voPersona.clean();
        const tipoIdent = this.vouTipoDoc.getSingleValue();

        if (tipoIdent && this.vuNumDoc.value) {
            // Buscamos a la apersona por tipo y numero de identificacion 
            // Si existe, le pasamos el Oid a la ariable voPersona
            let filtro = this.util.getFilter('F_PersonaConsultarCORE');
            filtro = this.util.addFilterVariable(filtro, 'vo_TipoIdentificacion', tipoIdent);
            filtro = this.util.addFilterVariable(filtro, 'v_NumIdentificacion', this.vuNumDoc.value);
            const query = this.util.getQueryRequest('identificador',[filtro],'',1);
            this.util.callQuery(ModelConstants.Persona.name, query).then( (resultado: QueryResponse) => {
                if (resultado.results.length > 0) {
                    this.voPersona.setValue(JSON.parse(resultado.results[0].oid));
                    this.executeDependecyRulesvopersona('SetValue', true);
                    this.search();
                }
            }).catch( (error: Error) => {

            });

        }
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): void {
        const promiseArr: Array<Promise<void>> = [];

        // vfDesde
        const defValvfDesde = new Promise<void>((resolveDefValue) => {
            let rtnFuncvfDesde0: any;
            this.usrFunc.fuGetFechaDesdeVarFiltro().then((res) => {
                rtnFuncvfDesde0 = res;

                this.vfDesde.setValue(this.util.getDate(rtnFuncvfDesde0));
                resolveDefValue();
            });
        });
        promiseArr.push(defValvfDesde);

        // vfHasta
        const defValvfHasta = new Promise<void>((resolveDefValue) => {
            this.vfHasta.setValue(this.stdFun.systemDate());
            resolveDefValue();
        });
        promiseArr.push(defValvfHasta);

        Promise.all(promiseArr).then((results: any[]) => {
            this.initialized = true;
            // Launch query
            if (this.populationContainer instanceof AbstractPIU) {
                const abstractPIU = this.populationContainer as AbstractPIU;
                if (abstractPIU.autoSearch && abstractPIU.activeFilter?.filterName === this.filterName) {
                    this.search();
                }
            } else {
                this.search();
            }
            this.changeDetectorRef.markForCheck();
        });
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (exchInfo.originArgumentName === 'voPersona' && exchInfo.selectedOids && exchInfo.selectedOids.length > 0) {
            this.voPersona.setValue(exchInfo.selectedOids);
            this.executeDependecyRulesvopersona('SetValue', true);
        }

    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('voPersona'.toLowerCase() === argumentName.toLowerCase()) {
            this.voPersona.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Persona';
            exchInfo.navigationalFilterIdentity = ['Solicitud_F_SolicitudConsultaRadicado_voPersona_NavFilter'];
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the change in the search text in the voPersona variable
     */
    public onvopersonaChange() {
        this.executeLenseSearch(this.voPersona, ModelConstants.Persona.name, 'IC_PersonaNombresApellidos',
            ['Solicitud_F_SolicitudConsultaRadicado_voPersona_NavFilter']).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanvopersona();
            }
            if (foundInstances === 1) {
                this.processvopersonaSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the voPersona variable
     */
    public processvopersonaSelected(index: number): void {
        this.voPersona.processIndexSelected(index);
        this.executeDependecyRulesvopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCliente lense search argument
     */
    public cleanvopersona(): void {
        this.clearValidationMessages();
        this.voPersona.clean();
        this.executeDependecyRulesvopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Set the supplementary information to the voPersona argument
     */
    private setSuppInfovopersona(): void {
        this.setSuplementaryInformationToField(this.voPersona, ModelConstants.Persona.name, 'RazonSocial,PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido');
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for voPersona variable
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesvopersona(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfovopersona();
        }
        this.executePendingDependencyRules();
    }

    public override loadPreload(): void {

        // vouTipoDoc
        this.executeSearchPreload(this.vouTipoDoc, ModelConstants.Tipoidentificacion.name, 'IC_TipoIdentificacion',
            'OC_TipoIdentificacion', []);
    }

}
