var bars = document.querySelector("#bars");
var dropdownNav = document.querySelector("#dropdownNav");



bars.addEventListener("click", function(){
    if(dropdownNav.style.height == "0px"){
        dropdownNav.style.height = "450px";
        bars.style.transform = "rotate(90deg)";
    }else{
        dropdownNav.style.height = "0px";
        bars.style.transform = "rotate(0deg)";
    }
});