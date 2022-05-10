var add = document.getElementById("btn");
var container = document.getElementById("container");
var form = document.getElementById("form");
var create = document.getElementById("create");
var title;
var text;
// le button add note
add.addEventListener("click",()=>{
    form.style.display = "block";
    container.style.filter = "blur(4px)";
})
// le button create note 
create.addEventListener("click",()=>{
     title = document.getElementsByClassName("title")[0];
     text = document.getElementById("text");
     // check if all the input are not empty
     if(title.value=="" || text.value == ""){
        alert("tous les champs sont obligatoires");
     }
     else{
     var card = document.createElement("div");
     card.className = "card2";
      var hr = document.createElement("hr");
      var button = document.createElement("button");
      button.innerHTML = "supprimer";
    var new_title = document.createElement("h3");
    var new_text = document.createElement("textarea");
    new_title.innerHTML = title.value;
    new_text.className = "textarea";
    new_text.innerHTML = text.value;
    card.appendChild(new_title);
    card.appendChild(hr);
    card.appendChild(new_text);
    // le button supprimer note
    card.innerHTML += "<button onclick='supprimer(this);' class='btn btn-dark supprimer w-75'>supprimer</button>";
    container.appendChild(card);
    form.style.display = "none";
    container.style.filter = "blur(0)";
    }
})
function supprimer(t){
     t.parentElement.remove();
}
