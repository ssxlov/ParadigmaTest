function infoPopUp(){
    document.getElementById("infoPopUp").classList.toggle("snowInfoPopUp")
}
function closePopUpForm(){
    document.getElementById("signUpPopUp").style.visibility = "hidden"
    document.getElementById("bg_layer").style.display = "none"
}
function openForm(){
    document.getElementById("signUpPopUp").style.visibility = "visible"
    document.getElementById("bg_layer").style.display = "block"
}
function openOrderBlock(){
    document.getElementById("signUpPopUp").style.visibility = "hidden"
    document.getElementById("order").style.display = "block"
}
function closeOrderBlock(){
    document.getElementById("order").style.display = "none"
    document.getElementById("bg_layer").style.display = "none"
}
function burgerNavClose(){
    document.getElementById("nav_wrap").classList.remove('active')
}
function openBurgerNav(){
    document.getElementById("nav_wrap").classList.toggle("active")
}
