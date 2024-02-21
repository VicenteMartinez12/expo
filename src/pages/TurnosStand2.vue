<img src="../img/1070.png" />
<template>
  <div style="height: 100vh; display: flex; align-items: center">
    <q-card
      style="max-width: 33.3%; width: 33.3%; height: 100%; margin-right: 0.01%"
    >
      <q-card-section
        style="height: 100%; display: flex; flex-direction: column"
      >
        <!-- 1/4 del q-card-section -->
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <!-- <img src="../img/expo.png" style="width: 30%; height: 300%; margin-top: 10%"/> -->
          <!-- <q-btn color="primary" label="" style="margin-left: 2%; margin-top: 10%;" icon="arrow_forward" @click="handleButtonClick"/> -->
        </div>

        <div style="flex-grow: 3; display: flex">
          <table class="custom-table" >
            <!-- Table header -->

            <thead>
              <tr >
                <th  v-for="col in columns" :key="col.name">{{ col.label }}</th>
              </tr>
            </thead>
            <!-- Table body -->
            <tbody>
              <tr
                v-for="row in paginatedRows "
                :key="row.turno"
                :class="{ blink: shouldBlink(row) }"
                style="line-height: 1"
              >
              <td style=" line-height: 1; padding: 0px;">{{ row.posicion }}</td>
                <td style=" line-height: 1; padding: 0px;" >{{ row.turno }}</td>
                
           
              </tr>
            </tbody>
          </table>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="max-width: 33.3%; width: 33.3%; height: 100%;">
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <!-- Contenido de la segunda tabla -->
        <div style="flex-grow: 3; display: flex">
          <table class="custom-table">
            <!-- Encabezado de la tabla -->
            <thead>
              <tr>
                <th v-for="col in columns2" :key="col.name">{{ col.label }}</th>
              </tr>
            </thead>
            <!-- Cuerpo de la tabla -->
            <tbody>
              <!-- Calcular tamaño de fila -->
              <tr v-for="row in rows2" :key="row.turno2" style="height: calc(100% / 6);">
                <td>{{ row.posicion2 }}</td>
                <td>{{ row.turno2 }}</td>
               
              </tr>
            </tbody>
          </table>
        </div>
      </q-card-section>
    </q-card>



    <q-card style="max-width: 33.2%; width: 33.2%; height: 100%; ">
      <q-card-section
        style="height: 100%; display: flex; flex-direction: column"
      >
        <div style="justify-content: center; align-items: center">
           <img src="../img/1070.png" style="width: 60%; height: 80%; margin-top: 1%;  margin-left: 20%;" /> 
        </div>
        <div style="flex-grow: 3; display: flex">
          <table class="custom-table2">
            <!-- Table header -->

            <thead>
              <tr>
                <th style="font-size: 91%;" v-for="col in columns3" :key="col.name">{{ col.label }}</th>
              </tr>
            </thead>
            <!-- Table body -->
            <tbody>
              <tr
              v-for="row in rows3"
                :key="row.turno3"
         
              >
                <td style=" line-height: 1;">{{ row.turno3 }}</td>
               
              
                
              </tr>
            </tbody>
          </table>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// const handleButtonClick = () => {
//   router.push('/pasillo2');
// };

const slide = ref(1);
const autoplay = ref(true);

const initialPagination = ref({
  // sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 10,
  // rowsNumber: xx if getting data from a server
});

const columns = ref([
 
  {
    name: "Posicion",
    align: "center",
    label: "Posición",
    field: "posicion2",
    style: "font-size: 0px; font-weight: bold;",
  },
  {
    name: "Turno",
    required: true,
    label: "Turno",
    align: "center",
    field: (row) => row.turno,
    format: (val) => `${val}`,
    style: "font-size: 0px;   ",
  },
  // {
  //   name: "Estatus",
  //   align: "center",
  //   label: "",
  //   field: "estatus2",
  //   style: "font-size: 10px; font-weight: bold;",
  // },
]);

const columns2 = ref([

  {
    name: "Posicion",
    align: "center",
    label: "Posición",
    field: "posicion",
    style: "font-size: 10px; font-weight: bold;",
  },
  {
    name: "Turno",
    required: true,
    label: "Turno",
    align: "center",
    field: (row) => row.turno2,
    format: (val) => `${val}`,
    style: "font-size: 10px; font-weight: bold;  ",
  },
  // {
  //   name: "Estatus",
  //   align: "center",
  //   label: "",
  //   field: "estatus",
  //   style: "font-size: 10px; font-weight: bold;",
  // },
]);


const columns3 = ref([
  {
    name: "Turno",
    required: true,
    label: "Próximos turnos",
    align: "center",
    field: (row) => row.turno3,
    format: (val) => `${val}`,
    style: "font-size: 10px; font-weight: bold;  ",
  },

  // {
  //   name: "Estatus",
  //   align: "center",
  //   label: "",
  //   field: "estatus",
  //   style: "font-size: 10px; font-weight: bold;",
  // },
]);

const rows = ref([
  {
    turno: "010",
    posicion: 1,
  },
  {
    turno: "011",
    posicion: 2,
  },
  {
    turno: "012",
    posicion: 3,
  },
  {
    turno: "013",
    posicion: 4,
  },
  {
    turno: "014",
    posicion: 5,
    estatus: "",
  },
  {
    turno: "015",
    posicion: 6,
  },

]);

const rows2 = ref([
  {
    turno2: "016",
    posicion2: 8,
  },
  {
    turno2: "017",
    posicion2: 9,
    style: "background-color: red",
  },
  {
    turno2: "018",
    posicion2: 10,
    estatus2: "Llamando",
  },
  {
    turno2: "",
    estatus2: "Espera",
  },
  {
    turno2: "",

    estatus2: "Espera",
  },
  {
    turno2: "",
    estatus2: "Espera",
  },
 
]);

const rows3 = ref([
  {
    turno3: "020",
 
  },
  {
    turno3: "021",
 
  },
  {
    turno3: "022",
 
  },
  {
    turno3: "023",
 
  },
  {
    turno3: "024",
 
  },
  {
    turno3: "025",
 
  },
  
  
 
]);

const getRowStyle = (row) => {
  if (row.turno === "114" && row.posicion === 5) {
    return { backgroundColor: "yellow" };
  }
};

const shouldBlink = (row) => {
  return (row.turno2 === "020" && row.posicion2 === 3) || row.turno2 === "019";
};

const columna3 = (row) => {
  return row.turno2 === "020;";
};

const paginatedRows = computed(() => {
  const { page, rowsPerPage } = initialPagination.value;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return rows.value.slice(startIndex, endIndex);
});

const paginatedRows2 = computed(() => {
  const { page, rowsPerPage } = initialPagination.value;
  // Ajustar startIndex y endIndex según sea necesario para la segunda tabla
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  // Devolver un conjunto diferente de filas para la segunda tabla
  return rows2.value.slice(startIndex, endIndex);
});

const getCustomRowStyle = (row) => {
  if (row.turno2 === "020" && row.estatus2 === "Espera") {
    return { color: "purple" }; // Cambia el color del texto a morado
  }
};

const getEstatusColor = (estatus) => {
  if (estatus === "Espera") {
    return "purple"; // Cambia el color del texto a morado
  } else {
    return ""; // Deja el color del texto sin cambios
  }
};

defineExpose({ initialPagination });
</script>

<style lang="scss" scoped>
.slide-in-down-enter-active,
.slide-in-down-leave-active {
  transition: transform 0.5s ease;
}

.slide-in-down-enter,
.slide-in-down-leave-to {
  transform: translateY(-100%);
}

.custom-table {
  width: 100%;
  height: 100%;
  font-size: 57px;
  margin-top: 5%;
 
  margin-top: 0%;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid #000000;
border-radius: 1%;



}

.custom-table th,
.custom-table td {
  padding: 0px;
  border: 0px solid #ddd;
  text-align: center;
  margin-top: 0%;
  font-weight: bold;
  border-bottom: 1px solid #ddd;

  
}

.custom-table th {
  font-size: 55px;
  background-color: #1d3f93;
  color: antiquewhite;
  margin-top: 0%;
  padding: 0%;
  
  
  

}

.custom-table td {
  font-size: 80px;
  margin-top: 0%;
  padding: 0%;
  line-height: 1;
  
  
  

}
.custom-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
  margin-top: 0%;
  padding: 0%;
  line-height: .5;

}

@keyframes blink {
  0% {
    font-size: 55px;
    background-color: yellow;
    color: black;
    line-height: 1;
  }

  50% {
    font-size: 55px;
    background-color: transparent;
    color: black;
    line-height: 1;
  }

  // 75% {
  //   transform: scale(1);
  //   font-size: 45PX;
  //   background-color: transparent;

  // }

  100% {
    font-size: 55px;
    background-color: yellow;
    color: black;
    line-height: 1;
  }
}

@keyframes columna3 {
  0% {
    color: blueviolet;
    line-height: 1;
  }

  50% {
    color: blueviolet;
    line-height: 1;
  }

  100% {
    color: blueviolet;
    line-height: 1;
  }
}

.blink {
  animation: blink 2s infinite;
  line-height: 1;
}

.columna3 {
  color: blueviolet;
  line-height: 1;
}



// sfdsdgsfgf


.custom-table2 {
  width: 100%;
  height: 100%;
  font-size: 53.8px;

 
  margin-top: 0%;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid #000000;
border-radius: 1%;
padding: 0%;

}

.custom-table2 th,
.custom-table2 td {
  padding: 0px;
  border: 0px solid #000000;
  text-align: center;
  margin-top: 0%;
  font-weight: bold;
    background-color: #5bd0ff;
  border-radius: 1%;
  
}

.custom-table2 th {
  font-size: 40px;
  background-color: #1d3f93;
  color: antiquewhite;
  margin-top: 0%;
  padding: 0%;

  
  
  

}

.custom-table2 td {
  font-size: 70px;
  margin-top: 0%;
  padding: 0%;

  
  
  

}
.custom-table2 tbody tr:nth-child(even) {
  background-color: #5bd0ff;
  margin-top: 0%;
  padding: 0%;


}

@keyframes blink {
  0% {
    font-size: 55px;
    background-color: yellow;
    color: black;
 
  }

  50% {
    font-size: 55px;
    background-color: transparent;
    color: black;
  
  }

  // 75% {
  //   transform: scale(1);
  //   font-size: 45PX;
  //   background-color: transparent;

  // }

  100% {
    font-size: 55px;
    background-color: yellow;
    color: black;
 
  }
}

@keyframes columna3 {
  0% {
    color: blueviolet;

  }

  50% {
    color: blueviolet;
   
  }

  100% {
    color: blueviolet;
    
  }
}

.blink {
  animation: blink 2s infinite;

}

.columna3 {
  color: blueviolet;

}
</style>
