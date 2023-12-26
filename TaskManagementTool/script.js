let draggedItem = null
let items = document.querySelectorAll('.item') 
let mainContainers = document.querySelectorAll('.main') 
let allDeleteBtn = document.querySelectorAll('.deleteBtn') 
let allAddBtn = document.querySelectorAll('.addBtn') 


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
    console.log(this);
    this.parentElement.remove()
}

function inputField() {
    let mainDiv= this.parentElement.previousElementSibling
    let input= document.createElement('input')
    input.setAttribute('class','form-control')
    input.type='text'
    mainDiv.appendChild(input)
    input.addEventListener('keypress', function (e) {
       if(e.key==='Enter'){
        let inputValue =input.value
        input.classList.add('d-none')
        addCard(mainDiv, inputValue)
       }
    })
}

function addCard(mainDiv, value) {
    let div= document.createElement('div')
    div.setAttribute('class', 'bg-white p-3 mb-3 shadow item d-flex justify-content-between')
    div.draggable=true

    let span1 = document.createElement('span')
    span1.innerText=value
    let span2 = document.createElement('span')
    span2.setAttribute('class', 'deleteBtn')
    span2.addEventListener('click', deleteItem);

    let icon = document.createElement('i')
    icon.setAttribute('class', 'fa-solid fa-xmark')
    
    span2.appendChild(icon)
    div.appendChild(span1)
    div.appendChild(span2)
    mainDiv.appendChild(div)

    // to create the div draggable
    div.addEventListener('dragstart', dragStart)
    div.addEventListener('dragend', dragEnd)
    
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

allAddBtn.forEach(addBtn=>{
    addBtn.addEventListener('click', inputField)
})