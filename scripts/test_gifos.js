const url_api =
  "https://api.giphy.com/v1/gifs/search?api_key=KlYSpi7VIayBHNm15pc4EAjGknZTtmO0&q=";

/*
let api_url=`${url_gifo}search?api_key=${api_key}&q=spiderman`;


let cargo_gifo = document.getElementById('gifos');
fetch(api_url)
.then(respuesta =>respuesta.json())
.then(objGift => {
    console.log(objGift)

let dibujo = objGift.data;
let draw = document.createElement('img');
draw.src = dibujo [0].images.original.url;

gifos.appendChild(draw);
    });*/

///////SEARCH///////
/*
let search = document.getElementById("search_Input");
let btn_search = document.getElementById("search_Btn");
const limit = 12;

btn_search.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(search.value);
  search_gifo(search.value);
});

async function search_gifo(search) {
  let gifo = await fetch(
    `${url_gifo}search?api_key=${api_key}&q=${search}&limit=12`
  );
  let carga = await gifo.json();
  console.log(carga);
}
*/

let search_textbox = document.getElementById("search_Input");
let btn_search = document.getElementById("search_Btn");

btn_search.addEventListener("click", (event) => {
  event.preventDefault();
  search_Gifo(search_textbox.value);
});

//aca lo voy a buscar a la api
async function search_Gifo(search_textbox) {
  let dt = await fetch(`${url_api}${search_textbox}`);
  let obj_json = await dt.json();
  console.log(obj_json);
  draw_gifo(obj_json);
}


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