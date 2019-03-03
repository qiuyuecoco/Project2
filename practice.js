function addList(value, event) {
    switch (event.which) {
        case 13:
            //add List with Enter key
            console.log(value);
            $("addList").val("");
            break;
    }
}