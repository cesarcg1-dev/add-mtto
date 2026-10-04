// ==========================================
// 1. CAPTURA DE PANTALLAS (SECCIONES)
// ==========================================
const formInicio = document.getElementById('form-inicio');
const formCaptura = document.getElementById('form-captura');
const formInformes = document.getElementById('form-informes');
const formParametros = document.getElementById('form-parametros');

// ==========================================
// 2. CAPTURA DE BOTONES
// ==========================================
// Botones de ida desde el Menú de Inicio
const btnIrCaptura = document.getElementById('btn-ir-captura');
const btnIrInformes = document.getElementById('btn-ir-informes');
const btnIrParametros = document.getElementById('btn-ir-parametros');
const btnSalir = document.getElementById('btn-salir');

// Botones de retorno hacia el Menú de Inicio
const btnVolverCaptura = document.getElementById('btn-volver-inicio-captura');
const btnVolverInformes = document.getElementById('btn-volver-inicio-informes');
const btnVolverParametros = document.getElementById('btn-volver-inicio-parametros');

// ==========================================
// 3. LOGICA DE NAVEGACIÓN (EVENTOS CLIC)
// ==========================================

// --- Flujo: Ir a Captura ---
btnIrCaptura.addEventListener('click', () => {
    formInicio.classList.remove('activa');    // Oculta el Inicio
    formCaptura.classList.add('activa');     // Muestra Captura
});

btnVolverCaptura.addEventListener('click', () => {
    formCaptura.classList.remove('activa');   // Oculta Captura
    formInicio.classList.add('activa');       // Regresa al Inicio
});

// --- Flujo: Ir a Informes ---
btnIrInformes.addEventListener('click', () => {
    formInicio.classList.remove('activa');
    formInformes.classList.add('activa');
});

btnVolverInformes.addEventListener('click', () => {
    formInformes.classList.remove('activa');
    formInicio.classList.add('activa');
});

// --- Flujo: Ir a Parámetros ---
btnIrParametros.addEventListener('click', () => {
    formInicio.classList.remove('activa');
    formParametros.classList.add('activa');
});

btnVolverParametros.addEventListener('click', () => {
    formParametros.classList.remove('activa');
    formInicio.classList.add('activa');
});

// --- Botón Salir ---
btnSalir.addEventListener('click', () => {
    alert('Simulación de salida: En una app web real de uso personal, aquí limpiaríamos la sesión.');
});


// ==========================================
// CAPTURAS ADICIONALES PARA EL PASO 2
// ==========================================
const formCapturaEmpresa = document.getElementById('form-captura-empresa');
const formCapturaContacto = document.getElementById('form-captura-contacto');
const formCapturaMaquina = document.getElementById('form-captura-maquina');
const formCapturaTickets = document.getElementById('form-captura-tickets');
const formCapturaTareas = document.getElementById('form-captura-tareas');

// Botones del Menú de Captura (Hijos del 2do Formulario)
const btn21Empresa = document.getElementById('btn-2-1-empresa');
const btn22Maquina = document.getElementById('btn-2-2-maquina');
const btn23Tickets = document.getElementById('btn-2-3-tickets');
const btn24Tareas = document.getElementById('btn-2-4-tareas');

// Botones internos de los sub-formularios
const btn211Contacto = document.getElementById('btn-2-1-1-contacto');
const btnVolverEmpresa = document.getElementById('btn-volver-captura-empresa');
const btnVolverContacto = document.getElementById('btn-volver-empresa-contacto');
const btnVolverMaquina = document.getElementById('btn-volver-captura-maquina');
const btnVolverTickets = document.getElementById('btn-volver-captura-tickets');
const btnVolverTareas = document.getElementById('btn-volver-captura-tareas');

// ==========================================
// LÓGICA DE NAVEGACIÓN - MÓDULO DE CAPTURA
// ==========================================

// --- Flujo: Empresa y Contactos ---
btn21Empresa.addEventListener('click', () => {
    formCaptura.classList.remove('activa');
    formCapturaEmpresa.classList.add('activa');
});

btnVolverEmpresa.addEventListener('click', () => {
    formCapturaEmpresa.classList.remove('activa');
    formCaptura.classList.add('activa');
});

btn211Contacto.addEventListener('click', () => {
    formCapturaEmpresa.classList.remove('activa');
    formCapturaContacto.classList.add('activa');
});

btnVolverContacto.addEventListener('click', () => {
    formCapturaContacto.classList.remove('activa');
    formCapturaEmpresa.classList.add('activa');
});

// --- Flujo: Máquinas ---
btn22Maquina.addEventListener('click', () => {
    formCaptura.classList.remove('activa');
    formCapturaMaquina.classList.add('activa');
});

btnVolverMaquina.addEventListener('click', () => {
    formCapturaMaquina.classList.remove('activa');
    formCaptura.classList.add('activa');
});

// --- Flujo: Tickets ---
btn23Tickets.addEventListener('click', () => {
    formCaptura.classList.remove('activa');
    formCapturaTickets.classList.add('activa');
});

btnVolverTickets.addEventListener('click', () => {
    formCapturaTickets.classList.remove('activa');
    formCaptura.classList.add('activa');
});

// --- Flujo: Tareas ---
btn24Tareas.addEventListener('click', () => {
    formCaptura.classList.remove('activa');
    formCapturaTareas.classList.add('activa');
});

btnVolverTareas.addEventListener('click', () => {
    formCapturaTareas.classList.remove('activa');
    formCaptura.classList.add('activa');
});
