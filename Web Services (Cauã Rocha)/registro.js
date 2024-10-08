
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

function Linkar(){
    baruk = document.getElementById("Baruk")
    
   
    if (baruk){
        alert("baruk")
        window.location.href = "https://www.restaurantebaruk.com.br/"
    }
    else{
        alert("ocorreu um erro, tente novamente")
    }
}

function Linkar2(){
    ala = document.getElementById("ala")
    
   
    if (ala){
        alert("alasanharia")
        window.location.href = "https://salvador.alasanharia.com.br/"
    }
    else{
        alert("ocorreu um erro, tente novamente")
    }
}

function Linkar3(){
    duo = document.getElementById("duo")
    
   
    if (duo){
        alert("Duo Gourmet")
        window.location.href = "https://lp.duogourmet.com.br/"
    }
    else{
        alert("ocorreu um erro, tente novamente")
    }
}

function Linkar4(){
    ras = document.getElementById("ras")
    
   
    if (ras){
        alert("Ráscal")
        window.location.href = "https://rascal.com.br/"
    }
    else{
        alert("ocorreu um erro, tente novamente")
    }
}

function Linkar5(){
    kun = document.getElementById("kun")
    
   
    if (kun){
        alert("tokunfome")
        window.location.href = "https://www.costelariatokunfome.com.br/"
    }
    else{
        alert("ocorreu um erro, tente novamente")
    }
}
function Linklist(){
    window.location.href ="menu.html"
}
function Linkpri(){
    window.location.href ="principal.html"
}