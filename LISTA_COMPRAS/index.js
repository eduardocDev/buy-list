let arr, show;
arr = [];//This array will store the items.

document.getElementById("btn0").onclick = function add(){
    let carlist = document.getElementById("input1").value;
    arr.push(carlist);//this will take the items.
}
document.getElementById("btn1").onclick = function list(){
    show = document.getElementById("demo");
    show.innerHTML = `${arr}`;//this will show the items
    alert(arr);
}
document.getElementById("btn2").onclick = function deleteTheLast(){
    let carlist = document.getElementById("input1").value;
    arr.pop(carlist);//this will delete the last item 
}
document.getElementById("btn3").onclick = function pushOnToStart(){
    let carlist = document.getElementById("input1").value;
    arr.unshift(carlist)//this will put on the start
}
