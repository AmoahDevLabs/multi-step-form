<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:currentForm"]);
const identificationNumber = ref("");
const issueDate = ref("");

const handleSubmit = () => {
  // this will be handled later
  console.log("Submission completed");
};

const goToPreviousForm = () => {
  // Emit event to notify parent component to move to   the previous form section
  emit("update:currentForm", 2);
};
</script>

<template>
  <div>
    <h2>KYC Info</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="identificationNumber" class="label"
          >Identification Number:</label
        >
        <input
          type="text"
          id="identificationNumber"
          v-model="identificationNumber"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
        />
      </div>
      <div>
        <label for="issueDate" class="label">Issue Date:</label>
        <input
          type="date"
          id="issueDate"
          v-model="issueDate"
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
