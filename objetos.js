/* const proyectos = [
    {
        "id" : 0,
        "nombre" :"Carrito de compras",
        "tecnologias" : ["C#", " ASP.NET", " .NET Framework", " Visual Studio Community"," HTML5"," Bootstrap"],
        "descripcion" : "App Web, hecho en Web Form de ASP.NET para el curso de Programación de la facultad.",
        "video" : "./imagenes/Carrito de Compras.mp4",
        "codigofuente" : "https://github.com/Hecxus/TP3_JESUS_GONZALEZ"
    },
    {
        "id" : 1,
        "nombre" :"Catalogo de Productos ",
        "tecnologias" : ["C#", " ASP.NET", " .NET Framework", " Visual Studio Community"],
        "descripcion" : "App de escritorio, hecho en Win Form de ASP.NET para el curso de Programación de la facultad.",
        "video" : "./imagenes/catalago.mp4",
        "codigofuente" : "https://github.com/Hecxus/TrabajoPracticoLab3"
    },
    {
        "id" : 2,
        "nombre" :"Ticketera",
        "tecnologias" : ["C#", " ASP.NET", " .NET Framework", " Visual Studio Community"," HTML5", " Bootstrap", " CSS"],
        "descripcion" : "App Web, hecho en Web Form de ASP.NET para el curso de Programación de la facultad(App en proceso de desarrollo).",
        "video" : "./imagenes/tkt.mp4",
        "codigofuente" : "https://github.com/carlos0718/TPC_Gonzalez-Jesus"
    },
    {
        "id" : 3,
        "nombre" :"Registro de Productos",
        "tecnologias" : ["C", "C++","Codeblock's"],
        "descripcion" : "App de consola para registrar productos, ver el stock y precios.",
        "video" : "./imagenes/Alta de Productos.mp4",
        "codigofuente" : "https://github.com/carlos0718/C-Cplusplus/tree/master/Registro%20de%20Productos"
    },
    {
        "id" : 4,
        "nombre" :"App de Pedidos Delivery",
        "tecnologias" : ["C", "C++","Codeblock's"],
        "descripcion" : "App de consola para registrar pedidos de comido, datos de usuario y precio del pedido.",
        "video" : "",
        "codigofuente" : ""
    }
] */

const cards = [
    {
        "id" : 0,
        "imagen" : "./imagenes/html5.png",
        "nombre" : "html5",
        "categoria" : "front-end"
    },
    {
        "id" : 1,
        "imagen" : "./imagenes/css3-logo.png",
        "nombre" : "css3",
        "categoria" : "front-end"
    },
    {
        "id" : 2,
        "imagen" : "./imagenes/javascript.png",
        "nombre" : "js",
        "categoria" : "front-end"
    },
    {
        "id" : 3,
        "imagen" : "./imagenes/python.png",
        "nombre" : "py",
        "categoria" : "back-end"
    },
    {
        "id" : 4,
        "imagen" : "./imagenes/c++.png",
        "nombre" : "c++",
        "categoria" : "back-end"
    },
    {
        "id" : 5,
        "imagen" : "./imagenes/csharp_api.jpg",
        "nombre" : "c#",
        "categoria" : "back-end"
    },
    {
        "id" :6,
        "imagen" : "./imagenes/vscode.jpg",
        "nombre" : "vscode",
        "categoria" : "ides"
    },
    {
        "id" : 7,
        "imagen" : "./imagenes/net.png",
        "nombre" : "net",
        "categoria" : "ides"
    },
    {
        "id" : 8,
        "imagen" : "./imagenes/git.png",
        "nombre" : "git",
        "categoria" : "ides"
    },
    {
        "id" : 9,
        "imagen" : "./imagenes/SQL.jpg",
        "nombre" : "sql",
        "categoria" : "back-end"
    },
    {
        "id" : 10,
        "imagen" : "./imagenes/bootstrap.png",
        "nombre" : "bootstrap",
        "categoria" : "frameworks"
    },
    {
        "id" : 11,
        "imagen" : "./imagenes/codeblocks.png",
        "nombre" : "codeblocks",
        "categoria" : "ides"
    },
    {
        "id" : 12,
        "imagen" : "./imagenes/lenguaje-java.png",
        "nombre" : "java",
        "categoria" : "back-end"
    },
    {
        "id" : 13,
        "imagen" : "./imagenes/reactjs.png",
        "nombre" : "reactjs",
        "categoria" : "frameworks"
    },
    {
        "id" : 14,
        "imagen" : "./imagenes/Jquery.png",
        "nombre" : "jquery",
        "categoria" : "frameworks"
    },
    {
        "id" : 15,
        "imagen" : "./imagenes/aspnet.jpg",
        "nombre" : "aspnet",
        "categoria" : "back-end"
    },
    {
        "id" : 16,
        "imagen" : "./imagenes/vs.png",
        "nombre" : "vs",
        "categoria" : "ides"
    },
    {
        "id" : 17,
        "imagen" : "./imagenes/ajax.png",
        "nombre" : "ajax",
        "categoria" : "frameworks"
    },
    {
        "id" : 18,
        "imagen" : "./imagenes/firebase.png",
        "nombre" : "firebase",
        "categoria" : "back-end"
    }

]

const cotizador = [
    {
        "id" : 1,
        "categoria" : "App Web Básico",
        "tecnologias" : ["HTML5,CSS3,BOOTSTRAP,VISUAL STUDIO CODE"],
        "precio" : "$16.000"
    },
    {
        "id" : 2,
        "categoria" : "App Web Funcional",
        "tecnologias" : ["HTML5,CSS3,BOOTSTRAP,JS,REACT JS,VISUAL STUDIO CODE"],
        "precio" : "$18.500"
    },
    {
        "id" : 3,
        "categoria" : "App Escritorio",
        "tecnologias" : ["C#,.NET FRAMEWORK,VISUAL STUDIO 2019,SQL Server"],
        "precio" : "$18.500"
    },
    {
        "id" : 4,
        "categoria" : "App de Consola",
        "tecnologias" : ["C++ ó PYTHON ó JAVA"],
        "precio" : "$10.000"
    },
    {
        "id" : 5,
        "categoria" : "E-Commerce",
        "tecnologias" : ["HTML5,CSS3,BOOTSTRAP,JS,VISUAL STUDIO CODE,NODE JS o SQL server"],
        "precio" : "$20.500"
    },
    {
        "id" : 6,
        "categoria" : "E-Commerce en ASP.NET",
        "tecnologias" : ["C#,ASP.NET,.NET FRAMEWORK,HTML5,CSS3,BOOTSTRAP,VISUAL STUDIO 2019,SQL Server"],
        "precio" : "$20.500"
    }

]