// leer del localStorage el tema o usaer el valor por defecto dark
let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "dark";
cambiarTema(temaConfigurado);

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
    //  guardar en localstorage (objetos y metodos de JS listos)
    localStorage.setItem("theme", JSON.stringify(color));
//  queda como tarea agregar un cambio para el valor de light dark q quea de la luna o el sol de acuerdo

}
