import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
import { GestionCache } from '../common/gestionCache';
import { BHServicesUtil } from '../bhcallutils/bhservicesutil';
@Component({
    selector: 'imes-solicitud-siu-tindicartitular2',
    templateUrl: './siu_tindicartitular2.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudSIUuTINDICARTITULAR2Component extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitud: FieldOVLenseSearch;
    public ptupuagrTipoIdentificacion: FieldOVPreload;
    public ptupuagrDepartamentoNacimiento: FieldOVPreload;
    public ptupuagrMunicipioNacimiento: FieldOVPreload;
    public ptupuagrEstadoCivil: FieldOVPreload;
    public ptupuatrNumIdentificacion: Field;
    public ptupuatrPrimerNombre: Field;
    public ptupuatrSegundoNombre: Field;
    public ptupuatrPrimerApellido: Field;
    public ptupuatrSegundoApellido: Field;
    public ptupuatrFechaNacimiento: Field;
    public ptupuatrGenero: FieldDefinedSelection;
    public ptupuatrIndicadorExtranjero: FieldDefinedSelection;
    public ptupuatrTelefonoFijo: Field;
    public ptupuatrTelefonoCelular: Field;
    public ptupuatrCorreoElectronico: Field;
    public ptupuagrDepartamento: FieldOVPreload;
    public ptupuagrMunicipio: FieldOVPreload;
    public ptupuatrDireccionCompleta: Field;
    public ptupuatrRural: FieldDefinedSelection;
    public ptupuagrPais: FieldOVLenseSearch;
    public ptupuCodigo: Field;
    public ptupuTieneEPSSanitas: FieldDefinedSelection;
    public ptupuRechazadoAfiliacion: Field;
    public ptupuTitularBeneficios: FieldDefinedSelection;
    public ptEstadoPersona: FieldOVLenseSearch;
    public ptDCDepartamento: FieldOVPreload;
    public ptDCMunicipio: FieldOVPreload;
    public ptDCDireccionCompleta: Field;
    public ptDCRural: FieldDefinedSelection;
    public ptDCTelefonoFijo: Field;
    public ptDCTelefonoCelular: Field;
    public ptReplicarDir: FieldDefinedSelection;
    public ptRazonSocial: Field;

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
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions,
        private bhServicesUtil: BHServicesUtil, private gestionCache: GestionCache) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1431957012480960Ser_93UIServ_1';
        this.className = ModelConstants.Solicitud.name;
        this.iuName = ModelConstants.Solicitud.siuutindicartitular2;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TINDICARTITULAR2';
        this.title = this.langMng.translateText('cls_Solicitud_svc_TINDICARTITULAR2',
            'Indicar titular');

        // Create inbound argument components
        this.puthisSolicitud = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuagrDepartamentoNacimiento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipioNacimiento = new FieldOVPreload(this.langMng);
        this.ptupuagrEstadoCivil = new FieldOVPreload(this.langMng);
        this.ptupuatrNumIdentificacion = new Field(this.langMng);
        this.ptupuatrPrimerNombre = new Field(this.langMng);
        this.ptupuatrSegundoNombre = new Field(this.langMng);
        this.ptupuatrPrimerApellido = new Field(this.langMng);
        this.ptupuatrSegundoApellido = new Field(this.langMng);
        this.ptupuatrFechaNacimiento = new Field(this.langMng);
        this.ptupuatrGenero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrIndicadorExtranjero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrTelefonoFijo = new Field(this.langMng);
        this.ptupuatrTelefonoCelular = new Field(this.langMng);
        this.ptupuatrCorreoElectronico = new Field(this.langMng);
        this.ptupuagrDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipio = new FieldOVPreload(this.langMng);
        this.ptupuatrDireccionCompleta = new Field(this.langMng);
        this.ptupuatrRural = new FieldDefinedSelection(this.langMng);
        this.ptupuagrPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuCodigo = new Field(this.langMng);
        this.ptupuTieneEPSSanitas = new FieldDefinedSelection(this.langMng);
        this.ptupuRechazadoAfiliacion = new Field(this.langMng);
        this.ptupuTitularBeneficios = new FieldDefinedSelection(this.langMng);
        this.ptEstadoPersona = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptDCDepartamento = new FieldOVPreload(this.langMng);
        this.ptDCMunicipio = new FieldOVPreload(this.langMng);
        this.ptDCDireccionCompleta = new Field(this.langMng);
        this.ptDCRural = new FieldDefinedSelection(this.langMng);
        this.ptDCTelefonoFijo = new Field(this.langMng);
        this.ptDCTelefonoCelular = new Field(this.langMng);
        this.ptReplicarDir = new FieldDefinedSelection(this.langMng);
        this.ptRazonSocial = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    private buscarPersonaenCORE(): void {
    	// Si el usuario no puede ver los datos bÃ¡sicos de persona, no hacemos nada
    	if (!this.appGlobalInfo.getLoggedUserInfo().puedeVerDatosPersona()) {
    		return;
    	}

        // Comprobamos que tengamos el tipo y el numero
        const tipo = this.ptupuagrTipoIdentificacion.getSelectedInstances();
        if (tipo && tipo.length === 1 && this.ptupuatrNumIdentificacion.value) {
            this.limpiarCampos();
            this.buscarPersonaenCOREAux(tipo[0].jsonOID);
        }
    }

    private buscarPersonaenCOREAux(oidJSONTipoIdentificacion: string): void {

        // Recuperamos los datos necesarios para tratar los datos
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion, 'nit');
        this.addQueryInstanceFromField(this.puthisSolicitud, 'NumRadicado,drvPermiteRechazados,AE_SOLICITUDES.PlanT.EsVoluntario');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
            const varTipoIdent = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
            const numSol = varputhissolicitud.get('NumRadicado');
            
            if (varTipoIdent.get('nit')) {
                this.notifyCallToTheBackEnd();
                this.bhServicesUtil.buscarPersonaJuridicaPorOidTipoIdent(oidJSONTipoIdentificacion, this.ptupuatrNumIdentificacion.value, numSol).then((respuesta: any) => {
                    this.notifyAnswerFromToTheBackEnd();
                    if (respuesta?.getOrganizationResponse?.entry &&
                        "0" != respuesta?.getOrganizationResponse.total) {
                        this.cargarPersonaJuridicaDesdeCORE(respuesta);
                    } else {
                        this.setShowWait(false);
                        this.util.addErrorMessage('La persona no existe');
                        this.limpiarCampos();
                        this.changeDetectorRef.markForCheck();
                    }
                }).catch((err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                    this.setShowWait(false);
                    this.util.addErrorMessage(err);
                    this.changeDetectorRef.markForCheck();
                }
                );
            } else {
                this.notifyCallToTheBackEnd();
                this.bhServicesUtil.buscarPersonaPorOidTipoIdent(oidJSONTipoIdentificacion, this.ptupuatrNumIdentificacion.value, numSol).then (( datosPersona: any) => {
                    this.notifyAnswerFromToTheBackEnd();
                    if (datosPersona?.basicData) {
                        this.cargarPersonaNaturalDesdeCORE(datosPersona);
                    } else {
                        this.setShowWait(false);
                        this.util.addErrorMessage('La persona no existe');
                        this.limpiarCampos();
                    }
                    }).catch( (err: Error) => {
                        this.notifyAnswerFromToTheBackEnd();
                        this.setShowWait(false);
                        this.util.addErrorMessage(err);
                    }
                );
            }
        });
    }

    private limpiarCampos(): void {
        this.ptupuatrPrimerNombre.clean();
        this.ptupuatrSegundoNombre.clean();
        this.ptupuatrPrimerApellido.clean();
        this.ptupuatrSegundoApellido.clean();
        this.ptupuatrFechaNacimiento.clean();
        this.ptupuatrGenero.clean();
        this.ptupuatrIndicadorExtranjero.value = false;
        this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);
        this.ptupuatrTelefonoFijo.clean();
        this.ptupuatrTelefonoCelular.clean();
        this.ptupuatrCorreoElectronico.clean();
        this.ptupuagrDepartamentoNacimiento.clean();
        this.ptupuagrMunicipioNacimiento.cleanPreload();
        this.ptupuagrMunicipioNacimiento.clean();
        this.ptupuagrEstadoCivil.clean();
        this.ptupuatrDireccionCompleta.clean();
        this.ptupuatrRural.clean();
        this.ptupuagrMunicipio.cleanPreload();
        this.ptupuagrMunicipio.clean();
        this.ptupuagrDepartamento.clean();
        this.ptDCDireccionCompleta.clean();
        this.ptDCDepartamento.clean();
        this.ptDCMunicipio.clean();
        this.ptDCMunicipio.cleanPreload();
        this.ptDCRural.clean();
        this.ptDCTelefonoFijo.clean();
        this.ptDCTelefonoCelular.clean();
        this.ptReplicarDir.value = false;
        this.ptupuCodigo.clean();
        this.ptupuTieneEPSSanitas.value = false;
        this.ptupuRechazadoAfiliacion.value = false;
        this.ptupuTitularBeneficios.value = true;
        this.ptEstadoPersona.clean();
        this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
    }

    private cargarPersonaJuridicaDesdeCORE(respuesta: any) {

        this.limpiarCampos();

        this.ptupuCodigo.value = 0;

        // Inhabilitamos los campos prque no se puede modificar a una persona juridica
        this.ptupuatrFechaNacimiento.mandatory = false;
        this.ptupuagrMunicipioNacimiento.mandatory = false;
        this.ptupuagrMunicipioNacimiento.mandatory = false;
        this.ptRazonSocial.enabled = false;
        this.ptupuatrCorreoElectronico.enabled = false;
        this.ptupuatrDireccionCompleta.enabled = false;
        this.ptDCDireccionCompleta.enabled = false;
        this.ptupuagrDepartamento.enabled = false;
        this.ptDCDepartamento.enabled = false;
        this.ptupuagrMunicipio.enabled = false;
        this.ptDCMunicipio.enabled = false;
        this.ptupuatrRural.enabled = false;
        this.ptupuatrRural.value = false;
        this.ptDCRural.enabled = false;
        this.ptDCRural.value = false;
        this.ptupuatrTelefonoFijo.enabled = false;
        this.ptupuatrTelefonoCelular.enabled = false;
        this.ptDCTelefonoFijo.enabled = false;
        this.ptDCTelefonoCelular.enabled = false;
        this.ptReplicarDir.enabled = false;
        this.ptReplicarDir.value = false;


        const entry = respuesta.getOrganizationResponse.entry[0];

        this.ptRazonSocial.value = entry.resource?.schema?.name;

        // Correo electronico
        this.ptupuatrCorreoElectronico.value = respuesta.email;
        //this.ptupuCorreoElectronico.value =  BHServicesUtil.getValorElementoPorClave(entry.resource?.schema?.telecom, 'system', 'email', 'value');

        // Direccion, de residencia y correspondencia
        if (respuesta?.direccion) {
            this.ptupuatrDireccionCompleta.value = respuesta?.direccion.line;
            this.ptDCDireccionCompleta.value = respuesta?.direccion.line;
            // Tenemos los codigos legales de departamento y municipio
            const codLegalDep = respuesta?.direccion.state;
            const codLegalMun = respuesta?.direccion.city;
            if (codLegalDep) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.getOidDepartamentoPorCodigoLegal(codLegalDep).then((oidDep: string) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento y precargamos los municipios
                    this.ptupuagrDepartamento.setValue(JSON.parse(oidDep));
                    this.ptDCDepartamento.setValue(JSON.parse(oidDep));
                    this.loadPreloadptupuagrmunicipio();
                    this.loadPreloadptdcmunicipio();

                    if (codLegalMun) {
                        // Buscamos el municipio por codigo legal
                        this.notifyCallToTheBackEnd();
                        this.gestionCache.getOidMunicipioPorCodigoLegal(codLegalMun).then((oidMun: string) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.ptupuagrMunicipio.setValue(JSON.parse(oidMun));
                            this.ptDCMunicipio.setValue(JSON.parse(oidMun));
                        }).catch((err: Error) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.util.addErrorMessage(err);
                        });
                    }
                }).catch( (err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                });
            }
        }        

        // Telefonos
        this.ptupuatrTelefonoFijo.value = respuesta?.telefonoFijo;
        //this.ptupuTelefonoCelular.value = respuesta?.telefonoCelular;

        this.ptDCTelefonoFijo.value = respuesta?.telefonoFijo;
        //this.ptupDCTelefonoCelular.value = respuesta?.telefonoCelular;
    }    
    private cargarPersonaNaturalDesdeCORE(datosPersona: any): void {

        // Lista de promesas a las que tenemos que esperar para terminar
        this.setShowWait(true);
        this.limpiarCampos();

        // Habilitamos campos
        this.ptRazonSocial.enabled = true;
        this.ptupuatrCorreoElectronico.enabled = true;
        this.ptupuatrDireccionCompleta.enabled = true;
        this.ptDCDireccionCompleta.enabled = true;
        this.ptupuagrDepartamento.enabled = true;
        this.ptDCDepartamento.enabled = true;
        this.ptupuagrMunicipio.enabled = true;
        this.ptDCMunicipio.enabled = true;
        this.ptupuatrRural.enabled = true;
        this.ptupuatrRural.value = true;
        this.ptDCRural.enabled = true;
        this.ptupuatrTelefonoFijo.enabled = true;
        this.ptupuatrTelefonoCelular.enabled = true;
        this.ptDCTelefonoFijo.enabled = true;
        this.ptDCTelefonoCelular.enabled = true;
        this.ptReplicarDir.enabled = true;

        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        const permiteRechazados = varputhissolicitud.get('drvPermiteRechazados');
        const planVoluntario = varputhissolicitud.get('AE_SOLICITUDES.PlanT.EsVoluntario');
        const numSol = varputhissolicitud.get('NumRadicado');

        const esPersonaNatural = true;

        // Codigo del CORE
        this.ptupuCodigo.value = datosPersona.basicData.id;
       
        // Rechazado Afiliacion
        this.ptupuRechazadoAfiliacion.value = datosPersona?.rechazadoAfiliacion;

        // Tiene EPS Sanitas
        this.gestionCache.getCodigoLegalTipoIdentificacion(this.ptupuagrTipoIdentificacion.getSelectedInstances()[0].jsonOID).then ((codLegal: string) => {
            this.notifyCallToTheBackEnd();
            this.bhServicesUtil.tieneEPSSanitas(codLegal, this.ptupuatrNumIdentificacion.value, numSol).then ( (tieneEPS: boolean) => {
                this.ptupuTieneEPSSanitas.setValue(tieneEPS);
                this.notifyAnswerFromToTheBackEnd();
                this.changeDetectorRef.markForCheck();
            }).catch( (err: Error) => {
                this.notifyAnswerFromToTheBackEnd();
                this.util.addErrorMessage(err);
                this.changeDetectorRef.markForCheck();
            });
    
        }).catch( (err: Error) => {
            this.util.addErrorMessage(err);
        });

        // Nombre
        this.ptupuatrPrimerNombre.value = datosPersona?.basicData?.name?.name?.firstName;
        this.ptupuatrSegundoNombre.value = datosPersona?.basicData?.name?.name?.secondName;
        this.ptupuatrPrimerApellido.value = datosPersona?.basicData?.name?.name?.firstFamily;
        this.ptupuatrSegundoApellido.value = datosPersona?.basicData?.name?.name?.secondFamily;
        this.ptupuatrFechaNacimiento.value = this.util.getDate(datosPersona?.basicData?.birthDate);
        this.ptupuatrGenero.value = datosPersona?.basicData?.gender;

        if (datosPersona?.basicData?.foreign) {
            this.ptupuatrIndicadorExtranjero.value = true;
        } else {
            this.ptupuatrIndicadorExtranjero.value = false;
        }
        this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);

        this.ptupuatrTelefonoFijo.value = BHServicesUtil.getTelefonoFijoResidencia(datosPersona?.contact?.telecom);
        this.ptupuatrTelefonoCelular.value = BHServicesUtil.getTelefonoCelularResidencia(datosPersona?.contact?.telecom);
        this.ptupuatrCorreoElectronico.value = BHServicesUtil.getCorreoElectronico(datosPersona?.contact?.telecom);

        this.ptupuagrEstadoCivil.setValue( datosPersona?.basicData?.maritalStatus?.code ? 
            this.util.oidBuilder.buildOidEstadoCivil(datosPersona?.basicData?.maritalStatus?.code) : null);

        // Ciudad de nacimiento
        if (datosPersona?.basicData?.extension && datosPersona?.basicData?.extension.length > 0) {
            const valueAddress = datosPersona?.basicData?.extension[0].valueAddress;
            if (valueAddress) {
                // Tenemos los codigos legales de departamento y municipio
                const codLegalDep = valueAddress?.state?.code;
                const codLegalMun = valueAddress?.city?.code;
                if (codLegalDep) {
                    this.notifyCallToTheBackEnd();
                    this.gestionCache.getOidDepartamentoPorCodigoLegal(codLegalDep).then( (oidDep: string) => {
                        this.notifyAnswerFromToTheBackEnd();
                        // Asignamos el valor el argumento y precargamos los municipios
                        this.ptupuagrDepartamentoNacimiento.setValue(JSON.parse(oidDep));
                        this.loadPreloadptupuagrmunicipionacimiento();
                        if (codLegalMun) {
                            // Buscamos el municipio por codigo legal
                            this.gestionCache.getOidMunicipioPorCodigoLegal(codLegalMun).then ((oidMun: string) => {
                                this.notifyAnswerFromToTheBackEnd();
                                this.ptupuagrMunicipioNacimiento.setValue(JSON.parse(oidMun));
                            }).catch( (err: Error) => {
                                this.notifyAnswerFromToTheBackEnd();
                                this.util.addErrorMessage(err);
                            });
                        }
                    }).catch( (err: Error) => {
                        this.notifyAnswerFromToTheBackEnd();
                    });
                }
            }
        }

        // Direccion residencial
        const direccionResidencia = BHServicesUtil.getElemento(datosPersona?.contact?.address, 'use', 'RESIDENCIAL');
        if (direccionResidencia) {
            this.ptupuatrDireccionCompleta.value = direccionResidencia.text;
            this.ptupuatrRural.value = false;
            // Tenemos los codigos legales de departamento y municipio
            const codLegalDep = direccionResidencia?.state?.code;
            const codLegalMun = direccionResidencia.city?.code;
            const codPais = direccionResidencia.country?.code;

            if (codLegalDep) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.getOidDepartamentoPorCodigoLegal(codLegalDep).then( (oidDep: string) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento y precargamos los municipios
                    this.ptupuagrDepartamento.setValue(JSON.parse(oidDep));
                    this.loadPreloadptupuagrmunicipio();
                    if (codLegalMun) {
                        // Buscamos el municipio por codigo legal
                        this.gestionCache.getOidMunicipioPorCodigoLegal(codLegalMun).then ((oidMun: string) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.ptupuagrMunicipio.setValue(JSON.parse(oidMun));
                        }).catch( (err: Error) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.util.addErrorMessage(err);
                        });
                    }
                }).catch((err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                });
            }
            // Pais
            if (codPais) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.existePais(codPais).then((existePais: boolean) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento
                    if (existePais) {
                        this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(codPais));
                    }
                }).catch( (err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                    this.util.addErrorMessage(err);
                });
            }
        }

        // Direccion correspondencia
        const direccionCorrespondencia = BHServicesUtil.getElemento(datosPersona?.contact?.address, 'use', 'CORRESPONDENCIA');
        if (direccionCorrespondencia) {
            this.ptDCDireccionCompleta.value = direccionCorrespondencia.text;
            this.ptDCRural.value = false;
            // Tenemos los codigos legales de departamento y municipio
            const codLegalDep = direccionCorrespondencia.state?.code;
            const codLegalMun = direccionCorrespondencia.city?.code;
            const codPais = direccionCorrespondencia.country?.code;

            if (codLegalDep) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.getOidDepartamentoPorCodigoLegal(codLegalDep).then( (oidDep: string) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento y precargamos los municipios
                    this.ptDCDepartamento.setValue(JSON.parse(oidDep));
                    this.loadPreloadptdcmunicipio();
                    if (codLegalMun) {
                        // Buscamos el municipio por codigo legal
                        this.gestionCache.getOidMunicipioPorCodigoLegal(codLegalMun).then ((oidMun: string) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.ptDCMunicipio.setValue(JSON.parse(oidMun));
                        }).catch( (err: Error) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.util.addErrorMessage(err);
                        });
                    }
                }).catch( (err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                    this.util.addErrorMessage(err);
                });
            }
            // Pais
            if (codPais) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.existePais(codPais).then((existePais: boolean) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento
                    if (existePais) {
                        this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(codPais));
                    }
                }).catch( (err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                    this.util.addErrorMessage(err);
                });
            }
        }

        this.ptDCTelefonoFijo.value = BHServicesUtil.getTelefonoFijoCorrespondencia(datosPersona?.contact?.telecom);

        this.ptDCTelefonoCelular.value = BHServicesUtil.getTelefonoCelularCorrespondencia(datosPersona?.contact?.telecom);
    

        // Estado de la persona
        if (datosPersona.estadoPersona) {
            this.ptEstadoPersona.setValue( this.util.oidBuilder.buildOidEstadoPersona(datosPersona.estadoPersona));
        }

        // Titular con beneficios
        // Condiciones, que sea persona natural y no esta rechazado en Afiliacion
        if (esPersonaNatural && (permiteRechazados || !this.ptupuRechazadoAfiliacion.value) ){
            this.ptupuTitularBeneficios.value = true;
            this.ptupuTitularBeneficios.enabled = true;
        } else {
            this.ptupuTitularBeneficios.value = false;
            this.ptupuTitularBeneficios.enabled = false;
        }

        // Si la persona existe y el plan de la solicitud es voluntario, buscamos los contratos existentes
        // Planes Voluntarios - Req. 5: Validacion de afiliado - Referencia: HU-AEEPS-04
        if (this.ptupuTitularBeneficios.value && planVoluntario) {
            this.notifyCallToTheBackEnd();
            this.bhServicesUtil.consultarBeneficiario( 
                BHServicesUtil.getValorElementoPorClave(datosPersona.basicData.identifier, 'type', 'TIPO_IDENTIFICACION', 'value'),
                BHServicesUtil.getValorElementoPorClave(datosPersona.basicData.identifier, 'type', 'NUMERO_IDENTIFICACION', 'value'),
                numSol).then ((contratos: string[]) => {
                // Recorremos los contratos encontrados
                this.notifyAnswerFromToTheBackEnd();
                if (contratos) {
                    // Recorremos los contratos 
                    let mensaje = '';

                    mensaje += this.ptupuatrPrimerNombre.value ? this.ptupuatrPrimerNombre.value : '';
                    mensaje += this.ptupuatrSegundoNombre.value ? " " + this.ptupuatrSegundoNombre.value : '';
                    mensaje += this.ptupuatrPrimerApellido.value ? " " + this.ptupuatrPrimerApellido.value : '';
                    mensaje += this.ptupuatrSegundoApellido.value ? " " + this.ptupuatrSegundoApellido.value : '';
              
                    contratos.unshift(mensaje);
                    this.util.addErrorMessageList( contratos );
                }
            }).catch( (err: Error) => {
                this.notifyAnswerFromToTheBackEnd();
                this.util.addErrorMessage(err);
            });
        }        
    }    

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisSolicitud.nameInRequest = 'p_thissolicitud';
        this.puthisSolicitud.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_p_thisSolicitud',
            'Solicitud');
        this.puthisSolicitud.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitud.mandatory = true;
        this.puthisSolicitud.dataType = ModelConstants.Solicitud.name;
        this.puthisSolicitud.maxLength = 50;
        this.puthisSolicitud.assignCSS();
        this.fields.push(this.puthisSolicitud);

        this.ptupuagrTipoIdentificacion.nameInRequest = 'pt_p_agrtipoidentificacion';
        this.ptupuagrTipoIdentificacion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrTipoIdentificacion',
            'Tipo identificación');
        this.ptupuagrTipoIdentificacion.mandatory = true;
        this.ptupuagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuagrTipoIdentificacion.maxLength = 170;
        this.ptupuagrTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuagrTipoIdentificacion);

        this.ptupuagrDepartamentoNacimiento.nameInRequest = 'pt_p_agrdepartamentonacimiento';
        this.ptupuagrDepartamentoNacimiento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrDepartamentoNacimiento',
            'Departamento nacimiento');
        this.ptupuagrDepartamentoNacimiento.mandatory = false;
        this.ptupuagrDepartamentoNacimiento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamentoNacimiento.maxLength = 150;
        this.ptupuagrDepartamentoNacimiento.assignCSS();
        this.ptupuagrDepartamentoNacimiento.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuagrDepartamentoNacimiento);

        this.ptupuagrMunicipioNacimiento.nameInRequest = 'pt_p_agrmunicipionacimiento';
        this.ptupuagrMunicipioNacimiento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrMunicipioNacimiento',
            'Municipio nacimiento');
        this.ptupuagrMunicipioNacimiento.mandatory = false;
        this.ptupuagrMunicipioNacimiento.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipioNacimiento.maxLength = 150;
        this.ptupuagrMunicipioNacimiento.assignCSS();
        this.fields.push(this.ptupuagrMunicipioNacimiento);

        this.ptupuagrEstadoCivil.nameInRequest = 'pt_p_agrestadocivil';
        this.ptupuagrEstadoCivil.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrEstadoCivil',
            'Estado Civil');
        this.ptupuagrEstadoCivil.mandatory = false;
        this.ptupuagrEstadoCivil.dataType = ModelConstants.Estadocivil.name;
        this.ptupuagrEstadoCivil.maxLength = 100;
        this.ptupuagrEstadoCivil.assignCSS();
        this.fields.push(this.ptupuagrEstadoCivil);

        this.ptupuatrNumIdentificacion.nameInRequest = 'pt_p_atrnumidentificacion';
        this.ptupuatrNumIdentificacion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrNumIdentificacion',
            'Nº Identificación');
        this.ptupuatrNumIdentificacion.mandatory = true;
        this.ptupuatrNumIdentificacion.dataType = Field.dtString;
        this.ptupuatrNumIdentificacion.maxLength = 60;
        this.ptupuatrNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuatrNumIdentificacion);

        this.ptupuatrPrimerNombre.nameInRequest = 'pt_p_atrprimernombre';
        this.ptupuatrPrimerNombre.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrPrimerNombre',
            'Primer nombre');
        this.ptupuatrPrimerNombre.mandatory = false;
        this.ptupuatrPrimerNombre.dataType = Field.dtString;
        this.ptupuatrPrimerNombre.maxLength = 50;
        this.ptupuatrPrimerNombre.assignCSS();
        this.ptupuatrPrimerNombre.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuatrPrimerNombre);

        this.ptupuatrSegundoNombre.nameInRequest = 'pt_p_atrsegundonombre';
        this.ptupuatrSegundoNombre.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrSegundoNombre',
            'Segundo nombre');
        this.ptupuatrSegundoNombre.mandatory = false;
        this.ptupuatrSegundoNombre.dataType = Field.dtString;
        this.ptupuatrSegundoNombre.maxLength = 50;
        this.ptupuatrSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrSegundoNombre);

        this.ptupuatrPrimerApellido.nameInRequest = 'pt_p_atrprimerapellido';
        this.ptupuatrPrimerApellido.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrPrimerApellido',
            'Primer Apellido');
        this.ptupuatrPrimerApellido.mandatory = false;
        this.ptupuatrPrimerApellido.dataType = Field.dtString;
        this.ptupuatrPrimerApellido.maxLength = 50;
        this.ptupuatrPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrPrimerApellido);

        this.ptupuatrSegundoApellido.nameInRequest = 'pt_p_atrsegundoapellido';
        this.ptupuatrSegundoApellido.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrSegundoApellido',
            'Segundo Apellido');
        this.ptupuatrSegundoApellido.mandatory = false;
        this.ptupuatrSegundoApellido.dataType = Field.dtString;
        this.ptupuatrSegundoApellido.maxLength = 50;
        this.ptupuatrSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrSegundoApellido);

        this.ptupuatrFechaNacimiento.nameInRequest = 'pt_p_atrfechanacimiento';
        this.ptupuatrFechaNacimiento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrFechaNacimiento',
            'Fecha nacimiento');
        this.ptupuatrFechaNacimiento.mandatory = false;
        this.ptupuatrFechaNacimiento.dataType = Field.dtDate;
        this.ptupuatrFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuatrFechaNacimiento);

        this.ptupuatrGenero.nameInRequest = 'pt_p_atrgenero';
        this.ptupuatrGenero.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrGenero',
            'Género');
        this.ptupuatrGenero.mandatory = false;
        this.ptupuatrGenero.dataType = Field.dtString;
        this.ptupuatrGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuatrGenero.maxLength = 1;
        this.ptupuatrGenero.assignCSS();
        this.fields.push(this.ptupuatrGenero);

        this.ptupuatrIndicadorExtranjero.nameInRequest = 'pt_p_atrindicadorextranjero';
        this.ptupuatrIndicadorExtranjero.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrIndicadorExtranjero',
            'Indicador extranjero');
        this.ptupuatrIndicadorExtranjero.mandatory = true;
        this.ptupuatrIndicadorExtranjero.dataType = Field.dtBool;
        this.ptupuatrIndicadorExtranjero.options = DefinedSelections.DS_SINO;
        this.ptupuatrIndicadorExtranjero.assignCSS();
        this.fields.push(this.ptupuatrIndicadorExtranjero);

        this.ptupuatrTelefonoFijo.nameInRequest = 'pt_p_atrtelefonofijo';
        this.ptupuatrTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrTelefonoFijo',
            'Teléfono fijo');
        this.ptupuatrTelefonoFijo.mandatory = false;
        this.ptupuatrTelefonoFijo.dataType = Field.dtString;
        this.ptupuatrTelefonoFijo.maxLength = 15;
        this.ptupuatrTelefonoFijo.assignCSS();
        this.fields.push(this.ptupuatrTelefonoFijo);

        this.ptupuatrTelefonoCelular.nameInRequest = 'pt_p_atrtelefonocelular';
        this.ptupuatrTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrTelefonoCelular',
            'Teléfono celular');
        this.ptupuatrTelefonoCelular.mandatory = false;
        this.ptupuatrTelefonoCelular.dataType = Field.dtString;
        this.ptupuatrTelefonoCelular.maxLength = 15;
        this.ptupuatrTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuatrTelefonoCelular);

        this.ptupuatrCorreoElectronico.nameInRequest = 'pt_p_atrcorreoelectronico';
        this.ptupuatrCorreoElectronico.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrCorreoElectronico',
            'Correo electrónico');
        this.ptupuatrCorreoElectronico.mandatory = false;
        this.ptupuatrCorreoElectronico.dataType = Field.dtString;
        this.ptupuatrCorreoElectronico.maxLength = 100;
        this.ptupuatrCorreoElectronico.assignCSS();
        this.fields.push(this.ptupuatrCorreoElectronico);

        this.ptupuagrDepartamento.nameInRequest = 'pt_p_agrdepartamento';
        this.ptupuagrDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrDepartamento',
            'Departamento');
        this.ptupuagrDepartamento.mandatory = false;
        this.ptupuagrDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamento.maxLength = 150;
        this.ptupuagrDepartamento.assignCSS();
        this.fields.push(this.ptupuagrDepartamento);

        this.ptupuagrMunicipio.nameInRequest = 'pt_p_agrmunicipio';
        this.ptupuagrMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrMunicipio',
            'Municipio');
        this.ptupuagrMunicipio.mandatory = false;
        this.ptupuagrMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipio.maxLength = 150;
        this.ptupuagrMunicipio.assignCSS();
        this.fields.push(this.ptupuagrMunicipio);

        this.ptupuatrDireccionCompleta.nameInRequest = 'pt_p_atrdireccioncompleta';
        this.ptupuatrDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrDireccionCompleta',
            'Dirección completa');
        this.ptupuatrDireccionCompleta.mandatory = false;
        this.ptupuatrDireccionCompleta.dataType = Field.dtString;
        this.ptupuatrDireccionCompleta.maxLength = 250;
        this.ptupuatrDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuatrDireccionCompleta);

        this.ptupuatrRural.nameInRequest = 'pt_p_atrrural';
        this.ptupuatrRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_atrRural',
            'Rural');
        this.ptupuatrRural.mandatory = true;
        this.ptupuatrRural.dataType = Field.dtBool;
        this.ptupuatrRural.options = DefinedSelections.DS_SINO;
        this.ptupuatrRural.value = false;
        this.ptupuatrRural.assignCSS();
        this.fields.push(this.ptupuatrRural);

        this.ptupuagrPais.nameInRequest = 'pt_p_agrpais';
        this.ptupuagrPais.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_agrPais',
            'País');
        this.ptupuagrPais.mandatory = false;
        this.ptupuagrPais.dataType = ModelConstants.Pais.name;
        this.ptupuagrPais.maxLength = 50;
        this.ptupuagrPais.assignCSS();
        this.fields.push(this.ptupuagrPais);

        this.ptupuCodigo.nameInRequest = 'pt_p_codigo';
        this.ptupuCodigo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_Codigo',
            'Código');
        this.ptupuCodigo.mandatory = false;
        this.ptupuCodigo.dataType = Field.dtInt;
        this.ptupuCodigo.assignCSS();
        this.fields.push(this.ptupuCodigo);

        this.ptupuTieneEPSSanitas.nameInRequest = 'pt_p_tieneepssanitas';
        this.ptupuTieneEPSSanitas.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_TieneEPSSanitas',
            'Tiene EPS Sanitas');
        this.ptupuTieneEPSSanitas.mandatory = true;
        this.ptupuTieneEPSSanitas.dataType = Field.dtBool;
        this.ptupuTieneEPSSanitas.options = DefinedSelections.DS_SINO;
        this.ptupuTieneEPSSanitas.value = false;
        this.ptupuTieneEPSSanitas.assignCSS();
        this.fields.push(this.ptupuTieneEPSSanitas);

        this.ptupuRechazadoAfiliacion.nameInRequest = 'pt_p_rechazadoafiliacion';
        this.ptupuRechazadoAfiliacion.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_RechazadoAfiliacion',
            'Rechazado Afiliación');
        this.ptupuRechazadoAfiliacion.mandatory = false;
        this.ptupuRechazadoAfiliacion.dataType = Field.dtString;
        this.ptupuRechazadoAfiliacion.maxLength = 50;
        this.ptupuRechazadoAfiliacion.assignCSS();
        this.fields.push(this.ptupuRechazadoAfiliacion);

        this.ptupuTitularBeneficios.nameInRequest = 'pt_p_titularbeneficios';
        this.ptupuTitularBeneficios.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_pt_p_TitularBeneficios',
            'Titular con beneficios');
        this.ptupuTitularBeneficios.mandatory = true;
        this.ptupuTitularBeneficios.dataType = Field.dtBool;
        this.ptupuTitularBeneficios.options = DefinedSelections.DS_SINO;
        this.ptupuTitularBeneficios.value = false;
        this.ptupuTitularBeneficios.assignCSS();
        this.fields.push(this.ptupuTitularBeneficios);

        this.ptEstadoPersona.nameInRequest = 'ptestadopersona';
        this.ptEstadoPersona.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptEstadoPersona',
            'Estado persona');
        this.ptEstadoPersona.mandatory = false;
        this.ptEstadoPersona.dataType = ModelConstants.Estadopersona.name;
        this.ptEstadoPersona.maxLength = 150;
        this.ptEstadoPersona.assignCSS();
        this.fields.push(this.ptEstadoPersona);

        this.ptDCDepartamento.nameInRequest = 'ptdcdepartamento';
        this.ptDCDepartamento.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptDCDepartamento',
            'Departamento');
        this.ptDCDepartamento.mandatory = false;
        this.ptDCDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptDCDepartamento.maxLength = 150;
        this.ptDCDepartamento.assignCSS();
        this.fields.push(this.ptDCDepartamento);

        this.ptDCMunicipio.nameInRequest = 'ptdcmunicipio';
        this.ptDCMunicipio.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptDCMunicipio',
            'Municipio');
        this.ptDCMunicipio.mandatory = false;
        this.ptDCMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptDCMunicipio.maxLength = 150;
        this.ptDCMunicipio.assignCSS();
        this.fields.push(this.ptDCMunicipio);

        this.ptDCDireccionCompleta.nameInRequest = 'ptdcdireccioncompleta';
        this.ptDCDireccionCompleta.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptDCDireccionCompleta',
            'Dirección completa');
        this.ptDCDireccionCompleta.mandatory = false;
        this.ptDCDireccionCompleta.dataType = Field.dtString;
        this.ptDCDireccionCompleta.maxLength = 250;
        this.ptDCDireccionCompleta.assignCSS();
        this.fields.push(this.ptDCDireccionCompleta);

        this.ptDCRural.nameInRequest = 'ptdcrural';
        this.ptDCRural.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptDCRural',
            'Rural');
        this.ptDCRural.mandatory = true;
        this.ptDCRural.dataType = Field.dtBool;
        this.ptDCRural.options = DefinedSelections.DS_SINO;
        this.ptDCRural.value = false;
        this.ptDCRural.assignCSS();
        this.fields.push(this.ptDCRural);

        this.ptDCTelefonoFijo.nameInRequest = 'ptdctelefonofijo';
        this.ptDCTelefonoFijo.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptDCTelefonoFijo',
            'Teléfono fijo');
        this.ptDCTelefonoFijo.mandatory = false;
        this.ptDCTelefonoFijo.dataType = Field.dtString;
        this.ptDCTelefonoFijo.maxLength = 15;
        this.ptDCTelefonoFijo.assignCSS();
        this.fields.push(this.ptDCTelefonoFijo);

        this.ptDCTelefonoCelular.nameInRequest = 'ptdctelefonocelular';
        this.ptDCTelefonoCelular.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptDCTelefonoCelular',
            'Teléfono celular');
        this.ptDCTelefonoCelular.mandatory = false;
        this.ptDCTelefonoCelular.dataType = Field.dtString;
        this.ptDCTelefonoCelular.maxLength = 15;
        this.ptDCTelefonoCelular.assignCSS();
        this.fields.push(this.ptDCTelefonoCelular);

        this.ptReplicarDir.nameInRequest = 'ptreplicardir';
        this.ptReplicarDir.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptReplicarDir',
            'Replicar');
        this.ptReplicarDir.mandatory = true;
        this.ptReplicarDir.dataType = Field.dtBool;
        this.ptReplicarDir.options = DefinedSelections.DS_SINO;
        this.ptReplicarDir.assignCSS();
        this.fields.push(this.ptReplicarDir);

        this.ptRazonSocial.nameInRequest = 'ptrazonsocial';
        this.ptRazonSocial.alias = this.langMng.translateText(
            'cls_Solicitud_svc_TINDICARTITULAR2_inArg_ptRazonSocial',
            'Razón social');
        this.ptRazonSocial.mandatory = false;
        this.ptRazonSocial.dataType = Field.dtString;
        this.ptRazonSocial.maxLength = 254;
        this.ptRazonSocial.assignCSS();
        this.fields.push(this.ptRazonSocial);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrIndicadorExtranjero
            const defValptupuatrIndicadorExtranjero = new Promise<void>((resolveDefValue) => {
                this.ptupuatrIndicadorExtranjero.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrIndicadorExtranjero);

            // ptReplicarDir
            const defValptReplicarDir = new Promise<void>((resolveDefValue) => {
                this.ptReplicarDir.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptReplicarDir);

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
            if (lastRole === 'TipoIdentificacion') {
                this.ptupuagrTipoIdentificacion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
                this.ptupuagrTipoIdentificacion.enabled = false;
                this.executeDependecyRulesptupuagrtipoidentificacion('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrTipoIdentificacion
        const navFiltersptupuagrTipoIdentificacion: string[] = [];
        navFiltersptupuagrTipoIdentificacion.push('Solicitud_TINDICARTITULAR2_pt_p_agrTipoIdentificacion_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', navFiltersptupuagrTipoIdentificacion, this.getNavigationFilterVariables(), 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuagrTipoIdentificacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptupuagrDepartamentoNacimiento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamentoNacimiento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamentoNacimiento.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptupuagrEstadoCivil
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('EstadoCivil', 'IC_EstadoCivil', [], null, 'OC_EstadoCivil').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrEstadoCivil.loadPreload(response.results);
                } else {
                    this.ptupuagrEstadoCivil.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptupuagrDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamento.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptDCDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptDCDepartamento.loadPreload(response.results);
                } else {
                    this.ptDCDepartamento.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

    /**
     * Search the preload values of field pt_p_agrMunicipioNacimiento
     */
    private loadPreloadptupuagrmunicipionacimiento(): void {

        if (this.ptupuagrDepartamentoNacimiento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TINDICARTITULAR2_pt_p_agrMunicipioNacimiento_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipioNacimiento.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipioNacimiento.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipioNacimiento.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipioNacimiento.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_agrMunicipio
     */
    private loadPreloadptupuagrmunicipio(): void {

        if (this.ptupuagrDepartamento.getSelectedInstances().length === 1 &&
            !this.util.isNull(this.ptupuTitularBeneficios.value) &&
            !this.util.isNull(this.ptupuTieneEPSSanitas.value)) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TINDICARTITULAR2_pt_p_agrMunicipio_NavFilter0');
            navFilters.push('Solicitud_TINDICARTITULAR2_pt_p_agrMunicipio_NavFilter1');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipio.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipio.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field ptDCMunicipio
     */
    private loadPreloadptdcmunicipio(): void {

        if (this.ptDCDepartamento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Solicitud_TINDICARTITULAR2_ptDCMunicipio_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptDCMunicipio.loadPreload(response.results);
                    } else {
                        this.ptDCMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptDCMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptDCMunicipio.cleanPreload();
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrPais'.toLowerCase()) {
            this.ptupuagrPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrpais('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptEstadoPersona'.toLowerCase()) {
            this.ptEstadoPersona.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptestadopersona('SetValue', false);
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
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4puthisSolicitud();
        }
        // Rule 5
        if ('SetValue' === event) {
            this.executeDependecyRules5puthisSolicitud();
        }
        // Rule 6
        if ('SetValue' === event) {
            this.executeDependecyRules6puthisSolicitud();
        }
        // Rule 7
        if ('SetValue' === event) {
            this.executeDependecyRules7puthisSolicitud();
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
                'Ae_solicitudes.id_solicitud');
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
            // p_thisSolicitud.SetVisible( false )
            this.puthisSolicitud.visible = false;
            // pt_p_agrPais.SetVisible( false )
            this.ptupuagrPais.visible = false;
            // pt_p_Codigo.SetVisible( false )
            this.ptupuCodigo.visible = false;
            // pt_p_RechazadoAfiliacion.SetVisible( false )
            this.ptupuRechazadoAfiliacion.visible = false;
            // pt_p_TieneEPSSanitas.SetVisible( false )
            this.ptupuTieneEPSSanitas.visible = false;
            // ptEstadoPersona.SetVisible( false )
            this.ptEstadoPersona.visible = false;
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
                'direccion.Identificador,direccion.departamento.Codigo,direccion.direccioncompleta,direccion.municipio.Codigo' +
                ',direccion.rural');
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
        // v <> NULL AND v.direccion <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidDireccion(
            this.util.getInt(varputhissolicitud.get('direccion.Identificador'))))) {
            // ptDCDepartamento.SetValue( v.direccion.departamento )
            this.ptDCDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('direccion.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptdcmunicipio');
            // ptDCDireccionCompleta.SetValue( v.direccion.direccioncompleta )
            this.ptDCDireccionCompleta.setValue(varputhissolicitud.get('direccion.direccioncompleta'));
            // ptDCMunicipio.SetValue( v.direccion.municipio )
            this.ptDCMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('direccion.municipio.Codigo'))));
            // ptDCRural.SetValue( v.direccion.rural )
            this.ptDCRural.setValue(this.util.getBool(varputhissolicitud.get('direccion.rural')));
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
                'titular.Solicitud.Ae_solicitudes.id_solicitud,titular.departamentonac.Codigo,titular.municipionac.Codigo' +
                ',titular.tipoidentificacion.Codigo,titular.correoelectronico,titular.fechanacimiento,titular.genero' +
                ',titular.indicadorextranjero,titular.numidentificacion,titular.primerapellido,titular.primernombre' +
                ',titular.segundoapellido,titular.segundonombre,titular.telefonocelular,titular.telefonofijo' +
                ',titular.titularconbeneficios,titular.telefonofijodc,titular.telefonocelulardc,titular.razonsocial' +
                ',titular.drvbeneficiosactivo');
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
        // v <> NULL AND v.titular <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidTitular(
            this.util.getInt(varputhissolicitud.get('titular.Solicitud.Ae_solicitudes.id_solicitud'))))) {
            // pt_p_agrDepartamentoNacimiento.SetValue( v.titular.departamentonac )
            this.ptupuagrDepartamentoNacimiento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('titular.departamentonac.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrMunicipioNacimiento.SetValue( v.titular.municipionac )
            this.ptupuagrMunicipioNacimiento.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('titular.municipionac.Codigo'))));
            // pt_p_agrTipoIdentificacion.SetValue( v.titular.tipoidentificacion )
            this.ptupuagrTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varputhissolicitud.get('titular.tipoidentificacion.Codigo'))));
            this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
            // pt_p_atrCorreoElectronico.SetValue( v.titular.correoelectronico )
            this.ptupuatrCorreoElectronico.setValue(varputhissolicitud.get('titular.correoelectronico'));
            // pt_p_atrFechaNacimiento.SetValue( v.titular.fechanacimiento )
            this.ptupuatrFechaNacimiento.setValue(this.util.getDate(varputhissolicitud.get('titular.fechanacimiento')));
            // pt_p_atrGenero.SetValue( v.titular.genero )
            this.ptupuatrGenero.setValue(varputhissolicitud.get('titular.genero'));
            // pt_p_atrIndicadorExtranjero.SetValue( v.titular.indicadorextranjero )
            this.ptupuatrIndicadorExtranjero.setValue(this.util.getBool(varputhissolicitud.get('titular.indicadorextranjero')));
            this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);
            // pt_p_atrNumIdentificacion.SetValue( v.titular.numidentificacion )
            this.ptupuatrNumIdentificacion.setValue(varputhissolicitud.get('titular.numidentificacion'));
            this.executeDependecyRulesptupuatrnumidentificacion('SetValue', true);
            // pt_p_atrPrimerApellido.SetValue( v.titular.primerapellido )
            this.ptupuatrPrimerApellido.setValue(varputhissolicitud.get('titular.primerapellido'));
            // pt_p_atrPrimerNombre.SetValue( v.titular.primernombre )
            this.ptupuatrPrimerNombre.setValue(varputhissolicitud.get('titular.primernombre'));
            // pt_p_atrSegundoApellido.SetValue( v.titular.segundoapellido )
            this.ptupuatrSegundoApellido.setValue(varputhissolicitud.get('titular.segundoapellido'));
            // pt_p_atrSegundoNombre.SetValue( v.titular.segundonombre )
            this.ptupuatrSegundoNombre.setValue(varputhissolicitud.get('titular.segundonombre'));
            // pt_p_atrTelefonoCelular.SetValue( v.titular.telefonocelular )
            this.ptupuatrTelefonoCelular.setValue(varputhissolicitud.get('titular.telefonocelular'));
            // pt_p_atrTelefonoFijo.SetValue( v.titular.telefonofijo )
            this.ptupuatrTelefonoFijo.setValue(varputhissolicitud.get('titular.telefonofijo'));
            // pt_p_TitularBeneficios.SetValue( v.titular.titularconbeneficios )
            this.ptupuTitularBeneficios.setValue(this.util.getBool(varputhissolicitud.get('titular.titularconbeneficios')));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // ptDCTelefonoFijo.SetValue( v.titular.telefonofijodc )
            this.ptDCTelefonoFijo.setValue(varputhissolicitud.get('titular.telefonofijodc'));
            // ptDCTelefonoCelular.SetValue( v.titular.telefonocelulardc )
            this.ptDCTelefonoCelular.setValue(varputhissolicitud.get('titular.telefonocelulardc'));
            // ptRazonSocial.SetValue( v.titular.razonsocial )
            this.ptRazonSocial.setValue(varputhissolicitud.get('titular.razonsocial'));
            // pt_p_TitularBeneficios.SetActive( v.titular.drvbeneficiosactivo )
            this.ptupuTitularBeneficios.enabled = this.util.getBool(varputhissolicitud.get('titular.drvbeneficiosactivo'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for p_thisSolicitud argument
     */
    private executeDependecyRules4puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'titular.Solicitud.Ae_solicitudes.id_solicitud,numfamilia');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules4puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for p_thisSolicitud argument
     */
    private executeDependecyRules4puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.titular <> NULL AND v.numfamilia <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidTitular(
            this.util.getInt(varputhissolicitud.get('titular.Solicitud.Ae_solicitudes.id_solicitud')))) &&
            !this.util.isNull(varputhissolicitud.get('numfamilia'))) {
            // pt_p_agrTipoIdentificacion.SetActive( FALSE )
            this.ptupuagrTipoIdentificacion.enabled = false;
            this.executeDependecyRulesptupuagrtipoidentificacion('SetActive', true);
            // pt_p_atrNumIdentificacion.SetActive( FALSE )
            this.ptupuatrNumIdentificacion.enabled = false;
            this.executeDependecyRulesptupuatrnumidentificacion('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 5 for p_thisSolicitud argument
     */
    private executeDependecyRules5puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'titularpersona.Identificador,titularpersona.estadocivil.Codigo,titularpersona.codigo,titularpersona.rechazadoafiliacion' +
                ',titularpersona.tieneepssanitas,titularpersona.estadopersona.Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules5puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 5 for p_thisSolicitud argument
     */
    private executeDependecyRules5puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.titularpersona <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidPersona(
            this.util.getInt(varputhissolicitud.get('titularpersona.Identificador'))))) {
            // pt_p_agrEstadoCivil.SetValue( v.titularpersona.estadocivil )
            this.ptupuagrEstadoCivil.setValue(this.util.oidBuilder.buildOidEstadoCivil(
                this.util.getInt(varputhissolicitud.get('titularpersona.estadocivil.Codigo'))));
            // pt_p_Codigo.SetValue( v.titularpersona.codigo )
            this.ptupuCodigo.setValue(this.util.getInt(varputhissolicitud.get('titularpersona.codigo')));
            // pt_p_RechazadoAfiliacion.SetValue( v.titularpersona.rechazadoafiliacion )
            this.ptupuRechazadoAfiliacion.setValue(varputhissolicitud.get('titularpersona.rechazadoafiliacion'));
            // pt_p_TieneEPSSanitas.SetValue( v.titularpersona.tieneepssanitas )
            this.ptupuTieneEPSSanitas.setValue(this.util.getBool(varputhissolicitud.get('titularpersona.tieneepssanitas')));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // ptEstadoPersona.SetValue( v.titularpersona.estadopersona )
            this.ptEstadoPersona.setValue(this.util.oidBuilder.buildOidEstadoPersona(
                this.util.getInt(varputhissolicitud.get('titularpersona.estadopersona.Codigo'))));
            this.executeDependecyRulesptestadopersona('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 6 for p_thisSolicitud argument
     */
    private executeDependecyRules6puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'numfamilia');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules6puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 6 for p_thisSolicitud argument
     */
    private executeDependecyRules6puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.numfamilia <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(varputhissolicitud.get('numfamilia'))) {
            // pt_p_agrDepartamento.SetActive( FALSE )
            this.ptupuagrDepartamento.enabled = false;
            // pt_p_agrMunicipio.SetActive( FALSE )
            this.ptupuagrMunicipio.enabled = false;
            // pt_p_agrPais.SetActive( FALSE )
            this.ptupuagrPais.enabled = false;
            this.executeDependecyRulesptupuagrpais('SetActive', true);
            // pt_p_agrTipoIdentificacion.SetActive( FALSE )
            this.ptupuagrTipoIdentificacion.enabled = false;
            this.executeDependecyRulesptupuagrtipoidentificacion('SetActive', true);
            // pt_p_atrDireccionCompleta.SetActive( FALSE )
            this.ptupuatrDireccionCompleta.enabled = false;
            // pt_p_atrNumIdentificacion.SetActive( FALSE )
            this.ptupuatrNumIdentificacion.enabled = false;
            this.executeDependecyRulesptupuatrnumidentificacion('SetActive', true);
            // pt_p_atrRural.SetActive( FALSE )
            this.ptupuatrRural.enabled = false;
            // ptDCDepartamento.SetActive( FALSE )
            this.ptDCDepartamento.enabled = false;
            // ptDCDireccionCompleta.SetActive( FALSE )
            this.ptDCDireccionCompleta.enabled = false;
            // ptDCMunicipio.SetActive( FALSE )
            this.ptDCMunicipio.enabled = false;
            // ptDCRural.SetActive( FALSE )
            this.ptDCRural.enabled = false;
            // ptDCTelefonoCelular.SetActive( FALSE )
            this.ptDCTelefonoCelular.enabled = false;
            // ptDCTelefonoFijo.SetActive( FALSE )
            this.ptDCTelefonoFijo.enabled = false;
            // ptReplicarDir.SetActive( FALSE )
            this.ptReplicarDir.enabled = false;
            this.executeDependecyRulesptreplicardir('SetActive', true);
            // pt_p_atrTelefonoCelular.SetActive( FALSE )
            this.ptupuatrTelefonoCelular.enabled = false;
            // pt_p_atrTelefonoFijo.SetActive( FALSE )
            this.ptupuatrTelefonoFijo.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 7 for p_thisSolicitud argument
     */
    private executeDependecyRules7puthisSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitud,
                'titular.Solicitud.Ae_solicitudes.id_solicitud,titular.direccion.Identificador,titular.direccion.departamento.Codigo' +
                ',titular.direccion.municipio.Codigo,titular.direccion.pais.Codigo,titular.direccion.direccioncompleta' +
                ',titular.direccion.rural');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules7puthisSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 7 for p_thisSolicitud argument
     */
    private executeDependecyRules7puthisSolicitudActions(): void {
        const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisSolicitud);
        // v <> NULL AND v.titular <> NULL AND v.titular.direccion <> NULL
        if (varputhissolicitud && !this.util.isNull(varputhissolicitud) && !this.util.isNull(this.util.oidBuilder.buildOidTitular(
            this.util.getInt(varputhissolicitud.get('titular.Solicitud.Ae_solicitudes.id_solicitud')))) &&
            !this.util.isNull(this.util.oidBuilder.buildOidDireccion(
            this.util.getInt(varputhissolicitud.get('titular.direccion.Identificador'))))) {
            // pt_p_agrDepartamento.SetValue( v.titular.direccion.departamento )
            this.ptupuagrDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhissolicitud.get('titular.direccion.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // pt_p_agrMunicipio.SetValue( v.titular.direccion.municipio )
            this.ptupuagrMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhissolicitud.get('titular.direccion.municipio.Codigo'))));
            // pt_p_agrPais.SetValue( v.titular.direccion.pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhissolicitud.get('titular.direccion.pais.Codigo')));
            this.executeDependecyRulesptupuagrpais('SetValue', true);
            // pt_p_atrDireccionCompleta.SetValue( v.titular.direccion.direccioncompleta )
            this.ptupuatrDireccionCompleta.setValue(varputhissolicitud.get('titular.direccion.direccioncompleta'));
            // pt_p_atrRural.SetValue( v.titular.direccion.rural )
            this.ptupuatrRural.setValue(this.util.getBool(varputhissolicitud.get('titular.direccion.rural')));
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
     * Evaluate dependendy rules for pt_p_agrTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrtipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptupuagrTipoIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrTipoIdentificacion();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuagrTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND pt_p_atrNumIdentificacion <> NULL
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            !this.util.isNull(this.ptupuatrNumIdentificacion.value)) {
            // pt_p_TitularBeneficios.SetValue( pt_p_TitularBeneficios )
            this.buscarPersonaenCORE();
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.nit = true
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuagrtipoidentificacion.get('nit')), true)) {
            // pt_p_agrDepartamentoNacimiento.SetVisible( FALSE )
            this.ptupuagrDepartamentoNacimiento.visible = false;
            // pt_p_agrEstadoCivil.SetVisible( FALSE )
            this.ptupuagrEstadoCivil.visible = false;
            // pt_p_agrMunicipioNacimiento.SetVisible( FALSE )
            this.ptupuagrMunicipioNacimiento.visible = false;
            // pt_p_atrFechaNacimiento.SetVisible( FALSE )
            this.ptupuatrFechaNacimiento.visible = false;
            // pt_p_atrGenero.SetVisible( FALSE )
            this.ptupuatrGenero.visible = false;
            // pt_p_atrIndicadorExtranjero.SetVisible( FALSE )
            this.ptupuatrIndicadorExtranjero.visible = false;
            // pt_p_atrPrimerApellido.SetVisible( FALSE )
            this.ptupuatrPrimerApellido.visible = false;
            // pt_p_atrPrimerNombre.SetVisible( FALSE )
            this.ptupuatrPrimerNombre.visible = false;
            // pt_p_atrSegundoApellido.SetVisible( FALSE )
            this.ptupuatrSegundoApellido.visible = false;
            // pt_p_atrSegundoNombre.SetVisible( FALSE )
            this.ptupuatrSegundoNombre.visible = false;
            // ptRazonSocial.SetVisible( TRUE )
            this.ptRazonSocial.visible = true;
            // pt_p_TitularBeneficios.SetVisible( FALSE )
            this.ptupuTitularBeneficios.visible = false;
            // pt_p_TitularBeneficios.SetValue( FALSE )
            this.ptupuTitularBeneficios.setValue(false);
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // pt_p_agrDepartamentoNacimiento.SetMandatory( FALSE )
            this.ptupuagrDepartamentoNacimiento.mandatory = false;
            // pt_p_agrEstadoCivil.SetMandatory( FALSE )
            this.ptupuagrEstadoCivil.mandatory = false;
            // pt_p_agrMunicipioNacimiento.SetMandatory( FALSE )
            this.ptupuagrMunicipioNacimiento.mandatory = false;
            // pt_p_atrFechaNacimiento.SetMandatory( FALSE )
            this.ptupuatrFechaNacimiento.mandatory = false;
            // pt_p_atrGenero.SetMandatory( FALSE )
            this.ptupuatrGenero.mandatory = false;
            // pt_p_atrPrimerApellido.SetMandatory( FALSE )
            this.ptupuatrPrimerApellido.mandatory = false;
            // pt_p_atrPrimerNombre.SetMandatory( FALSE )
            this.ptupuatrPrimerNombre.mandatory = false;
            // ptRazonSocial.SetMandatory( TRUE )
            this.ptRazonSocial.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules3ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules3ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.nit = FALSE
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuagrtipoidentificacion.get('nit')), false)) {
            // pt_p_agrDepartamentoNacimiento.SetVisible( TRUE )
            this.ptupuagrDepartamentoNacimiento.visible = true;
            // pt_p_agrEstadoCivil.SetVisible( TRUE )
            this.ptupuagrEstadoCivil.visible = true;
            // pt_p_agrMunicipioNacimiento.SetVisible( TRUE )
            this.ptupuagrMunicipioNacimiento.visible = true;
            // pt_p_atrFechaNacimiento.SetVisible( TRUE )
            this.ptupuatrFechaNacimiento.visible = true;
            // pt_p_atrGenero.SetVisible( TRUE )
            this.ptupuatrGenero.visible = true;
            // pt_p_atrIndicadorExtranjero.SetVisible( TRUE )
            this.ptupuatrIndicadorExtranjero.visible = true;
            // pt_p_atrPrimerApellido.SetVisible( TRUE )
            this.ptupuatrPrimerApellido.visible = true;
            // pt_p_atrPrimerNombre.SetVisible( TRUE )
            this.ptupuatrPrimerNombre.visible = true;
            // pt_p_atrSegundoApellido.SetVisible( TRUE )
            this.ptupuatrSegundoApellido.visible = true;
            // pt_p_atrSegundoNombre.SetVisible( TRUE )
            this.ptupuatrSegundoNombre.visible = true;
            // ptRazonSocial.SetVisible( FALSE )
            this.ptRazonSocial.visible = false;
            // pt_p_agrDepartamentoNacimiento.SetMandatory( pt_p_atrIndicadorExtranjero = FALSE )
            this.ptupuagrDepartamentoNacimiento.mandatory = this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), false);
            // pt_p_agrMunicipioNacimiento.SetMandatory( pt_p_atrIndicadorExtranjero = FALSE )
            this.ptupuagrMunicipioNacimiento.mandatory = this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), false);
            // pt_p_agrEstadoCivil.SetMandatory( TRUE )
            this.ptupuagrEstadoCivil.mandatory = true;
            // pt_p_atrFechaNacimiento.SetMandatory( TRUE )
            this.ptupuatrFechaNacimiento.mandatory = true;
            // pt_p_atrGenero.SetMandatory( TRUE )
            this.ptupuatrGenero.mandatory = true;
            // pt_p_atrPrimerApellido.SetMandatory( TRUE )
            this.ptupuatrPrimerApellido.mandatory = true;
            // pt_p_atrPrimerNombre.SetMandatory( TRUE )
            this.ptupuatrPrimerNombre.mandatory = true;
            // ptRazonSocial.SetMandatory( FALSE )
            this.ptRazonSocial.mandatory = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrTipoIdentificacion argument
     */
    public onptupuagrtipoidentificacionChange(): void {
        this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrNumIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrnumidentificacion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptupuatrNumIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules1ptupuatrNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuatrNumIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules1ptupuatrNumIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND pt_p_agrTipoIdentificacion <> NULL
        if (varptupuagrtipoidentificacion && !this.util.isNull(this.ptupuatrNumIdentificacion.value) &&
            !this.util.isNull(varptupuagrtipoidentificacion)) {
            // pt_p_TitularBeneficios.SetValue( pt_p_TitularBeneficios )
            this.buscarPersonaenCORE();
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrNumIdentificacion argument
     */
    public onptupuatrnumidentificacionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrnumidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrIndicadorExtranjero argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrindicadorextranjero(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrIndicadorExtranjero();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrIndicadorExtranjero();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuatrIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuatrIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.ptupuatrIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), true)) {
            // pt_p_agrDepartamentoNacimiento.SetActive( FALSE )
            this.ptupuagrDepartamentoNacimiento.enabled = false;
            // pt_p_agrDepartamentoNacimiento.SetValue( NULL )
            this.ptupuagrDepartamentoNacimiento.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrDepartamentoNacimiento.SetMandatory( FALSE )
            this.ptupuagrDepartamentoNacimiento.mandatory = false;
            // pt_p_agrMunicipioNacimiento.SetActive( FALSE )
            this.ptupuagrMunicipioNacimiento.enabled = false;
            // pt_p_agrMunicipioNacimiento.SetValue( NULL )
            this.ptupuagrMunicipioNacimiento.setValue(null);
            // pt_p_agrMunicipioNacimiento.SetMandatory( FALSE )
            this.ptupuagrMunicipioNacimiento.mandatory = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuatrIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuatrIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.ptupuatrIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), false)) {
            // pt_p_agrDepartamentoNacimiento.SetActive( TRUE )
            this.ptupuagrDepartamentoNacimiento.enabled = true;
            // pt_p_agrDepartamentoNacimiento.SetMandatory( TRUE )
            this.ptupuagrDepartamentoNacimiento.mandatory = true;
            // pt_p_agrMunicipioNacimiento.SetActive( TRUE )
            this.ptupuagrMunicipioNacimiento.enabled = true;
            // pt_p_agrMunicipioNacimiento.SetMandatory( TRUE )
            this.ptupuagrMunicipioNacimiento.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrIndicadorExtranjero argument
     */
    public onptupuatrindicadorextranjeroChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrPais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrpais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrpais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrPais argument
     */
    private setSuppInfoptupuagrpais(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_agrPais lense search argument
     */
    public onptupuagrpaisChange(): void {
        this.executeLenseSearch(this.ptupuagrPais, ModelConstants.Pais.name, 'IC_Pais',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupuagrpais();
            }
            if (foundInstances === 1) {
                this.processptupuagrpaisSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrPais lense search argument
     */
    public processptupuagrpaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrPais.searchResults.length > index) {
            selectedInstance = this.ptupuagrPais.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrPais.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrPais.allowMultiSelect) {
                this.ptupuagrPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrPais.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrPais lense search argument
     */
    public cleanptupuagrpais(): void {
        this.clearValidationMessages();
        this.ptupuagrPais.clean();
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptEstadoPersona argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptestadopersona(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptestadopersona();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptEstadoPersona argument
     */
    private setSuppInfoptestadopersona(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptEstadoPersona.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Estadopersona.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptEstadoPersona.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptEstadoPersona.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Estadopersona.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptEstadoPersona.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the ptEstadoPersona lense search argument
     */
    public onptestadopersonaChange(): void {
        this.executeLenseSearch(this.ptEstadoPersona, ModelConstants.Estadopersona.name, 'IC_EstadoPersona',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptestadopersona();
            }
            if (foundInstances === 1) {
                this.processptestadopersonaSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptEstadoPersona lense search argument
     */
    public processptestadopersonaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptEstadoPersona.searchResults.length > index) {
            selectedInstance = this.ptEstadoPersona.searchResults[index];
        }
        // Clean the result list
        this.ptEstadoPersona.searchResults = [];
        if (selectedInstance) {
            if (!this.ptEstadoPersona.allowMultiSelect) {
                this.ptEstadoPersona.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptEstadoPersona.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptestadopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptEstadoPersona lense search argument
     */
    public cleanptestadopersona(): void {
        this.clearValidationMessages();
        this.ptEstadoPersona.clean();
        this.executeDependecyRulesptestadopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptReplicarDir argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptreplicardir(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptReplicarDir();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptReplicarDir argument
     */
    private executeDependecyRules1ptReplicarDir(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrDepartamento,
                'Codigo');
        this.addQueryInstanceFromField(this.ptupuagrMunicipio,
                'Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptReplicarDirActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptReplicarDir argument
     */
    private executeDependecyRules1ptReplicarDirActions(): void {
        const varptupuagrdepartamento = this.getFirstInstanceFromCache(this.ptupuagrDepartamento);
        const varptupuagrmunicipio = this.getFirstInstanceFromCache(this.ptupuagrMunicipio);
        // v <> NULL AND v = TRUE
        if (varptupuagrdepartamento && varptupuagrmunicipio && !this.util.isNull(this.util.getBool(this.ptReplicarDir.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptReplicarDir.value), true)) {
            // ptDCDepartamento.SetValue( pt_p_agrDepartamento )
            this.ptDCDepartamento.setValue(varptupuagrdepartamento?.oid);
            this.pendingDependencyRules.push('loadPreloadptdcmunicipio');
            // ptDCDireccionCompleta.SetValue( pt_p_atrDireccionCompleta )
            this.ptDCDireccionCompleta.setValue(this.ptupuatrDireccionCompleta.value);
            // ptDCMunicipio.SetValue( pt_p_agrMunicipio )
            this.ptDCMunicipio.setValue(varptupuagrmunicipio?.oid);
            // ptDCRural.SetValue( pt_p_atrRural )
            this.ptDCRural.setValue(this.util.getBool(this.ptupuatrRural.value));
            // ptDCTelefonoCelular.SetValue( pt_p_atrTelefonoCelular )
            this.ptDCTelefonoCelular.setValue(this.ptupuatrTelefonoCelular.value);
            // ptDCTelefonoFijo.SetValue( pt_p_atrTelefonoFijo )
            this.ptDCTelefonoFijo.setValue(this.ptupuatrTelefonoFijo.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptReplicarDir argument
     */
    public onptreplicardirChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptreplicardir('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_agrDepartamentoNacimiento argument
     */
    public onptupuagrdepartamentonacimientoChange(): void {
        this.loadPreloadptupuagrmunicipionacimiento();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_agrDepartamento argument
     */
    public onptupuagrdepartamentoChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_TitularBeneficios argument
     */
    public onptuputitularbeneficiosChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_TieneEPSSanitas argument
     */
    public onptuputieneepssanitasChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the ptDCDepartamento argument
     */
    public onptdcdepartamentoChange(): void {
        this.loadPreloadptdcmunicipio();

        this.executePendingDependencyRules();
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
        if ('ptupuagrPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pais';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptEstadoPersona'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptEstadoPersona.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_EstadoPersona';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible;

        switch (groupId) {
            case '4':
                isVisible = this.ptupuatrPrimerNombre.visible ||
                this.ptupuatrSegundoNombre.visible ||
                this.ptupuatrPrimerApellido.visible ||
                this.ptupuatrSegundoApellido.visible ||
                this.ptupuatrFechaNacimiento.visible ||
                this.ptupuatrGenero.visible ||
                this.ptupuatrIndicadorExtranjero.visible ||
                this.ptupuagrDepartamentoNacimiento.visible ||
                this.ptupuagrMunicipioNacimiento.visible ||
                this.ptupuagrEstadoCivil.visible;
                break;
            case '6':
                isVisible = this.ptRazonSocial.visible;
                break;
            case '7':
                isVisible = this.ptupuatrDireccionCompleta.visible ||
                this.ptupuagrDepartamento.visible ||
                this.ptupuagrMunicipio.visible ||
                this.ptupuatrRural.visible ||
                this.ptupuatrTelefonoFijo.visible ||
                this.ptupuatrTelefonoCelular.visible ||
                this.ptReplicarDir.visible ||
                this.ptDCDireccionCompleta.visible ||
                this.ptDCDepartamento.visible ||
                this.ptDCMunicipio.visible ||
                this.ptDCRural.visible ||
                this.ptDCTelefonoFijo.visible ||
                this.ptDCTelefonoCelular.visible;
                break;
            case '7_0':
                isVisible = this.ptupuatrDireccionCompleta.visible ||
                this.ptupuagrDepartamento.visible ||
                this.ptupuagrMunicipio.visible ||
                this.ptupuatrRural.visible ||
                this.ptupuatrTelefonoFijo.visible ||
                this.ptupuatrTelefonoCelular.visible;
                break;
            case '7_2':
                isVisible = this.ptDCDireccionCompleta.visible ||
                this.ptDCDepartamento.visible ||
                this.ptDCMunicipio.visible ||
                this.ptDCRural.visible ||
                this.ptDCTelefonoFijo.visible ||
                this.ptDCTelefonoCelular.visible;
                break;
            case '8':
                isVisible = this.ptupuagrPais.visible ||
                this.ptupuTieneEPSSanitas.visible ||
                this.ptupuCodigo.visible ||
                this.ptEstadoPersona.visible ||
                this.ptupuRechazadoAfiliacion.visible;
                break;
            default:
                isVisible = false;
                break;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        switch (groupId) {
            case '4':
                alias = this.langMng.translateText('4',
                    'Persona natural');
                break;
            case '6':
                alias = this.langMng.translateText('6',
                    'Persona jurídica');
                break;
            case '7':
                alias = this.langMng.translateText('7',
                    'Direcciones');
                break;
            case '7_0':
                alias = this.langMng.translateText('7_0',
                    'Residencial');
                break;
            case '7_2':
                alias = this.langMng.translateText('7_2',
                    'Correspondencia');
                break;
            case '8':
                alias = this.langMng.translateText('8',
                    'Ocultar');
                break;
            default:
                alias = '';
                break;
        }
        return alias;
    }
}
