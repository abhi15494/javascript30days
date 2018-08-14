const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    console.clear();
    items.push( item );
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
    populateList( items, itemsList );
} 

function populateList(plates = [], plateList){
    plateList.innerHTML = plates.map((plate, i)=>{
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked':''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches("input")) return; //Skip usless input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);

// localStorage.clear()
// localStorage.getItem(key)
// localStorage.key()
// localStorage.removeItem(key)
// localStorage.setItem(key, value)