//*******Funcion busqueda**********/
//busco en la api//
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


//*******Funcion SUGERENCIAS**********/
//Funcion de SUGERENCIAS en el search//
//async function sugerencia

