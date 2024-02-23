<template>
  <div style="height: 99.8vh; display: flex; align-items: center">
    <q-card style="max-width: 100%; width: 100%; height: 100%">
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <div style=" display: flex; justify-content: center; align-items: center;height: 0%;">
        <q-btn color="primary" label="" style="margin-left: 0%;" icon="arrow_forward" @click="handleButtonClick"/>
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
          'flashing': posicion === '53'||posicion ==='52' ||posicion ==='54' ||posicion ==='12' ||posicion ==='13' 
          ||posicion ==='22' ||posicion ==='23' ||posicion ==='24' ||posicion ==='25'
          ||posicion ==='42'||posicion ==='43'
          ||posicion ==='32'||posicion ==='33'||posicion ==='34' }">
          {{ index > 0 ? '' : '' }}{{ posicion }}
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
    posiciones: ['52','53','54','55','56','57','58','59'] ,
  },
  {
    marca:  `src/img/marcas/norma.png`,
    posiciones: ['12','13','14','15','16','17','18','19'] ,
  },
  {
    marca:  `src/img/marcas/scribe.png`,
    posiciones: ['22','23','24','25','26','27','28','29'] ,
  },
  {
    marca:  `src/img/marcas/smart.png`,
    posiciones: ['42','43','44','45','46','47','48','49'] ,
    
  },
  {
    marca:  `src/img/marcas/newell.png`,

    posiciones: ['32','33','34','35','36','37','38','39'] ,

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
  margin-right: 80px; /* Espacio entre las posiciones */
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
