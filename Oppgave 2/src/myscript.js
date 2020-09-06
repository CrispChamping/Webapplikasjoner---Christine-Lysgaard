window.onload = loaded;

var arrayTodos = [];
var array_done_toDo = [];
var indexTracker = 0; 

function loaded(){
    document.getElementById("createTodo").onclick = openMakeNewTodo;
    document.getElementById("xbtn").onclick = closeNewTodo;
    document.getElementById("createBtn").onclick = createTodo;
    document.getElementById("filterbydate").onchange = filterTabel;

    var textarea = document.getElementById('descriptionInput');
    textarea.addEventListener('keyup', charactersLeft, false);
}

//New todo
function openMakeNewTodo(){
    document.getElementById("blur").style.display = "block";
    document.getElementById('titleInput').value = "";
    document.getElementById('descriptionInput').value = "";
    document.getElementById('authorInput').value = "";
}

function closeNewTodo(){
    document.getElementById("blur").style.display = "none";
}

function charactersLeft(e){
    var text, left, counter;
    text = document.getElementById('descriptionInput').value;
    counter = (125 - (text.length));
    left = document.getElementById('createDescription');
    left.textContent = 'Description (' + counter + ' characters left)';
}

//New todo 
function createTodo(){
    
    if(document.getElementById('titleInput').value === "" && document.getElementById('descriptionInput').value === "" && document.getElementById('authorInput').value === ""){
        alert("Fill out: Title, Description and Author");
    }
    else if(document.getElementById('titleInput').value === "" && document.getElementById('descriptionInput').value === ""){
        alert("Fill out: Title and Description");
    }
    else if(document.getElementById('titleInput').value === "" && document.getElementById('authorInput').value === ""){
        alert("Fill out: Title and Author");
    }
    else if(document.getElementById('descriptionInput').value === "" && document.getElementById('authorInput').value === ""){
        alert("Fill out: Description and Author");
    }
    else if(document.getElementById('titleInput').value === ""){
        alert("Fill out: Title");
    }
    else if(document.getElementById('descriptionInput').value === ""){
        alert("Fill out: Description");
    }
    else if(document.getElementById('authorInput').value === ""){
        alert("Fill out: Author");
    }
    else{
        var div = document.createElement('div');
        div.className = 'recent';

        var title = document.createElement('h2');
        title.className = 'recentTitle';
        title.innerHTML = document.getElementById('titleInput').value;
        div.appendChild(title);

        var description = document.createElement('p');
        description.className = 'recentDescription';
        description.innerHTML = document.getElementById('descriptionInput').value;
        div.appendChild(description);

        var author = document.createElement('p');
        author.className = 'recentAuthor';
        author.innerHTML = document.getElementById('authorInput').value;
        div.appendChild(author);

        var divbtns = document.createElement('div');
        divbtns.className = 'recentbtns';

        var deletebtn = document.createElement('button');
        deletebtn.className = 'deletebtn';
        deletebtn.innerHTML = 'Delete';
        deletebtn.addEventListener("click", deleteTodo);
        divbtns.appendChild(deletebtn);

        var completebtn = document.createElement('button');
        completebtn.className = 'completebtn';
        completebtn.innerHTML = 'Complete';
        completebtn.addEventListener("click", addTodoTable);
        divbtns.appendChild(completebtn);

        div.appendChild(divbtns);

        document.getElementById('todorecent').appendChild(div);
        closeNewTodo();

    }
    
    /*
    <div class="recent">
        <h2> Todotitle </h2>
        <p> Todo description here </p>
        <div class="recentbtns">
            <button class="deletebtn"> Delete </button>
            <button class="completebtn"> Complete </button>
        </div>
    </div>
    */
}

//Delete todo
function deleteTodo(){
    this.parentNode.parentNode.remove();
}

//Add todo to table
function addTodoTable(){

    var today = new Date();
    //var date = today.getDate() + '.' + (today.getMonth() + 1 ) + '.' + today.getFullYear() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var t = this.parentNode.previousSibling.previousSibling.previousSibling.innerHTML;
    var d = this.parentNode.previousSibling.previousSibling.innerHTML;
    var a = this.parentNode.previousSibling.innerHTML;


    //var todo = {arraytitle: t, arraydescription: d, arrayauthor: a, arraydateMade: date};

    array_done_toDo[indexTracker] = [t, d, a, today];
    indexTracker++;

    //arrayTodos.push(todo);
    
    var table = document.createElement('tr');

    var titleTable = document.createElement('td');
    titleTable.innerHTML = t;
    table.appendChild(titleTable);

    var descriptionTable = document.createElement('td');
    descriptionTable.innerHTML = d;
    table.appendChild(descriptionTable);

    var authorTable = document.createElement('td');
    authorTable.innerHTML = a;
    table.appendChild(authorTable);

    var dateTable = document.createElement('td');
    var date = today.getDate() + '.' + (today.getMonth() + 1 ) + '.' + today.getFullYear();
    dateTable.innerHTML = date
    table.appendChild(dateTable);

    document.getElementById('completedtable').appendChild(table);
    this.parentNode.parentNode.remove();
    
    /*
    <tr>
        <td> Todotitle </td>
        <td> Author Author </td>
        <td> beskrivelse tekst </td>
        <td> 22.12.20 </td>
    </tr>
    */
}

//Filter by date
function filterTabel(){
    
    var button = document.getElementById("filterbydate");

    if(button.checked == true) {

        for(var i = 0; i < array_done_toDo.length; i++){

            var temp = array_done_toDo[i]; 
            var current = temp[3].getTime();
            var j = i - 1;
            while ((j >= 0) && (current > array_done_toDo[j][3].getTime())) {
                array_done_toDo[j+1] = array_done_toDo[j];
                j--;
            }
            array_done_toDo[j+1] = temp;
        }

        while(document.getElementById('completedtable').childElementCount != 1) {
            document.getElementById('completedtable').lastChild.remove();
        }
        
        for(var i = 0; i < array_done_toDo.length; i++) {
            var table = document.createElement('tr');

            var titleTable = document.createElement('td');
            titleTable.innerHTML = array_done_toDo[i][0];
            table.appendChild(titleTable);
        
            var descriptionTable = document.createElement('td');
            descriptionTable.innerHTML = array_done_toDo[i][1];
            table.appendChild(descriptionTable);
        
            var authorTable = document.createElement('td');
            authorTable.innerHTML = array_done_toDo[i][2];
            table.appendChild(authorTable);
        
            var dateTable = document.createElement('td');
            var date = array_done_toDo[i][3].getDate() + '.' + (array_done_toDo[i][3].getMonth() + 1 ) + '.' + array_done_toDo[i][3].getFullYear();
            dateTable.innerHTML = date;
            table.appendChild(dateTable);
        
            document.getElementById('completedtable').appendChild(table);
        }
    }
}