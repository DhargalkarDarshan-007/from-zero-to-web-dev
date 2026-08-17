let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // alert("I am clicked")
//    console.log ("i Am clicked")
    document.querySelector(".box").innerHTML="<b>I why you clicked the buttom</b> madddd"
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
})