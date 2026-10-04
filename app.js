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
