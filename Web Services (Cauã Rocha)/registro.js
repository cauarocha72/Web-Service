nome = document.getElementById("nome").value
ender = document.getElementById("ender").value
email = document.getElementById("email").value
tel = document.getElementById("tel").value

connome = document.getElementById("connome").value
conender = document.getElementById("conender").value
conemail = document.getElementById("conemail").value
contel = document.getElementById("contel").value

function Entrar(){
alert("Por favaor, faz a confirmação para entrar")

}
function Confirma(){
nome = document.getElementById("nome").value
ender = document.getElementById("ender").value
email = document.getElementById("email").value
tel = document.getElementById("tel").value

connome = document.getElementById("connome").value
conender = document.getElementById("conender").value
conemail = document.getElementById("conemail").value
contel = document.getElementById("contel").value
   
if (nome == connome){
    if (ender == conender){
        if (email == conemail){
            if (tel == contel){
                alert("Login concluido")
                window.location.href = "principal.html"
            }
            if (tel != contel){
                alert("Ocorreu um erro na confirmação")
            }
        }
        if(email != conemail){
            alert("Ocorreu um erro na confirmação")
        }
    } 
    if(ender != conender){
        alert("Ocorreu um erro na confirmação")
    }  
}
if(nome != connome){
    alert("Ocorreu um erro na confirmação")
}
}