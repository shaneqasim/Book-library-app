console.log('hello');

function Book(name , author , type , Date){
         this.name = name;
         this.author = author;
         this.type = type;
         this.Date = Date;
}

// Display my constructor

function Display(){

}

Display.prototype.add = function(book){
    console.log('adding to UI');
    let tablebody = document.getElementById('tablebody');
    let UIstring = `<tr>
                       <td>${book.name}</td>
                       <td>${book.author}</td>
                       <td>${book.type}</td>
                       <td>${book.Date}</td>
                    </tr>`
    tablebody.innerHTML += UIstring ;
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if(book.name.length < 2 || book.author.length < 2){
        return false;
    } else{
        return true;
    }
}

// adding value of submit in library form

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit' , libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('submit successful')
    let Name = document.getElementById('BookName').value;
    let Author = document.getElementById('author').value;
    let date = document.getElementById('Date').value;
    let architect = document.getElementById('Architecture');
    let web = document.getElementById('Programming');
    let engineer = document.getElementById('Engineering');
    let type;
    
    if(architect.checked){
        type = architect.value;
    } else if(web.checked){
        type = web.value;
    } else if(engineer.checked){
        type = engineer.value;
    }

    let book = new Book(Name , Author , type , date);
    console.log(book);
    
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
    }

    e.preventDefault();
}
