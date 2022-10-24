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
