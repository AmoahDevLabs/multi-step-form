<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "@/stores/formStore";
import { initializeFormFields } from "@/utils/formFieldsMap";

const router = useRouter();
const userStore = useUserStore();
const emit = defineEmits(["update:currentForm"]);

const identificationNumber = ref("");
const issueDate = ref("");

const fieldMap = {
  identificationNumber,
  issueDate,
};

initializeFormFields(fieldMap, userStore);

const handleSubmit = async () => {
  // dispatch the updateUserInfo action to update the userInfo object in the state
  userStore.updateUserInfo({
    identificationNumber: identificationNumber.value,
    issueDate: issueDate.value,
  });
  try {
    await axios.post("/submit-form", userStore.userInfo);
    userStore.resetUserInfo();
    router.push("/");
  } catch (error) {
    console.error("Error saving data", error);
  }
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
