
let aboutButton = document.getElementsByTagName('a')[0]
let bio = document.getElementById('bio')
let bioText = bio.innerHTML

let greenhouseButton = document.getElementsByTagName('a')[1]
let greenhouse = document.getElementById("greenhouse")
let greenhouseText = greenhouse.innerHTML
// greenhouse.style.visibility = "hidden"
greenhouse.style.display = "none"

let profPic = document.getElementById('pic')

let tunecastButton = document.getElementsByTagName('a')[2]
let tunecast = document.getElementById("tunecast")
let tunecastText = tunecast.innerHTML
// tunecast.style.visibility = "hidden"
tunecast.style.display = "none"

let linguaButton = document.getElementsByTagName('a')[3]
let lingua = document.getElementById("lingua")
let linguaText = lingua.innerHTML
// lingua.style.visibility = "hidden"
lingua.style.display = "none"

aboutButton.addEventListener('click', e => {
    // greenhouse.style.visibility = "hidden"
    greenhouse.style.display = "none"
    // tunecast.style.visibility = "hidden"
    tunecast.style.display = "none"
    // lingua.style.visibility = "hidden"
    lingua.style.display = "none"
    // bio.style.visibility = "visible"
    bio.style.display = "block"
    bio.innerHTML = bioText
    // profPic.style.visibility = "visible"
    profPic.style.display = "block"

})


greenhouseButton.addEventListener('click', e => {
    // bio.style.visibility = "hidden"
    bio.style.display = "none"
    // tunecast.style.visibility = "hidden"
    tunecast.style.display = "none"
    // lingua.style.visibility = "hidden"
    lingua.style.display = "none"
    // greenhouse.style.visibility = "visible"
    greenhouse.style.display = "block"
    //on click, i want to hide previous text and display greenhouse text 
    greenhouse.innerHTML = greenhouseText
    // profPic.style.visibility = "hidden"
    profPic.style.display = "none"
})

tunecastButton.addEventListener('click', e => {
    // bio.style.visibility = "hidden"
    bio.style.display = "none"
    // greenhouse.style.visibility = "hidden"
    greenhouse.style.display = "none"
    // lingua.style.visibility = "hidden"
    lingua.style.display = "none"
    // tunecast.style.visibility = "visible"
    tunecast.style.display = "block"
    tunecast.innerHTML = tunecastText
    // profPic.style.visibility = "hidden"
    profPic.style.display = "none"
})

linguaButton.addEventListener('click', e => {
    // bio.style.visibility = "hidden"
    bio.style.display = "none"
    // greenhouse.style.visibility = "hidden"
    greenhouse.style.display = "none"
    // tunecast.style.visibility = "hidden"
    tunecast.style.display = "none"
    // lingua.style.visibility = "visible"
    lingua.style.display = "block"
    lingua.innerHTML = linguaText
    // profPic.style.visibility = "hidden"
    profPic.style.display = "none"
})


// let bio = document.querySelector('.bio')
// bio.innerHTML ='test'