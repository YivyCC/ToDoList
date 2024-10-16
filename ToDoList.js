let arrayToDo = [];
let arrayToDoDate = [];
let newList = {
  item:'',
  date:'',
  delBtn:'',
};

function addToDo(){
  arrayToDo.push(document.querySelector(".js-todo-input").value);
  arrayToDoDate.push(document.querySelector(".js-tododate-input").value);
  displayArray();
}

function displayArray(){
  for(i=0; i<arrayToDo.length; i++){
    newList.item = document.createElement("li");
    newList.item.classList.add("new-ToDo");
    newList.date = document.createElement("li");
    newList.date.classList.add("new-Date");
    newList.delBtn = document.createElement("button");
    newList.delBtn.classList.add("new-DelBtn");
    newList.item.textContent = `${arrayToDo[i]}`;
    newList.date.textContent = `${arrayToDoDate[i]}`;
    newList.delBtn.textContent = "Remove";
  }  
  document.querySelector(".ToDoList").append(newList.item);
  if(document.querySelector(".js-tododate-input").value === ""){
    newList.date.textContent = "No due date";
    document.querySelector(".ToDoDate").append(newList.date);
  }else{
    document.querySelector(".ToDoDate").append(newList.date);
  }
  document.querySelector(".DeleteBtn").append(newList.delBtn);
  document.querySelector(".js-todo-input").value = "";
  document.querySelector(".js-tododate-input").value = "";
}

/* Metodo 2 de hacer lo mismo Pero no me salio XD
function addToDo(){
  arrayToDo.push(document.querySelector(".js-todo-input").value);
  arrayToDoDate.push(document.querySelector(".js-tododate-input").value);
  for(i=0; i<arrayToDo.length; i++){
    const asd = arrayToDo[i];
    const newListItem = `<li>${asd}</li>`;
    auxvar += newListItem;
  }  
  document.querySelector(".ToDoList").innerHTML = auxvar;
}*/




