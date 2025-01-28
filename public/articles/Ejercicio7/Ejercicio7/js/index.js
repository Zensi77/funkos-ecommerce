function addTask() {
    // Obtenemos los valores de los inputs
    const task = document.querySelector('#title').value.trim();
    const descripcion = document.querySelector('#descripcion').value.trim();

    if (!task) {
        alert('Introduce la tarea');
        return;
    }

    const list = document.querySelector('.content'); // Asume que siempre agregas a la primera lista
    if (!list) {
        console.error('No se encontró la lista');
        return;
    }

    // Crear nueva tarea con los valores de los inputs
    const newTask = document.createElement('div');
    newTask.classList.add('card');
    newTask.innerHTML = `
        <h2>${task}</h2>
        <hr>
        <p>${descripcion}</p>
        <select class="select select-status">
            <option value="0">No iniciada</option>
            <option value="1">En curso</option>
            <option value="2">Finalizada</option>
        </select>
        <button class="btn-delete">Eliminar</button>
    `;

    list.appendChild(newTask);

    newTask.querySelector('.btn-delete').addEventListener('click', deleteTask);
    newTask.querySelector('.select-status').addEventListener('change', changeStatus);

    document.querySelector('#title').value = '';
    document.querySelector('#descripcion').value = '';
}

function changeStatus(event) {
    const task = event.target.closest('.card');
    const status = event.target.value;
    const lists = document.querySelectorAll('.content');

    if (task && lists[status]) {
        lists[status].appendChild(task);
    }
}

function deleteTask(event) {
    const task = event.target.closest('.card');
    if (task) {
        task.remove();
    }
}
