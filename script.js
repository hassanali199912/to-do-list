console.log('hello from js');

const inputTask = document.querySelector('#input-task');
const addItem = document.querySelector('#add-task-btn');
const main_contaner = document.querySelector('.taskes');

const task_list = [];
add_tasks_to_main(task_list);

addItem.addEventListener('click', (e) => {

    if (inputTask.value != '') {
        const task_data = {
            'id': Date.now(),
            'task': inputTask.value,
            'state': true
        }

        addTaskToList(task_data);
        inputTask.value = ''
    } else {
        alert('Add item to list');
        return;
    }


})

main_contaner.addEventListener('click', (e) => {
    // complete checkbox
    if (e.target.className == 'checkbox-complete') {
        e.target.parentElement.classList.toggle("done");
    }
    if (e.target.className == 'del-btn') {
        e.target.parentElement.remove();
    }
});


function addTaskToList(task_data) {
    task_list.push(task_data);
    append_task_to_main(task_data);
}

function append_task_to_main(task_data) {
    let task_div = document.createElement('div');
    task_div.className = 'container';
    // create the chackbox of the task
    let task_checkbox = document.createElement('input');
    task_checkbox.className = 'checkbox-complete';
    task_checkbox.setAttribute('type', 'checkbox');

    // create the task content of the task
    let task_contant = document.createElement('p');
    task_contant.className = 'task';
    task_contant.innerHTML = task_data['task'];

    // create the task content of the task
    let del_btn = document.createElement('button');
    del_btn.className = 'del-btn';
    del_btn.setAttribute('type', 'button');
    del_btn.innerHTML = 'DELET';
    main_contaner.appendChild(task_div);

    task_div.appendChild(task_checkbox);
    task_div.appendChild(task_contant);
    task_div.appendChild(del_btn);
}

function add_tasks_to_main(task_list) {
    task_list.forEach(element => {
        append_task_to_main(element);
    });
}