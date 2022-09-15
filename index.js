const openModal = document.getElementById("open-modal");
openModal.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("paraG").innerHTML = ""
})


const closemodal = document.getElementById("close-modal");
closemodal.addEventListener("click", function(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("paraG").innerHTML = "You have successfully got my contact details!"
})