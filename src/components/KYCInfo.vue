<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/formStore";

const userStore = useUserStore();
const emit = defineEmits(["update:currentForm"]);

const identificationNumber = ref("");
const issueDate = ref("");

const handleSubmit = () => {
  // dispatch the updateUserInfo action to update the userInfo object in the state
  userStore.updateUserInfo({
    identificationNumber: identificationNumber.value,
    issueDate: issueDate.value,
  });
  alert("Your information has been saved");
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
          required
        />
      </div>
      <div>
        <label for="issueDate" class="label">Issue Date:</label>
        <input
          type="date"
          id="issueDate"
          v-model="issueDate"
          class="input input-bordered w-full max-w-xs dark:bg-white dark:text-black"
          required
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
