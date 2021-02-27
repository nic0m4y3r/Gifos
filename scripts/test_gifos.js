const url_gifo = "https://api.giphy.com/v1/gifs/";
const api_key = "KlYSpi7VIayBHNm15pc4EAjGknZTtmO0";

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
