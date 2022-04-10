console.log("this is Magic Notes project");
showNotes();

let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
    let txtarea=document.getElementById("txtArea");
    if (txtarea.value.length == 0) {
        alert("You dont make any Notes...!");
        return false; 
    } 
    {
        let div2=document.getElementById("div2");
        div2.style.background="white";
        div2.style.color="black";
    }
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(txtarea.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    txtarea.value="";
    console.log(notesobj);
    showNotes();
});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }

    let titleval=document.getElementById("title");
// <h2> Notes ${index+1}</h2>
    let html="";
    notesobj.forEach(function(element,index) {
        html +=`
        <div class="storedNotes">
            <h2>Notes ${index+1}</h2>
            <p class="savenotestxt">${element}</p>
            <button onclick="deletefun(this.id)" class="btn" id="${index}">Delete Notes</button>
        </div>
        `;
    });
    let notesele=document.getElementById("div2");
    if(notesobj.length!=0){
        notesele.innerHTML=html;
    }
    else{
        notesele.innerHTML="Nothing to show...! Add notes to show."
        notesele.style.padding="20px 10px 10px 20px";
        notesele.style.background="#413a3a";
        notesele.style.color="white";
        notesele.style.fontSize="20px";
        notesele.style.border="3px solid green";
    }
};

function deletefun(index){
    // console.log(index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
};
let searchnotes=document.getElementById("NotesSearch");
searchnotes.addEventListener("input",function(){
    let inputval=searchnotes.value.toLowerCase();
    // console.log("fired",inputval);
    let savenotes=document.getElementsByClassName("storedNotes");
    Array.from(savenotes).forEach(function(element){
        let savenotestxt=element.getElementsByTagName("p")[0].innerText;
        if(savenotestxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        // console.log(savenotestxt);
    });

});