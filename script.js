//Add List w/ Item Input
function addList(event) {
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
                    <input type="text" class="itemInput" onkeyup="itemCheck(event)"/>
                    <button onclick="addItem(this)">Add Item</button>
                    <div class="item"></div>
                </div>
            </div>            
            `);
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


//Add Item content into span with delete icon & checkbox
function addItem(element) {
    let itemInput = $(".itemInput").val();
    console.log(itemInput);
    if (itemInput != "") {
        $(element).siblings(".item").append(
            `<div class="itemContainer">
            <input id="itemCheckbox" type="checkbox" class="markCompleted">
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
function itemCheck(event) {
    switch (event.which) {
        case 13:
            addItem();
            break;
    }
}