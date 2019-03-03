//Add List Button
listNum = 0;
itemNum = 0;

function addList(value, event) {
    //attempt to create dynamic name to identify & target element
    // const message = $(`#${inputId}`).val();
    switch (event.which) {
        case 13:
            listNum++;
            $("#list").append("git<div id='list" + listNum + "'>" +
                value +
                "<i class='fas fa-trash' onclick='deleteList(" + listNum + ")'></i>"+
                "<input type='text' placeholder='add item' onkeyup='additem(" + listNum +", this.value, event)'>"+
                "<span contenteditable='true'> ${listInput} </span>"+
                "</div>"+
                ""
            );

            $("#listInput").val("");
            break;
    }
    let listInput = $(".listInput").val();
    if (listInput != "") {
        $("#list").append
            (`<div class="listContainer">
                <div class='listMain'>
                    <input id="listCheckbox" type="checkbox" class="markCompleted">
                    <i onclick = 'deleteList(this)' class='fas fa-trash'></i>
                    <span contenteditable='true'> ${listInput} </span>
                </div>
                <div id="list">
                    <div class="row"></div>
                </div>
            </div>
            <div class="itemContainer">
                <div id="itemMain">
                    <input type="text" class="itemInput" onkeyup="itemCheck(event)"/>
                    <button onclick="addItem(this)">Add Item</button>
                    
                    <div id="item">
                        <div class="row"></div>
                    </div>
                </div>
            </div>
            `);
        $(".listInput").val("");
    }
    $(".listInput").focus();
}

function listCheck(event) {
    switch (event.which) {
        case 13:
            addList();
            break;
    }
}
//fadeOut is broken
function deleteList(element) {
    console.log(element);
    // $(element).fadeOut("slow", function () {
        $(element).parent().remove();

    // });
}

//hide ITEM until there is an available LIST
// function callITEM(validITEM) {
//     for (let i = 0; i < validITEM.length; i++) {
//         if {
//             let list${""}
//         };
//     }
// }


//Add Item Button
function addItem() {
    let itemInput = $(".itemInput").val();
    if (itemInput != "") {
        $("#item").append
        (`<div class="itemContainer">
            <div id="itemMain">
                <i onclick='deleteItem(this)' class='fas fa-trash'></i>
                                <input id="itemCheckbox" type="checkbox" class="markCompleted">                

                <span contenteditable='true'> ${itemInput} </span>
                <div id="item">
                    <div class="row"></div>
                </div>
            </div>
        </div>`);
        $(".itemInput").val("");
    }
    $(".itemInput").focus();

}

function itemCheck(event) {
    switch (event.which) {
        case 13:
            addItem();
            break;
    }
}

//fadeOut is broken
function deleteItem(element) {
    console.log(element);
    // $(element).fadeOut( "slow", function() {
    $(element).parent().remove();
    // });
}


// //copy/paste Mario's js
// class List {
//     constructor(name) {
//         this.name = name;
//         this.tasks = [];
//     }
//     addTask(task) {
//         this.tasks.push(task);
//     }
//     removeTask(task) {
//         // remove task from list
//     }
//     rename(name) {
//         this.name = name;
//     }
// }
//
// class Task {
//     constructor(text) {
//         this.text = text;
//         this.completed = false;
//     }
//     rename(text) {
//         this.text = text;
//     }
//     markCompleted() {
//         this.completed = true;
//     }
//     markIncomplete() {
//         this.completed = false;
//     }
// }
//
// class UrgentTask extends Task {
//     constructor(text, level) {
//         super(text);
//         this.priority = level;
//     }
// }
//
// const firstList = new List('Saturday Projects');
// const firstTask = new Task('Wash Car');
// const secondTask = new Task('Paint Baby Room');
// const thirdTask = new Task('Get Oil Change');
//
// firstList.addTask(firstTask);
// firstList.addTask(secondTask);
// firstList.addTask(thirdTask);
//
// function markAllCompleted() {
//     firstList.tasks.forEach(task => {
//         task.markCompleted();
//     });
// }
//
// const currentListElement = $('#currentList');
// currentListElement.html(`<h2>${firstList.name}</h2>`);
// let taskHtml = '<ul>';
// firstList.tasks.forEach((task, index) => {
//     taskHtml = taskHtml +
//         `<li id="task${index}">${task.text}<input type="checkbox"
//         onclick="markCompleted(this, ${index})"></li>`;
// });
// taskHtml = taskHtml + '</ul>';
//
// currentListElement.append(taskHtml);
//
// function markCompleted(element, index) {
//     if(element.checked == true) {
//         firstList.tasks[index].markCompleted();
//         $(`#task${index}`).css('text-decoration', 'line-through');
//     }
//     else {
//         firstList.tasks[index].markIncomplete();
//         $(`#task${index}`).css('text-decoration', 'none');
//     }
// }

