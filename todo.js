// Récupération des éléments HTML
const todoList = document.getElementById('todoList');

// Fonction pour marquer une tâche comme accomplie
function completeTask(taskElement) {
    taskElement.classList.toggle('completed');
}

// Fonction pour supprimer une tâche de la liste
function deleteTask(taskElement) {
    taskElement.remove();
}

// Ajout d'écouteurs d'événements sur les boutons de chaque tâche
todoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('completeTask')) {
        completeTask(target.closest('.task'));
    } else if (target.classList.contains('deleteTask')) {
        deleteTask(target.closest('.task'));
    }
});
