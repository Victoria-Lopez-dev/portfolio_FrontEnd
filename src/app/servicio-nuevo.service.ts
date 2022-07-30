import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioNuevoService {
  constructor() { }
  edit:boolean =false;

// info seccion experiencias

  experiences=[
    {
      period:"10/2021 - Presente",
      job:"Docente de Curso e-learning",
      place:"UTN Regional Bs. As.",
      description:"Preparar y dictar clases, corregir examenes,hacer tutoriales,preparar material"
    },
    {
      period:"09/2021 - Presente",
      job:"Docente de Cursos semi-presenciales",
      place:"UTN Regional Bs. As.",
      description:"Preparar y dictar clases, corregir examenes,hacer tutoriales,preparar material"
    },
    {
      period:"08/2021 - 11/2021",
      job:"Participante y Finalista de la Hackaton de Argentina Programa",
      place:"UTN Regional Bs. As",
      description:' Co-creadora de la Propuesta de "Aprendamos a Conectar" ' 
    },

    {
      period:"04/2020 - 12/2021",
      job:"Asistente de docente en cursos web",
      place:"UTN Regional Bs. As",
      description:"Asistir al docente, en resolver dudas, corrección de trabajos, etc."
    },
    {
      period:"11/2020 - Presente",
      job:"Proyecto Rubrica",
      place:"Equipo free-lance",
      description:"Trabajo FrontEnd en proyecto Rubrica para F.A.D.U."
    },
    {
    period:"03/2018 –10/2019",
    job:"Cajera y Analista de Cuentas",
    place: "Grupo Bimbo S.A.B",
    description:`Análisis de cuentas. Cobranza, Control de Stock, remitos y permisos de carga. Confección Notas de Créditos y preparado de documentación de auditoria. Manejo de Fondo Fijo.`
  },
  {
    period:"09/2016 – 03/2018",
    job:"Analista de Creditos y Cobranzas",
    place:"Grupo Bimbo S.A.B",
    description:"Cobranza, análisis de deuda y de cuentas corrientes; aplicación de pagos y manejo de sistema Oracle. Confección de Notas de Créditos, ingreso de Retenciones, conciliación de pagos."
  },
  {
    period:"03/2015 - 09/2016",
    job:"Gestora de Lesiones y RC.",
    place: "Anselmi Cllaims M. S.R.L.",
    description:`Gestaría de robos, incendios y destrucción total e unidades aseguradas; armado y análisis de casos.Redacción de informes.Entrega de pagos.`
  
  }]

// info seccion proyectos

  proyects=[
    {
      nameProyect:"Proyecto Tienda - Mueble",
      createDate:'11/2021',
      descriptionProyect:"Tienda mueble se creo con la finalidad de poner a prueba los conceptos de API, Node.JS,motores de plantillas como EJS y manejo de informacion desde una base de datos relacional.La misma nos muestra una lista de productos",
      linkProyect:"https://github.com/Victoria-Lopez-dev/proyecto-tienda-de-mueble",
      linkUrl:"https:/tienda-mueble.herokuapp.com"
  },
    {
        nameProyect:"Gifos",
        createDate:'10/2020',
        descriptionProyect:"Gifos es una pagina creada para poder ubicar gifs y crear nuestros propios utilizando unicamente la camara de nuestro dispositivo.El sitio esta pensado solamente para su uso en dispositivos desktop",
        linkProyect:"https://github.com/Victoria-Lopez-dev/proyecto-gifos.git",
        linkUrl:"https://gifos-proyect.netlify.app/"
    },
    {
      nameProyect:"Podcast",
      createDate:'08/2020',
      descriptionProyect:"Podcast es un proyecto creado para poner en practica CSS and HTML basicos.Acamica,el creador del contenido propone esta pagina para permitir escuchar algunos podcast desde distintos dispositivos. ",
      linkProyect:"https://github.com/Victoria-Lopez-dev/Proyecto-Podcast",
      linkUrl:"https://victoria-lopez-dev.github.io/Proyecto-Podcast/",
    }
  ]


//info seccion experiencia

edItem=[
  {
    title:"Programador Web Full-Stack",
    place:"ARGENTINA PROGRAMA #Yo Programo",
    description:"Segunda etapa del programa creado por el Ministerio de Desarrollo Productivo para convertise en Desarrollador Web Full -Stack",
    period:"05/2020",
    finished:"En Curso"    
  },
  {
    title:"Programador Web",
    place:"ARGENTINA PROGRAMA #SeProgramar",
    description:"Primera etapa del programa creado por el Ministerio de Desarrollo Productivo para convertise en Desarrollador Web Full -Stack",
    period:"05/2020",
    finished:"Finalizado"    
  },
  {
    title:"Desarrollo Web Full-Stack",
    place:"Academia Acamica",
    description:"Curso intensivo para ser desarrollador Web Full-Stack",
    period:"05/2020",
    finished:"Finalizado"    
  },
  {
    title:"React For Beginners",
    place:"Wes Bos Courses",
    description:"Curso online sobre los conceptos basicos de React, un primer acercamiento a la herramienta y como aplicarlo.",
    period:"10/2020",
    finished:"Finalizado"    
  },
  {
    title:"Scrum Master",
    place:"Campus Virtual Banco Galicia",
    description:"Estudio sobre las metodologias agiles y el trabajo que realiza un Scrum Master",
    period:"01/2020",
    finished:"Finalizado"    
  },
  {
    title:"Habla Francesa",
    place:"Alianza Francesa Bella Vista ",
    description:"Estudios del idioma Frances",
    period:"03/2019",
    finished:"En Curso"    
  },
  {
    title:"Mandatario Registral de automotores y Creditos Prendarios",
    place:"Association de Gestores Administrativos de C.A.B.A. (A.G.A)",
    description:"Curso sobre creditos prendarios y registro de automotores",
    period:"12/2015",
    finished:"Finalizado"
  },
  {
    title:"Bachiller en Ciencias Naturales",
    place:"Instituto Ntra. Sra. Del Loreto",
    description:"Estudios secundarios con orientacion en Ciencias Naturales",
    period:"12/2011",
    finished:"Finalizado"
  }
]
  
}


