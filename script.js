document.addEventListener("keydown", function(e){
    let power = document.querySelector("#checkbox")
    if (power.checked === true){
        let audio = document.querySelector(`#a${e.keyCode}`);
    if (audio !== null){
        audio.currentTime = 0;
        audio.play();
    
        audio.parentElement.style.backgroundColor = "white"

        setTimeout(function(){
            if(audio.parentElement.style.backgroundColor === "white"){
            audio.parentElement.style.backgroundColor = "black"
        }}, 0.01)

        
    }}
})


console.log("hello");