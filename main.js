function listButt() {

    let ujTeendo=document.getElementById("ujTeendo").value;
    if (ujTeendo=="") {
        alert("A beviteli mezőt kérem töltse ki!");
        return;
    }
    else{
        document.getElementById("ujTeendo").value="";

        let li= document.createElement("li");
        let input= document.createElement("input");

        input.type="checkbox";

        let span= document.createElement("span");
        let sp= document.createElement("span");

        sp.innerHTML =" X";
        sp.addEventListener('click', torol);

        li.appendChild(input);
        span.innerHTML +=ujTeendo;
        li.appendChild(span);
        li.appendChild(sp);
        
        li.classList.add("list-group-item");

        input.addEventListener("click", athuzas);
        
        document.getElementById("list").appendChild(li);
    }
    
    
}

function torol(e){
    e.target.parentNode.remove();
}

function athuzas(e){
    e.target.parentNode.getElementsByTagName('span')[0].classList.toggle('athuz');
}


function init(){
    document.getElementById("listButt").addEventListener("click", listButt);
}

document.addEventListener("DOMContentLoaded", init);