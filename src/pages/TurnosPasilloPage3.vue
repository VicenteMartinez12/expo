<template>
  <div style="height: 100vh; display: flex; align-items: center">
    <q-card style="max-width: 100%; width: 100%; height: 100%">
      <q-card-section style="height: 100%; display: flex; flex-direction: column">
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; margin-top: 0%;">
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="turno"
            style="width: 100%; height: 100%; font-size: 50px;"
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
      <div class="posicion-content">{{ props.row.posicion }}</div>
    </q-td>
  </template>
          </q-table>
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
    name: "marca",
    align: "left",
    label: "Stand",
    field: "marca",
    style: "font-size: 70px; font-weight: bold; width: 30%; ",

  },




 
  
  {
    name: "posicion",
    label: "Posición",
    field: "posicion",
    style: "font-size: 70px; font-weight: bold; width: 70%;",
  },
  
  
]);



const rows = ref([
  {
    marca: 'DIXON',
    posicion:1,
  },
  {
    marca: 'NEWELL',
    posicion: 7,
  },
  {
    marca: 'NORMA',
    posicion: 3,
  },
  {
    marca: 'SCRIBE',
    posicion: 3,
    
  },
  {
    marca: 'SMART',

    posicion: 1,

  },
  
  
]);








defineExpose({ initialPagination });
</script>

<style lang="scss" scoped>
.posicion-cell {
  white-space: nowrap;
  overflow: hidden;
}

.posicion-content {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

</style>
