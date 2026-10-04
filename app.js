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
