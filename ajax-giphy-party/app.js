const baseURL = "http://api.giphy.com/v1/gifs/search"
const api_key = "UI3joM0OgATdJyYTqazQVGb3N0eF6fZo"
const rating = "pg"

async function getGifs(q){
    const res = await axios.get(baseURL, {params : {api_key, q, rating}})
    // console.log(res);
    let random = Math.floor(Math.random() * res.data.data.length);
    // console.log(random);
    return res.data.data[random].images.original.url;
}

const btn = document.querySelector("#submit");
btn.addEventListener("click", async function(e){
    e.preventDefault()
    const input = document.querySelector("#search").value;
    const imgURL = await getGifs(input);
    const img = document.createElement('img');
    img.src = imgURL;
    document.querySelector("#gifarea").appendChild(img)
})

const removebtn = document.querySelector("#remove");
removebtn.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector("#gifarea").innerHTML =''
})