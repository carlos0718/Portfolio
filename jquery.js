$(document).ready(function(){
    /* Funcion onClick en jquery */
    $('.item-category').click(function(){
        /* almacenamos el atributo de la categoria en item */
        var item = $(this).attr('category');
        /* console.log(item); */

        /* ocultando tarjetas */
        $('.card-item').hide();

        /*$('.card-item[category="'+item+'"]').show(); */
        const card = document.getElementById('table-container');
        let tr = document.createElement("tr");
        let cont = 0;
        /* muestra las cards del elemento seleccionado de la barra de navegación */
        cards.find((i)=>{
            if(i.categoria == item){
               /*  $('.card-item').show(); */
               /* console.log(i.nombre); */
                if(cont%4 == 0){
                    tr = document.createElement("tr");
                }
                let td = document.createElement('td');
                td.innerHTML = `<img src="${i.imagen}" alt="${i.nombre}">`
                td.classList.add('img-container');
                tr.append(td)
                card.append(tr)
                cont++;
            }
        })
    })
    /* funcion que muestra todas las cards al hacer clik en FULL-STACK  */
    $('.item-category[category="full"]').click(function(){
        crearCard();
    })
})

