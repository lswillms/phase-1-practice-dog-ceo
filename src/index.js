let pics = document.getElementById("dog-image-container")

            
document.addEventListener("DOMContentLoaded", () => {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgURL)
    .then(response => response.json())
    .then(data => {
        data.message.forEach((imgSrc) => {
            const dog = document.createElement('img')
            dog.src = imgSrc;
            pics.appendChild(dog)
        })
    })
})
document.addEventListener("load", () => {
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach((dogList) => {
            let li = document.createElement("li")
            let container = document.getElementById("dog-breeds")
            console.log(li.appendChild(dogList))
            console.log(container.appendChild(li))
        })
    })
})