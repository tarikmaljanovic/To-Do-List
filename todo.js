let add = document.querySelector("#add");
let txt = document.querySelector("#txt");
let tasks = document.querySelector(".tasks");
let wall = document.querySelector(".wall");

add.addEventListener('click', function(event) {
  if(txt.value != '') {
    let task = document.createElement('div');
    let taskText = document.createElement('p');
    let iconDiv = document.createElement('div');
    let edit = document.createElement('i');
    let del = document.createElement('i');

    iconDiv.className = 'icons';
    edit.className = 'fa-regular fa-pen-to-square';
    del.className = 'fa-solid fa-trash';

    task.className = 'task';
    taskText.innerHTML = txt.value;

    iconDiv.append(edit);
    iconDiv.append(del);

    task.append(taskText);
    task.append(iconDiv);
    tasks.append(task);

    txt.value = '';

    del.addEventListener('click', function(event) {
      task.remove();
    });

    edit.addEventListener('click', function(event) {
      let input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'Entry Value');

      task.prepend(input);
      input.value = taskText.innerHTML;
      taskText.remove();

      input.onkeydown = function(event) {
        if(event.key == 'Enter' && input.value != '') {
          task.prepend(taskText);
          taskText.innerHTML = input.value;
          input.remove();
        }
      }
    });
  }
});

txt.addEventListener('keydown', function(event) {
  if(event.key == 'Enter' && txt.value != '') {
    let task = document.createElement('div');
    let taskText = document.createElement('p');
    let iconDiv = document.createElement('div');
    let edit = document.createElement('i');
    let del = document.createElement('i');

    iconDiv.className = 'icons';
    edit.className = 'fa-regular fa-pen-to-square';
    del.className = 'fa-solid fa-trash';

    task.className = 'task';
    taskText.innerHTML = txt.value;

    iconDiv.append(edit);
    iconDiv.append(del);

    task.append(taskText);
    task.append(iconDiv);
    tasks.append(task);

    txt.value = '';

    del.addEventListener('click', function(event) {
      task.remove();
    });

    edit.addEventListener('click', function(event) {
      let input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'Entry Value');

      task.prepend(input);
      input.value = taskText.innerHTML;
      taskText.remove();

      input.onkeydown = function(event) {
        if(event.key == 'Enter' && input.value != '') {
          task.prepend(taskText);
          taskText.innerHTML = input.value;
          input.remove();
        }
      }
    });
  }
  });

