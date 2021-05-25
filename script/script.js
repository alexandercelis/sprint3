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

//JS for gallery product details---------
var productImg = document.getElementById('product-img');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function()
{
 productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function()
{
 productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function()
{
 productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function()
{
 productImg.src = smallImg[3].src;
}

// Category products


/*function categoryBasic(){
    alert("estas en function")
    offAdvanced();
    function offAdvanced(){
        let x = document.querySelector(".col4 .advanced");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    offIntermediate();
    function offIntermediate(){
        let x = document.querySelector(".col4 .intermediate");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    onBasic();
    function onBasic(){
        let x = document.querySelector(".col4 .basic");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
        }
    }
}

function categoryIntermediate(){
    offAdvanced();
    function offAdvanced(){
        let x = document.querySelector(".col4 .advanced");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    onIntermediate()
    function onIntermediate(){
        let x = document.querySelector(".col4 .intermediate");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
        }
    }
    offBasic()
    function offBasic(){
        let x = document.querySelector(".col4 .basic");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
}

function categoryAdvanced(){
    onAdvanced();
    function onAdvanced(){
        let x = document.querySelector(".col4 .advanced");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
        }
    }
    offIntermediate();
    function offIntermediate(){
        let x = document.querySelector(".col4 .intermediate");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    offBasic();
    function offBasic(){
        let x = document.querySelector(".col4 .basic");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
}*/
