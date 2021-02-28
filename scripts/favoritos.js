/*Aca uso la api trending*/
//Le pego a la api para que me traiga 3 gifts y los muestro en el html, con el ciclo for recorro mi array
const api_search=
  "https://api.giphy.com/v1/gifs/search?api_key=KlYSpi7VIayBHNm15pc4EAjGknZTtmO0&q=";
const api_trending = "http://api.giphy.com/v1/gifs/trending?api_key=";
const api_key = "dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG";


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