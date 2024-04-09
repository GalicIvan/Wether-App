import './styles.css'

const img = document.querySelector('#weather-img')
const cityName = document.querySelector('#cityName')
const cityLocation = document.querySelector('#cityLocation')
const weatherDesc = document.querySelector('#weatherDesc')
const tempC = document.querySelector('#temp')

function getWeatherLocation() {
    event.preventDefault()
    let location = document.querySelector('#location')
    let locationText = location.value
    console.log(locationText)

    fetch(`https://api.weatherapi.com/v1/current.json?key=b24ae8b0573f408384a134834240404&q=${locationText}`, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        console.log(response)
        let imgUrl = response['current']['condition']['icon']
        let imgUrlFull = `https:${imgUrl}`
        img.src = imgUrlFull
        cityName.textContent = `${response['location']['name']}`
        cityLocation.textContent = `${response['location']['region']}`
        weatherDesc.textContent = `${response['current']['condition']['text']}`
        tempC.textContent = `Temperature: ${response['current']['temp_c']}°C`
    })
}

let btn = document.getElementById('btn')
btn.addEventListener('click', getWeatherLocation)

document.querySelector('#btn').addEventListener('click', () => {
    event.preventDefault()
    let popup = document.querySelector('.popup-container')
    popup.style.display = 'flex'
})

document.querySelector('.popup-close').addEventListener('click', () => {
    let popup = document.querySelector('.popup-container')
    popup.style.display = 'none'
})