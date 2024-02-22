const form = document.querySelector("form")
const word = document.querySelector("#word")
const result = document.querySelector("#result")
const partsOfSpeech = document.querySelector("#partsOfSpeech")
const meaning1 = document.querySelector("#meaning1")
const meaning2 = document.querySelector("#meaning2")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    showResult()
})

async function showResult(){
    
    try{
        partsOfSpeech.style.backgroundColor="none"
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`
        const res = await fetch(URL)
        if(!res.ok){
            throw new NetworkError(`Request failed with status ${res.status}`);
        }
        const data = await res.json()
        console.log(data)
        partsOfSpeech.innerText = data[0].meanings[0].partOfSpeech 
        meaning1.innerText = `Meaning 1 : ${data[0].meanings[0].definitions[0].definition}`
        meaning2.innerText = `Meaning 2 : ${data[0].meanings[0].definitions[1].definition}`
    }
    catch(err){
        result.innerText = `Sorry , unable to find the word ${word.value}`
    }
    result.style.display="block"
}

