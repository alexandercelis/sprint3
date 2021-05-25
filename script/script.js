//JS for Menu Toggle

var menuItems = document.getElementById('menuItems');

menuItems.style.maxHeight = "0px"

function menuToggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px" 
    }else{
        menuItems.style.maxHeight = "0px"
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

$(document).ready(function(){
    
    $('.category-item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $
    })

    


});