
const input= document.getElementById("myInput");

const detail =document.getElementById("description");

// const btn =  document.getElementById("myBtn");

const form = document.querySelector("form");

const container= document.querySelector(".card_container");

const errorMsg = document.getElementById("error");


const tasks = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

// console.log(tasks);
// const tasks=[];

showTask();



function showTask(){

    container.innerHTML="";

    tasks.forEach((value,index)=>{

        const div = document.createElement("div");
        div.setAttribute("class","cards");

       

        // const innerDiv = document.createElement("div");
        // div.append(innerDiv);

        const head= document.createElement("h1");
        head.innerHTML=value.taskName;
        head.setAttribute("class","task__title")
        div.append(head);

console.log(value.taskName)
        const desc= document.createElement("h4");
        desc.innerHTML=value.taskDescription;
        desc.setAttribute("class","task__description")
        div.append(desc)

        console.log(value.taskDescription)


        const delBtn= document.createElement("button");
        delBtn.innerText="Delete";
        delBtn.setAttribute("class","btn")
        delBtn.addEventListener("click",()=>{
            container.innerHTML="";

            tasks.splice(index,1);
            store()

            showTask();

        })
        div.append(delBtn)

        const editBtn= document.createElement("button");
        editBtn.innerText="Edit";
        editBtn.setAttribute("class","btn")
        editBtn.addEventListener("click",()=>{

            
    
            input.value= value.taskName;
            detail.value = value.taskDescription;
    
            container.innerHTML="";
    
            tasks.splice(index,1);
            store();

            showTask();
            
        })
        div.append(editBtn)


        container.append(div)
    })

   
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(input.value);
    // console.log(detail.value)

    if(input.value.trim()===""){
        errorMsg.innerText="Error: Pehle Goal ☝ to bana yaar phir pura kariyo";
    }

    else{
        errorMsg.innerText="";
    tasks.push({
        taskName:input.value,
        taskDescription: detail.value
    })
    input.value=""
    detail.value=""

   
    // console.log(tasks);

    store()
    showTask();
}
  
});



store();

function store(){

    localStorage.setItem("data",JSON.stringify(tasks))
}




