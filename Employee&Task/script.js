window.addEventListener("load", solve);

let empArray = [];

class Employee {
  constructor(fname, lname, email, phone, date, salary, taskList = []) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.salary = salary;
    this.taskList = taskList;
  }
}

class Tasks {
  constructor(title, description, assigne) {
    this.titleTask = title;
    this.descriptionTask = description;
    this.assigneeTask = assigne;
  }
}

function solve() {
  // ADD USERS -->

  const fname = document.getElementById("firstName");
  const lname = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const date = document.getElementById("birth");
  const salary = document.getElementById("salary");

  const submitBtn = document.querySelector(".submitBtn");
  submitBtn.addEventListener("click", Add);

  const mainTable = document.getElementById("employeeList")

  const emp = new Employee(fname, lname, email, phone, date, salary);

//   console.log(emp.fname.value);

  function Add(event) {
    event.preventDefault();

    const fnameValue = emp.fname.value;
    const lnameValue = emp.lname.value;
    const emailValue = emp.email.value;
    const phoneValue = emp.phone.value;
    const dateValue = emp.date.value;
    const salaryValue = `${emp.salary.value}$`;


//ARRAY PUSH
    empArray.push(emp);
    console.log(empArray)

    // console.log(fnameValue);
    // console.log(lnameValue);
    // console.log(emailValue);
    // console.log(phoneValue);
    // console.log(dateValue);
    // console.log(salaryValue);


    if (
      fnameValue == "" ||
      lnameValue == "" ||
      emailValue == "" ||
      phoneValue == "" ||
      dateValue == "" ||
      salaryValue == ""
    ) {
      return alert("All field are required!");
    }

    const tbody = document.createElement("tbody")
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = fnameValue;

    const td2 = document.createElement("td");
    td2.textContent = lnameValue;

    const td3 = document.createElement("td");
    td3.textContent = emailValue;

    const td4 = document.createElement("td");
    td4.textContent = phoneValue;

    const td5 = document.createElement("td");
    td5.textContent = dateValue;

    const td6 = document.createElement("td");
    td6.textContent = salaryValue;

    const td7 = document.createElement("td");

    const infoBtn = document.createElement("button");
    infoBtn.className = "info";
    infoBtn.innerHTML = '<i class="fa-sharp fa-solid fa-circle-info"></i>';

    infoBtn.addEventListener("click", Info);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-delete-left">';
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", Delete);

    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = '<i class="fa-sharp fa-regular fa-pen-to-square">';
    updateBtn.className = "update";
    updateBtn.addEventListener("click", Update);

    td7.appendChild(infoBtn);
    td7.appendChild(deleteBtn);
    td7.appendChild(updateBtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tbody.appendChild(tr);

    
    mainTable.appendChild(tbody);

    // IMPORTANT

    fname.value = "";
   lname.value = "";
   email.value = "";
   phone.value = "";
   date.value = "";
  salary.value = "";

    //  <--- ADD USERS

    // ---> UPDATE USERS

    function Update() {

    


   
   
      fname.value = fnameValue;
      lname.value = lnameValue;
      email.value = emailValue;
      phone.value = phoneValue;
      date.value = dateValue;
      salary.value = salaryValue;

      tbody.remove()


      



      for(let i = 0; i<empArray.length; i++){
        let currentEmp = empArray[i]
        if(currentEmp.fname.value === fnameValue && currentEmp.lname.value === lnameValue){
          console.log('WORK')
        }else{
          console.log('DONT WORK')
        }
      }

      
    }

    function Delete() {
      tbody.remove();
    }

    function Info() {
      const div = document.createElement("div");
      div.className='employeeInfo'
      const spanName = document.createElement("span");
      const spanEmail = document.createElement("span");
      const spanPhone = document.createElement("span");
      const spanDate = document.createElement("span");
      const spanSalary = document.createElement("span");

      const clearBtn = document.createElement("button");
      clearBtn.textContent = "Clear";
      clearBtn.addEventListener("click", Clear);

      div.appendChild(spanName);
      div.appendChild(spanEmail);
      div.appendChild(spanPhone);
      div.appendChild(spanDate);
      div.appendChild(spanSalary);
      div.appendChild(clearBtn);

      const information = document.querySelector(".information");

      information.appendChild(div);

      spanName.textContent = `Name: ${fnameValue} ${lnameValue}`;
      spanEmail.textContent = `Email: ${emailValue}`;
      spanPhone.textContent = `Phone: ${phoneValue}`;
      spanDate.textContent = `Birthday: ${dateValue}`;
      spanSalary.textContent = `Salary: ${salaryValue}`;

      function Clear(event) {
        event.preventDefault();
        div.remove();
      }
    }
    // <-- ADD USER LOGIC

    // --> ADD TASK LOGIC
  }
  

  const titleTask = document.getElementById("title");
  const descriptionTask = document.getElementById("description");
  const assigneeTask = document.getElementById("assignee");

  const task = new Tasks(titleTask,descriptionTask,assigneeTask)


  const taskBtn = document.querySelector(".taskBtn");

  taskBtn.addEventListener("click", Task);

  function Task(event) {
    event.preventDefault();

   

    const titleValue = task.titleTask.value;
    const descriptionValue = task.descriptionTask.value;
    const assigneValue = task.assigneeTask.value;

          console.log(titleValue)
          console.log(descriptionValue);
         console.log(assigneValue)

    const TaskTable = document.querySelector("#task");

    const Tasktbody = document.createElement("tbody");

    const Tasktd1 = document.createElement("td");
    Tasktd1.textContent = titleValue;

    const Tasktd2 = document.createElement("td");
    Tasktd2.textContent = descriptionValue;

    const Tasktd3 = document.createElement("td");
    Tasktd3.textContent = assigneValue;

    const Tasktd4 = document.createElement("td");

    const infoBtn = document.createElement("button");
    infoBtn.innerHTML = '<i class="fa-sharp fa-solid fa-circle-info"></i>';
    infoBtn.className = "info";
    infoBtn.addEventListener('click', Info)

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-delete-left">';
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", Delete);

    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = '<i class="fa-sharp fa-regular fa-pen-to-square">';
    updateBtn.className = "update";
    updateBtn.addEventListener("click", Update);

    Tasktd4.appendChild(infoBtn);
    Tasktd4.appendChild(deleteBtn);
    Tasktd4.appendChild(updateBtn);

    Tasktbody.appendChild(Tasktd1);
    Tasktbody.appendChild(Tasktd2);
    Tasktbody.appendChild(Tasktd3);
    Tasktbody.appendChild(Tasktd4);

    TaskTable.appendChild(Tasktbody);

    titleTask.value = "";
    descriptionTask.value = "";
    assigneeTask.value = "";

    function Update() {
      titleTask.value = titleValue;
      descriptionTask.value = descriptionValue;
      assigneeTask.value = assigneValue;

      Tasktbody.remove();
    }

    function Delete() {
      Tasktbody.remove();
    }

    function Info(){
        console.log('info')

      const div = document.createElement("div");
      div.className='taskInfo'
      const taskName = document.createElement("span");
      const descriptionName = document.createElement("span");
      const assigneName = document.createElement("span");

      const clearBtn = document.createElement("button");
      clearBtn.textContent = "Clear";
      clearBtn.addEventListener("click", Clear);

      div.appendChild(taskName);
      div.appendChild(descriptionName);
      div.appendChild(assigneName);
      div.appendChild(clearBtn);

      const information = document.querySelector(".information");

      information.appendChild(div);

      taskName.textContent = `Task: ${titleValue}`;
      descriptionName.textContent = `Description: ${descriptionValue}`;
      assigneName.textContent = `Assignee: ${assigneValue}`;
      function Clear(event) {
        event.preventDefault();
        div.remove();
     
    }

    }
  }

  

  // <--- ADD TASK LOGIC
}
