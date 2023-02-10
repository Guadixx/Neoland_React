// Dentro de la carpeta CV crearemos un archivo Cv.js donde almacenar un JSON con toda la información que queremos incluir en nuestro currículum. Esta información la iremos rescatando componente a componente según nuestras necesidades.

export const CV = {
    hero: {
      name: "Guadalupe",
      surname: "Doudchitzky Amadeo",
      city: "Buenos Aires / Madrid / Amsterdam",
      email: "guadad@gmail.com",
      birthDate: "30/01/2001",
      phone: "(+34) 65894321",
      image: "https://res.cloudinary.com/dpidlverd/image/upload/v1676035856/replica/639f705ad8077_1200_wl9yln.jpg",
      gitHub: "https://github.com/Guadixx",
      aboutMe: [
        {
          info: "Muchachos ahora nos volvimos a ilusionar",
        },
        {
          info: "Quiero ganar la 3ra, quiero ser campeon mundial!",
        },
        {
          info: "Y al diego!! que en el cielo lo podemos ver",
        },
        {
          info: "Con don Diego y con la Tota, alentandole a Lionel",
        },
      ],
    },
    education: [
      {
        name: "Bachillerato Artístico",
        date: "2019",
        where: "Lope de Vega",
      },
      {
        name: "Curso de producción Musical y DJ",
        date: "2021",
        where: "DJP Music School",
      },
      {
        name: "Full stack Web Developer",
        date: "Actual",
        where: "Neoland",
      },
    ],
    experience: [
      {
        name: "Waitress",
        date: "01/06/2021 - 04/02/2022",
        where: "Mimis creperie",
        description:
          "Atendiendo mesas, serviendo comida, cerrando el loca.",
      },
      {
        name: "Vendedora",
        date: "10/02/2022 - 08/06/2022",
        where: "Easy Times Coffe shop ",
        description:
          "Cumpliendo con las necesidades de los clientes, reponedora de escaparate y de productos, limpieza",
      },
    ],
    languages: {
      language: "English",
      wrlevel: "Fluent",
      splevel: "Fluent",
    },
    habilities: [
      "Social",
      "Robot Programming",
      "Ableton",
      "Js Programming",
      "React Programming",
      "Singing",
      "Css",
    ],
  };