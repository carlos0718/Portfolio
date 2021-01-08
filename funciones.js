class Project
{
   id = 0;
   titulo = '';
   descripcion = '';
   tecnologias = ['css','html','js','python','c++','c','java','bootstrap','.net framework '];

    Project(id,titulo,descripcion)
    {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    addProject()
    {
        //se agrrgará los proyectos correspondientes indicando las
        //tecnologias usadas.
    }
}

let modal = document.getElementById('idModal');
let close = document.getElementById('btnClose');

close.addEventListener('click',function(){
    modal.style.display = 'none';
})