// Array de objetos para atracciones
const attractions = [
    { name: "Salto Ángel", description: "La cascada más alta del mundo, con 979 metros.", image: "images/angel-falls.jpg" },
    { name: "Tepui Roraima", description: "Un tepui mítico con flora y fauna únicas.", image: "images/roraima.jpg" },
    { name: "Canaima", description: "Lago y cascadas en el corazón de la sabana.", image: "images/canaima.jpg" }
];

// Función para cargar atracciones dinámicamente
function loadAttractions() {
    const list = document.getElementById('attractions-list');
    if (list) {
        attractions.forEach(attr => {
            const div = document.createElement('div');
            div.innerHTML = `<h2>${attr.name}</h2><p>${attr.description}</p><img src="${attr.image}" alt="${attr.name}" loading="lazy">`;
            list.appendChild(div);
        });
    }
}

// Función para toggle detalles (condicional y evento)
function toggleDetails() {
    const button = document.getElementById('toggle-details');
    if (button) {
        button.addEventListener('click', () => {
            const details = document.querySelectorAll('#attractions-list p');
            details.forEach(p => {
                p.style.display = p.style.display === 'none' ? 'block' : 'none';
            });
        });
    }
}

// Función para manejar formulario y localStorage
function handleForm() {
    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Usar template literals para output
            const output = `Gracias, ${name}. Tu mensaje ha sido enviado.`;
            response.innerHTML = output;
            
            // Guardar en localStorage (objeto)
            const userData = { name, email, message };
            localStorage.setItem('userInquiry', JSON.stringify(userData));
            
            // Condicional: Verificar si ya hay datos previos
            if (localStorage.getItem('userInquiry')) {
                console.log('Datos guardados exitosamente.');
            }
        });
    }
}

// Ejecutar funciones al cargar página
document.addEventListener('DOMContentLoaded', () => {
    loadAttractions();
    toggleDetails();
    handleForm();
});