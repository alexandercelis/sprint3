//JS for Menu Toggle

var menuItems = document.getElementById('menuItems');

menuItems.style.maxHeight = "0px";

function menuToggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }else{
        menuItems.style.maxHeight = "0px";
    }
}

//Category
document.querySelector("#cat1").addEventListener("click",e=>{
    categoryBasic();
});

document.querySelector("#cat2").addEventListener("click",e=>{
    categoryIntermediate();
});

document.querySelector("#cat3").addEventListener("click",e=>{
    categoryAdvanced();
});

var cat1 = document.querySelector(".basic");
var cat2 = document.querySelector(".intermediate");
var cat3 = document.querySelector(".advanced");

function categoryBasic(){
    if(cat1.style.display == "none"){
        for(let i = 0; i <= cat1.length; i++) {
            cat1[i].style.display = "block";
        }
        for(let i = 0; i <= cat2.length; i++) {
            cat2[i].style.display = "none";
        }
        for(let i = 0; i <= cat3.length; i++) {
            cat3[i].style.display = "none";
        }
    }
}
function categoryIntermediate(){
    if(cat2.style.display == "none"){
        for(let i = 0; i <= cat1.length; i++) {
            cat1[i].style.display = "none";
        }
        for(let i = 0; i <= cat2.length; i++) {
            cat2[i].style.display = "block";
        }
        for(let i = 0; i <= cat3.length; i++) {
            cat3[i].style.display = "none";
        }
    }
}
function categoryAdvanced(){
    if(cat3.style.display == "none"){
        for(let i = 0; i <= cat1.length; i++) {
            cat1[i].style.display = "none";
        }
        for(let i = 0; i <= cat2.length; i++) {
            cat2[i].style.display = "none";
        }
        for(let i = 0; i <= cat3.length; i++) {
            cat3[i].style.display = "block";
        }
    }
}