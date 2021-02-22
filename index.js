/*Aca uso la api trending*/
//async function getGifo() {

let cointainer_trending = document.getElementById("trae_Gifos")
fetch("http://api.giphy.com/v1/gifs/trending?api_key=dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG&q&limit=3")
.then(resp => resp.json())
.then(gifs => {
    console.log(gifs)
    let array = gifs.data;
    for (let i = 0; i < array.length; i++){
        let img = document.createElement("img");
        img.src = array[i].images.original.url;
        cointainer_trending.appendChild(img)
    }
})