
function localStorageStore() {
    const jsonString = JSON.stringify(booth_done);
    const key = "ArrayData";
    localStorage.setItem(key,jsonString); 
}
function localStorageGet() {
    const key = "ArrayData";
    const jsonString = localStorage.getItem(key);
    booth_done = JSON.parse(jsonString);
}

//For retrieving local storage after loading page
window.onload = localStorageGet();
if (booth_done == null) {
    var booth_done = [0, 0, 0]
}
console.log('testing')

// Stores the completed information into the 
function boothcompleted(num) {
    var num = num - 1;
    booth_done[num] = 1;
    console.log(booth_done)
    localStorageStore();
}

// Converts the completed information in the website
function show_completed(num) {
    var id = 'circle' + (num + 1);
    console.log(id);
    if (booth_done[num] == 1) {


        // set the class list of the id to be 'completed' and remove 'uncompleted'
        document.getElementById(id).classList.add('completed');
        document.getElementById(id).classList.remove('uncompleted');
    }
}



function updateboothpage() {
    console.log('updated')
    show_completed(0);
    show_completed(1);
    show_completed(2);
}



