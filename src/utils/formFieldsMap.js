import { onMounted } from "vue";

// Function to initialize form fields with values from the store if they exist
export const initializeFormFields = (fieldMap, store) => {
  onMounted(() => {
    Object.keys(fieldMap).forEach((key) => {
      if (store.userInfo[key]) {
        fieldMap[key].value = store.userInfo[key];
      }
    });
  });
};
