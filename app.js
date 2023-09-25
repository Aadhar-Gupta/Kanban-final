window.onload = function () {

  //Getting data from back from Local Storage
  let existingArrtodo = JSON.parse(localStorage.getItem("todoo"));
  let existingArrdoing = JSON.parse(localStorage.getItem("doing"));
  let existingArrdone = JSON.parse(localStorage.getItem("done"));

  let updateTodo = existingArrtodo ? existingArrtodo : [];
  let updatedoing = existingArrdoing ? existingArrdoing : [];
  let updatedone = existingArrdone ? existingArrdone : [];

  //Loop to check if there is data present in Local storage and then make list according to the Stat key in each Object 

  if (updateTodo.length > 0) {
    for (var i = 0; i <= updateTodo.length - 1; i++) {
      if (updateTodo[i].stat === "TODO") {
        updateTaskList(updateTodo, status1);
      }
    }
  }


  if (updatedoing.length > 0) {
    for (var j = 0; j <= updatedoing.length - 1; j++) {
      if (updatedoing[j].stat === "Doing") {
        updateTaskList(updatedoing, status3);
      }
    }
  }

  if (updatedone.length > 0) {
    for (var k = 0; k <= updatedone.length - 1; k++) {
      if (updatedone[k].stat === "Done") {
        updateTaskList(updatedone, status2);
      }
    }
  }
  // Running list Counter to update Count every time the window Loads 
  listCounter();
};

//Global_Variables
const status1 = "TODO";
const status2 = "Done";
const status3 = "Doing";
let parent__list;
let key;
let target_item;
let target_title;
let target_list;
let localStorageKey;
let targetKey;
var p = 1;

function CreateSubtask() {

  for (p; p <= 10; p++) {
    const List = document.getElementById("subtask_list")
    const newSubtaskElement = document.createElement("li");
    newSubtaskElement.setAttribute("id", `Subtask${p}`)
    newSubtaskElement.innerHTML = `
    <input type="text" style="border: 2px black solid; background: transparent" class="subtasks"
    placeholder="eg:make coffee" /> <span onclick="removeSubtask(${p})" class="remove-sub">X</span>
      `;
    List.appendChild(newSubtaskElement);
    break;
  }
  p++;
}
function removeSubtask(o) {
  let obj = o;
  const Listt = document.getElementById("subtask_list");
  let subs = document.getElementById(`Subtask${obj}`)
  Listt.removeChild(subs);
}

function listCounter() {
  // getting the length of the UL and displaying it inside a span tag 
  const list1Element = document.getElementById("TODO");
  const list2Element = document.getElementById("Done");
  const list3Element = document.getElementById("Doing");

  const list1Length = list1Element.getElementsByTagName("li").length;
  const list2Length = list2Element.getElementsByTagName("li").length;
  const list3Length = list3Element.getElementsByTagName("li").length;
  document.getElementById("LengthTodo").textContent = "(" + list1Length + ")";
  document.getElementById("LengthDone").textContent = "(" + list2Length + ")";
  document.getElementById("LengthDoing").textContent = "(" + list3Length + ")";
}
function closepopup() {
  //Changes the display type of the popup which is made with css Classes 
  let Remove = document.querySelector(".popup1");
  Remove.classList.remove("active");
}
function darkmode() {
  let element = document.querySelector(".sidebar");
  let elements = document.querySelector(".main-body");
  element.classList.toggle("dark-mode");
  elements.classList.toggle("dark-mode");
}
function showButton() {
  //Changes the display type of the popup which is made with css Classes 
  let Show = document.querySelector(".popup1");
  Show.classList.add("active");
}
function show() {
  debugger;
  const NameClass = ($(this).attr('class'));

  //Getting data from back from Local Storage
  let existingArrtodo = JSON.parse(localStorage.getItem("todoo"));
  let existingArrdoing = JSON.parse(localStorage.getItem("doing"));
  let existingArrdone = JSON.parse(localStorage.getItem("done"));

  let updateTodo = existingArrtodo ? existingArrtodo : [];
  let updatedoing = existingArrdoing ? existingArrdoing : [];
  let updatedone = existingArrdone ? existingArrdone : [];

  //Loop to check if there is data present in Local storage and then make list according to the Stat key in each Object 
  const Body = document.body;
  const Popup = document.getElementById("popup2")
  // Body.removeChild(Popup)

  if(document.body.children.namedItem==="popup2") {
    const Popup = document.getElementById("popup2")
    Body.removeChild(Popup)
  }
  else {
    if (updateTodo.length > 0) {
      for (var i = 0; i < updateTodo.length; i++) {
        if (updateTodo[i].objectClass == NameClass) {
          let arrIndex = updateTodo[i]
          popup2(arrIndex)
          // updateTaskList(updateTodo, status1);
        }
      }
    }
  
  
    if (updatedoing.length > 0) {
      for (var j = 0; j < updatedoing.length; j++) {
        if (updatedoing[j].objectClass == NameClass) {
          let arrIndex = updatedoing[j]
          popup2(arrIndex)
          // updateTaskList(updatedoing, status3);
        }
      }
    }
  
    if (updatedone.length > 0) {
      for (var k = 0; k < updatedone.length; k++) {
        if (updatedone[k].objectClass == NameClass) {
          let arrIndex = updatedone[k]
          popup2(arrIndex)
          // updateTaskList(updatedone, status2);
        }
      }
    }
  }





}

function popup2(obj) {
  debugger;

  const Body = document.body;
  const SubtaskPopup = document.createElement("div");
  SubtaskPopup.setAttribute("id", "popup2");
  SubtaskPopup.setAttribute("class", "popup2");
  SubtaskPopup.innerHTML = `
        <div class="popup2Container">
    <span onclick="disablepopup2()" class="close2">X</span>
    <div >
      <h2 class="Tasktitle" >${obj.title}</h2>
    </div>
    <div class="taskDes">
      <p>${obj.des}</p>
    </div>
    <div class="subList">
      <div id="checklist">
        <input id="01" type="checkbox" name="r" value="1" checked="">
        <label for="01">${obj.subtaskDATA[0]}</label>
        <input id="02" type="checkbox" name="r" value="2">
        <label for="02">${obj.subtaskDATA[1]}</label>
        <input id="03" type="checkbox" name="r" value="3">
        <label for="03">${obj.subtaskDATA[2]}</label>
        <input id="04" type="checkbox" name="r" value="3">
        <label for="04">${obj.subtaskDATA[3]}</label>
      </div>
    </div>
    <div class="statTAB">
      <label for="status">Status</label>
      <select id="status">
        <option value="done">Done</option>
        <option selected value="Todo">Todo</option>
        <option value="dooing">Doing</option>
      </select>
    </div>
  </divpopup2
    `
  Body.appendChild(SubtaskPopup)



}

function disablepopup2() {
  debugger;
  // let length = document.getElementById("popup2");
  // length.classList.toggle("show");
  const Body = document.body;
  const Popup = document.getElementById("popup2")
  Body.removeChild(Popup)


}

function RetreiveAndUpdate() {
  // Same as the on.Load funtion but this runs every time theres a new task being added to the list
  //the data gets stored in the local storage when the button in the popup is clicked and after running that funtion this funtion
  //gets that data and updates the list accordingly 
  let existingArrtodo = JSON.parse(localStorage.getItem("todoo"));
  let existingArrdoing = JSON.parse(localStorage.getItem("doing"));
  let existingArrdone = JSON.parse(localStorage.getItem("done"));

  let updateTodo = existingArrtodo ? existingArrtodo : [];
  let updatedoing = existingArrdoing ? existingArrdoing : [];
  let updatedone = existingArrdone ? existingArrdone : [];

  if (updateTodo.length > 0) {
    for (var i = 0; i <= updateTodo.length - 1; i++) {
      if (updateTodo[i].stat === "TODO") {
        updateTaskList(updateTodo, status1);
      }
    }
  }
  if (updatedoing.length > 0) {
    for (var j = 0; j <= updatedoing.length - 1; j++) {
      if (updatedoing[j].stat === "Doing") {
        updateTaskList(updatedoing, status3);
      }
    }
  }
  if (updatedone.length > 0) {
    for (var k = 0; k <= updatedone.length - 1; k++) {
      if (updatedone[k].stat === "Done") {
        updateTaskList(updatedone, status2);
      }
    }
  }
  listCounter();
}
function createTask() {
  //Changes the display type of the popup which is made with css Classes and stores data etc
  let disable = document.querySelector(".popup1");
  disable.classList.remove("active");
  storeAndBindData();
  RetreiveAndUpdate();
}
function hidesidebar() {
  let hide = document.querySelector(".sidebar");
  hide.classList.toggle("nosidebar");
}
function updateTaskList(data, status) {
  // A Json And status is passed in this function which allows it to pick The UL and append the list element there 
  const todoList = document.getElementById(status);
  //After the status is passes the inner html of that list emptied for new list to be created 
  todoList.innerHTML = "";
  //For each object in Json New li is created 
  data.forEach((e) => {
    debugger
    const newTaskElement = document.createElement("li");
    newTaskElement.setAttribute("draggable", "true");
    //each li is is given a unique ID of the time its being created at 
    var randomDecimal = Math.random();
    newTaskElement.setAttribute("id", randomDecimal);
    newTaskElement.setAttribute("class", `${e.objectClass}`);
    newTaskElement.innerHTML = `
      <div  class="items">
        <p>${e.title}</p>
        <p class="sub">0 out of ${e.subtasksCOUNT}</p>
      </div>
      `;
    todoList.appendChild(newTaskElement);
    //An event Listener is added to each element made 
    const dragItem = document.querySelectorAll(".todo li");
    for (var i = 0; i < dragItem.length; i++) {
      dragItem[i].addEventListener("dragstart", dragStart);
      dragItem[i].addEventListener("click", show);
    }
  });
}
function storeAndBindData() {
  var randomNumber = Math.random();

  const taskTitle = document.getElementById("title-input");
  const description = document.getElementById("description");
  let dataSubt = [];
  let subt = document.querySelectorAll(".subtasks");
  for (var p = 0; p < subt.length; p++) {
    dataSubt.push(subt[p].value);
  }
  //The select options Value is then Stored inside a variable for which will be Decide which Array the data will be stored in
  const selectElement = document.getElementById("status");
  const selectedOption = selectElement.value;

  let temptodo = JSON.parse(localStorage.getItem("todoo"));
  let tempdone = JSON.parse(localStorage.getItem("done"));
  let tempdoing = JSON.parse(localStorage.getItem("doing"));

  let FinalTodo = temptodo ? temptodo : [];
  let Finaldone = tempdone ? tempdone : [];
  let Finaldoing = tempdoing ? tempdoing : [];
  debugger;
  //A switch case Which compares the select option value Pushes data inside local storage 
  switch (selectedOption) {

    case "Todo":
      const task_todo = {
        title: taskTitle.value,
        des: description.value,
        subtaskDATA: dataSubt,
        subtasksCOUNT: dataSubt.length,
        stat: status1,
        objectClass: randomNumber,
      };
      FinalTodo.push(task_todo);
      localStorage.setItem("todoo", JSON.stringify(FinalTodo));
      break;
    case "done":
      const task_done = {
        title: taskTitle.value,
        des: description.value,
        subtaskDATA: dataSubt,
        subtasksCOUNT: dataSubt.length,
        stat: status2,
        objectClass: randomNumber,
      };
      Finaldone.push(task_done);
      localStorage.setItem("done", JSON.stringify(Finaldone));
      break;
    case "dooing":
      const task_doing = {
        title: taskTitle.value,
        des: description.value,
        subtaskDATA: dataSubt,
        subtasksCOUNT: dataSubt.length,
        stat: status3,
        objectClass: randomNumber,
      };
      Finaldoing.push(task_doing);
      localStorage.setItem("doing", JSON.stringify(Finaldoing));
      break;
    default:
      console.log("Invalid option");
  }
}



// drag and drop functions 
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
  // parent__list = event.target.parentElement.id;
}
function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  debugger;
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.currentTarget.appendChild(document.getElementById(data));
  listCounter();
}
// function New_localSTorage() {


//   switch (parent__list) {
//     case "TODO":
//       localStorageKey = "todoo"
//       break;
//     case "Doing":
//       localStorageKey = "doing"
//       break;
//     case "Done":
//       localStorageKey = "done"
//       break;
//   }
//   switch (target_list) {
//     case "TODO":
//       targetKey = "todoo"
//       break;
//     case "Doing":
//       targetKey = "doing"
//       break;
//     case "Done":
//       targetKey = "done"
//       break;
//   }


//   if (parent__list === status1) {

//     var k = findTaskByTimestamp(localStorageKey, target_title);

//     var patch = [
//       { op: "replace", path: "/" + parent__list + "/" + k, value: { stat: '"' + targetKey + '"' } }
//     ];
//     JsonPatch.applyPatch(localStorage.getItem(localStorageKey), patch);

//   }
// }
// function findTaskByTimestamp(Jkjkj, data_title) {

//   let existingArrtodo = JSON.parse(localStorage.getItem("todoo"));
//   let existingArrdoing = JSON.parse(localStorage.getItem("doing"));
//   let existingArrdone = JSON.parse(localStorage.getItem("done"));

//   let updateTodo = existingArrtodo ? existingArrtodo : [];
//   let updatedoing = existingArrdoing ? existingArrdoing : [];
//   let updatedone = existingArrdone ? existingArrdone : [];
//   if (Jkjkj === "todoo")
//     for (let i = 0; i <= updateTodo.length - 1; i++) {
//       if (updateTodo[i].title === data_title) {
//         return i;
//       }
//     }
//   return null;
// }


