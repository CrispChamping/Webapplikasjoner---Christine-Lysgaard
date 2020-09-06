var main = document.createElement('main');
   
var p = document.createElement('p');
p.innerHTML = 'Jeg trener på JavaScript';
p.className = 'trener';
main.appendChild(p);
document.body.appendChild(main);

var select = document.createElement('select');
var arrayOptions = [{id:'option1', text:'Mario'}, {id:'option2', text:'Luigi'}, {id:'option3', text:'Peach'}, {id:'option4', text:'Wario'}, {id:'option5', text:'Waluigi'}, {id:'option6', text:'Yoshi'}];

for(var i = 0; i < arrayOptions.length; i++){
    var option = document.createElement('option');
    option.id = arrayOptions[i].id;
    option.innerHTML = arrayOptions[i].text;
    select.appendChild(option);
}
main.appendChild(select);

select.style.marginLeft = '50%';
select.style.maxWidth = '500px';

var testbtn = document.createElement('button');
testbtn.innerHTML = 'Test';
testbtn.onclick = test;
main.appendChild(testbtn);
var resetbtn = document.createElement('button');
resetbtn.innerHTML = 'Reset';
resetbtn.onclick = reset;
main.appendChild(resetbtn);

var ul = document.createElement('ul');
createLi();
main.appendChild(ul);

function test(){
    //p.innerHTML = 'ptircSava å rener ge';
    var array = p.innerHTML.split(' ');
    array.reverse();
    console.log(array);
    var text = "";
    for(var i = 0; i < array.length; i++){
        text += array[i].substring(1) + " ";
    }
    p.innerHTML = text;
}

function createLi(){
    for(var i = 0; i < 4; i++){
        var li = document.createElement('li');
        var deletbtn = document.createElement('button');
        deletbtn.innerHTML = 'Delete';
        deletbtn.onclick = deleteli;
        li.appendChild(deletbtn);
        ul.appendChild(li);
    }
}

function reset(){
    while(ul.hasChildNodes()) {
        ul.firstChild.remove();
    }
    createLi();
}

function deleteli(){
    this.parentNode.remove();
}