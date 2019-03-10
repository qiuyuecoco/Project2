// // Store
// function setData() {
//     localStorage.list = ("data", JSON.stringify());
// }
// // Retrieve
// function getData () {
//     $('')
// }
// document.getElementById("result").innerHTML = localStorage.lastname;


//
//Add List w/ Item Input
let inputItemID = 0;
function addList() {
    let listInput = $(".listInput").val();
    if (listInput != "") {
        $("#list").append
        (`<div class="listContainer">
                <div class='listMain'>
                    <input id="listCheckbox" type="checkbox" class="markCompleted">
                    <i onclick = 'deleteList(this)' class='fas fa-trash-alt'></i>
                    <span contenteditable='true'>List Name: ${listInput} </span>
                </div>
                <div id="taskMain">
                    <div class="taskInput d-flex justify-content-center">
                        <input type="text" id="${inputItemID}" class="itemInput" onkeyup="itemCheck(event, ${inputItemID}, this)"/>
                        <button class="taskButton" onclick="addItem(${inputItemID}, this)">Add Task</button>
                    </div>
                    <div class="item"></div>
                </div>
            </div>            
            `);
        inputItemID++;
        $(".listInput").val("");
    }
    $(".listInput").focus();
}
//add List with Enter Key
function listCheck(event) {
    switch (event.which) {
        case 13:
            addList();
            break;
    }
}
//delete List with trash icon
function deleteList(element) {
    $(element).parent().parent().fadeOut("slow", function () {
        $(element).parent().parent().remove();
    });
}

//Add Item content into span with delete icon & checkbox
function addItem(itemID, element) {
    let itemInput = $(`#${itemID}`).val();
    // console.log(itemInput);
    if (itemInput != "") {
        $(element).parent().siblings(".item").append(
            `<div class="itemContainer">
            <input id="itemCheckbox" type="checkbox" class="markCompleted" onchange="addChecked(this)">
            <i onclick='deleteItem(this)' class='fas fa-trash'></i>
            <span contenteditable="true"> ${itemInput} </span>
        </div>`
        );
        $(".itemInput").val("");
    }
    // $(".itemInput").focus();
}
//add Item with Enter Key
function itemCheck(event, itemId, element) {
    switch (event.which) {
        case 13:
            addItem(itemId, element);
            break;
    }
}
//delete Item with icon
function deleteItem(element) {
    console.log(element);
    $(element).parent().fadeOut( "slow", function() {
        $(element).parent().remove();
    });
}

//Add class to Item element
function addChecked(element){
    $(element).parent().toggleClass('completed');
}
//Delete Items element with class 'completed'
function deleteChecked(){
    $(".completed").fadeOut("slow", function () {
        $(".completed").remove();
    });
}

