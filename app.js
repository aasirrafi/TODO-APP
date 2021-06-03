// to do app

//task 1 implement the add function

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const todo = addForm.add.value.trim();
//call the generate template function to add in the todo list

    if (todo.length){
        generateTempelate(todo);
        //remove the todo from the input field
        addForm.reset();
    }

    console.log()
})


//implement a function that creates the html templeate that we can add to dom

const generateTempelate = (todo)=>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML+= html;
}


//task implement the delete function.

list.addEventListener('click', (e) =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();


    }


})

//task3 implement the search and filter function

const search = document.querySelector('.search input');

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);

})

//implement a function taht takes a teerm and matches with the todo items
//filter method have css content check css filter
const filteredTodos = (term) =>{
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>todo.classList.add('filter'))

    Array.from(list.children)
        .filter((todo)=>todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.remove('filter'))
}

 

//add another icon next todelete icon and implement the function that takes the complete icon and add a click event listener

//backgroung color sholud be dull font cut and add to completed task box