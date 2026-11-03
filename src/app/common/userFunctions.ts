import { Injectable } from '@angular/core';
import { Util } from './app.utils';

/**
 * « User functions »
 */
import { AppGlobalInfo } from '../app.appglobalinfo';

@Injectable({providedIn: 'root'})
export class UserFunctions {

    constructor(private util: Util, private appGlobalInfo: AppGlobalInfo) { }

    /**
     * Devuelve la EPS Sanitas, esto es, la primera que tenga la marca de EPS Sanitas a true. Se utiliza en reglas de dependencia.
     */
    public fu_getEPSSanitas(): Promise<any> {
        const params = {displaySetItems: ''};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fu_getEPSSanitas', params, false).then((result: any) => {
                if (result && result.oid) {
                    resolve(result.oid);
                    return;
                }
                if (result && result.jsonOID) {
                    resolve(JSON.parse(result.jsonOID));
                    return;
                }                resolve(undefined);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * Devuelve el parentesco titular. Se utiliza en reglas de dependencia.
     */
    public fu_getParentescoTitular(): Promise<any> {
        const params = {displaySetItems: ''};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fu_getParentescoTitular', params, false).then((result: any) => {
                if (result && result.oid) {
                    resolve(result.oid);
                    return;
                }
                if (result && result.jsonOID) {
                    resolve(JSON.parse(result.jsonOID));
                    return;
                }                resolve(undefined);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * No comments
     */
    public fu_GetTextoProteccionDatos(): Promise<string> {
        const params = {};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fu_GetTextoProteccionDatos', params, true).then((result: any) => {
                resolve(result);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * No comments
     * @param pfuuUsuario No comments
     */
    public fu_getAsesor(pfuuUsuario: string): Promise<any> {
        const params = {pfu_usuario: pfuuUsuario, displaySetItems: ''};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fu_getAsesor', params, false).then((result: any) => {
                if (result && result.oid) {
                    resolve(result.oid);
                    return;
                }
                if (result && result.jsonOID) {
                    resolve(JSON.parse(result.jsonOID));
                    return;
                }                resolve(undefined);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * No comments
     * @param pfPersona No comments
     */
    public fu_GetDirResidenciaPersona(pfPersona: any): Promise<any> {
        const params = {pfpersona: pfPersona, displaySetItems: ''};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fu_GetDirResidenciaPersona', params, false).then((result: any) => {
                if (result && result.oid) {
                    resolve(result.oid);
                    return;
                }
                if (result && result.jsonOID) {
                    resolve(JSON.parse(result.jsonOID));
                    return;
                }                resolve(undefined);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * Obtiene el texto para mostrar en la primera firma de una solicitud
     * @param pfFirma Indica si es el texto para la primera (1) o la segunda (2) firma
     */
    public fu_GetTextoAvisoFirma(pfFirma: number): Promise<string> {
        const params = {pffirma: pfFirma};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fu_GetTextoAvisoFirma', params, true).then((result: any) => {
                resolve(result);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * No comments
     */
    public fuGetFechaDesdeVarFiltro(): Promise<Date> {

        // Devolvemos el valor de la ficha de inicio por defecto para consultas de solicitudes.
        // El valor es la fecha actual menos los días indicados en el parmámetros de configuración que indica el perioso a utilizar
        //  El parámetros es uno de lso datos que se cargan an la cache del usuario
        let newDate = new Date();
        // Si lo tenemos ...
        if (this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes) {
            newDate.setDate(newDate.getDate() - this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes);
        } else {
            // Si no tenemos el valor del parametros guardado, utilizamos por defecto 30 dias
            newDate.setDate(newDate.getDate() - 30);
        }

        return  Promise.resolve( newDate);
    }

    /**
     * No comments
     * @param vfNumContrato No comments
     */
    public fuExisteContratoExentoFIngreso(vfNumContrato: string): Promise<boolean> {
        const params = {vfnumcontrato: vfNumContrato};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('fuExisteContratoExentoFIngreso', params, false).then((result: any) => {
                resolve(result);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

}
