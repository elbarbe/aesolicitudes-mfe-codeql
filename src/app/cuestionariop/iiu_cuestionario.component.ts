import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_Cuestionario of CuestionarioP »
 */
import { LogicError, QueryResponse, RequestError } from '../common/answerRequestInformation';
import { CuestionarioPServices } from './cuestionariop.services';


/** Estructura de datos para almacenar la información de las secciones, preguntas y respuestas */
interface Respuesta {
    valor: string;
	seleccionado: boolean;
}
interface Pregunta {
	oid: any;
	identificador: string;
	numPregunta: string;
	textoPregunta: string;
	respuestaSiNo: string;
	respuestaNum: string;
	respuestaObs: string;
	vieneDeCORE: boolean;
	esNumero: boolean;
	obsOblig: boolean;
	respMultiple: boolean;
	valorMax: number;
	valorMin: number;
	valorSNObliga: boolean;
	opciones: Respuesta[];
	mostrarCombo: boolean;
	mostrarLista: boolean;
	/** Control. Valores anteriores para procesar el guardar o no */
	valorSeleccionadoCombo: string;
	valorAntRespuestaSiNo: string;
	valorAntValoresRespuestas: string;
	valorAntRespuestaObs: string;
}
interface Seccion {
	identificador: string;
	nombre: string;
	preguntas: Pregunta[];
}

@Component({
    selector: 'imes-cuestionariop-iiu-cuestionario',
    templateUrl: './iiu_cuestionario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuestionarioPIIUuCuestionarioComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseUsuariodrvNombreCompleto: Field;
    public dseYaDiligenciado: Field;

    public secciones: Seccion[] = [];

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
        this.idXML = 'Clas_1432647237632788UIInst_1';
        this.className = ModelConstants.Cuestionariop.name;
        this.classAlias = this.langMng.translateText('cls_CuestionarioP',
            'Cuestionario');
        this.iuName = ModelConstants.Cuestionariop.iiuucuestionario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_CuestionarioP_iiu_IIU_Cuestionario',
            'Cuestionario médico');
        this.queryURL = '/api/CuestionarioPApi/GetPopulationDynamic';

        this.dseUsuariodrvNombreCompleto = new Field(this.langMng);
        this.dseYaDiligenciado = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();

    }

    public override setData(data: any): void {
        super.setData(data);
        if (this.selectedOid) {
		// Limpiamos lo que tuviera cargado
        this.secciones = [];
            this.cargarDatos();    
        }
    }

    public cargarDatos(): void {
		
        this.setShowWait(true);
		// Limpiamos lo que tuviera cargado
        this.secciones = [];
		
		// Buscamos las preguntas del cuestionario.
		// Buscamos preguntas para realizar una única query
        let displaySet = 'identificador,numero';
        displaySet += ',descripcion';
        displaySet += ',respuestaobs';
        displaySet += ',respuestasino';
        displaySet += ',vienedecore';
        displaySet += ',valoresrespuestas';
        displaySet += ',seccion.identificador';
        displaySet += ',seccion.nombre';
        displaySet += ',pregunta.esnumero';
        displaySet += ',pregunta.obsoblig';
        displaySet += ',pregunta.respmultiple';
        displaySet += ',pregunta.valormax';
        displaySet += ',pregunta.valormin';
        displaySet += ',pregunta.valorsnobliga';
        displaySet += ',pregunta.drvvaloresposibles';

        const filter = this.util.getFilterByRelated('Seccion.Cuestionario', this.selectedOid);
        const request = this.util.getQueryRequest(displaySet, [filter], 'OC_PreguntaP', 0);

        this.util.callQuery(ModelConstants.Preguntap.name, request).then( (response: QueryResponse) => {
			this.cargarPreguntas(response.results);
            this.setShowWait(false);
            this.changeDetectorRef.markForCheck();
        }).catch((error: Error) => {
            this.setShowWait(false);
            this.util.addErrorMessage(error);
            this.changeDetectorRef.markForCheck();
        });
	} 
    
    private cargarPreguntas(preguntas: any[]): void {
        for(const preg of preguntas) {

			if ( QueryResponse.getValue(preg, 'seccion-identificador') && QueryResponse.getValue(preg, 'seccion-nombre')) {
				const idSeccion: string = QueryResponse.getValue(preg, 'seccion-identificador');

				let seccion = this.secciones.find( (sec: Seccion) => 
                    sec.identificador === idSeccion
                ) ;
                if (!seccion) {
                    seccion = {identificador: idSeccion, nombre: QueryResponse.getValue(preg, 'seccion-nombre'), preguntas: []};
                    this.secciones.push(seccion);
                }
                this.cargarPregunta(seccion, preg);
			}
		}
    }

    private cargarPregunta(seccion: Seccion, preg: any) {
        const pregunta: Pregunta =  {
            oid: '',
            identificador: '',
            numPregunta: '',
            textoPregunta: '',
            respuestaSiNo: '',
            respuestaNum: '',
            respuestaObs: '',
            vieneDeCORE: false,
            esNumero: false,
            obsOblig: false,
            respMultiple: false,
            valorMax: 0,
            valorMin: 0,
            valorSNObliga: false,
            opciones: [],
            mostrarCombo: false,
            mostrarLista: false,
            valorSeleccionadoCombo: '',
            valorAntRespuestaSiNo: '',
            valorAntValoresRespuestas: '',
            valorAntRespuestaObs: '',
        }

        pregunta.oid = preg.oid;
        pregunta.identificador = QueryResponse.getValue(preg, 'identificador');
		pregunta.numPregunta = QueryResponse.getValue(preg, 'numero');
		pregunta.textoPregunta = pregunta.numPregunta + ". " + QueryResponse.getValue(preg, 'descripcion');

		if (!this.util.isNull(QueryResponse.getValue(preg, 'respuestasino')) ){
				pregunta.respuestaSiNo = QueryResponse.getValue(preg, 'respuestasino') ? "Sí" : "No";
		}
		else{
			pregunta.respuestaSiNo = '';
		}
		pregunta.valorAntRespuestaSiNo = pregunta.respuestaSiNo;

        pregunta.respuestaObs = QueryResponse.getValue(preg, 'respuestaobs');
		pregunta.valorAntRespuestaObs = pregunta.respuestaObs;

    	pregunta.vieneDeCORE = QueryResponse.getValue(preg, 'vienedecore');

		pregunta.esNumero = QueryResponse.getValue(preg, 'pregunta-esnumero');

		pregunta.obsOblig = QueryResponse.getValue(preg, 'pregunta-obsoblig');
		
		pregunta.respMultiple = QueryResponse.getValue(preg, 'pregunta-respmultiple');

		pregunta.valorMax = QueryResponse.getValue(preg, 'pregunta-valormax');

		pregunta.valorMin = QueryResponse.getValue(preg, 'pregunta-valormin');

		pregunta.valorSNObliga = QueryResponse.getValue(preg, 'pregunta-valorsnobliga');
		
		// Vemos si la pregunta tiene opciones de respuesta
		pregunta.mostrarCombo = false;
        pregunta.mostrarLista = false;
		if (QueryResponse.getValue(preg, 'Pregunta.drvValoresPosibles')) {
			const valoresPosibles = QueryResponse.getValue(preg, 'Pregunta.drvValoresPosibles');
			
            // Como tiene valores posibles, mostrarmos el combo o la lista 
            if (pregunta.respMultiple) {
                pregunta.mostrarLista = true;
            } else {
                // Añadimos una opción en blanco a la lista
                pregunta.opciones.push({valor: '', seleccionado: false});
                pregunta.mostrarCombo = true;
            }
            
            // Cargamos las posibles respuestas en la estructura intermedia
            const listaValores = valoresPosibles.split(";");
            for(const valor of listaValores){
                if (valor){
                    pregunta.opciones.push({valor: valor, seleccionado: false});
                }
            }
		}
		
		// Cargamos las respuestas en las variables que corresponda
		if (QueryResponse.getValue(preg, 'ValoresRespuestas')) {
			const valores = QueryResponse.getValue(preg, 'ValoresRespuestas');
			
			pregunta.valorAntValoresRespuestas = valores;
			
			// SI es numero movemos el dato al otro campo
			if (pregunta.esNumero) {
				pregunta.respuestaNum = valores;
			} else{
				// Si ya tiene valores, asignamos a quien corresponda
                if (pregunta.respMultiple) {
                    // Descomponemos los posibles en la lista y los añadimos a las opciones, si no existen
                    const listaValores = valores.split(";");
                    for(const valor of listaValores){
                        if (valor) {
                            let resp = pregunta.opciones.find( (opc: Respuesta) => 
                                valor.toLowerCase() === opc.valor.toLowerCase()
                            );
                            // Si no lo encontramos lo añadimos
                            if (resp) {
                                resp.seleccionado = true;
                            } else {
                                pregunta.opciones.push({valor: valor, seleccionado: true });
                            }
                        }
                    }
                } else{
                    let resp = pregunta.opciones.find( (opc: Respuesta) => 
                        valores.toLowerCase() === opc.valor.toLowerCase()
                    );
                    if (resp) {
                        resp.seleccionado = true;
                    } else {
                        pregunta.opciones.push({valor: valores, seleccionado: true });
                    }
                    // Asignamos el valor a la variable
                    pregunta.valorSeleccionadoCombo = valores;
                }
			}
		}
		else{
			pregunta.valorSeleccionadoCombo = ''
            pregunta.respuestaNum = '';
		}        

        seccion.preguntas.push(pregunta);
    }

	public respuestaSiNoVisible(pre: Pregunta):boolean {
		let visible = pre.valorSNObliga;
		
		// Será visible, si a pesar de no ser obligatoria no tiene ni valor numérico ni opciones
		if (!visible){
			if (!pre.esNumero && pre.opciones.length === 0){
				visible = true;
			}
		}
		return visible;
	}

	public respuestaSiNoDisabled(pre: Pregunta):boolean {
		// Inhabilitamos la respuesta, si viene del CORE y el valor es Sí
		return pre.vieneDeCORE && pre.valorAntRespuestaSiNo != '' && pre.valorAntRespuestaSiNo === 'Sí'; 
	}
    
    public onRespuestaSiNoChange(pre: Pregunta):void {
        // Si la respuesta a la pregunta de Si/No es No, borramos las posibles respuestas
        if (pre && pre.respuestaSiNo === 'No') {
            pre.respuestaNum = '';
            pre.respuestaObs = '';
            pre.valorSeleccionadoCombo = '';
            for (const opc of pre.opciones) {
                opc.seleccionado = false;
            }
        }
    }
	public editorDisabled(pre: Pregunta):boolean {
		return pre.valorSNObliga && pre.respuestaSiNo === 'No';
	}    

    public soloLectura(): boolean {
        return this.dseYaDiligenciado.value;
    }

    public procesarMarcarDiligenciado(): void {
        this.guardar().then( (resultado:boolean) => {
            if (resultado) {
                this.setShowWait(true);
                const srv = new  CuestionarioPServices(this.appGlobalInfo, this.util);
                srv.tCERRAR(this.selectedOid).then( () => {
                    this.setShowWait(false);
                    this.processCancel();
                }).catch( (err: Error) => {
                    this.setShowWait(false);
                    this.util.addErrorMessage(err);
                });
            }
        });
    }

    public guardar(): Promise<boolean> {

        this.setShowWait(true);

        return new Promise<boolean>((resolverGuardar) => {        
            // Recorremos todas las preguntas y lanzamos el servicio
            const errores: string[] = [];
            let msgValidacion = '';
            const promiseArr: Array<Promise<void>> = [];

            for (const seccion of this.secciones){
                for(const preg of seccion.preguntas){
                    
                    msgValidacion = this.validarPregunta(preg);

                    // Si no es váida, guardamos el error y continuamos 
                    if (msgValidacion){
                        errores.push(msgValidacion);
                        continue;
                    }
                    
                    // Lanzamos el servicio

                    const request = {
                        p_thispreguntap_oid: JSON.parse(preg.oid),
                        p_respuestasino: preg.respuestaSiNo === 'No' ? false : true,
                        p_respuestaobs: preg.respuestaObs,
                        pe_valoresrespuestas: this.getValoresRespuestas(preg)
                    };
                    const promesa = new Promise<void>((resolverLlamada) => {
                        this.util.callHttpPost(`${this.appGlobalInfo.APPCONSTANTS.BASE_URL}/api/${ModelConstants.Preguntap.name}Api/marcarRespuesta`,
                            request).then( (response: any) => {
                                const logicError = new LogicError(response);
                                if (logicError.IsError()) {
                                    errores.push(logicError.message);
                                }
                                resolverLlamada();
                            } ).catch( (err: RequestError) => {
                                errores.push(err.message);
                                resolverLlamada();
                            });
                    });
                    promiseArr.push(promesa);
                }
            }

            // Si hay errores, los mostramos
            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                if (errores.length > 0) {
                    this.util.addErrorMessage('Se han producido errores al guardar');
                    for(const err of errores) {
                        this.util.addErrorMessage(err);
                    }
                    resolverGuardar(false);
                } else {
                    resolverGuardar(true);
                }
                this.changeDetectorRef.markForCheck();
            });
        });
    }
    

    private getValoresRespuestas(pregunta: Pregunta): string {
		let valores = '';
		
		// Devolvemos los valores seleccionados, en función del tipo de valores que admite la pregunta.

		// Si es un número, tomamos el valor numérico 
		if (pregunta.esNumero){
			valores  = pregunta.respuestaNum;
		} else {
			// La pregunta es de opciones. Si admite respuesta múltiple o no
			if (pregunta.respMultiple){
				// Formamos un String concatenando con ;
				for(const opc of pregunta.opciones) {
					if (opc.seleccionado){
						if (valores) {
							valores += ";";
						}
						valores += opc.valor;
					}
				}
			}
			else{
				// No admite respuesta múltiple, entonces el valor seleccionado en el combo
				valores = pregunta.valorSeleccionadoCombo;
			}
		}
		return valores;
	}

	public validarPregunta(pregunta: Pregunta): string {
		let msgValidacion = '';
		let numValido = true;
		if (pregunta.esNumero){
			// Debe tener valor en el Numero y ser numérico
			if (!pregunta.respuestaNum){
				numValido = false;
			}
			else{
				// Debe ser un número válido
                const valueTyped = parseFloat(pregunta.respuestaNum);
                if (isNaN(valueTyped)) {
                    numValido = false;
                }
			}
		}
		
		let opcionesValido = true;
		// Si tiene opciones, debe haber seleccionado alguna
		if (pregunta.opciones.length > 0) {
            if (!this.getValoresRespuestas(pregunta)) {
				opcionesValido = false;
			}
		}
		
		// Si la respuestaSiNo es visible debe tener algún valor y si es negativa no debemos validar los valores
		let validarDatos = true;
		if (this.respuestaSiNoVisible(pregunta)) {
			if (!pregunta.respuestaSiNo){
				msgValidacion = 'Pregunta ' + pregunta.numPregunta + ': Debe responder a la pregunta';
				validarDatos = false;
			} else{
				if (pregunta.respuestaSiNo === 'No') {
					validarDatos = false;
				} else{
					validarDatos = true;
				}
			}
		}
		
		if (validarDatos){
			if (pregunta.esNumero){
				if ( !numValido){
					msgValidacion = "Pregunta " + pregunta.numPregunta + ": Debe introducir un valor numérico";
				} else{
					// Si es válido y tiene límites, los comprobamos
					let valorNumerico = this.util.getReal(pregunta.respuestaNum);
					if (pregunta.valorMax && valorNumerico > pregunta.valorMax){
						msgValidacion = "Pregunta " + pregunta.numPregunta + ": El valor no puede ser mayor que " + pregunta.valorMax;
					}
					if (pregunta.valorMin && valorNumerico < pregunta.valorMin){
						msgValidacion = "Pregunta " + pregunta.numPregunta + ": El valor no puede ser menor que " + pregunta.valorMin;
					}					
				}
			}
			
			// Si tiene opciones, debe haber seleccionado alguna
			if (!opcionesValido){
				msgValidacion = "Pregunta " + pregunta.numPregunta + ": Debe seleccionar alguna opción";
			}
			
			// Si no es número y son obligatorias las observaciones ...
			if (!pregunta.esNumero && pregunta.obsOblig){
				if ( !pregunta.respuestaObs){
					msgValidacion = "Pregunta " + pregunta.numPregunta + ": Debe diligenciar las aclaraciones";
				} else {
					// Validamos longitud máxima y caracteres especiales
					if (pregunta.respuestaObs.length > 2200){
						msgValidacion = "Pregunta " + pregunta.numPregunta + ": Las aclaraciones superan la longitud máxima de 2200";
					}
				}
			}
		}
		return msgValidacion;
	}

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseUsuariodrvNombreCompleto.nameInRequest = 'usuario.drvnombrecompleto';
        this.dseUsuariodrvNombreCompleto.alias = this.langMng.translateText(
            'cls_CuestionarioP_ds_DS_CuestionarioP_IIU_item_Clas_1432647237632788CjtoVis_1ICtjoVis_5',
            'Usuario');
        this.dseUsuariodrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1432647237632788CjtoVis_1ICtjoVis_5', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseUsuariodrvNombreCompleto.enabled = false;
        this.dseUsuariodrvNombreCompleto.mandatory = false;
        this.dseUsuariodrvNombreCompleto.dataType = Field.dtString;
        this.dseUsuariodrvNombreCompleto.maxLength = 200;
        this.dseUsuariodrvNombreCompleto.assignCSS();
        this.fields.push(this.dseUsuariodrvNombreCompleto);

        this.dseYaDiligenciado.nameInRequest = 'yadiligenciado';
        this.dseYaDiligenciado.alias = this.langMng.translateText(
            'cls_CuestionarioP_ds_DS_CuestionarioP_IIU_item_Clas_1432647237632788CjtoVis_1ICtjoVis_6',
            'Ya diligenciado');
        this.dseYaDiligenciado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1432647237632788CjtoVis_1ICtjoVis_6', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseYaDiligenciado.enabled = false;
        this.dseYaDiligenciado.mandatory = false;
        this.dseYaDiligenciado.dataType = Field.dtBool;
        this.dseYaDiligenciado.assignCSS();
        this.fields.push(this.dseYaDiligenciado);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1432647237632788AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_CuestionarioP_act_A_CuestionarioP_IIU_item_Clas_1432647237632788AccOfer_1ElemAcc_2',
            'Marcar como completado');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Cuestionariop.name;
        accItem.targetUI = ModelConstants.Cuestionariop.siuutcerrar;
        accItem.setNoShowProperties('TCERRAR', 'p_thiscuestionariop_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }
}
