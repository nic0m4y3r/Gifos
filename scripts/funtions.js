//*******Funcion busqueda**********/
//busco en la api//
async function search_Gifo(search_textbox, draw) {
  let dt = await fetch(`${api_search}${search_textbox}`);
  let obj_json = await dt.json();
  console.log(obj_json);
  if (!draw) {
    //revisar esto q tengo aca el negado
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
async function sugerencia(term) {
  let dt = await fetch(
    `https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}&limit=4`
  );
  let respuesta = await dt.json();
  draw_search(respuesta);
}

//DIBUJO LA SUGERENCIA
function draw_search(term) {
  let suggestList = document.getElementById("text-suggestion");
  suggestList.innerHTML = "";
  let array = term.data;
 // document.getElementById("search_Form").className += "text_box_increase";
  array.forEach((element) => {
   let item = document.createElement("li");
    item.className += "sin_bullet";
    item.innerHTML = element.name;
    item.setAttribute("onclick", "select_list(this)");
    suggestList.appendChild(item);
  });
}

function select_list(event) {
  console.log("escucho");
  console.log(event.innerText);
  let resultado = event.innerText;
  if (resultado) {
    //Aca le pego a la api de search
    search_Gifo(resultado);
    document.getElementById("search_Input").value = resultado;
  }
}

//*******Funcion SUGERENCIAS**********/
//Funcion de SUGERENCIAS en el search//
async function sugerencia(term) {
  let dt = await fetch(
    `https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}&limit=4`
  );
  let respuesta = await dt.json();
  draw_search(respuesta);
}
