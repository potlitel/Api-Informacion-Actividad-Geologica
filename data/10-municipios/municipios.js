const { getObjectId } = require("mongo-seeding");

const municipios = [
  {
    nombre: "Alquizar",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Artemisa",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Bauta",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Caimito",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Guanajay",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "San Antonio de los Baños",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Mariel",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Güira de Melena",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Bahía Honda",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Candelaria",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "San Cristóbal",
    provincia: getObjectId("Artemisa")
  },
  {
    nombre: "Camagüey",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Céspedes",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Esmeralda",
    provincia: getObjectId("Camaguey")
  }
  ,
  {
    nombre: "Florida",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Guáimaro",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Jimagüayú",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Minas",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Najasa",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Nuevitas",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Sibanicú",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Sierra de Cubitas",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Santa Cruz del Sur",
    provincia: getObjectId("Camaguey")
  },
  {
    nombre: "Vertientes",
    provincia: getObjectId("Camaguey")
  }
  ,
  {
    nombre: "Ciro Redondo",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Morón",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Baraguá",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Majagua",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Florencia",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Chambas",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Primero de enero",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Bolivia",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Ciego de Avila",
    provincia: getObjectId("Ciego de Avila")
  }
  ,
  {
    nombre: "Venezuela",
    provincia: getObjectId("Ciego de Avila")
  },
{
  nombre: "Cienfuegos",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Abreus",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Aguada de Pasajeros",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Cruces",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Cumanayagua",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Palmira",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Santa Isabel de las Lajas",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Rodas",
  provincia: getObjectId("Cienfuegos")
},
{
  nombre: "Arroyo Naranjo",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Boyeros",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Centro Habana",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Cerro",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Cotorro",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Diez de Octubre",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Guanabacoa",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Habana del Este",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Habana Vieja",
  provincia: getObjectId("La Habana")
},
{
  nombre: "La Lisa",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Marianao",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Playa",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Plaza de la Revolución",
  provincia: getObjectId("La Habana")
},
{
  nombre: "Regla",
  provincia: getObjectId("La Habana")
},
{
  nombre: "San Miguel del Padrón",
  provincia: getObjectId("La Habana")
}
,
{
  nombre: "Río Cauto",
  provincia: getObjectId("Granma")
}
,
{
  nombre: "Cauto Cristo",
  provincia: getObjectId("Granma")
},
{
  nombre: "Jiguaní",
  provincia: getObjectId("Granma")
},
{
  nombre: "Bayamo",
  provincia: getObjectId("Granma")
},
{
  nombre: "Yara",
  provincia: getObjectId("Granma")
},
{
  nombre: "Manzanillo",
  provincia: getObjectId("Granma")
},
{
  nombre: "Campechuela",
  provincia: getObjectId("Granma")
},
{
  nombre: "Media Luna",
  provincia: getObjectId("Granma")
},
{
  nombre: "Niquero",
  provincia: getObjectId("Granma")
},
{
  nombre: "Pilón",
  provincia: getObjectId("Granma")
},
{
  nombre: "Bartolomé Masó",
  provincia: getObjectId("Granma")
},
{
  nombre: "Buey Arriba",
  provincia: getObjectId("Granma")
},
{
  nombre: "Guisa",
  provincia: getObjectId("Granma")
},
{
  nombre: "Baracoa",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Caimanera",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "El Salvador",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Guantanamo",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Imías",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Maisí",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Manuel Tames",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Niceto Perez",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "San Antonio del Sur",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Yateras",
  provincia: getObjectId("Guantánamo")
},
{
  nombre: "Antilla",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Báguanos",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Banes",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Cacocum",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Calixto García",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Cueto",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Frank País",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Urbano Noris",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Sagua de Tánamo",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Holguin",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Gibara",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Mayarí",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Moa",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Rafael Freyre",
  provincia: getObjectId("Holguín")
},
{
  nombre: "Isla de la juventud",
  provincia: getObjectId("Isla de la Juventud")
},
{
  nombre: "Puerto Padre",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Colombia",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Las Tunas",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Manatí",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Majibacoa",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Jesús Menéndez",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Jobabo",
  provincia: getObjectId("Las Tunas")
},
{
  nombre: "Amancio",
  provincia: getObjectId("Las Tunas")
}
,
{
  nombre: "Calimete",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Cárdenas",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Ciénaga de Zapata",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Colón",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Jagüey Grande",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Jovellanos",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Limonar",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Los Arabos",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Martí",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Matanzas",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Pedro Betancourt",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Perico",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Unión de Reyes",
  provincia: getObjectId("Matanzas")
},
{
  nombre: "Bejucal",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Güines",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Jaruco",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Madruga",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Melena del Sur",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Nueva Paz",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "San José de las Lajas",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "San Nicolás",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Quivicán",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Batabanó",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Santa Cruz del Norte",
  provincia: getObjectId("Mayabeque")
},
{
  nombre: "Consolación del Sur",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Guane",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "La Palma",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Los Palacios",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Mantua",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Minas de Matahambre",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Pinar del Rio",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "San Juan y Martínez",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "San Luis",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Sandino",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Viñales",
  provincia: getObjectId("Pinar del Río")
},
{
  nombre: "Cabaiguán",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Fomento",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Jatibonico",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "La Sierpe",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Sancti Spiritus",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Taguasco",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Trinidad",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Yaguajay",
  provincia: getObjectId("Sancti Spíritus")
},
{
  nombre: "Contramaestre",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Guamá",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Julio Antonio Mella",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Palma Soriano",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "San Luis",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Santiago de Cub",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Segundo Frente",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Songo La Maya",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Tercer Frente",
  provincia: getObjectId("Santiago de Cuba")
},
{
  nombre: "Caibarién",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Camajuaní",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Cifuentes",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Corralillo",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Encrucijada",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Manicaragüa",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Placetas",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Quemado de Güines",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Ranchuelo",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Remedios",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Sagua la Grande",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Santo Domingo",
  provincia: getObjectId("Villa Clara")
},
{
  nombre: "Santo Domingo",
  provincia: getObjectId("Villa Clara")
}

];

const mapToEntities = (municipios) => {
  return municipios.map((municipio, index) => {
    return {
      nombre: municipio.nombre,
      provincia: municipio.provincia
    };
  });
};

module.exports = mapToEntities(municipios);
