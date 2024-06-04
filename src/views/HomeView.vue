<script setup>
import { ref, computed } from "vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import BusinessInfo from "@/components/BusinessInfo.vue";
import KYCInfo from "@/components/KYCInfo.vue";

const currentForm = ref(1);

const components = {
  1: PersonalInfo,
  2: BusinessInfo,
  3: KYCInfo,
};

const currentComponent = computed(() => components[currentForm.value]);

const updateCurrentForm = (value) => {
  currentForm.value = value;
};
</script>

<template>
  <main class="bg-gray-100">
    <Component :is="currentComponent" @update:currentForm="updateCurrentForm" />
  </main>
</template>
