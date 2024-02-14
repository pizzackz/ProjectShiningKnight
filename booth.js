
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
    if (booth_done[num] == 1) {
        var id = 'circle' + num;
        console.log(id);
        document.getElementById(id).classList.
    }
}



function updateboothpage() {
    document.getElementById('circle1').innerText = booth_done[0];
    document.getElementById('circle2').innerText = booth_done[1];
    document.getElementById('circle3').innerText = booth_done[2];
}



