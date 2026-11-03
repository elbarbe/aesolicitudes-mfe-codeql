import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_DocumentoG of DocumentoG »
 */
import { DocumentoGServices } from './documentog.services';
import { BHGestorAtomicUtil } from '../bhcallutils/bhgestoratomicutil';

@Component({
    selector: 'imes-documentog-piu-documentog',
    templateUrl: './piu_documentog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoGPIUuDocumentoGComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dssolicituddaeusolicitudesdnumerousolicitud = 'Nº Solicitud';
    private readonly dspersonaddrvtiponumdoc = 'Persona';
    private readonly dspersonadtieneepssanitas = 'Tiene EPS Sanitas';
    private readonly dsfechasubida = 'Fecha subida';
    private readonly dstipo = 'Tipo';
    private readonly dsnombre = 'Archivo adjunto';
    private readonly dsestado = 'Estado';
    private readonly dsdescripcion = 'Descripción';
    private readonly dspersonaddatosbasicosmod = 'Datos básicos mod.';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        private gestorUtil: BHGestorAtomicUtil,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1434446200832109UIPobCl_1';
        this.className = ModelConstants.Documentog.name;
        this.classAlias = this.langMng.translateText('cls_DocumentoG',
            'Documento gestor');
        this.iuName = ModelConstants.Documentog.piuudocumentog;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_DocumentoG_piu_PIU_DocumentoG',
            'Documentos');
        this.queryURL = '/api/DocumentoGApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    public override doAction(actionId: number): void {

        const action = this.getActionById(actionId);
        if (action.targetClass === ModelConstants.Documentog.name &&
            action.targetUI === ModelConstants.Documentog.siuuprevisualizarato) {
            // Llamamos al servicio
            const docSrv = new DocumentoGServices(this.appGlobalInfo, this.util);
            this.setShowWait(true);
            docSrv.previsualizarATO(this.getSelectedOids()[0]).then( ( respuesta: {
                oatoken: string,
                oaurldescarga: string,
                oanumsolicitud: string
            }) => {
                if (respuesta && respuesta.oaurldescarga && respuesta.oatoken) {
                    this.gestorUtil.descargarArchivo(respuesta.oatoken, respuesta.oaurldescarga, respuesta.oanumsolicitud).then( () => {
                        this.setShowWait(false);
                        this.changeDetectorRef.markForCheck();
                    }).catch( (err: Error) => {
                        this.setShowWait(false);
                        this.util.addErrorMessage(err);
                        this.changeDetectorRef.markForCheck();
                    });
                } else {
                    this.setShowWait(false);
                    this.util.addErrorMessage(this.gestorUtil.MSG_ERROR_GEN);
                    this.changeDetectorRef.markForCheck();
                }
                this.changeDetectorRef.markForCheck();
            }).catch( (err: Error) => {
                this.setShowWait(false);
                this.util.addErrorMessage(err);
                this.changeDetectorRef.markForCheck();
            });

        } else {
            super.doAction(actionId);
        }
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_7';
        dsItem.name = 'solicitud.ae_solicitudes.numero_solicitud';
        dsItem.field = 'solicitud-ae_solicitudes-numero_solicitud';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_7',
            this.dssolicituddaeusolicitudesdnumerousolicitud);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_2';
        dsItem.name = 'persona.drvtiponumdoc';
        dsItem.field = 'persona-drvtiponumdoc';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_2',
            this.dspersonaddrvtiponumdoc);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_10';
        dsItem.name = 'persona.tieneepssanitas';
        dsItem.field = 'persona-tieneepssanitas';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_10',
            this.dspersonadtieneepssanitas);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_3';
        dsItem.name = 'fechasubida';
        dsItem.field = 'fechasubida';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_3',
            this.dsfechasubida);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_5';
        dsItem.name = 'tipo';
        dsItem.field = 'tipo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_5',
            this.dstipo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_TIPODOCUMENTOG;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_8';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_8',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.linkIndex = 1;
        dsItem.linkIsAction = true;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCUMENTOG;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_6';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_6',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434446200832109CjtoVis_1ICtjoVis_9';
        dsItem.name = 'persona.datosbasicosmod';
        dsItem.field = 'persona-datosbasicosmod';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_PIU_item_Clas_1434446200832109CjtoVis_1ICtjoVis_9',
            this.dspersonaddatosbasicosmod);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1434446200832109AccOfer_1ElemAcc_15';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoG_act_A_DocumentoG_PIU_item_Clas_1434446200832109AccOfer_1ElemAcc_15',
            'Subir documento');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutsubirdocumentoato;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1434446200832109AccOfer_1ElemAcc_14';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoG_act_A_DocumentoG_PIU_item_Clas_1434446200832109AccOfer_1ElemAcc_14',
            'Previsualizar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentog.name;
        accItem.targetUI = ModelConstants.Documentog.siuuprevisualizarato;
        accItem.setNoShowProperties('previsualizarATO', 'p_thisdocumentog_oid', '', false);
        accItem.showInDefault = false;
        accItem.styleClass = 'accEditGrid';
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1434446200832109AccOfer_1ElemAcc_10';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoG_act_A_DocumentoG_PIU_item_Clas_1434446200832109AccOfer_1ElemAcc_10',
            'Aprobar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentog.name;
        accItem.targetUI = ModelConstants.Documentog.siuutaprobar;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['solicitud.estado'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1434446200832109AccOfer_1ElemAcc_11';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoG_act_A_DocumentoG_PIU_item_Clas_1434446200832109AccOfer_1ElemAcc_11',
            'Devolver');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentog.name;
        accItem.targetUI = ModelConstants.Documentog.siuutdevolver;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['estado'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['solicitud.estado'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1434446200832109NavOfer_3ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_DocumentoG_nav_N_DocumentoG_item_Clas_1434446200832109NavOfer_3ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        navItem.targetClass = ModelConstants.Documentog.name;
        navItem.targetUI = ModelConstants.Documentog.mdiuudocumentog;
        navItem.rolePath = '';
        navItem.targetType  = ScenarioType.MasterDetail;
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_DocumentoG', value: 'Por fecha'});
        this.orderCriteria = 'OC_DocumentoG';
    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;

        if (actionId === 2) {
            isEnabled = this.checkPrecondicionInAdvanceNum2(rows);
        }

        if (actionId === 3) {
            isEnabled = this.checkPrecondicionInAdvanceNum3(rows);
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 2
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum2(rows: any[]): boolean {
        for (const row of rows) {
            // Estado <> 2
            if (!(!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'estado')), 2))) {
                return false;
            }
            // Solicitud.Estado <> 8
            if (!(!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'solicitud-estado')), 8))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 3
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum3(rows: any[]): boolean {
        for (const row of rows) {
            // Estado <> 3
            if (!(!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'estado')), 3))) {
                return false;
            }
            // Estado <> 2
            if (!(!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'estado')), 2))) {
                return false;
            }
            // Solicitud.Estado <> 8
            if (!(!this.util.valueEquals(this.util.getInt(this.getRowData(row, 'solicitud-estado')), 8))) {
                return false;
            }
        }
        return true;
    }
}
