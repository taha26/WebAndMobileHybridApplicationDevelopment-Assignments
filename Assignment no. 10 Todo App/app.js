function addToList(){

    // Add Functionality
    var input = document.getElementById("input");

    var list = document.createElement("li");
    var listText = document.createTextNode(input.value);

    list.appendChild(listText);



    // Edit Button With Adding List
    var editBtn = document.createElement("button");
    var editBtnName = document.createTextNode("Edit");
    editBtn.setAttribute("class","Btn");
    editBtn.setAttribute("onclick","edit(this)");
    editBtn.appendChild(editBtnName);
    list.appendChild(editBtn);




    // Delete Button With Adding List
    var delBtn = document.createElement("button");
    var delBtnName = document.createTextNode("Delete");
    delBtn.setAttribute("class","Btn");
    delBtn.setAttribute("onclick","del(this)");
    delBtn.appendChild(delBtnName);
    list.appendChild(delBtn);




    // Appending To Unorder List
    var unorderList = document.getElementById("unorderList");

    unorderList.appendChild(list);



    // Empty Input Field After Adding To List
    input.value = "";
}


function deleteAll(){

    unorderList.innerHTML = "";
}




function edit(e){

    var editList = prompt("Edit Your List",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editList;

}



function del(e){

    e.parentNode.remove();
}