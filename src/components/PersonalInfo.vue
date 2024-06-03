<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:currentForm"]);

const firstName = ref("");
const lastName = ref("");

const handleSubmit = () => {
  // Emit event to notify parent component to move to the next form section
  emit("update:currentForm", 2);
};
</script>

<template>
  <div>
    <h2>Personal Information</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="firstName" class="label">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
        />
      </div>
      <div>
        <label for="lastName" class="label">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
