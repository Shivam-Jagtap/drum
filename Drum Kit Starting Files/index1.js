
var numberOfDrums=document.querySelectorAll(".drum").length; // this will give length of array in which drum class is present

// figuring out which button(on screen ) was pressed
// from below code , when event "click" takes place -> it calls handleclick function
for(var i =0 ; i<numberOfDrums ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",hadleclick);// this willl call function handleclick only if "click" event takes place
}
function hadleclick(){
 var buttonInnerHtml=this.innerHTML;
 makesound(buttonInnerHtml);
 keyAnimation(buttonInnerHtml);

}

// figuring out which key(from keyboard ) was pressed.
document.addEventListener("keypress" ,function(event){
    makesound(event.key);
    keyAnimation(event.key);
})

function makesound(key){

    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;  
        case "s":
             var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play(); 
             break;   
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;  
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
         case "k":
             var kick=new Audio("sounds/kick-bass.mp3");
            kick.play(); 
             break;
         case "l":
        var snare=new Audio("sounds/snare.mp3");
         snare.play(); 
         break;
        
    }
    

}

function keyAnimation(keypressed){
    var activeButton = document.querySelector("."+keypressed);    // since we have classes made for each key i.e for 's' -> we have made "s" class , so we access it using .s
    // now active button will be the element selected (will be button pressed or click)
    
    // here we are adding a "pressed" class to the class list of button(in its array) . (pressed class is created in css page to create some animation)
    activeButton.classList.add("pressed"); 
    // now button will perform comand of 'pressed' class


//after some time we want to remove the presed class . so we are using a timeout function
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
