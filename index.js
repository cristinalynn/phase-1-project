const dogs = []
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(data => getDogs(data))
   
    const searchForm = document.getElementById("search-form")
    searchForm.addEventListener("submit", (e) => {searchDogs(e)})    
   
    const allDogsButton = document.getElementById("all")
    allDogsButton.addEventListener("click", () => {
        const dc = document.getElementById("dogs-container")
        if (dc.children.length == 0) {
            showAllDogs()
        }
    })
})

function getDogs(dogData) {
    dogData.forEach((dog) => dogs.push(dog))
}

function searchDogs(e) {
    e.preventDefault()
    const dogsOfBreed = dogs.filter(dog => dog.dogBreed === e.target.dogBreed.value)
    const dogBreedContainer = document.getElementById("searchByDogBreed_container")
    dogsOfBreed.forEach((dog) => {createDogElement(dog, dogBreedContainer)})
}

function showAllDogs() {
    const allDogsContainer = document.getElementById("dogs-container")
    dogs.forEach(dog => {createDogElement(dog, allDogsContainer)})
}

function createDogElement(dog, containerName) {
    const h2 = document.createElement("h2")
    h2.innerText = dog.name
    const img = document.createElement("img")
    img.src = dog.image
    img.className = "dog-img"
    containerName.append(h2, img)
}
