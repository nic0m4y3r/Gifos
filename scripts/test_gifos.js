/*Aca uso la api trending*/
//Le pego a la api para que me traiga 3 gifts y los muestro en el html, con el ciclo for recorro mi array
// const api_sugerencia = `https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}&limit=4`;
const api_search =
  "https://api.giphy.com/v1/gifs/search?api_key=KlYSpi7VIayBHNm15pc4EAjGknZTtmO0&limit=12&q=";
const api_trending = "http://api.giphy.com/v1/gifs/trending?api_key=";
//const api_segerencias = ""
const api_key = "dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG";
/*

let cointainer_trending = document.getElementById("trae_Gifos");
fetch(`${api_trending}${api_key}&q&limit=3`)
  .then((respuesta) => respuesta.json())
  .then((gifs) => {
    console.log(gifs);
    let array = gifs.data;
    array.forEach((elem) => {
      let card = document.createElement("div");
      let img = document.createElement("img");
      img.src = elem.images.original.url;
      card.classList.add("card");
      card.appendChild(img);
      cointainer_trending.appendChild(card);
    });
  });

*/
/////////////////SEARCH///////////////////////
let search = document.getElementById("search_Input");
let btn_search = document.getElementById("search_Btn");
const limit = 12;


//let isSearching = false;
/*
btn_search.addEventListener("click", (event) => {
  event.preventDefault();
  let text = search.value;
  if (text.length >= 2) {
    document.getElementById("list_Suggestions").innerHTML = "";//Vacio el textbox
    sugerencia(search.value);
    isSearching = true;
    setTimeout(() => {
      isSearching = false;
    }, 1000)
  }
  //search_Gifo(search.value);
}
);

//*******Funcion SUGERENCIAS**********/
//Funcion de SUGERENCIAS en el search//

let suggestion = ""

async function sugerencia(term) {
  let dt = await fetch(`https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}&limit=4`);
  let respuesta = await dt.json();
  let array = respuesta.data;
  array.forEach(obj_json => {
   console.log(obj_json.name);
   draw_search(obj_json);
  });
}
/***************************************************************
***************************************************************
    *********************NO SE DIBUJA*********************
***************************************************************
***************************************************************/

function draw_search (obj_json){
let container = document.getElementById("search_Gif_Suggestions");
let card=document.createElement("div");
let ul = document.getElementById("list_Suggestions");

card.classList.add("card");
ul.src=obj_json.name;

card.appendChild(ul) //HASTA ACA LLEGA BIEN EL DATO
container.appendChild(card);
}



    //*******Funcion busqueda**********/
//busco en la api//
/*
async function search_Gifo(search_textbox, draw) {
  let dt = await fetch(`${api_search}${search_textbox}`);
  let obj_json = await dt.json();
  console.log(obj_json);
  if (!draw) { //revisar esto q tengo aca el negado
    draw_gifo(obj_json);
  }

}

//*******Funcion Draw**********/
//Funcion para dibujar gifs en el search//
/*
function draw_gifo(obj_json) {
  let array = obj_json.data;
  array.forEach((elem) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.images.original.url;
    card.classList.add("card");
    card.appendChild(img);
    searcher_ReturnApi.appendChild(card);
  });
}
*/





