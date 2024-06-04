<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/formStore";

const userStore = useUserStore();
const emit = defineEmits(["update:currentForm"]);

const firstName = ref("");
const lastName = ref("");

// Function to initialize form fields with values from the store if they exist
const initializeFormFields = () => {
  if (userStore.userInfo.firstName) {
    firstName.value = userStore.userInfo.firstName;
  }
  if (userStore.userInfo.lastName) {
    lastName.value = userStore.userInfo.lastName;
  }
};

onMounted(() => {
  initializeFormFields();
});

const handleSubmit = () => {
  // dispatch the updateUserInfo action to update the userInfo object in the state

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
