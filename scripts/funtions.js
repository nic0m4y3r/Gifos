//const url_gifo = "https://api.giphy.com/v1/gifs/";
//const api_key = "KlYSpi7VIayBHNm15pc4EAjGknZTtmO0";

//*******Funcion busqueda**********/
//Funcion para buscar gifs en el search//

async function search_gifo(search) {
  let gifo = await fetch(
    `${url_gifo}search?api_key=${api_key}&q=${search}&limit=12`
  );
  let carga = await gifo.json();
  console.log(carga);
  let array = carga.data;
  array.forEach((elem) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.images.original.url;
    card.classList.add("card");
    card.appendChild(img);
    searcher_ReturnApi.appendChild(card);
  });
}

//*******Funcion Draw**********/
//Funcion para dibujar gifs en el search//
