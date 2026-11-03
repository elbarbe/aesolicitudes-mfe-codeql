import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * « Global services »
 */
export class GlobalServicesServices extends AbstractServices {

    private oGSINCGRUPOSASOCIADOSSrvName = 'OGSINCGRUPOSASOCIADOS';
    private tGSINCESTADOSPERSONASrvName = 'TGSINCESTADOSPERSONA';
    private tGSINCPAISESSrvName = 'TGSINCPAISES';
    private tGSELECCONTRATOASOCSrvName = 'TGSELECCONTRATOASOC';
    private tGSELECCONTRATOASOCTITSrvName = 'TGSELECCONTRATOASOCTIT';
    private oGENERARSOLICITUD2SrvName = 'OGENERARSOLICITUD2';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GlobalServices');
    }

    /**
     * Call to the service 'OGSINCGRUPOSASOCIADOS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public oGSINCGRUPOSASOCIADOS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.oGSINCGRUPOSASOCIADOSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCESTADOSPERSONA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCESTADOSPERSONA(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCESTADOSPERSONASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCPAISES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCPAISES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCPAISESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSELECCONTRATOASOC' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puSolicitudInArg Mandatory argument 'p_Solicitud'. Oid of 'Solicitud' class
     * @param ptNumContratoInArg Mandatory argument 'ptNumContrato'
     * @param ptCodLegalProductoInArg Mandatory argument 'ptCodLegalProducto'
     * @param ptCodLegalPlanInArg Mandatory argument 'ptCodLegalPlan'
     * @param ptNumFamiliaInArg Mandatory argument 'ptNumFamilia'
     */
    public tGSELECCONTRATOASOC(
        puSolicitudInArg: any, ptNumContratoInArg: string, ptCodLegalProductoInArg: string, ptCodLegalPlanInArg: string,
        ptNumFamiliaInArg: string): Promise<ErrorInformation | void> {
        const request: {
            p_solicitud_oid: any, ptnumcontrato: string, ptcodlegalproducto: string, ptcodlegalplan: string, ptnumfamilia: string
        } = {
            p_solicitud_oid: puSolicitudInArg, ptnumcontrato: ptNumContratoInArg, ptcodlegalproducto: ptCodLegalProductoInArg,
            ptcodlegalplan: ptCodLegalPlanInArg, ptnumfamilia: ptNumFamiliaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSELECCONTRATOASOCSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSELECCONTRATOASOCTIT' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuSolicitudInArg Mandatory argument 'pt_p_Solicitud'. Oid of 'Solicitud' class
     * @param ptNumContratoInArg Optional argument 'ptNumContrato'
     * @param ptCodLegalProductoInArg Optional argument 'ptCodLegalProducto'
     * @param ptCodLegalPlanInArg Optional argument 'ptCodLegalPlan'
     * @param ptNumFamiliaInArg Optional argument 'ptNumFamilia'
     */
    public tGSELECCONTRATOASOCTIT(
        ptupuSolicitudInArg: any, ptNumContratoInArg: string, ptCodLegalProductoInArg: string, ptCodLegalPlanInArg: string,
        ptNumFamiliaInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_solicitud_oid: any, ptnumcontrato: string, ptcodlegalproducto: string, ptcodlegalplan: string, ptnumfamilia: string
        } = {
            pt_p_solicitud_oid: ptupuSolicitudInArg, ptnumcontrato: ptNumContratoInArg, ptcodlegalproducto: ptCodLegalProductoInArg,
            ptcodlegalplan: ptCodLegalPlanInArg, ptnumfamilia: ptNumFamiliaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSELECCONTRATOASOCTITSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGENERARSOLICITUD2' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuSolicitudAEInArg Mandatory argument 'pt_p_SolicitudAE'. Oid of 'Solicitud' class
     */
    public oGENERARSOLICITUD2(
        ptupuSolicitudAEInArg: any):
        Promise<ErrorInformation | {
            pt_ps_numsolicitud: string,
            pt_ps_errorws: string,
            pserror: boolean
        }> {
        const request: {
            pt_p_solicitudae_oid: any
        } = {
            pt_p_solicitudae_oid: ptupuSolicitudAEInArg
        };
        return new Promise<ErrorInformation | {
            pt_ps_numsolicitud: string,
            pt_ps_errorws: string,
            pserror: boolean
        }> ((resolve, reject) => {
            this.callService(this.oGENERARSOLICITUD2SrvName, request).then((response: any) => {
                resolve({
                    pt_ps_numsolicitud: response.pt_ps_numsolicitud,
                    pt_ps_errorws: response.pt_ps_errorws,
                    pserror: response.pserror
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
