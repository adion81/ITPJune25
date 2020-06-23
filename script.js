var name = document.querySelector("title").innerHTML;
document.addEventListener("keydown", (e) => {
    if(e.keyCode === 32){
        alert(name);

    }
});