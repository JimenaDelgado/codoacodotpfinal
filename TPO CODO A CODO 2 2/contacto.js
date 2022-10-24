const apiUrl = " https://api.covidtracking.com/v1/us/daily.json"

async function obtenerPosicion(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data);

    document.getElementById("fecha").innerHTML = data.fecha
    document.getElementById("muerte").innerHTML = data["muerte"]

}

obtenerPosicion()
function valida_envia(){
    
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
    if (document.fvalida.email.value.length==0){
        alert("Tiene que escribir su email")
        document.fvalida.email.focus()
        return 0;
 }
 if (document.fvalida.consulta.value.length==0){
    alert("Tiene que escribir su consulta")
    document.fvalida.consulta.focus()
    return 0;
}
}