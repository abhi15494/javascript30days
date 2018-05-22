const textarea = document.querySelector("textarea");
// var secretCode = document.querySelector("input[type='text'].secretCode");
var secretCode = "wesbos";
const statusText = document.querySelector(".result span");
var pressed = [];


textarea.addEventListener("keyup", function(e){
    console.log(e.keyCode);
    if(e.keyCode >= 65 && e.keyCode <=90 ) pressed.push( e.key );
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    matchStatus( pressed.join("").includes(secretCode) );
    console.log(pressed);
});

function matchStatus( status ){
    if( status==true ) {
        statusText.textContent = "Matched";
        statusText.classList.add("true");
        statusText.classList.remove("false");
    }
    else{
        statusText.textContent = "not Matched";
        statusText.classList.remove("true");
        statusText.classList.add("false");
    }
}

// window.addEventListener("keyup", function(e){
//     console.log(e.key);
// });