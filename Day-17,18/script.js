let theme = localStorage.getItem("theme");
if(theme=="dark"){
    goDark();
}
if(theme=="green"){
    goGreen();
}
if(theme=="purple"){
    goPurple();
}
if(theme=="white"){
    goWhite();
}
function goDark(){
    document.getElementById("body").className = "dark";
    document.getElementById('theme-page').style.display = 'none';
    localStorage.setItem("theme", "dark");
}
function goGreen(){
    document.getElementById("body").className = "green";
    document.getElementById('theme-page').style.display = 'none';
    localStorage.setItem("theme", "green");
}
function goPurple(){
    document.getElementById("body").className = "purple";
    document.getElementById('theme-page').style.display = 'none';
    localStorage.setItem("theme", "purple");
}
// function goPurple(){
//     document.getElementById("body").className = "purple";
//     document.getElementById('theme-page').style.display = 'none';
//     localStorage.setItem("theme", "purple");
// }
function goWhite(){
    let value = document.getElementById("body").className;
    document.getElementById('body').classList.remove(value);
    document.getElementById('theme-page').style.display = 'none';
    localStorage.setItem("theme", "white");
}
function settting(){
    document.getElementById('theme-page').style.display = '';
}
