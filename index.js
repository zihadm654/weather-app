const search = document.querySelector(".search")
const city = document.querySelector(".city")
const degree = document.querySelector(".degree")
const temperature = document.querySelector(".temp")
const tempIcon = document.querySelector(".icon")
const Status = document.querySelector(".status")
const humidityPercentage = document.querySelector('.humidity')
const input = document.querySelector(".input")
const speedRef = document.querySelector(".speed")

const apiKey = "de74b7742a95fd8e92ac0b63972706ed";
const fetchData = async(city)=>{
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
   try {
      const res = await fetch(url);
      const data = await res.json();
      displayData(data)
   } catch (err) {
      console.error(err);
   }
}
const displayData =(data)=>{

   const {name} = data
   const {icon,main}= data.weather[0]
   const {humidity,temp }= data.main
   const {speed}= data.wind
   
   city.innerText = "Weather in "+ name
   humidityPercentage.innerText = "Humidity: "+humidity +"%"
   Status.innerText = "Status: " + main
   tempIcon.src = `https://openweathermap.org/img/wn/${icon}.png`
   temperature.innerText = `${temp} °C`
   speedRef.innerText = "Wind: "+speed
}
const getSearch = ()=>{
   fetchData(input.value)
}
const clickHandler =()=>{
   getSearch()
}
search.addEventListener("click", clickHandler)
input.addEventListener("keyup", (e)=>{
   if(e.key == "Enter"){
      getSearch()
   }
})
fetchData("Dhaka");