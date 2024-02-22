<template>
  <div style="height: 99.8vh; display: flex; align-items: center">
    <q-card style="max-width: 100%; width: 100%; height: 100%">
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <div style=" display: flex; justify-content: center; align-items: center;height: 8%;">
        <q-btn color="primary" label="" style="margin-left: 2%;" icon="arrow_forward" @click="handleButtonClick"/>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; margin-top: 0%;">
          
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="turno"
            style="width: 100%; height: 88%; font-size: 50px;"
            flat
            bordered
            :pagination="initialPagination"
            hide-pagination
            class="tabla"
          >
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class=" "
                  style="
                    font-size: 60px;
                    background-color: #1d3f93;
                    color: antiquewhite;
                    text-align: center;
                  "
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>
            <template v-slot:body-cell-posicion="props">
    <q-td :props="props" class="posicion-cell">
      <div class="posiciones-container" v-if="Array.isArray(props.row.posiciones)">
        <div v-for="(posicion, index) in props.row.posiciones" :key="index" class="posicion text-right" :class="{ 
          'flashing': posicion === '053'||posicion ==='052' ||posicion ==='054' ||posicion ==='012' ||posicion ==='013' 
          ||posicion ==='022' ||posicion ==='023' ||posicion ==='024' ||posicion ==='025'
          ||posicion ==='042'||posicion ==='043'
          ||posicion ==='032'||posicion ==='033'||posicion ==='034' }">
          {{ index > 0 ? '-' : '' }}{{ posicion }}
        </div>
      </div>
      <div v-else>{{ props.row.posicion }}</div>
    </q-td>
  </template>
  <template v-slot:body-cell-marca="props">
  <q-td :props="props" >
    <img :src="props.row.marca" style="max-width: 300px; max-height: 600px; height: 130px; width: 250px; padding: 0%;">
  </q-td>
</template>
          </q-table>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref,onMounted,onBeforeUnmount } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const handleButtonClick = () => {
  router.push('/pasillo');
};


const slide = ref(1);
const autoplay = ref(true);

const initialPagination = ref({
  descending: false,
  page: 1,
  rowsPerPage: 10,

});

const columns = ref([
{
    name: "marca",
    align: "center",
    label: "Stand",
    field: "marca",
    style: "font-size: 0px; font-weight: bold; width: 30%; ",

  },

  
  {
    name: "posicion",
    label: "Próximos turnos",
    field: "posicion",
    align:"right",
    style: "font-size: 92px; font-weight: bold; width: 70%; padding: 0px;",
    
  },
  
  
]);



const rows = ref([
  {
    marca: `src/img/marcas/dixon.png` ,
    posiciones: ['052','053','054','055','056','057','058','059'] ,
  },
  {
    marca:  `src/img/marcas/norma.png`,
    posiciones: ['012','013','014','015','016','017','018','019'] ,
  },
  {
    marca:  `src/img/marcas/scribe.png`,
    posiciones: ['022','023','024','025','026','027','028','029'] ,
  },
  {
    marca:  `src/img/marcas/smart.png`,
    posiciones: ['042','043','044','045','046','047','048','049'] ,
    
  },
  {
    marca:  `src/img/marcas/newell.png`,

    posiciones: ['032','033','034','035','036','037','038','039'] ,

  },
  
  
  
]);

const flashingIndex = ref(0);

onMounted(() => {
  // Cada segundo, incrementa flashingIndex
  const interval = setInterval(() => {
    flashingIndex.value = (flashingIndex.value + 1) % 6; // Considerando que el máximo de posiciones es 6
  }, 1000);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});


defineExpose({ initialPagination });
</script>

<style lang="scss" scoped>


.q-table.tabla .q-tbody .q-tr:nth-child(even) {
  background-color: red;
}
.posicion-cell {
  white-space: nowrap;
  overflow: hidden;
  text-align: right;

  
}

.posiciones-container {
  display: flex;
  justify-content: flex-end;

}

.posicion {
  margin-right: 10px; /* Espacio entre las posiciones */
  text-align: right;
  display: inline-block; 
 

}


.flashing {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    background-color:yellow;
  }
}


</style>
