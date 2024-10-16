window.addEventListener("keydown",function(e){
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    
    const keys = document.querySelectorAll(".key");
    audio.play()
    
    audio.currentTime = 0
    key.classList.add("playing");

    function removeTransition(){
        if (e.propertyName!=="transform"){
            key.classList.remove("playing");
        }
    }

    for(i=0;i<keys.length;i++){
        keys[i].addEventListener("transitionend", removeTransition)
    }
    
})