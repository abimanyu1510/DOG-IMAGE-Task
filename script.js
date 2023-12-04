const title=document.getElementById("Header");
title.innerText="RANDOM DOG IMAGE";

const url="https://dog.ceo/api/breeds/image/random"
function fetchRandomDogImage(){
fetch(url).then(response=>response.json()).then(data=>{ 
const DogImage=document.getElementById("dog-image");
const image=document.createElement("img")
image.src=data.message;
image.alt="Random Dog";
DogImage.appendChild(image);

})
.catch(error=>{
    console.log("Error fetching random dog image:", error);
})
}

const button=document.getElementById("button").innerHTML="click to view";
document.addEventListener("click",()=>{
    fetchRandomDogImage();
})
