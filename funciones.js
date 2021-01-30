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

           /*  const categorias = event.target.innerHTML.toLowerCase();
           
            cards.filter((i) =>{
                
                    console.log(i.tipo=== categorias);
            }) */
        })
    }) 
    
    crearCard();
    
            
    /* Se hace esta funcion para optimizar la creación de tag <div> en la plantilla de Proyectos.html */
    const addProject = document.getElementById('box-project'); 
    proyectos.forEach(element => {
        addProject.innerHTML += ` <h2> <b>${element.nombre}</b> </h2>
                                    <h6> <b>${element.descripcion}</b> </h6>
                                    <h6> <b> Tecnologías :  ${element.tecnologias} </b></h6>
                                    <a href="${element.codigofuente}"><h6>Repositorio del Codigo Fuente Aqui</h6></a> 
                                    <video controls autoplay> <source src="${element.video}" >
                                    type="video/mp4" </video> `
    });
    
    /*DOM que se creo para hacer el popup 
    let modal = document.getElementById('idModal');
    let close = document.getElementById('btnClose');
    
    close.addEventListener('click',function(){
        modal.style.display = 'none';
    }) 
    se comenta por que ya no se precisa*/
    
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
        td.innerHTML = `<img src="${e.imagen}" alt="${e.nombre}">`
        td.classList.add('card-item');
        td.classList.add('img-container');
        tr.append(td);
        card.append(tr);
        i++;
    })
}