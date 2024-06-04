<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/formStore";

const userStore = useUserStore();
const emit = defineEmits(["update:currentForm"]);

const businessName = ref("");
const businessType = ref("");

// Function to initialize form fields with values from the store if they exist
const initializeFormFields = () => {
  if (userStore.userInfo.businessName) {
    businessName.value = userStore.userInfo.businessName;
  }
  if (userStore.userInfo.businessType) {
    businessType.value = userStore.userInfo.businessType;
  }
};

onMounted(() => {
  initializeFormFields();
});

const handleSubmit = () => {
  // dispatch the updateUserInfo action to update the userInfo object in the state

  userStore.updateUserInfo({
    businessName: businessName.value,
    businessType: businessType.value,
  });

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
          required
        />
      </div>
      <div>
        <label for="businessType" class="label">Business Type:</label>
        <input
          type="text"
          id="businessType"
          v-model="businessType"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Next</button>
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
