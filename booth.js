
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
    var booth_done = [0, 0, 0, 0, 0, 0]
}
console.log('testing')

function boothcompleted(num) {
    var num = num - 1;
    booth_done[num] = 1;
    console.log(booth_done)
    localStorageStore();
}


function updateboothpage() {
    document.getElementById('circle1').innerText = booth_done[0];
    document.getElementById('circle2').innerText = booth_done[1];
    document.getElementById('circle3').innerText = booth_done[2];
    document.getElementById('circle4').innerText = booth_done[3];
    document.getElementById('circle5').innerText = booth_done[4];
    document.getElementById('circle6').innerText = booth_done[5];
}



