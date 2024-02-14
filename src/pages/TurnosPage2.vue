<img src="../img/1070.png" />
<template>
  <div style="height: 99vh; display: flex; align-items: center">
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
            <q-carousel-slide :name="5">
              <img src="../img/smart/1.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="4">
              <img src="../img/smart/2.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="3">
              <img src="../img/smart/3.jpg" style="width: 100%; height: 85%" />
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <img src="../img/smart/4.jpg" style="width: 100%; height: 85%" />
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
    position: relative;
  "
>
  <img src="../img/1070.png" style="width: 60%; height: 100%; margin-top: 2%; position: absolute; margin-left: 20%;" />
</div>

        <div style="flex-grow: 3; display: flex">
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="turno"
            :row-style-fn="rowStyleFn"
            style="width: 100%; height: 97%; font-size: 50px; margin-top: 5%;"
            flat
            bordered
            :pagination="initialPagination"
            hide-pagination
          
          >
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class=" "
                  style="
                    font-size: 25px;
                    background-color: #1d3f93;
                    color: antiquewhite;
                  "
                >
                  {{ col.label }}

                  <q-td key="row.turno" :props="props">
      <q-badge :color="getBadgeColor(props.row.turno)">
        {{ props.row.turno }}
      </q-badge>
    </q-td>
    <q-td key="row.posicion" :props="props">
      <q-badge :color="getBadgeColor(props.row.posicion)">
        {{ props.row.posicion }}
      </q-badge>
    </q-td>
                </q-th>
              </q-tr>
            </template>


        



          </q-table>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const handleButtonClick = () => {
  router.push('/pasillo');
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
    style: "font-size: 26px; font-weight: bold;  ",
  },
  {
    name: "Posicion",
    align: "center",
    label: "Posición",
    field: (row) => row.posicion,
    style: "font-size: 26px; font-weight: bold;",
  },
  
]);

const rows = ref([
{
    turno: "SMA010",
    posicion: 1,
  },
  {
    turno: "SMA011",
    posicion: 2,
    style: 'background-color: red'
  },
  {
    turno: "SMA012",
    posicion: 3,
    style: 'background-color: yellow;'
  },
  {
    turno: "SMA013",
    posicion: 4,
    
  },
  {
    turno: "SMA014",
    posicion: 5,
    style: 'color=red',
  },
  {
    turno: "SMA015",
    posicion: 6,
  },
  {
    turno: "SMA016",
    posicion: 7,
  },
  {
    turno: "SMA017",
    posicion: 8,
  },
  {
    turno: "SMA018",
    posicion: 9,
  },
  {
    turno: "SMA019",
    posicion: 10,
  },
  
 
]);


const rowStyleFn = (props) => {
  if (props.row.turno !== '011') {
    return { backgroundColor: "red" };
  }
};

const getBadgeColor = (value) => {
  if (value === 'SMA011') {
    return 'red'; // Cambia el color según tus preferencias
  } else {
    return 'green'; // Color por defecto o para otros valores
  }
};

defineExpose({ initialPagination });
</script>

<style lang="scss" scoped></style>
