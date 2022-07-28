// Selectors 

const taskInput = document.getElementById("task-input")
const taskButton = document.getElementById("task-btn")
const taskList = document.getElementById("tasks")

// Event
taskButton.addEventListener('click', addTask)
taskList.addEventListener('click', removeCheck)

// Function 

function addTask(event){
    event.preventDefault()
    // console.log("hellooo@!!!!")

    // Creating Task Div
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task")

    // Creating List 

    const newTask = document.createElement("li")
    newTask.innerText = taskInput.value
    newTask.classList.add("task-item")
    taskDiv.appendChild(newTask)

    // Complete Button

    const completeBtn = document.createElement("button")
    completeBtn.innerHTML = '<i class="bi bi-calendar-check-fill"></i>';
    completeBtn.classList.add("btn-success")
    taskDiv.appendChild(completeBtn)
    
    // Remove Button

    const removeBtn = document.createElement("button")
    removeBtn.innerHTML = '<i class="bi bi-trash-fill"></i>';
    removeBtn.classList.add("btn-danger")
    taskDiv.appendChild(removeBtn)

    // Adding the div to the Task List
    taskList.appendChild(taskDiv);

    //clear input
    taskInput.value = ''   
}

function removeCheck(e){
    let item = e.target
    // console.log(item)
    // remove task 
    if(item.classList[0] === "btn-danger"){
        const task = item.parentElement
        task.remove()
    }
    // Complete Task
    if(item.classList[0] === "btn-success"){
        const task = item.parentElement
        task.classList.toggle("complete")
    }

}