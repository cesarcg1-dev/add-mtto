// ==========================================
// 1. CONEXIÓN A SUPABASE
// ==========================================
const SUPABASE_URL = "https://yrtxdobtygelagwaxbyd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydHhkb2J0eWdlbGFnd2F4YnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMzQ1ODIsImV4cCI6MjEwNjcxMDU4Mn0.NeAFvsJiGhMecmYVVdC1Uv8XnU6LtsyNWFCTl3_NSLg";

// La librería crea el objeto global window.supabase.
// Guardamos nuestro cliente con otro nombre para evitar conflictos.
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// ==========================================
// 2. NAVEGACIÓN ENTRE PANTALLAS
// Cada botón con data-ir="id-de-pantalla" lleva a esa pantalla.
// ==========================================
function mostrarPantalla(id) {
    // Oculta todas las pantallas
    document.querySelectorAll('.pantalla').forEach((pantalla) => {
        pantalla.classList.remove('activa');
    });

    // Muestra solo la elegida
    document.getElementById(id).classList.add('activa');

    // Si entramos a una consulta, cargamos sus datos
    if (id === 'form-inf-empresa') {
        cargarEmpresas();
    }
}

document.querySelectorAll('[data-ir]').forEach((boton) => {
    boton.addEventListener('click', () => {
        mostrarPantalla(boton.dataset.ir);
    });
});

document.getElementById('btn-salir').addEventListener('click', () => {
    alert('Simulación de salida: aquí limpiaríamos la sesión.');
});


// ==========================================
<<<<<<< HEAD
// 3. EMPRESAS (tabla "clientes")
// ==========================================
const formularioEmpresa = document.getElementById('formulario-empresa');
const msgEmpresa = document.getElementById('msg-empresa');

// --- Guardar una empresa nueva ---
formularioEmpresa.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    const nuevaEmpresa = {
        nombre_emp: document.getElementById('emp-nombre').value.trim(),
        telefono_emp: document.getElementById('emp-telefono').value.trim(),
        direccion_emp: document.getElementById('emp-direccion').value.trim(),
        pagina_web_emp: document.getElementById('emp-web').value.trim()
    };

    const { error } = await supabaseClient.from('clientes').insert(nuevaEmpresa);

    if (error) {
        console.error(error);
        msgEmpresa.textContent = 'No se pudo guardar: ' + error.message;
        msgEmpresa.className = 'mensaje error';
    } else {
        msgEmpresa.textContent = 'Empresa guardada.';
        msgEmpresa.className = 'mensaje ok';
        formularioEmpresa.reset();
    }
});

// --- Leer y mostrar las empresas ---
async function cargarEmpresas() {
    const lista = document.getElementById('lista-empresas');
    lista.innerHTML = '<li>Cargando...</li>';

    const { data, error } = await supabaseClient
        .from('clientes')
        .select('*')
        .order('nombre_emp');

    if (error) {
        console.error(error);
        lista.innerHTML = '<li>No se pudo cargar: ' + error.message + '</li>';
        return;
    }

    if (data.length === 0) {
        lista.innerHTML = '<li>Todavía no hay empresas. Agrega una en Captura.</li>';
        return;
    }

    lista.innerHTML = '';
    data.forEach((empresa) => {
        const li = document.createElement('li');

        const nombre = document.createElement('strong');
        nombre.textContent = empresa.nombre_emp;

        const detalle = document.createElement('span');
        detalle.className = 'dato';
        detalle.textContent = empresa.telefono_emp || 'Sin teléfono';

        li.appendChild(nombre);
        li.appendChild(detalle);
        lista.appendChild(li);
    });
}
=======
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
>>>>>>> 9acd9372645c1d014ce78b1a8d1aabc1a05ac352
