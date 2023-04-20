let btnDarkTheme = document.getElementById("btnDarkTheme");
let btnLightTheme = document.getElementById("btnLightTheme");

btnDarkTheme.addEventListener('click', ()=> cambiarTema('dark'));
btnLightTheme.addEventListener('click', ()=> cambiarTema('light'));

function cambiarTema(color){
    // para acceder alatributo html del data-bs-theme
    // document.querySelector("html");
    // console.log(document.getElementById("html"));
    // cambiar el atributo data-bs-theme por valor dark o light
document.querySelector("html").setAttribute('data-bs-theme', color);

    console.log(color);

}