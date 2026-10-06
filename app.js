async function apicall() {
    let res= await fetch('https://meowfacts.herokuapp.com/')
    let data= await res.json()
    document.getElementById('box').innerText= data.data[0]
    speechSynthesis.speak(new SpeechSynthesisUtterance(data.data[0]))