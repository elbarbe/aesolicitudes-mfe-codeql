import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldBlob, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_NuevaAfiliacion of Solicitud »
 */
import { GlobalServicesServices } from '../globalservices/globalservices.services';
import { ErrorInformation, LogicError } from '../common/answerRequestInformation';

export class SolicitudIIUuNuevaAfiliacionComponent extends AbstractIIU {

    /** Display Set elements */
    public dseAeusolicitudesNumerousolicitud: Field;
    public dseAeusolicitudesFechauasignacion: Field;
    public dseFInicioContrato: Field;
    public dsedrvGrupoAsociado: Field;
    public dseEsTraslado: FieldDefinedSelection;
    public dseEnvioCarnetFisico: FieldDefinedSelection;
    public dseFirmaImagenFirma: FieldBlob;

    private globalServices: GlobalServicesServices;

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
        this.idXML = 'Clas_1431957012480960UIInst_1';
        this.className = ModelConstants.Solicitud.name;
        this.classAlias = this.langMng.translateText('cls_Solicitud',
            'Solicitud');
        this.supplementaryInfoAtt.push('ae_solicitudes.numero_solicitud');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_Solicitud_iiu_IIU_NuevaAfiliacion',
            'Información de Solicitud');
        this.queryURL = '/api/SolicitudApi/GetPopulationDynamic';

        this.dseAeusolicitudesNumerousolicitud = new Field(this.langMng);
        this.dseAeusolicitudesFechauasignacion = new Field(this.langMng);
        this.dseFInicioContrato = new Field(this.langMng);
        this.dsedrvGrupoAsociado = new Field(this.langMng);
        this.dseEsTraslado = new FieldDefinedSelection(this.langMng);
        this.dseEnvioCarnetFisico = new FieldDefinedSelection(this.langMng);
        this.dseFirmaImagenFirma = new FieldBlob(this.langMng);

        this.globalServices = new GlobalServicesServices(appGlobalInfo, util);        
        this.cssClasses += 'cssNavPrimero';
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseAeusolicitudesNumerousolicitud.nameInRequest = 'ae_solicitudes.numero_solicitud';
        this.dseAeusolicitudesNumerousolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_8',
            'Nº Solicitud');
        this.dseAeusolicitudesNumerousolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_8', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseAeusolicitudesNumerousolicitud.enabled = false;
        this.dseAeusolicitudesNumerousolicitud.mandatory = false;
        this.dseAeusolicitudesNumerousolicitud.dataType = Field.dtString;
        this.dseAeusolicitudesNumerousolicitud.maxLength = 50;
        this.dseAeusolicitudesNumerousolicitud.assignCSS();
        this.fields.push(this.dseAeusolicitudesNumerousolicitud);

        this.dseAeusolicitudesFechauasignacion.nameInRequest = 'ae_solicitudes.fecha_asignacion';
        this.dseAeusolicitudesFechauasignacion.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_9',
            'Fecha elaboración');
        this.dseAeusolicitudesFechauasignacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_9', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseAeusolicitudesFechauasignacion.enabled = false;
        this.dseAeusolicitudesFechauasignacion.mandatory = false;
        this.dseAeusolicitudesFechauasignacion.dataType = Field.dtDate;
        this.dseAeusolicitudesFechauasignacion.assignCSS();
        this.fields.push(this.dseAeusolicitudesFechauasignacion);

        this.dseFInicioContrato.nameInRequest = 'finiciocontrato';
        this.dseFInicioContrato.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_3',
            'Inicio contratación');
        this.dseFInicioContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseFInicioContrato.enabled = false;
        this.dseFInicioContrato.mandatory = false;
        this.dseFInicioContrato.dataType = Field.dtDate;
        this.dseFInicioContrato.assignCSS();
        this.fields.push(this.dseFInicioContrato);

        this.dsedrvGrupoAsociado.nameInRequest = 'drvgrupoasociado';
        this.dsedrvGrupoAsociado.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_7',
            'Grupo asociado');
        this.dsedrvGrupoAsociado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_7', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dsedrvGrupoAsociado.enabled = false;
        this.dsedrvGrupoAsociado.mandatory = false;
        this.dsedrvGrupoAsociado.dataType = Field.dtString;
        this.dsedrvGrupoAsociado.maxLength = 150;
        this.dsedrvGrupoAsociado.assignCSS();
        this.fields.push(this.dsedrvGrupoAsociado);

        this.dseEsTraslado.nameInRequest = 'estraslado';
        this.dseEsTraslado.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_6',
            'Es traslado');
        this.dseEsTraslado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_6', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseEsTraslado.enabled = false;
        this.dseEsTraslado.mandatory = false;
        this.dseEsTraslado.dataType = Field.dtBool;
        this.dseEsTraslado.options = DefinedSelections.DS_SINO;
        this.dseEsTraslado.assignCSS();
        this.fields.push(this.dseEsTraslado);

        this.dseEnvioCarnetFisico.nameInRequest = 'enviocarnetfisico';
        this.dseEnvioCarnetFisico.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_10',
            'Envío carnet físico');
        this.dseEnvioCarnetFisico.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo']);
        this.dseEnvioCarnetFisico.enabled = false;
        this.dseEnvioCarnetFisico.mandatory = false;
        this.dseEnvioCarnetFisico.dataType = Field.dtBool;
        this.dseEnvioCarnetFisico.options = DefinedSelections.DS_SINO;
        this.dseEnvioCarnetFisico.assignCSS();
        this.fields.push(this.dseEnvioCarnetFisico);

        this.dseFirmaImagenFirma.nameInRequest = 'firma.imagenfirma';
        this.dseFirmaImagenFirma.alias = this.langMng.translateText(
            'cls_Solicitud_ds_DS_Solicitud_IIUNuevaAfil_item_Clas_1431957012480960CjtoVis_4ICtjoVis_11',
            'Firma');
        this.dseFirmaImagenFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431957012480960CjtoVis_4ICtjoVis_11', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseFirmaImagenFirma.enabled = false;
        this.dseFirmaImagenFirma.mandatory = false;
        this.dseFirmaImagenFirma.dataType = Field.dtBlob;
        this.dseFirmaImagenFirma.assignCSS();
        this.fields.push(this.dseFirmaImagenFirma);

    }

    public override doAction(actionId: number): void {

        const action = this.getActionById(actionId);
        if (action && action.targetClass === ModelConstants.Solicitud.name &&
            action.targetUI === ModelConstants.Solicitud.siuuenviarsmsinfopago &&
            this.getSelectedOids().length === 1) {
            // Lanzamos el servicio de info pago y generamos el PDF
            this.setShowWait(true);
            // Lanzamos el servicio ignorando la respuesta
            this.util.executeNoShowService( ModelConstants.Solicitud.name,
                action.noShowServiceName,
                this.getSelectedOids()[0],
                action.noShowArgumentName);

            const request: {ptsolicitud_oid: any, pttipo: number} = { ptsolicitud_oid: this.getSelectedOids()[0], pttipo: 0};
            const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + '/api/GlobalServicesApi/OGETREPORTE';
            this.util.callHttpPost(url, request, false).then((response: any) => {
                this.setShowWait(false);
                const posibleError = new LogicError(response);
                if (posibleError.IsError()) {
                    this.util.addErrorMessage(posibleError.message);
                } else  if (response.oaarchivo && response.oanombrearchivo) {
                    this.util.openInNewWindow(response.oaarchivo, response.oanombrearchivo);
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
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431957012480960AccOfer_8ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroNuevaAfil_item_Clas_1431957012480960AccOfer_8ElemAcc_1',
            'Firma solicitud');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutcrearomodfirma;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431957012480960AccOfer_8ElemAcc_7';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroNuevaAfil_item_Clas_1431957012480960AccOfer_8ElemAcc_7',
            'Modificar encabezado');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuutmodencabezado;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431957012480960AccOfer_8ElemAcc_10';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroNuevaAfil_item_Clas_1431957012480960AccOfer_8ElemAcc_10',
            'Modificar marca carnet');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuumodmarcacarnet;
        accItem.setShowInModalProperties('imes-solicitud-siu-modmarcacarnet',
            this.langMng.translateText(
            'cls_Solicitud_svc_modMarcaCarnet',
            'Modificar marca carnet'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['completada'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431957012480960AccOfer_8ElemAcc_9';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroNuevaAfil_item_Clas_1431957012480960AccOfer_8ElemAcc_9',
            'Ver PDF');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuuenviarsmsinfopago;
        accItem.setNoShowProperties('enviarSMSInfoPago', 'p_thissolicitud_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1431957012480960AccOfer_8ElemAcc_12';
        accItem.alias = this.langMng.translateText(
            'cls_Solicitud_act_A_SolicitudIIUMaestroNuevaAfil_item_Clas_1431957012480960AccOfer_8ElemAcc_12',
            'Generar solicitud');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitud.name;
        accItem.targetUI = ModelConstants.Solicitud.siuudummyugenerarsolicitud;
        accItem.setNoShowProperties('dummy_GenerarSolicitud', 'p_thissolicitud_oid', '', false);
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
        navItem.idXML = 'Clas_1431957012480960NavOfer_8ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Solicitud_nav_N_Solicitud_Maestro_item_Clas_1431957012480960NavOfer_8ElemNav_1',
            'Subir documentos');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        navItem.targetClass = ModelConstants.Documentog.name;
        navItem.targetUI = ModelConstants.Documentog.piuudocumentog;
        navItem.rolePath = 'Solicitud';
        navItem.targetType  = ScenarioType.Population;
        this.navigations.push(navItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 2) {
                isEnabled = this.checkPrecondicionInAdvanceNum2(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 2
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum2(row: any): boolean {
        // Completada = false
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'completada')), false))) {
            return false;
        }
        return true;
    }
}
