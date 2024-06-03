<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:currentForm"]);

const businessName = ref("");
const businessType = ref("");

const handleSubmit = () => {
  // Emit event to notify parent component to move to the next form section
  emit("update:currentForm", 3);
};

const goToPreviousForm = () => {
  // Emit event to notify parent component to move to the  previous form section
  emit("update:currentForm", 1);
};
</script>

<template>
  <div>
    <h2>Business Information</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="businessName" class="label">Business Name:</label>
        <input
          type="text"
          id="businessName"
          v-model="businessName"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
        />
      </div>
      <div>
        <label for="businessType" class="label">Business Type:</label>
        <input
          type="text"
          id="businessType"
          v-model="businessType"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button
        class="previous btn btn-secondary"
        @click="goToPreviousForm"
        type="button"
      >
        Previous
      </button>
    </form>
  </div>
</template>
