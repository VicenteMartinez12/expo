<img src="../img/1070.png" />
<template>
  <div style="height: 99.4vh; display: flex; align-items: center">
    <q-card style="max-width: 50%; width: 50%; height: 100%; margin-right: .01%;" >
      
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <!-- 1/4 del q-card-section -->
        <div style=" display: flex; justify-content: center; align-items: center;height: 8%;">
        <!-- <img src="../img/expo.png" style="width: 30%; height: 300%; margin-top: 10%"/> -->
        <!-- <q-btn color="primary" label="" style="margin-left: 2%; margin-top: 10%;" icon="arrow_forward" @click="handleButtonClick"/> -->
        
        </div>
        
        <div style="flex-grow: 3; display: flex; margin-top: 12.3%;" >
          <table class="custom-table">
            <!-- Table header -->
            
            <thead>
              <tr>
                <th v-for="col in columns" :key="col.name">{{ col.label }}</th>
              </tr>
            </thead>
            <!-- Table body -->
            <tbody>
              <tr v-for="row in paginatedRows" :key="row.turno" :class="{ 'blink': shouldBlink(row) }">
                <td>{{ row.turno }}</td>
                <td>{{ row.posicion }}</td>
                <td>{{ row.estatus }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="max-width: 50%; width: 50%; height: 100%">
      <q-card-section
        style="height: 100%; display: flex; flex-direction: column"
      >
        <div
          style="
      
    
            justify-content: center;
            align-items: center;
            height: 10%;
            
          "
        >
          <!-- <img src="../img/1070.png" style="width: 60%; height: 130%; margin-top: 2%;  margin-left: 20%;" /> -->
        </div>
        <div style="flex-grow: 3; display: flex; margin-top: 10%;" >
          <table class="custom-table">
            <!-- Table header -->
            
            <thead>
              <tr>
                <th v-for="col in columns" :key="col.name">{{ col.label }}</th>
              </tr>
            </thead>
            <!-- Table body -->
            <tbody>
              <tr v-for="row in paginatedRows2" :key="row.turno2" :class="{ 'blink': shouldBlink(row), 'columna3':columna3(row) }">
                <td>{{ row.turno2 }}</td>
                <td>{{ row.posicion2 }}</td>
                <td class="columna3">{{ row.estatus2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import { useRouter } from 'vue-router';
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
    name: "Turno",
    required: true,
    label: "Turno",
    align: "center",
    field: (row) => row.turno2,
    format: (val) => `${val}`,
    style: "font-size: 25px; font-weight: bold;  ",
  },
  {
    name: "Posicion",
    align: "center",
    label: "Posición",
    field: "posicion2",
    style: "font-size: 25px; font-weight: bold;",
  },
  {
    name: "Estatus",
    align: "center",
    label: "",
    field: "estatus2",
    style: "font-size: 25px; font-weight: bold;",
  },
  
  
]);


const columns2 = ref([
  {
    name: "Turno",
    required: true,
    label: "Turno",
    align: "center",
    field: (row) => row.turno,
    format: (val) => `${val}`,
    style: "font-size: 25px; font-weight: bold;  ",
  },
  {
    name: "Posicion",
    align: "center",
    label: "Posición",
    field: "posicion",
    style: "font-size: 25px; font-weight: bold;",
  },
  {
    name: "Estatus",
    align: "center",
    label: "",
    field: "estatus",
    style: "font-size: 25px; font-weight: bold;",
  },
  
  
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
    estatus:''
  },
  {
    turno: "015",
    posicion: 6,
  },
  {
    turno: "016",
    posicion: 7,
  },
  
  
]);


const rows2 = ref([
  {
    turno2: "017",
    posicion2: 1,
  },
  {
    turno2: "018",
    posicion2: 2,
    style: 'background-color: red'
  },
  {
    turno2: "019",
    posicion2: 3,
    estatus2:'Llamando'
  },
  {
    turno2: "020",
    estatus2:'Espera'
   
    
  },
  {
    turno2: "021",

    estatus2:''
  },
  {
    turno2: "022",
  
  },
  {
    turno2: "023",
   
  },
  
  
]);

const getRowStyle = (row) => {
  if (row.turno === '114' && row.posicion === 5) {
    return { backgroundColor: 'yellow' };
  }
};


const shouldBlink = (row) => {
  return row.turno2 === '020' && row.posicion2 === 3 || row.turno2 === '019';
};


const columna3=(row)=>{
  return row.turno2 === '020;'

}


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


defineExpose({ initialPagination });
</script>

<style lang="scss" scoped>

.slide-in-down-enter-active, .slide-in-down-leave-active {
  transition: transform 0.5s ease;
}

.slide-in-down-enter, .slide-in-down-leave-to {
  transform: translateY(-100%);
}


.custom-table {
  width: 100%;
  height: 100%;
  font-size: 50px;
  margin-top: 5%;
  border-collapse: collapse;
  margin-top: 0%;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #ddd;
  padding: 5%;
  
 
  
}

.custom-table th, .custom-table td {
  padding: 0px;
  border: 0px solid #ddd;
  text-align: center;
  margin-top: 0%;
  font-weight: bold;
  border-bottom: 1px solid #ddd; 

  

 

}

.custom-table th {
  font-size: 40px;
  background-color: #1d3f93;
  color: antiquewhite;
  margin-top: 0%;
}

.custom-table tbody tr:nth-child(even) {
   background-color: #f2f2f2;
  margin-top: 0%;

}

@keyframes blink {
 


  0% {
  
    font-size: 50px;
    background-color: yellow;
    color: black;
  }
  
  
  50% {
  
    font-size: 50px;
    background-color: transparent;
    color: black;


  }

  // 75% {
  //   transform: scale(1);
  //   font-size: 45PX;
  //   background-color: transparent;


  // }

  100% {
 
    font-size: 50px;
    background-color: yellow;
    color: black;
  }
}


@keyframes columna3{


0%{
  color: blueviolet;

}

50%{
  color: blueviolet;
  
}

100%{

  color: blueviolet;
  
}



}





.blink {
  animation: blink 2s infinite;
}

.columna3{
  color: blueviolet;
}




</style>
