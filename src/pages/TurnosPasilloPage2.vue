<img src="../img/1070.png" />
<template>
  <div style="height: 100vh; display: flex; align-items: center">
    <q-card style="max-width: 55%; width: 55%; height: 100%">
      
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <!-- 1/4 del q-card-section -->
        <div style=" display: flex; justify-content: center; align-items: center;height: 8%;">
        <img src="../img/expo.png" style="width: 30%; height: 200%; margin-top: 5%"/>
        <q-btn color="primary" label="" style="margin-left: 2%; margin-top: 10%;" icon="arrow_forward" @click="handleButtonClick"/>
        </div>


                <!-- Seccion de la tabla de los turnos en el pasillo -->

        <div class="table-container" style=" display: flex; justify-content: center; align-items: center; height: 95%; margin-top: 0%;">

          <table class="table moving-table" >
            <thead>
              <tr >
                <th>Turno</th>
                <th style=" width: 20%;">Stand</th>
                <th style="text-align: center;">Posición</th>
              </tr>

            </thead>
            <tbody>
              <tr v-for="(row, index) in rows" :key="index" :class="{ 'blink': shouldBlink(row) }" >
                <td>{{ row.turno }}</td>
                <td>{{ row.marca }}</td>
                <td style="text-align: center;">{{ row.posicion }}</td>
              </tr>
            </tbody>
          </table>
        </div>


        <!--Fin de la seccion de la tabla de los turnos en el pasillo -->
      </q-card-section>
    </q-card>

    <q-card style="max-width: 100%; width: 45%; height: 100%">
      <q-card-section
        style="height: 100%; display: flex; flex-direction: column"
      >
        <div style="flex-grow: 0; display: flex;justify-content: center;  align-items: center; height: 10%;  " >
        <q-btn style="background-color: #1d3f93; color: aliceblue;   font-size: 200%;   margin-bottom: -25px; height: 50%;">{{ expo }}</q-btn>
        </div>
        <div style="flex-grow: 3; display: flex">
          <q-carousel
            animated
            v-model="slide"
     
            infinite
            :autoplay="autoplay"
            :autoplay-interval="500"
            :time="500"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            style="width: 98%; height: 90%; margin-top: 10%"
          >
          <q-carousel-slide :name="1">
              <img src="../img/institucional/1.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <img src="../img/institucional/2.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="3">
              <img src="../img/institucional/3.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="4">
              <img src="../img/institucional/4.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="5">
              <img src="../img/institucional/5.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="6">
              <img src="../img/institucional/6.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="7">
              <img src="../img/institucional/7.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="8">
              <img src="../img/institucional/8.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="9">
              <img src="../img/institucional/9.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="10">
              <img src="../img/institucional/10.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="11">
              <img src="../img/institucional/11.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="12">
              <img src="../img/institucional/12.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            <q-carousel-slide :name="13">
              <img src="../img/institucional/13.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
            
          </q-carousel>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import { useRouter } from 'vue-router';


const router = useRouter();
const handleButtonClick = () => {
  router.push('/turno2');
};

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
    name: "Turno",
    required: true,
    label: "Turno",
    align: "left",
    field: (row) => row.turno,
    format: (val) => `${val}`,
    style: "font-size: 25px; font-weight: bold;  ",
  },

{
    name: "marca",
    align: "left",
    label: "Stand",
    field: "marca",
    style: "font-size: 25px; font-weight: bold;",
  },

 
  
  {
    name: "posicion",
    align: "center",
    label: "Posición",
    field: "posicion",
    style: "font-size: 25px; font-weight: bold;",
  },
  
  
]);

const rows = ref([
  {
    marca: 'BIC',
    turno: "010",
    posicion: 4,
  },
  {
    marca: 'SCRIBE',
    turno: "011",
    posicion: 7,
    style: 'background-color: red'
  },
  {
    marca: 'RESISTOL',
    turno: "011",
    posicion: 3,
  },
  {
    marca: 'NORMA',
    turno: "013",
    posicion: 3,
    
  },
  {
    marca: 'BACO',
    turno: "011",
    posicion: 1,
    style: 'color=red',
  },
  {
    marca: 'PELIKAN',
    turno: "015",
    posicion: 6,
  },
  {
    marca: 'CRAYOLA',
    turno: "016",
    posicion: 1,
  },
  {
    marca: 'SMARTY',
    turno: "011",
    posicion: 4,
  },
  {
    marca: 'SCRIBE',
    turno: "018",
    posicion: 9,
  },
  {
    marca: 'BIC',
    turno: "019",
    posicion: 5,
  },
  
]);


function updateTableData() {
  // Obtener el último elemento de la lista
  const lastRow = rows.value[rows.value.length - 1];
  // Eliminar el último elemento de la lista
  rows.value.pop();
  // Insertar el último elemento al principio de la lista
  rows.value.unshift(lastRow);
}

// Llamar a la función de actualización en un intervalo para que la tabla se actualice continuamente
setInterval(updateTableData, 10000); // 5000 milisegundos (5 segundos)



const apiUrl = 'http://192.168.100.4:8094/EXPOV1/valida/buscaexpoactiva';
const expo = ref('');

onMounted(async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Ajustar la asignación de acuerdo a la estructura real de los datos devueltos por la API
    expo.value = data.EVENTO;
    console.log(expo.value); // Verificar el valor en la consola del navegador
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
  }
});


const rowStyleFn = (row) => {
  // Lógica para calcular el estilo de la fila
};


const shouldBlink = (row) => {
  return row.turno === '018' || row.turno === '019';
};




defineExpose({ initialPagination });
</script>
<style lang="scss" scoped>
/* Estilos para la tabla */
table {
  width: 100%;
  height: 50%; /* Cambia el tamaño de la tabla según lo necesites */
  font-size: 22px; /* Tamaño de fuente más pequeño */
  margin-top: 5%;
  border-collapse: collapse;
  border: 1px solid #ddd;
   font-family: Arial, Helvetica, sans-serif;
   align-items: center;
   border-top: 1px solid #ddd;
}

/* Estilos para las celdas de encabezado y cuerpo */
table th,table td {
  padding: 10px;
  border-bottom: 1px solid #ddd; 
  font-weight: bold;
  border: 0px solid #ddd;
  border-top: 1px solid #ddd;
}

/* Estilos para las celdas de encabezado específicas */


/* Estilo para las celdas de las primeras columnas */
th:first-child,
td:first-child {
  border-left: none; /* Elimina el borde izquierdo */
}

/* Estilos para las celdas de encabezado */
th {
  background-color: #1d3f93;
  color: antiquewhite;
  font-weight: bold;
  text-align: left;
  
}

/* Estilos para filas pares */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Estilos para filas al pasar el cursor */
tr:hover {
  background-color: #ddd;
}


@keyframes blink {
  0% { background-color: yellow; }
  50% { background-color: transparent; }
  100% { background-color: yellow; }
}

.blink {
  animation: blink 1s infinite;
}


@keyframes moveTableData {
  0% {
    transform: translateY(0%);
 
  }
  100% {
    transform: translateY(-100%);
  
  }
}

.table-content {
  overflow-y: hidden; /* Ocultar el desbordamiento vertical */
  height: 100%; /* Ajustar la altura al tamaño deseado */

 
}


</style>
