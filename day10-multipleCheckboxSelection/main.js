const checkboxes = document.querySelectorAll(".item input[type='checkbox']");


let lastChecked = "";
function handleCheck(e){
    let inbetween = false;
    // Check if they hold shift key
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox=>{
            if( checkbox === this || checkbox === lastChecked ){
                inbetween = !inbetween;
            }
            if(inbetween){
                checkbox.checked = true;
            } 
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", handleCheck);
});

