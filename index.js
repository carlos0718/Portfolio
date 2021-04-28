/* Se hace uso del EVENTO load */
window.addEventListener('load',() =>{

    const nav = document.querySelectorAll('.categoria nav ul li a');
    nav.forEach((e) =>{
        /* console.log(e); */
        /* Se hace uso deñ EVENTO click */
        e.addEventListener('click',(event)=>{
            /* funcion para desavtivar/activar nav-item seleccionado */
            event.target.classList.add('active'); 
            e.classList.remove('active'); 
        })
    }) 
    
    crearCard();
    /*inicio 
    ** SE GENERA CONTENIDO DE PROYECTOS CONSUMIENTO API LOCA CON AJAX
    */
    const addProject = document.getElementById('box-project'); 
    let contenidoJson = [];
    $.ajax({
        url: "proyectos.json",
        dataType: "json",
        success: function (contenidoJson) {
            localStorage.contenidoJson = JSON.stringify(contenidoJson);
            let tr = document.createElement('tr');
            let i = 0;
            $.each(contenidoJson, function (i) { 
                 
                if(i % 2 == 0){
                    tr = document.createElement('tr');
                }
                let td = document.createElement('td');
                td.innerHTML = `<div class="detail-video"> <h2> <b>${contenidoJson[i].nombre}</b> </h2>
                                <h6> <b>${contenidoJson[i].descripcion}</b> </h6>
                                <h6> <b> Tecnologías :  ${contenidoJson[i].tecnologias} </b></h6>
                                <a href="${contenidoJson[i].codigofuente}"><h6>Repositorio del Codigo Fuente Aqui</h6></a></div> 
                                <video controls autoplay> <source src="${contenidoJson[i].video}" >
                                type="video/mp4" </video>`
                td.classList.add('video-card');
                tr.append(td);
                addProject.append(tr);
                i++;

                /* addProject.innerHTML += ` <h2> <b>${contenidoJson[i].nombre}</b> </h2>
                                        <h6> <b>${contenidoJson[i].descripcion}</b> </h6>
                                        <h6> <b> Tecnologías :  ${contenidoJson[i].tecnologias} </b></h6>
                                        <a href="${contenidoJson[i].codigofuente}"><h6>Repositorio del Codigo Fuente Aqui</h6></a> 
                                        <video controls autoplay> <source src="${contenidoJson[i].video}" >
                                        type="video/mp4" </video> ` */
            });
        }
    });
    /* fin */

    let ocultarCards = document.getElementsByClassName('table-container');
    /**inicio
     * ANIMACIONES DE SCROOL EN JQUERY
     * arrow-up : animación que lleva a arriba de todo con un delay de 3s al hacer click en la flecha
     * project . animación que te lleva hasta la parte de los proyectos con el delay de 3s
     */
    $('.arrow-up').click(()=>{
        $('html,body').animate({scrollTop: '0px'},3000)
    })
    
    $('.project').click(()=> { 
        $('html,body').animate({scrollTop:$('.h1-project').offset().top},3000)
        
    });
   /**fin*/
       
    /*DOM que se creo para hacer el popup 
    let modal = document.getElementById('idModal');
    let close = document.getElementById('btnClose');
    
    close.addEventListener('click',function(){
        modal.style.display = 'none';
    }) 
    se comenta por que ya no se precisa*/

    let select = document.getElementById('select');
    let inputDescription = document.getElementById('input-tech');
    let appBasic = document.getElementById('appBasic');
    let descripcion = document.getElementById('descripcion');
    let precio = document.getElementById('precio');

    /* console.log(appBasic.textContent); */
    
    select.addEventListener('change',()=>{
        for (const i in cotizador) {
            if (select.value=== `${cotizador[i].categoria}`) {
                descripcion.innerHTML = `<input class="form-control" type="text" value="${cotizador[i].tecnologias}">`;
                precio.innerHTML = `<input style="text-align:center" class="form-control" type="text" value="${cotizador[i].precio}">`
            }
        }
    })
    

})

function crearCard(){
    const card = document.getElementById('table-container');
    let tr = document.createElement("tr");
    let i = 0;
    cards.forEach((e) => {
        if(i%4 == 0){
            tr = document.createElement("tr");
        }
        let td = document.createElement('td');
        td.innerHTML = `<img src="${e.imagen}" alt="${e.nombre}" class='img'>`
        /* td.classList.add('img'); */
        td.classList.add('cardImg');
        tr.append(td);
        card.append(tr);
        i++;
    })
}
