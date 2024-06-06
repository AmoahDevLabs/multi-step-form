<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/formStore";
import { initializeFormFields } from "@/utils/formFieldsMap";

const userStore = useUserStore();
const emit = defineEmits(["update:currentForm"]);

const firstName = ref("");
const lastName = ref("");

// Field map for initialization
const fieldMap = {
  firstName,
  lastName,
};

initializeFormFields(fieldMap, userStore);

const handleSubmit = async () => {
  userStore.updateUserInfo({
    firstName: firstName.value,
    lastName: lastName.value,
  });

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
          required
        />
      </div>
      <div>
        <label for="lastName" class="label">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Next</button>
    </form>
  </div>
</template>
