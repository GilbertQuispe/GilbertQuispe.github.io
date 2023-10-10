const confirmacion = document.querySelector('#confirmacion');
const abrirconfirmacion = ()=>{
    confirmacion.style.display = 'flex';
    cerrarconfirmacion();
}
const cerrarconfirmacion = () =>{
    setTimeout(()=> {
        confirmacion.style.display = 'none';
    }, 3500)
}