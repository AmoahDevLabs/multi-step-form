<script setup>
import { ref } from "vue";

import PersonalInfo from "@/components/PersonalInfo.vue";
import BusinessInfo from "@/components/BusinessInfo.vue";
import KYCInfo from "@/components/KYCInfo.vue";

const currentForm = ref(1);

const updateCurrentForm = (value) => {
  currentForm.value = value;
};
</script>

<template>
  <main class="bg-gray-100">
    <PersonalInfo
      v-if="currentForm === 1"
      @update:currentForm="updateCurrentForm($event)"
    />
    <BusinessInfo
      v-if="currentForm === 2"
      @update:currentForm="updateCurrentForm($event)"
    />
    <KYCInfo
      v-if="currentForm === 3"
      @update:currentForm="updateCurrentForm($event)"
    />
  </main>
</template>
