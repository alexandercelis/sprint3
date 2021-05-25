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

// Print Category 
function categoryBasic(){
    offAdvanced();
    let offAdvanced=() =>{
        let x = document.getElementsByClassName("advanced");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    offIntermediate();
    let offIntermediate=() =>{
        let x = document.getElementsByClassName("intermediate");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    onBasic();
    let onBasic=() =>{
        let x = document.getElementsByClassName("basic");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
        }
    }
}
function categoryIntermediate(){
    
    let offAdvanced=() =>{
        let x = document.getElementsByClassName("advanced");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    
    let onIntermediate=() =>{
        let x = document.getElementsByClassName("intermediate");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
        }
    }
    
    let offBasic=() =>{
        let x = document.getElementsByClassName("basic");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
}
function categoryAdvanced(){
    onAdvanced();
    let onAdvanced=() =>{
        let x = document.getElementsByClassName("advanced");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
        }
    }
    offIntermediate();
    let offIntermediate=() =>{
        let x = document.getElementsByClassName("intermediate");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
    offBasic();
    let offBasic=() =>{
        let x = document.getElementsByClassName("basic");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        }
    }
}



/*$(document).ready(function(){
    
    $('.category-item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.col-4').hide();


    })

    


});*/