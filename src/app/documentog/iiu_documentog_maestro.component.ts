import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_DocumentoG_Maestro of DocumentoG »
 */
import { DocumentoGServices } from './documentog.services';
import { BHGestorAtomicUtil } from '../bhcallutils/bhgestoratomicutil';

export class DocumentoGIIUuDocumentoGuMaestroComponent extends AbstractIIU {

    /** Display Set elements */
    public dseSolicitudAeusolicitudesNumerousolicitud: Field;
    public dseDrvNumContrato: Field;
    public dsePersonadrvTipoNumDoc: Field;
    public dsePersonadrvNombreCompleto: Field;
    public dseEstado: FieldDefinedSelection;
    public dseTipo: FieldDefinedSelection;
    public dseDescripcion: Field;
    public dseFechaSubida: Field;
    public dseIdDocEnGestor: Field;
    public dseResultadoSubida: Field;
    public dseEmailEnvioDevuelto: Field;
    public dseNumDescargas: Field;

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
        private gestorUtil: BHGestorAtomicUtil,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1434446200832109UIInst_1';
        this.className = ModelConstants.Documentog.name;
        this.classAlias = this.langMng.translateText('cls_DocumentoG',
            'Documento gestor');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_DocumentoG_iiu_IIU_DocumentoG_Maestro',
            'Detalles');
        this.queryURL = '/api/DocumentoGApi/GetPopulationDynamic';

        this.dseSolicitudAeusolicitudesNumerousolicitud = new Field(this.langMng);
        this.dseDrvNumContrato = new Field(this.langMng);
        this.dsePersonadrvTipoNumDoc = new Field(this.langMng);
        this.dsePersonadrvNombreCompleto = new Field(this.langMng);
        this.dseEstado = new FieldDefinedSelection(this.langMng);
        this.dseTipo = new FieldDefinedSelection(this.langMng);
        this.dseDescripcion = new Field(this.langMng);
        this.dseFechaSubida = new Field(this.langMng);
        this.dseIdDocEnGestor = new Field(this.langMng);
        this.dseResultadoSubida = new Field(this.langMng);
        this.dseEmailEnvioDevuelto = new Field(this.langMng);
        this.dseNumDescargas = new Field(this.langMng);
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
        this.dseSolicitudAeusolicitudesNumerousolicitud.nameInRequest = 'solicitud.ae_solicitudes.numero_solicitud';
        this.dseSolicitudAeusolicitudesNumerousolicitud.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_14',
            'Nº Solicitud');
        this.dseSolicitudAeusolicitudesNumerousolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_14', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseSolicitudAeusolicitudesNumerousolicitud.enabled = false;
        this.dseSolicitudAeusolicitudesNumerousolicitud.mandatory = false;
        this.dseSolicitudAeusolicitudesNumerousolicitud.dataType = Field.dtString;
        this.dseSolicitudAeusolicitudesNumerousolicitud.maxLength = 50;
        this.dseSolicitudAeusolicitudesNumerousolicitud.assignCSS();
        this.fields.push(this.dseSolicitudAeusolicitudesNumerousolicitud);

        this.dseDrvNumContrato.nameInRequest = 'drvnumcontrato';
        this.dseDrvNumContrato.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_13',
            'Nº Contrato');
        this.dseDrvNumContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_13', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvNumContrato.enabled = false;
        this.dseDrvNumContrato.mandatory = false;
        this.dseDrvNumContrato.dataType = Field.dtString;
        this.dseDrvNumContrato.maxLength = 50;
        this.dseDrvNumContrato.assignCSS();
        this.fields.push(this.dseDrvNumContrato);

        this.dsePersonadrvTipoNumDoc.nameInRequest = 'persona.drvtiponumdoc';
        this.dsePersonadrvTipoNumDoc.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_3',
            'Tipo y Nº Doc.');
        this.dsePersonadrvTipoNumDoc.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dsePersonadrvTipoNumDoc.enabled = false;
        this.dsePersonadrvTipoNumDoc.mandatory = false;
        this.dsePersonadrvTipoNumDoc.dataType = Field.dtString;
        this.dsePersonadrvTipoNumDoc.maxLength = 100;
        this.dsePersonadrvTipoNumDoc.assignCSS();
        this.fields.push(this.dsePersonadrvTipoNumDoc);

        this.dsePersonadrvNombreCompleto.nameInRequest = 'persona.drvnombrecompleto';
        this.dsePersonadrvNombreCompleto.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_4',
            'Persona');
        this.dsePersonadrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_4', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dsePersonadrvNombreCompleto.enabled = false;
        this.dsePersonadrvNombreCompleto.mandatory = false;
        this.dsePersonadrvNombreCompleto.dataType = Field.dtString;
        this.dsePersonadrvNombreCompleto.maxLength = 255;
        this.dsePersonadrvNombreCompleto.assignCSS();
        this.fields.push(this.dsePersonadrvNombreCompleto);

        this.dseEstado.nameInRequest = 'estado';
        this.dseEstado.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_6',
            'Estado');
        this.dseEstado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_6', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseEstado.enabled = false;
        this.dseEstado.mandatory = false;
        this.dseEstado.dataType = Field.dtNat;
        this.dseEstado.options = DefinedSelections.DS_ESTADODOCUMENTOG;
        this.dseEstado.assignCSS();
        this.fields.push(this.dseEstado);

        this.dseTipo.nameInRequest = 'tipo';
        this.dseTipo.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_7',
            'Tipo');
        this.dseTipo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_7', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseTipo.enabled = false;
        this.dseTipo.mandatory = false;
        this.dseTipo.dataType = Field.dtNat;
        this.dseTipo.options = DefinedSelections.DS_TIPODOCUMENTOG;
        this.dseTipo.assignCSS();
        this.fields.push(this.dseTipo);

        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_8',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_8', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 150;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseFechaSubida.nameInRequest = 'fechasubida';
        this.dseFechaSubida.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_5',
            'Fecha subida');
        this.dseFechaSubida.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_5', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseFechaSubida.enabled = false;
        this.dseFechaSubida.mandatory = false;
        this.dseFechaSubida.dataType = Field.dtDatetime;
        this.dseFechaSubida.assignCSS();
        this.fields.push(this.dseFechaSubida);

        this.dseIdDocEnGestor.nameInRequest = 'iddocengestor';
        this.dseIdDocEnGestor.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_12',
            'Id. En Gestor');
        this.dseIdDocEnGestor.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_12', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseIdDocEnGestor.enabled = false;
        this.dseIdDocEnGestor.mandatory = false;
        this.dseIdDocEnGestor.dataType = Field.dtString;
        this.dseIdDocEnGestor.maxLength = 255;
        this.dseIdDocEnGestor.assignCSS();
        this.fields.push(this.dseIdDocEnGestor);

        this.dseResultadoSubida.nameInRequest = 'resultadosubida';
        this.dseResultadoSubida.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_11',
            'Resultado');
        this.dseResultadoSubida.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_11', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseResultadoSubida.enabled = false;
        this.dseResultadoSubida.mandatory = false;
        this.dseResultadoSubida.dataType = Field.dtText;
        this.dseResultadoSubida.assignCSS();
        this.fields.push(this.dseResultadoSubida);

        this.dseEmailEnvioDevuelto.nameInRequest = 'emailenviodevuelto';
        this.dseEmailEnvioDevuelto.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_10',
            'Envío email devuelto');
        this.dseEmailEnvioDevuelto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseEmailEnvioDevuelto.enabled = false;
        this.dseEmailEnvioDevuelto.mandatory = false;
        this.dseEmailEnvioDevuelto.dataType = Field.dtString;
        this.dseEmailEnvioDevuelto.maxLength = 255;
        this.dseEmailEnvioDevuelto.assignCSS();
        this.fields.push(this.dseEmailEnvioDevuelto);

        this.dseNumDescargas.nameInRequest = 'numdescargas';
        this.dseNumDescargas.alias = this.langMng.translateText(
            'cls_DocumentoG_ds_DS_DocumentoG_IIU_item_Clas_1434446200832109CjtoVis_2ICtjoVis_9',
            'Nº Descargas');
        this.dseNumDescargas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434446200832109CjtoVis_2ICtjoVis_9', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNumDescargas.enabled = false;
        this.dseNumDescargas.mandatory = false;
        this.dseNumDescargas.dataType = Field.dtInt;
        this.dseNumDescargas.assignCSS();
        this.fields.push(this.dseNumDescargas);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1434446200832109AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoG_act_A_DocumentoG_IIUDetalles_item_Clas_1434446200832109AccOfer_2ElemAcc_3',
            'Previsualizar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentog.name;
        accItem.targetUI = ModelConstants.Documentog.siuuprevisualizarato;
        accItem.setNoShowProperties('previsualizarATO', 'p_thisdocumentog_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }
}
