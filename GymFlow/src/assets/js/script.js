document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
});

// JavaScript para manejar formularios

document.getElementById('cancel-subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Redirigiendo a la pasarela de pagos para cancelar la suscripción.');
});

document.getElementById('change-plan-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPlan = document.getElementById('new-plan').value;
    alert(`Tu plan ha sido cambiado a ${newPlan}.`);
});

document.getElementById('filter-history-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const filterValue = document.getElementById('filter').value;
    alert(`Aplicando filtro por: ${filterValue}`);
});

const notifications = document.getElementById('notifications');
function showNotification(message) {
    const notificationDiv = document.createElement('div');
    notificationDiv.className = 'notification';
    notificationDiv.textContent = message;
    notifications.appendChild(notificationDiv);
}

// Simulación de recepción de notificaciones
setTimeout(() => showNotification('Pago recibido de John Doe: $50.00'), 1000);
setTimeout(() => showNotification('Pago recibido de Jane Doe: $75.00'), 3000);

document.getElementById('add-subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const subscriptionType = document.getElementById('subscription-type').value;
    const startDate = document.getElementById('start-date').value;
    alert(`Suscripción añadida: Tipo ${subscriptionType}, Fecha de Inicio ${startDate}.`);
});


