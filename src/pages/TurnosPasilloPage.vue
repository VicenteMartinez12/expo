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

        <div style=" display: flex; justify-content: center; align-items: center; height: 95%; margin-top: 0%;">

          <q-table
            :rows="rows"
            :columns="columns"
            row-key="turno"
            :row-style-fn="rowStyleFn"
            style="width: 100%; height: 93%; font-size: 50px; margin-top: 5%;"
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
                </q-th>
              </q-tr>
            </template>
          </q-table>
        </div>


        <!--Fin de la seccion de la tabla de los turnos en el pasillo -->
      </q-card-section>
    </q-card>

    <q-card style="max-width: 100%; width: 45%; height: 100%">
      <q-card-section
        style="height: 100%; display: flex; flex-direction: column"
      >
        <!-- <div style=" flex-grow: 10; display: flex; justify-content: center; align-items: center; height: 100%;">
          <p class="text-h4 titulo" style="color: #1d3f93; font-size: 60px; font-family: Arial, Helvetica, sans-serif;">Tony Tiendas</p>
        </div> -->
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
            style="width: 98%; height: 90%; margin-top: 15%"
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
            <q-carousel-slide :name="14">
              <img src="../img/institucional/14.jpg" style="width: 100%; height: 95%" />
            </q-carousel-slide>
          </q-carousel>
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
  router.push('/');
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
    turno: "BIC010",
    posicion: 4,
  },
  {
    marca: 'SCRIBE',
    turno: "SCR011",
    posicion: 7,
    style: 'background-color: red'
  },
  {
    marca: 'RESISTOL',
    turno: "RES011",
    posicion: 3,
  },
  {
    marca: 'NORMA',
    turno: "NOR013",
    posicion: 4,
    
  },
  {
    marca: 'BACO',
    turno: "BAC011",
    posicion: 1,
    style: 'color=red',
  },
  {
    marca: 'PELIKAN',
    turno: "PEL015",
    posicion: 6,
  },
  {
    marca: 'CRAYOLA',
    turno: "CRA016",
    posicion: 1,
  },
  {
    marca: 'SMARTY',
    turno: "SMA011",
    posicion: 4,
  },
  {
    marca: 'MAGISTRAL',
    turno: "MAG018",
    posicion: 9,
  },
  {
    marca: 'CRAYOLA',
    turno: "CRA019",
    posicion: 5,
  },
  
]);


const rowStyleFn = (props) => {
  if (props.row.turno !== '011') {
    return { backgroundColor: "red" };
  }
};

defineExpose({ initialPagination });
</script>

<style lang="scss" scoped></style>
