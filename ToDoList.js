let arrayToDoList = [];
let toDoHTML = '';

function addToDo(){
  const htmlTask = document.querySelector(".js-todo-input");
  const htmlDate = document.querySelector(".js-tododate-input");
  const task = htmlTask.value;
  const date = htmlDate.value;
  arrayToDoList.push({task, date});
  htmlDate.value = '';
  htmlTask.value = '';
  dispArray();
}

function dispArray(){
  for(i=0; i<arrayToDoList.length; i++){
    const {task, date} = arrayToDoList[i];
    if (date == ""){
      const html = `
        <div class="new-task-wrapper">
          <div class="to-do-list">
            <input type="checkbox" id="${i}" class="to-do-list__check">
            <label class="to-do-text" for="${i}">${task}</label>
          </div>
          <div class="to-do-date">No due date</div>
          <div class="del-btn-container">
            <button class="delete-btn" onclick="
              arrayToDoList.splice(${i}, 1);
              dispArray();
            ">Delete</button>
          </div>
        </div>
      `;
      toDoHTML += html;
    } else{
      const html = `
        <div class="new-task-wrapper">
          <div class="to-do-list">
            <input type="checkbox" id="${i}" class="to-do-list__check">
            <label class="to-do-text" for="${i}">${task}</label>
          </div>
          <div class="to-do-date">Due ${date}</div>
          <div class="del-btn-container">
            <button class="delete-btn" onclick="
              arrayToDoList.splice(${i}, 1);
              dispArray();
            ">Delete</button>
          </div>
        </div>
      `;
      toDoHTML += html;
    }    
  }
  document.querySelector(".new-task").innerHTML = toDoHTML;
  toDoHTML = '';
}


