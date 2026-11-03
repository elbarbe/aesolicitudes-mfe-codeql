import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from './app.cachedependencyrules';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { Util } from './app.utils';
import { UserFunctions } from './userFunctions';
import { StandardFunctions } from './standardFunctions';

/**
 * « Conditional navigation manager »
 * Handles all conditional navigation defined in the model
 */
@Injectable({providedIn: 'root'})
export class ConditionalNavigationMng {

    /** Cache for queries */
    private queriesCache: CacheDependencyRules;

    constructor(private readonly appGlobalInfo: AppGlobalInfo, private readonly util: Util, private readonly stdFun: StandardFunctions,
                private readonly usrFunc: UserFunctions) {
        this.queriesCache = new CacheDependencyRules(this.appGlobalInfo, this.util);
     }

    /**
     * Process the conditional navigation
     * @param className Class name
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    public processConditionalNavigation(className: string, serviceName: string, request: any, response: any, previousContext: any,
                                        comeBackContext: any): boolean {

        this.appGlobalInfo.appExchangeInfo.clearConditionalNavigation();

        switch (className.toLowerCase()) {
            case 'Ae_solicitudes'.toLowerCase():
                return this.processCondNavaeusolicitudes(serviceName, request, response, previousContext, comeBackContext);
            case 'Solicitud'.toLowerCase():
                return this.processCondNavsolicitud(serviceName, request, response, previousContext, comeBackContext);
            case 'ProteccionDatos'.toLowerCase():
                return this.processCondNavprotecciondatos(serviceName, request, response, previousContext, comeBackContext);
            case 'Usuario'.toLowerCase():
                return this.processCondNavusuario(serviceName, request, response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Ae_solicitudes
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavaeusolicitudes(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'TNUEVAAFILIACION') {
            return this.condNavAeusolicitudesTNUEVAAFILIACION(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TINCLUSIONSC') {
            return this.condNavAeusolicitudesTINCLUSIONSC(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Solicitud
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavsolicitud(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'dummy_Redirigir') {
            return this.condNavSolicituddummyuRedirigir(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'dummy_GenerarSolicitud') {
            return this.condNavSolicituddummyuGenerarSolicitud(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class ProteccionDatos
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavprotecciondatos(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'TCREARPROTECCIONDATOSNA') {
            return this.condNavProteccionDatosTCREARPROTECCIONDATOSNA(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TCREARPROTECCIONDATOSINC') {
            return this.condNavProteccionDatosTCREARPROTECCIONDATOSINC(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Usuario
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavusuario(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'showCuesMedico') {
            return this.condNavUsuarioshowCuesMedico(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }


    /**
     * Manages the conditional navigation of service TNUEVAAFILIACION of class Ae_solicitudes
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavAeusolicitudesTNUEVAAFILIACION(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
            'Gestor', 'MesaDeApoyo'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                ModelConstants.Solicitud.mdiuunuevaafiliacion, previousContext, comeBackContext);
            exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
            exchInfo.selectedOids = [
                this.util.oidBuilder.buildOidSolicitud(response.pt_ps_solicitud.id_solicitud)];
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service TINCLUSIONSC of class Ae_solicitudes
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavAeusolicitudesTINCLUSIONSC(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (response.pt_ps_solicitud) {
            this.queriesCache.addQueryInstance(ModelConstants.Solicitud.name, response.pt_ps_solicitud,
                'tipoContrato');
        }
        this.queriesCache.searchAll().then(() => {
        let varptupsusolicitud!: InstanceCache;
        if (response.pt_ps_solicitud) {
            varptupsusolicitud = this.queriesCache.getInstance(ModelConstants.Solicitud.name, response.pt_ps_solicitud);
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // pt_ps_Solicitud.tipoContrato = 3
            if (this.util.valueEquals(this.util.getInt(varptupsusolicitud.get('tipoContrato')), 3) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuuinclusioncolectivo, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitud(response.pt_ps_solicitud.id_solicitud)];
                this.util.navigateTo(exchInfo);
            }
            // pt_ps_Solicitud.tipoContrato = 1
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varptupsusolicitud.get('tipoContrato')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuuinclusionfamiliar, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitud(response.pt_ps_solicitud.id_solicitud)];
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service dummy_Redirigir of class Solicitud
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicituddummyuRedirigir(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.p_thissolicitud_oid) {
            this.queriesCache.addQueryInstance(ModelConstants.Solicitud.name, request.p_thissolicitud_oid,
                'Tramite,tipoContrato');
        }
        this.queriesCache.searchAll().then(() => {
        let varputhissolicitud!: InstanceCache;
        if (request.p_thissolicitud_oid) {
            varputhissolicitud = this.queriesCache.getInstance(ModelConstants.Solicitud.name, request.p_thissolicitud_oid);
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // p_thisSolicitud.Tramite = 1
            if (this.util.valueEquals(this.util.getInt(varputhissolicitud.get('Tramite')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuunuevaafiliacion, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitud_oid];
                this.util.navigateTo(exchInfo);
            }
            // p_thisSolicitud.Tramite = 2 AND p_thisSolicitud.tipoContrato = 1
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varputhissolicitud.get('Tramite')), 2) &&
                this.util.valueEquals(this.util.getInt(varputhissolicitud.get('tipoContrato')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuuinclusionfamiliar, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitud_oid];
                this.util.navigateTo(exchInfo);
            }
            // p_thisSolicitud.Tramite = 2 AND p_thisSolicitud.tipoContrato = 3
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varputhissolicitud.get('Tramite')), 2) &&
                this.util.valueEquals(this.util.getInt(varputhissolicitud.get('tipoContrato')), 3) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones',
                'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.mdiuuinclusioncolectivo, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitud.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitud_oid];
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service dummy_GenerarSolicitud of class Solicitud
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicituddummyuGenerarSolicitud(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.p_thissolicitud_oid) {
            this.queriesCache.addQueryInstance(ModelConstants.Solicitud.name, request.p_thissolicitud_oid,
                'Ae_solicitudes.PlanT.EsVoluntario');
        }
        this.queriesCache.searchAll().then(() => {
        let varputhissolicitud!: InstanceCache;
        if (request.p_thissolicitud_oid) {
            varputhissolicitud = this.queriesCache.getInstance(ModelConstants.Solicitud.name, request.p_thissolicitud_oid);
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // p_thisSolicitud.Ae_solicitudes.PlanT.EsVoluntario = true
            if (this.util.valueEquals(this.util.getBool(varputhissolicitud.get('Ae_solicitudes.PlanT.EsVoluntario')), true) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Funcionario', 'Admin', 'SuperAdmin', 'Asesor', 'AreaMedica',
                'Afiliaciones', 'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitud.name,
                    ModelConstants.Solicitud.siuutmarcarcompletada, previousContext, comeBackContext);
                // p_thisSolicitud
                exchInfo.customData.p_thissolicitud = request.p_thissolicitud_oid;
                this.util.navigateTo(exchInfo);
            }
            // p_thisSolicitud.Ae_solicitudes.PlanT.EsVoluntario = false
            if (!conditionFulfilled &&
                this.util.valueEquals(this.util.getBool(varputhissolicitud.get('Ae_solicitudes.PlanT.EsVoluntario')), false) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Globalservices.name,
                    ModelConstants.Globalservices.siuuogenerarsolicitud2, previousContext, comeBackContext);
                // pt_p_SolicitudAE
                exchInfo.customData.pt_p_solicitudae = request.p_thissolicitud_oid;
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service TCREARPROTECCIONDATOSNA of class ProteccionDatos
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavProteccionDatosTCREARPROTECCIONDATOSNA(
        request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Aeusolicitudes.name,
                ModelConstants.Aeusolicitudes.siuutnuevaafiliacion, previousContext, comeBackContext);
            // pt_ProteccionDatos
            exchInfo.customData.pt_protecciondatos = this.util.oidBuilder.buildOidProteccionDatos(response.ps_thispd.identificador);
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service TCREARPROTECCIONDATOSINC of class ProteccionDatos
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavProteccionDatosTCREARPROTECCIONDATOSINC(
        request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Aeusolicitudes.name,
                ModelConstants.Aeusolicitudes.siuutinclusionsc, previousContext, comeBackContext);
            // pt_ProteccionDatos
            exchInfo.customData.pt_protecciondatos = this.util.oidBuilder.buildOidProteccionDatos(response.ps_thispd.identificador);
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service showCuesMedico of class Usuario
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavUsuarioshowCuesMedico(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
            'MesaDeApoyo'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Cuestionariop.name,
                ModelConstants.Cuestionariop.iiuucuestionario, previousContext, comeBackContext);
            exchInfo.selectedOidsClassName = ModelConstants.Cuestionariop.name;
            exchInfo.selectedOids = [
                this.util.oidBuilder.buildOidCuestionarioP(response.ps_cuesmedico.numero)];
            this.util.navigateTo(exchInfo);
        }
        return true;
    }
}
