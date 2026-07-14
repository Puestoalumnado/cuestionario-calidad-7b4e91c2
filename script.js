// Cada objeto representa una pregunta. "correcta" indica la posición de la opción
// válida: 0 es la primera, 1 la segunda y 2 la tercera.
const preguntas = [
  {
    texto: "¿Qué significa calidad en un producto o servicio?",
    opciones: [
      "Que siempre sea el más caro del mercado",
      "Que cumpla los requisitos y satisfaga las necesidades del cliente",
      "Que tenga muchas características, aunque no sean útiles"
    ],
    correcta: 1,
    explicacion: "La calidad consiste en cumplir los requisitos y responder a las necesidades del cliente."
  },
  {
    texto: "¿Quién determina finalmente si un producto o servicio le aporta valor?",
    opciones: ["El cliente", "Solo la dirección", "Únicamente el departamento de calidad"],
    correcta: 0,
    explicacion: "La percepción y las necesidades del cliente son esenciales para valorar la calidad."
  },
  {
    texto: "¿Qué es una no conformidad?",
    opciones: [
      "Una felicitación de un cliente",
      "Una propuesta opcional de mejora",
      "El incumplimiento de un requisito"
    ],
    correcta: 2,
    explicacion: "Existe una no conformidad cuando no se cumple un requisito establecido."
  },
  {
    texto: "¿Cuál es el objetivo de una acción correctiva?",
    opciones: [
      "Ocultar el problema para que no se vea",
      "Eliminar la causa de una no conformidad para evitar que se repita",
      "Cambiar a la persona responsable sin investigar"
    ],
    correcta: 1,
    explicacion: "La acción correctiva actúa sobre la causa del problema para prevenir su repetición."
  },
  {
    texto: "¿Qué representan las letras del ciclo PDCA?",
    opciones: [
      "Planificar, Hacer, Verificar y Actuar",
      "Preparar, Diseñar, Comprar y Archivar",
      "Producir, Distribuir, Cobrar y Analizar"
    ],
    correcta: 0,
    explicacion: "PDCA es un ciclo de mejora: Planificar, Hacer, Verificar y Actuar."
  },
  {
    texto: "¿Qué es un proceso?",
    opciones: [
      "Una lista de personas de la empresa",
      "Un conjunto de actividades relacionadas que transforma entradas en resultados",
      "Un documento que solo utiliza la dirección"
    ],
    correcta: 1,
    explicacion: "Un proceso transforma unas entradas en resultados mediante actividades relacionadas."
  },
  {
    texto: "¿Para qué sirve un indicador de calidad?",
    opciones: [
      "Para medir el desempeño y apoyar decisiones con datos",
      "Para sustituir todos los controles",
      "Para decorar los informes"
    ],
    correcta: 0,
    explicacion: "Los indicadores permiten conocer el desempeño y decidir con información objetiva."
  },
  {
    texto: "¿Qué debe tener un buen objetivo de calidad?",
    opciones: [
      "Una frase general que no pueda medirse",
      "Un resultado imposible para motivar al equipo",
      "Una meta medible, responsable y plazo definidos"
    ],
    correcta: 2,
    explicacion: "Un objetivo útil debe poder medirse y tener responsables y plazos claros."
  },
  {
    texto: "¿Qué busca una auditoría interna?",
    opciones: [
      "Castigar a quien comete un error",
      "Comprobar si el sistema se aplica y es eficaz",
      "Sustituir el trabajo diario del personal"
    ],
    correcta: 1,
    explicacion: "La auditoría obtiene evidencias para evaluar el cumplimiento y la eficacia del sistema."
  },
  {
    texto: "¿Qué significa tomar una decisión basada en evidencias?",
    opciones: [
      "Usar datos fiables y hechos comprobables",
      "Elegir siempre la opción más rápida",
      "Decidir únicamente por intuición"
    ],
    correcta: 0,
    explicacion: "Las evidencias reducen la incertidumbre y permiten decisiones mejor fundamentadas."
  },
  {
    texto: "¿Para qué sirve la trazabilidad?",
    opciones: [
      "Para aumentar el número de documentos",
      "Para seguir el historial, la aplicación o la localización de un elemento",
      "Para evitar identificar los materiales"
    ],
    correcta: 1,
    explicacion: "La trazabilidad permite conocer el recorrido y el historial de un producto o servicio."
  },
  {
    texto: "¿Por qué se controlan las versiones de los documentos?",
    opciones: [
      "Para asegurar que se utiliza la información vigente",
      "Para que nadie pueda consultar los procedimientos",
      "Para conservar errores antiguos en el trabajo diario"
    ],
    correcta: 0,
    explicacion: "El control de versiones evita el uso accidental de instrucciones obsoletas."
  },
  {
    texto: "¿Qué demuestra un registro de calidad?",
    opciones: [
      "Lo que se pensaba hacer en el futuro",
      "La opinión personal del auditor",
      "La evidencia de una actividad realizada o un resultado obtenido"
    ],
    correcta: 2,
    explicacion: "Un registro conserva evidencia objetiva de actividades y resultados."
  },
  {
    texto: "¿Por qué se calibran o verifican los equipos de medición?",
    opciones: [
      "Para que sus resultados sean fiables",
      "Para que parezcan más modernos",
      "Para evitar formar a las personas que los usan"
    ],
    correcta: 0,
    explicacion: "Un equipo controlado proporciona mediciones en las que se puede confiar."
  },
  {
    texto: "¿Qué criterio es importante al evaluar a un proveedor?",
    opciones: [
      "Solo que tenga un logotipo atractivo",
      "Su capacidad para cumplir los requisitos acordados",
      "Que nunca comunique incidencias"
    ],
    correcta: 1,
    explicacion: "Los proveedores se evalúan por su capacidad para entregar conforme a los requisitos."
  },
  {
    texto: "¿Qué es un riesgo en gestión de la calidad?",
    opciones: [
      "El efecto de la incertidumbre sobre los resultados esperados",
      "Un problema que ya ha ocurrido siempre",
      "Una tarea que no necesita seguimiento"
    ],
    correcta: 0,
    explicacion: "El riesgo relaciona la incertidumbre con sus posibles efectos sobre los objetivos."
  },
  {
    texto: "¿Qué permite analizar la causa raíz de un problema?",
    opciones: [
      "Encontrar a alguien a quien culpar",
      "Comprender el origen real y evitar la repetición",
      "Corregir solo el síntoma visible"
    ],
    correcta: 1,
    explicacion: "Tratar la causa raíz ofrece una solución más duradera que corregir solo el síntoma."
  },
  {
    texto: "¿Cómo se utiliza la técnica de los 5 porqués?",
    opciones: [
      "Repitiendo una pregunta para profundizar hasta la causa",
      "Buscando cinco personas responsables",
      "Proponiendo cinco soluciones sin analizar el problema"
    ],
    correcta: 0,
    explicacion: "Preguntar sucesivamente por qué ayuda a avanzar desde el síntoma hacia su causa."
  },
  {
    texto: "¿Para qué se utiliza un diagrama de Pareto?",
    opciones: [
      "Para ordenar alfabéticamente los problemas",
      "Para representar únicamente el presupuesto",
      "Para identificar las causas o problemas que generan mayor impacto"
    ],
    correcta: 2,
    explicacion: "Pareto ayuda a priorizar los pocos problemas que concentran gran parte del impacto."
  },
  {
    texto: "¿Qué aporta escuchar las reclamaciones del cliente?",
    opciones: [
      "Información útil para corregir y mejorar",
      "Una razón para eliminar todos los controles",
      "Datos que siempre deben ignorarse"
    ],
    correcta: 0,
    explicacion: "Las reclamaciones muestran expectativas incumplidas y oportunidades de mejora."
  },
  {
    texto: "¿Qué significa mejora continua?",
    opciones: [
      "Realizar una única mejora y no volver a revisar",
      "Mantener un esfuerzo repetido para mejorar el desempeño",
      "Cambiar todos los procesos cada semana"
    ],
    correcta: 1,
    explicacion: "La mejora continua es un esfuerzo sostenido y sistemático, no una acción aislada."
  },
  {
    texto: "¿Qué papel tiene el liderazgo en un sistema de calidad?",
    opciones: [
      "Definir la dirección y crear condiciones para lograr los objetivos",
      "Delegar toda la calidad en una sola persona",
      "Evitar comunicar prioridades"
    ],
    correcta: 0,
    explicacion: "El liderazgo alinea a las personas, los recursos y los objetivos de la organización."
  },
  {
    texto: "¿Cómo se demuestra la competencia para realizar una tarea?",
    opciones: [
      "Solo mediante la antigüedad",
      "Con educación, formación o experiencia adecuadas y evidencias",
      "Únicamente afirmando que se sabe hacer"
    ],
    correcta: 1,
    explicacion: "La competencia se apoya en conocimientos y habilidades demostrables."
  },
  {
    texto: "¿Para qué sirve la política de calidad?",
    opciones: [
      "Para detallar cada operación de cada máquina",
      "Para sustituir todos los objetivos",
      "Para expresar la orientación y los compromisos de la organización"
    ],
    correcta: 2,
    explicacion: "La política establece el marco general y los compromisos relativos a la calidad."
  },
  {
    texto: "¿Qué debe hacerse antes de implantar un cambio importante en un proceso?",
    opciones: [
      "Planificarlo, valorar sus riesgos y comunicarlo",
      "Aplicarlo sin avisar para ganar tiempo",
      "Eliminar los controles durante el cambio"
    ],
    correcta: 0,
    explicacion: "Los cambios controlados se planifican y consideran riesgos, recursos y comunicación."
  },
  {
    texto: "¿Qué finalidad tiene una inspección?",
    opciones: [
      "Determinar si se cumplen unos requisitos",
      "Asegurar que nunca pueda existir un defecto",
      "Reemplazar la planificación del proceso"
    ],
    correcta: 0,
    explicacion: "La inspección compara el resultado con los criterios o requisitos definidos."
  },
  {
    texto: "¿Qué diferencia hay entre corrección y acción correctiva?",
    opciones: [
      "No existe ninguna diferencia",
      "La corrección resuelve el efecto; la acción correctiva elimina la causa",
      "La corrección siempre modifica todo el sistema"
    ],
    correcta: 1,
    explicacion: "Corregir atiende el problema detectado; la acción correctiva evita que vuelva a ocurrir."
  },
  {
    texto: "¿Qué ventaja ofrece estandarizar una forma de trabajo eficaz?",
    opciones: [
      "Obtener resultados más consistentes y facilitar el aprendizaje",
      "Impedir cualquier mejora futura",
      "Eliminar la necesidad de comunicar"
    ],
    correcta: 0,
    explicacion: "La estandarización reduce la variación y crea una base común que también puede mejorarse."
  },
  {
    texto: "¿Cuál es un ejemplo de coste de no calidad?",
    opciones: [
      "Formar al personal antes de una tarea nueva",
      "Planificar una auditoría interna",
      "Rehacer un producto defectuoso y atender su devolución"
    ],
    correcta: 2,
    explicacion: "Los errores, retrabajos, devoluciones y reclamaciones generan costes de no calidad."
  },
  {
    texto: "¿Qué es ISO 9001?",
    opciones: [
      "Una norma con requisitos para sistemas de gestión de la calidad",
      "Una ley que obliga a certificar todas las empresas",
      "Un manual de instrucciones para fabricar un solo producto"
    ],
    correcta: 0,
    explicacion: "ISO 9001 establece requisitos para implantar y mejorar un sistema de gestión de la calidad."
  }
];

const PREGUNTAS_POR_BLOQUE = 5;
const formulario = document.querySelector("#formularioCuestionario");
const listaPreguntas = document.querySelector("#listaPreguntas");
const resultado = document.querySelector("#resultado");
const botonReiniciar = document.querySelector("#botonReiniciar");
const bloquesComprobados = new Set();

// Genera seis bloques. Así el HTML no necesita repetir a mano las 30 preguntas.
function mostrarPreguntas() {
  for (let inicio = 0; inicio < preguntas.length; inicio += PREGUNTAS_POR_BLOQUE) {
    const numeroBloque = inicio / PREGUNTAS_POR_BLOQUE;
    const fin = Math.min(inicio + PREGUNTAS_POR_BLOQUE, preguntas.length);
    const bloque = document.createElement("section");
    bloque.className = "bloque-preguntas";
    bloque.id = `bloque-${numeroBloque}`;

    bloque.innerHTML = `
      <div class="bloque-preguntas__cabecera">
        <div>
          <p class="etiqueta">Comprobación ${numeroBloque + 1} de 6</p>
          <h2>Bloque ${numeroBloque + 1}</h2>
        </div>
        <span>Preguntas ${inicio + 1}–${fin}</span>
      </div>
      <div class="bloque-preguntas__lista"></div>
      <div class="comprobacion-bloque">
        <button type="button" class="boton boton--comprobar" data-bloque="${numeroBloque}">
          Comprobar estas 5 preguntas
        </button>
        <p class="resultado-bloque" id="resultado-bloque-${numeroBloque}" aria-live="polite" hidden></p>
      </div>
    `;

    const listaBloque = bloque.querySelector(".bloque-preguntas__lista");

    for (let indicePregunta = inicio; indicePregunta < fin; indicePregunta++) {
      const pregunta = preguntas[indicePregunta];
      const articulo = document.createElement("article");
      articulo.className = "pregunta";
      articulo.id = `pregunta-${indicePregunta}`;
      articulo.dataset.indice = indicePregunta;

      const opcionesHTML = pregunta.opciones.map((opcion, indiceOpcion) => `
        <label class="opcion">
          <input type="radio" name="pregunta-${indicePregunta}" value="${indiceOpcion}">
          <span>${opcion}</span>
        </label>
      `).join("");

      articulo.innerHTML = `
        <div class="pregunta__numero" aria-hidden="true">${indicePregunta + 1}</div>
        <fieldset>
          <legend>${pregunta.texto}</legend>
          <div class="opciones">${opcionesHTML}</div>
        </fieldset>
      `;

      listaBloque.appendChild(articulo);
    }

    listaPreguntas.appendChild(bloque);
  }
}

// Actualiza la barra cada vez que se selecciona una opción.
function actualizarProgreso() {
  const respondidas = formulario.querySelectorAll('input[type="radio"]:checked').length;
  const porcentaje = (respondidas / preguntas.length) * 100;

  document.querySelector("#contadorProgreso").textContent = `${respondidas} de ${preguntas.length} respondidas`;
  document.querySelector("#barraProgreso").style.width = `${porcentaje}%`;
  document.querySelector(".barra").setAttribute("aria-valuenow", respondidas);
}

// Elimina las marcas de una pregunta antes de volver a corregirla.
function limpiarPregunta(indicePregunta) {
  const articulo = document.querySelector(`#pregunta-${indicePregunta}`);
  articulo.querySelectorAll(".opcion").forEach(opcion => opcion.classList.remove("correcta", "incorrecta"));
  articulo.querySelector(".retroalimentacion")?.remove();
}

// Corrige una pregunta y devuelve dos datos: si hay acierto y si está en blanco.
function corregirPregunta(indicePregunta) {
  const pregunta = preguntas[indicePregunta];
  const articulo = document.querySelector(`#pregunta-${indicePregunta}`);
  const respuesta = formulario.querySelector(`input[name="pregunta-${indicePregunta}"]:checked`);
  const etiquetas = articulo.querySelectorAll(".opcion");
  const retroalimentacion = document.createElement("p");

  limpiarPregunta(indicePregunta);
  etiquetas[pregunta.correcta].classList.add("correcta");
  retroalimentacion.className = "retroalimentacion";

  if (!respuesta) {
    retroalimentacion.classList.add("retroalimentacion--mal");
    retroalimentacion.textContent = `Sin responder. ${pregunta.explicacion}`;
    articulo.querySelector("fieldset").appendChild(retroalimentacion);
    return { acierto: false, sinResponder: true };
  }

  if (Number(respuesta.value) === pregunta.correcta) {
    retroalimentacion.classList.add("retroalimentacion--bien");
    retroalimentacion.textContent = `¡Correcto! ${pregunta.explicacion}`;
    articulo.querySelector("fieldset").appendChild(retroalimentacion);
    return { acierto: true, sinResponder: false };
  }

  respuesta.closest(".opcion").classList.add("incorrecta");
  retroalimentacion.classList.add("retroalimentacion--mal");
  retroalimentacion.textContent = `Respuesta incorrecta. ${pregunta.explicacion}`;
  articulo.querySelector("fieldset").appendChild(retroalimentacion);
  return { acierto: false, sinResponder: false };
}

// Corrige cinco preguntas seguidas y reúne su puntuación parcial.
function corregirBloque(numeroBloque) {
  const inicio = numeroBloque * PREGUNTAS_POR_BLOQUE;
  const fin = Math.min(inicio + PREGUNTAS_POR_BLOQUE, preguntas.length);
  let aciertos = 0;
  let sinResponder = 0;

  for (let indice = inicio; indice < fin; indice++) {
    const resultadoPregunta = corregirPregunta(indice);
    if (resultadoPregunta.acierto) aciertos++;
    if (resultadoPregunta.sinResponder) sinResponder++;
  }

  return { aciertos, sinResponder, total: fin - inicio };
}

// Muestra el pequeño resumen que aparece debajo de cada grupo de cinco.
function mostrarResultadoBloque(numeroBloque, datos) {
  const mensaje = document.querySelector(`#resultado-bloque-${numeroBloque}`);
  const boton = document.querySelector(`[data-bloque="${numeroBloque}"]`);
  const textoPendientes = datos.sinResponder > 0
    ? ` ${datos.sinResponder} ${datos.sinResponder === 1 ? "pregunta está" : "preguntas están"} sin responder.`
    : "";

  mensaje.className = `resultado-bloque ${datos.aciertos === datos.total ? "resultado-bloque--perfecto" : ""}`;
  mensaje.textContent = `Bloque ${numeroBloque + 1}: ${datos.aciertos} de ${datos.total} correctas.${textoPendientes}`;
  mensaje.hidden = false;
  boton.textContent = "Volver a comprobar el bloque";
}

// Permite comprobar únicamente el bloque cuyo botón se ha pulsado.
function comprobarBloque(numeroBloque) {
  const datos = corregirBloque(numeroBloque);
  bloquesComprobados.add(numeroBloque);
  mostrarResultadoBloque(numeroBloque, datos);
}

// Si se cambia una respuesta ya corregida, se retira la corrección antigua del bloque.
function invalidarComprobacion(evento) {
  const articulo = evento.target.closest(".pregunta");
  if (!articulo) return;

  const indicePregunta = Number(articulo.dataset.indice);
  const numeroBloque = Math.floor(indicePregunta / PREGUNTAS_POR_BLOQUE);
  if (!bloquesComprobados.has(numeroBloque)) return;

  const inicio = numeroBloque * PREGUNTAS_POR_BLOQUE;
  for (let indice = inicio; indice < inicio + PREGUNTAS_POR_BLOQUE; indice++) limpiarPregunta(indice);

  const mensaje = document.querySelector(`#resultado-bloque-${numeroBloque}`);
  mensaje.className = "resultado-bloque resultado-bloque--pendiente";
  mensaje.textContent = "Has cambiado una respuesta. Comprueba de nuevo este bloque.";
  mensaje.hidden = false;
  bloquesComprobados.delete(numeroBloque);
}

// Devuelve un comentario diferente según la nota final.
function obtenerComentario(nota) {
  if (nota >= 9) return "¡Excelente! Dominas los fundamentos de la gestión de la calidad.";
  if (nota >= 7) return "¡Muy bien! Comprendes los conceptos principales de calidad.";
  if (nota >= 5) return "Has aprobado. Revisa las explicaciones para reforzar algunos conceptos.";
  return "Necesitas repasar. Utiliza las comprobaciones por bloques y vuelve a intentarlo.";
}

// Corrige los seis bloques y calcula la nota global sobre 10.
function corregirCuestionario(evento) {
  evento.preventDefault();

  let aciertos = 0;
  let sinResponder = 0;

  for (let numeroBloque = 0; numeroBloque < preguntas.length / PREGUNTAS_POR_BLOQUE; numeroBloque++) {
    const datos = corregirBloque(numeroBloque);
    aciertos += datos.aciertos;
    sinResponder += datos.sinResponder;
    bloquesComprobados.add(numeroBloque);
    mostrarResultadoBloque(numeroBloque, datos);
  }

  // Con 30 preguntas cada acierto vale un tercio de punto aproximadamente.
  const nota = (aciertos / preguntas.length) * 10;
  const errores = preguntas.length - aciertos;

  document.querySelector("#aciertos").textContent = aciertos;
  document.querySelector("#errores").textContent = errores;
  document.querySelector("#nota").textContent = nota.toFixed(1);
  document.querySelector("#comentarioFinal").textContent = obtenerComentario(nota);

  const aviso = document.querySelector("#avisoSinResponder");
  if (sinResponder > 0) {
    aviso.textContent = `${sinResponder === 1 ? "Hay 1 pregunta sin responder" : `Hay ${sinResponder} preguntas sin responder`}. Se ${sinResponder === 1 ? "ha contado" : "han contado"} como error.`;
    aviso.hidden = false;
  } else {
    aviso.hidden = true;
  }

  resultado.hidden = false;
  resultado.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Deja la aplicación igual que al abrirla por primera vez.
function reiniciarCuestionario() {
  formulario.reset();
  resultado.hidden = true;
  bloquesComprobados.clear();
  document.querySelectorAll(".opcion").forEach(opcion => opcion.classList.remove("correcta", "incorrecta"));
  document.querySelectorAll(".retroalimentacion").forEach(mensaje => mensaje.remove());
  document.querySelectorAll(".resultado-bloque").forEach(mensaje => {
    mensaje.hidden = true;
    mensaje.className = "resultado-bloque";
  });
  document.querySelectorAll(".boton--comprobar").forEach(boton => {
    boton.textContent = "Comprobar estas 5 preguntas";
  });
  actualizarProgreso();
  document.querySelector("#bloque-0").scrollIntoView({ behavior: "smooth", block: "start" });
}

mostrarPreguntas();

formulario.addEventListener("change", evento => {
  actualizarProgreso();
  invalidarComprobacion(evento);
});

listaPreguntas.addEventListener("click", evento => {
  const boton = evento.target.closest(".boton--comprobar");
  if (boton) comprobarBloque(Number(boton.dataset.bloque));
});

formulario.addEventListener("submit", corregirCuestionario);
botonReiniciar.addEventListener("click", reiniciarCuestionario);
