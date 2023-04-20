import Pelicula from "./classPelicula.js";

let formularioPeliculas = document.getElementById("formPelicula");

formularioPeliculas.addEventListener("submit", prepararFormularioPelicula);

const peliculaEjemplo = new Pelicula(
    "0001",
    "El Padrino",
    "La familia Corleone es una de las más poderosas de Nueva York en los años 40.",
    "https://imagenes.psicologiaymente.com/wp-content/uploads/2021/02/el-padrino-1.png",
    "Drama/Crimen",
    1972,
    "2h 55min",
    "Estados Unidos",
    ["Marlon Brando", "Al Pacino", "James Caan"]
  );

  console.log(peliculaEjemplo);

//   la e se puede usar en una funcion anonima tmb
  function prepararFormularioPelicula(e) {
    e.preventDefault();
console.log("en el evento submit");
crearPelicula();
  }

  function crearPelicula(){
    
  }