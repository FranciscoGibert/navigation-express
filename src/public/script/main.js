var arrayData = []

const validacion = document.getElementById("enviar")
    validacion.addEventListener('click', ()=>{
        let username = document.getElementById("name").value
        let surname = document.getElementById("surname").value
        let text = document.getElementById("text").value
        
        arrayData.push(username, surname, text)//envia los valores a un array

        if(arrayData.length > 4){
            arrayData.splice(0,3)
        } 
        if(username.length < 2 || surname.length < 2) {
            alert("****Please insert correct values in the fields****")
        }
        
        sendData(username, surname)
    })

function sendData(username, surname){
    if(username.length && surname.length != 2){
        fetch('https://franciscogibert-nodejs-app.herokuapp.com/datos/api/datos', {
        method: 'POST',
        body: JSON.stringify(arrayData),
        headers:{
            'Content-Type':'application/json'
        }
        })
    }  
    
}