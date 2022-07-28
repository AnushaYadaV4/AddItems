//Make the 3 rd element in the list have green background color
let items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";

//Make all the elements in the list have bold color font
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}