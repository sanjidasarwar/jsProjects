let draggedItem = null
let items = document.querySelectorAll('.item') 
let mainContainers = document.querySelectorAll('.main') 
let allDeleteBtn = document.querySelectorAll('.deleteBtn') 



function dragStart() {
    draggedItem = this;
    setTimeout(() => this.classList.add('d-none'), 0)
}
function dragEnd() {
    this.classList.remove('d-none')
    draggedItem = null;

}

function dragOver(e) {
    e.preventDefault();
    console.log('drag over');
}
function dragEnter(e) {
    e.preventDefault();
    console.log('drag entered');
}
function dragLeave(e) {
    e.preventDefault();
    console.log('drag left');
}
function dragDrop() {
    console.log('drag dropped');
    this.append(draggedItem);
}

function deleteItem() {
    this.parentElement.remove()
}

items.forEach(item =>{
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

mainContainers.forEach(container =>{
    container.addEventListener('dragover', dragOver)
    container.addEventListener('dragenter', dragEnter)
    container.addEventListener('dragleave', dragLeave)
    container.addEventListener('drop', dragDrop)
})


allDeleteBtn.forEach(deleteBtn=>{
    deleteBtn.addEventListener('click', deleteItem)
})