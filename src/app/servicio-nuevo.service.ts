import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioNuevoService {
  constructor() { }
  edit:boolean =false;
  openModal:boolean=false;
  EditButton:boolean =false;


  itemSelectChange(inf:string){
    if(inf.split('.').pop() == 'e'){
      let objectChar=this.experiences[parseInt(inf.split('.')[0])]
      
      this.areaEdit=[objectChar.job,objectChar.period ,objectChar.place,objectChar.description]
    }
    if(inf.split('.').pop() == 'p'){
      let objectChar=this.proyects[parseInt(inf.split('.')[0])]
 
      this.areaEdit=[objectChar.nameProyect,objectChar.createDate ,objectChar.descriptionProyect,objectChar.linkProyect,objectChar.linkUrl]
    }
    if(inf.split('.').pop() == 'ed'){
            let objectChar=this.edItem[parseInt(inf.split('.')[0])]
       
            this.areaEdit=[objectChar.description,objectChar.finished ,objectChar.period,objectChar.place,objectChar.title]
    }
    if(inf.split('.').pop() == 's'){
            let objectChar=this.skills[parseInt(inf.split('.')[0])]
       
            this.areaEdit=[objectChar.name,objectChar.porcentageSkill]
    }
    if(inf.split('.').pop() == 'about'){
      this.areaEdit=[this.info]
      
    }
    if(inf.split('.').pop() == 'imagen'){
      this.areaEdit=[this.imagen]
    }
    if(inf.split('.').pop() == 'header'){
      this.areaEdit=[this.headerInfo.nameDev, this.headerInfo.titleDev]
    }
    this.EditButton=true
  }

  areaEdit=[''];
  
  info:string="Soy Desarrolladora Web Full Stack ,amante de los animales y de la musica. En la actualidad me encuentro siendo parte del cuerpo docente de la facultad UTN asistiendo cursos de desarrollo web. Me concidero una persona dedicada y curiosa, con el objetivo constante de aprender, adquirir nuevos conocimientos y ser parte de experiencias dedicadas al desarrollo web.";
  
  imagen:string ="./assets/imagenes/perfil.21.jpg"

  headerInfo={
    nameDev:"Maria Victoria Lopez",
    titleDev:"Full Stack Developer Jr"
  }

// info seccion experiencias

  experiences=[
    {
      'id':'0.e',
      period:"10/2021 - Presente",
      job:"Docente de Curso e-learning",
      place:"UTN Regional Bs. As.",
      description:"Preparar y dictar clases, corregir examenes,hacer tutoriales,preparar material"
    },
    {
      'id':'1.e',
      period:"09/2021 - Presente",
      job:"Docente de Cursos semi-presenciales",
      place:"UTN Regional Bs. As.",
      description:"Preparar y dictar clases, corregir examenes,hacer tutoriales,preparar material"
    },
    {
      'id':'2.e',
      period:"08/2021 - 11/2021",
      job:"Participante y Finalista de la Hackaton de Argentina Programa",
      place:"UTN Regional Bs. As",
      description:' Co-creadora de la Propuesta de "Aprendamos a Conectar" ' 
    },

    {
      'id':'3.e',
      period:"04/2020 - 12/2021",
      job:"Asistente de docente en cursos web",
      place:"UTN Regional Bs. As",
      description:"Asistir al docente, en resolver dudas, corrección de trabajos, etc."
    },
    {
      'id':'4.e',
      period:"11/2020 - Presente",
      job:"Proyecto Rubrica",
      place:"Equipo free-lance",
      description:"Trabajo FrontEnd en proyecto Rubrica para F.A.D.U."
    },
    {
    'id':'5.e',
      period:"03/2018 –10/2019",
    job:"Cajera y Analista de Cuentas",
    place: "Grupo Bimbo S.A.B",
    description:`Análisis de cuentas. Cobranza, Control de Stock, remitos y permisos de carga. Confección Notas de Créditos y preparado de documentación de auditoria. Manejo de Fondo Fijo.`
  },
  {
    'id':'6.e',
    period:"09/2016 – 03/2018",
    job:"Analista de Creditos y Cobranzas",
    place:"Grupo Bimbo S.A.B",
    description:"Cobranza, análisis de deuda y de cuentas corrientes; aplicación de pagos y manejo de sistema Oracle. Confección de Notas de Créditos, ingreso de Retenciones, conciliación de pagos."
  },
  {
    'id':'7.e',
    period:"03/2015 - 09/2016",
    job:"Gestora de Lesiones y RC.",
    place: "Anselmi Cllaims M. S.R.L.",
    description:`Gestaría de robos, incendios y destrucción total e unidades aseguradas; armado y análisis de casos.Redacción de informes.Entrega de pagos.`
  
  }]

// info seccion proyectos

  proyects=[
    {
      id:'0.p',
      nameProyect:"Proyecto Tienda - Mueble",
      createDate:'11/2021',
      descriptionProyect:"Tienda mueble se creo con la finalidad de poner a prueba los conceptos de API, Node.JS,motores de plantillas como EJS y manejo de informacion desde una base de datos relacional.La misma nos muestra una lista de productos",
      linkProyect:"https://github.com/Victoria-Lopez-dev/proyecto-tienda-de-mueble",
      linkUrl:"https:/tienda-mueble.herokuapp.com"
  },
    {
      id:'1.p',  
      nameProyect:"Gifos",
        createDate:'10/2020',
        descriptionProyect:"Gifos es una pagina creada para poder ubicar gifs y crear nuestros propios utilizando unicamente la camara de nuestro dispositivo.El sitio esta pensado solamente para su uso en dispositivos desktop",
        linkProyect:"https://github.com/Victoria-Lopez-dev/proyecto-gifos.git",
        linkUrl:"https://gifos-proyect.netlify.app/"
    },
    {
      id:'2.p',
      nameProyect:"Podcast",
      createDate:'08/2020',
      descriptionProyect:"Podcast es un proyecto creado para poner en practica CSS and HTML basicos.Acamica,el creador del contenido propone esta pagina para permitir escuchar algunos podcast desde distintos dispositivos. ",
      linkProyect:"https://github.com/Victoria-Lopez-dev/Proyecto-Podcast",
      linkUrl:"https://victoria-lopez-dev.github.io/Proyecto-Podcast/",
    }
  ]


// --------- info seccion experiencia  ---------

edItem=[
  {
    id:'0.ed',
    title:"Programador Web Full-Stack",
    place:"ARGENTINA PROGRAMA #Yo Programo",
    description:"Segunda etapa del programa creado por el Ministerio de Desarrollo Productivo para convertise en Desarrollador Web Full -Stack",
    period:"05/2020",
    finished:"En Curso"    
  },
  {
    id:'1.ed',
    title:"Programador Web",
    place:"ARGENTINA PROGRAMA #SeProgramar",
    description:"Primera etapa del programa creado por el Ministerio de Desarrollo Productivo para convertise en Desarrollador Web Full -Stack",
    period:"05/2020",
    finished:"Finalizado"    
  },
  {
    id:'2.ed',
    title:"Desarrollo Web Full-Stack",
    place:"Academia Acamica",
    description:"Curso intensivo para ser desarrollador Web Full-Stack",
    period:"05/2020",
    finished:"Finalizado"    
  },
  {
    id:'3.ed',
    title:"React For Beginners",
    place:"Wes Bos Courses",
    description:"Curso online sobre los conceptos basicos de React, un primer acercamiento a la herramienta y como aplicarlo.",
    period:"10/2020",
    finished:"Finalizado"    
  },
  {
    id:'4.ed',
    title:"Scrum Master",
    place:"Campus Virtual Banco Galicia",
    description:"Estudio sobre las metodologias agiles y el trabajo que realiza un Scrum Master",
    period:"01/2020",
    finished:"Finalizado"    
  },
  {
    id:'5.ed',
    title:"Habla Francesa",
    place:"Alianza Francesa Bella Vista ",
    description:"Estudios del idioma Frances",
    period:"03/2019",
    finished:"En Curso"    
  },
  {
    id:'6.ed',
    title:"Mandatario Registral de automotores y Creditos Prendarios",
    place:"Association de Gestores Administrativos de C.A.B.A. (A.G.A)",
    description:"Curso sobre creditos prendarios y registro de automotores",
    period:"12/2015",
    finished:"Finalizado"
  },
  {
    id:'7.ed',
    title:"Bachiller en Ciencias Naturales",
    place:"Instituto Ntra. Sra. Del Loreto",
    description:"Estudios secundarios con orientacion en Ciencias Naturales",
    period:"12/2011",
    finished:"Finalizado"
  }
]


// --------- info seccion skills  ---------

skills=[
  {
   id:'0.s',
    name:"HTML5",
    porcentageSkill:'90%'
  },{
   id:'1.s',
    name:"CSS3",
    porcentageSkill:'90%'
  },
  {
   id:'2.s',
    name:"JavaScript",
    porcentageSkill:'90%'
  },{
   id:'3.s',
    name:"Sass",
    porcentageSkill:'70%'
  },
  {
   id:'4.s',
    name:"Bootstrap",
    porcentageSkill:'70%'
  },
  {
   id:'5.s',
    name:"Material Desing",
    porcentageSkill:'50%'
  },
  {
   id:'6.s',
    name:"Git",
    porcentageSkill:'70%'
  },{
   id:'7.s',
    name:"NodeJs",
    porcentageSkill:'60%'
  },
  {
   id:'8.s',
    name:"Express",
    porcentageSkill:'60%'
  },{
   id:'0.s',
    name:"MySQL",
    porcentageSkill:'70%'
  },
  {
   id:'10.s',
    name:"MongoDB",
    porcentageSkill:'50%'
  },
  {
   id:'11.s',
    name:"Angular",
    porcentageSkill:'50%'
  },
  {
   id:'12.s',
    name:"React",
    porcentageSkill:'40%'
  }

  ]
  
}


