<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const formData = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get("/form-data");
    formData.value = response.data;
  } catch (error) {
    console.error("Error fetching form data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Business Name</th>
          <th>Identification Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in formData" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ item.firstName }} {{ item.lastName }}</td>
          <td>{{ item.businessName }}</td>
          <td>{{ item.identificationNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
