// ==========================================
// CONFIGURACIÓN Y CONEXIÓN DE SUPABASE
// ==========================================
const SUPABASE_URL = "https://yrtxdobtygelagwaxbyd.supabase.co"; // Tu URL real
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydHhkb2J0eWdlbGFnd2F4YnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMzQ1ODIsImV4cCI6MjEwNjcxMDU4Mn0.NeAFvsJiGhMecmYVVdC1Uv8XnU6LtsyNWFCTl3_NSLg";        // Tu Anon Key real

// Inicializamos el cliente global usando el objeto del SDK de Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================================
// 1. CAPTURA DE PANTALLAS (SECCIONES)
// El resto de tu código de navegación sigue igual aquí abajo...



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


// ==========================================
// CAPTURAS ADICIONALES PARA EL PASO 3
// ==========================================
const formInfEmpresa = document.getElementById('form-inf-empresa');
const formInfMaquina = document.getElementById('form-inf-maquina');
const formInfTickets = document.getElementById('form-inf-tickets');
const formInfTareas = document.getElementById('form-inf-tareas');

// Botones del Menú de Informes (Hijos del 3er Formulario)
const btn31InfEmpresa = document.getElementById('btn-3-1-inf-empresa');
const btn32InfMaquina = document.getElementById('btn-3-2-inf-maquina');
const btn33InfTickets = document.getElementById('btn-3-3-inf-tickets');
const btn34InfTareas = document.getElementById('btn-3-4-inf-tareas');

// Botones de retorno de las pantallas de informes
const btnVolverInfEmpresa = document.getElementById('btn-volver-inf-empresa');
const btnVolverInfMaquina = document.getElementById('btn-volver-inf-maquina');
const btnVolverInfTickets = document.getElementById('btn-volver-inf-tickets');
const btnVolverInfTareas = document.getElementById('btn-volver-inf-tareas');

// ==========================================
// LÓGICA DE NAVEGACIÓN - MÓDULO DE INFORMES
// ==========================================

// --- Consulta: Empresa y Contacto ---
btn31InfEmpresa.addEventListener('click', () => {
    formInformes.classList.remove('activa');
    formInfEmpresa.classList.add('activa');
});
btnVolverInfEmpresa.addEventListener('click', () => {
    formInfEmpresa.classList.remove('activa');
    formInformes.classList.add('activa');
});

// --- Consulta: Máquinas ---
btn32InfMaquina.addEventListener('click', () => {
    formInformes.classList.remove('activa');
    formInfMaquina.classList.add('activa');
});
btnVolverInfMaquina.addEventListener('click', () => {
    formInfMaquina.classList.remove('activa');
    formInformes.classList.add('activa');
});

// --- Consulta: Tickets ---
btn33InfTickets.addEventListener('click', () => {
    formInformes.classList.remove('activa');
    formInfTickets.classList.add('activa');
});
btnVolverInfTickets.addEventListener('click', () => {
    formInfTickets.classList.remove('activa');
    formInformes.classList.add('activa');
});

// --- Consulta: Tareas / Calendario ---
btn34InfTareas.addEventListener('click', () => {
    formInformes.classList.remove('activa');
    formInfTareas.classList.add('activa');
});
btnVolverInfTareas.addEventListener('click', () => {
    formInfTareas.classList.remove('activa');
    formInformes.classList.add('activa');
});
