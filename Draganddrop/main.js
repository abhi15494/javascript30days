const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Drag function
const dragStart = function(){
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible';
    }, 0);
}

const dragEnd = function(){
    this.className = 'fill';
}

const  dragOver = function(e){
    e.preventDefault();
}

const  dragEnter = function(e){
    this.className += ' hovered';
}

const  dragLeave = function(e){
    this.className = 'empty';
}

const  dragDrop = function(e){
    this.className = 'empty';
    this.append(fill);
}

//Fill Listners
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// Loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}