//Add class to Item element
function addChecked(element){
    $(element).parent().toggleClass('completed');
}
//Delete Items element with class 'completed'
function deleteChecked(){
    $(".completed").fadeOut(2500);
    $(".completed").remove();
}
//Add Item content into span with delete icon & checkbox
function addItem(itemID, element) {
    let itemInput = $(`#${itemID}`).val();
    // console.log(itemInput);
    if (itemInput != "") {
        $(element).siblings(".item").append(
            `<div class="itemContainer">
            <input id="itemCheckbox" type="checkbox" class="markCompleted" onchange="addChecked(this)">
            <i onclick='deleteItem(this)' class='fas fa-trash'></i>
            <span contenteditable="true"> ${itemInput} </span>
        </div>`
        );
        // $(".item").append
        // (`
        // <div class="itemContainer">
        //     <input id="itemCheckbox" type="checkbox" class="markCompleted">
        //     <i onclick='deleteItem(this)' class='fas fa-trash'></i>
        //     <span contenteditable="true"> ${itemInput} </span>
        // </div>`);
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
                    <span contenteditable='true'> ${listInput} </span>
                </div>
                <div id="itemMain">
                    <input type="text" id="${inputItemID}" class="itemInput" onkeyup="itemCheck(event, ${inputItemID}, this)"/>
                    <button onclick="addItem(${inputItemID}, this)">Add Item</button>
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
//delete Item with icon
function deleteItem(element) {
    console.log(element);
    $(element).parent().fadeOut( "slow", function() {
        $(element).parent().remove();
    });
}

//hide ITEM until there is an available LIST
// function callITEM(validITEM) {
//     for (let i = 0; i < validITEM.length; i++) {
//         if {
//             let list${""}
//         };
//     }
// }


