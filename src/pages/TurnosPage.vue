
<template>
  <div style="height: 99.4vh; display: flex; align-items: center">
    <q-card style="max-width: 65%; width: 65%; height: 100%">
      
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <!-- 1/4 del q-card-section -->
        <div style=" display: flex; justify-content: center; align-items: center;height: 8%;">
        <img src="../img/expo.png" style="width: 30%; height: 300%; margin-top: 10%"/>
        <q-btn color="primary" label="" style="margin-left: 2%; margin-top: 10%;" icon="arrow_forward" @click="handleButtonClick"/>
        
        
        </div>
        
       

        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 95%;
          "
        >
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
            style="width: 90%; height: 85%; margin-top: 10%"
          >
            
            <q-carousel-slide :name="4">
              <img src="../img/smart/2.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="5">
              <img src="../img/smart/3.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <img src="../img/smart/4.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="3">
              <img src="../img/smart/1.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="1">
              <img src="../img/smart/5.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
           
            <!-- <q-carousel-slide :name="6">
              <img src="../img/smart/6.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="7">
              <img src="../img/smart/7.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="8">
              <img src="../img/smart/8.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="9">
              <img src="../img/smart/9.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="10">
              <img src="../img/smart/10.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="11">
              <img src="../img/smart/11.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="12">
              <img src="../img/smart/12.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="13">
              <img src="../img/smart/13.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="14">
              <img src="../img/smart/14.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide> -->
          </q-carousel>
        </div>
      </q-card-section>
    </q-card>

    <q-card style="max-width: 100%; width: 35%; height: 100%">
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
          <img src="../img/1070.png" style="width: 60%; height: 130%; margin-top: 2%;  margin-left: 20%;" />
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
              <tr v-for="row in paginatedRows" :key="row.turno" :class="{ 'blink': shouldBlink(row) }">
                <td>{{ row.turno }}</td>
                <td>{{ row.posicion }}</td>
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
const handleButtonClick = () => {
  router.push('/pasillo2');
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
  
]);

const rows = ref([
  {
    turno: "010",
    posicion: 1,
  },
  {
    turno: "011",
    posicion: 2,
    style: 'background-color: red'
  },
  {
    turno: "012",
    posicion: 3,
    style: 'background-color: yellow;'
  },
  {
    turno: "013",
    posicion: 4,
    
  },
  {
    turno: "014",
    posicion: 5,
    style: 'color=red',
  },
  {
    turno: "015",
    posicion: 6,
  },
  {
    turno: "016",
    posicion: 7,
  },
  {
    turno: "017",
    posicion: 8,
  },
  {
    turno: "018",
    posicion: 9,
  },
  {
    turno: "019",
    posicion: 10,
  },
  
]);

const getRowStyle = (row) => {
  if (row.turno === '014' && row.posicion === 5) {
    return { backgroundColor: 'yellow' };
  }
};


const shouldBlink = (row) => {
  return row.turno === '014' && row.posicion === 5;
};



const paginatedRows = computed(() => {
  const { page, rowsPerPage } = initialPagination.value;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return rows.value.slice(startIndex, endIndex);
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
  height: 85%;
  font-size: 25px;
  margin-top: 5%;
  border-collapse: collapse;
  margin-top: 0%;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #ddd;
  
 
  
}

.custom-table th, .custom-table td {
  padding: 8px;
  border: 0px solid #ddd;
  text-align: center;
  margin-top: 0%;
  font-weight: bold;
  border-bottom: 1px solid #ddd; 
  

 

}

.custom-table th {
  font-size: 20px;
  background-color: #1d3f93;
  color: antiquewhite;
  margin-top: 0%;
}

.custom-table tbody tr:nth-child(even) {
   background-color: #f2f2f2;
  margin-top: 0%;

}

@keyframes blink {
  0% { background-color: yellow; }
  50% { background-color: transparent; }
  100% { background-color: yellow; }
}

.blink {
  animation: blink 1s infinite;
}




</style>
