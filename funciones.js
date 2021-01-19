window.addEventListener('load',() =>{

    /* Se hace esta funcion para optimizar la creación de tag <div> en la plantilla de Proyectos.html */
    const addProject = document.getElementById('box-project'); 
    proyectos.forEach(element => {
        addProject.innerHTML += ` <h2> <b>${element.nombre}</b> </h2>
                                    <h6> <b>${element.descripcion}</b> </h6>
                                    <h6> <b> Tecnologías :  ${element.tecnologias} </b></h6>
                                    <a href="${element.codigofuente}"><h6>Repositorio del Codigo Fuente Aqui</h6></a> 
                                    <video controls autoplay> <source src="${element.video}" 
                                    type="video/mp4" </video> `
    });

    const nav = document.querySelectorAll('.categoria nav ul li a');
    nav.forEach((e) =>{
       
        e.addEventListener('click',(event)=>{
            event.preventDefault();
            e.classList.remove('active');
            event.target.classList.add('active');
            
            const categorias = event.target.innerHTML.toLowerCase()
            /* e.filter(`[class = "${categorias}"]`); */
            console.log(categorias);

        });
    })



/*DOM que se creo para hacer el popup 
let modal = document.getElementById('idModal');
let close = document.getElementById('btnClose');

close.addEventListener('click',function(){
    modal.style.display = 'none';
}) 
se comenta por que ya no se precisa*/

})
