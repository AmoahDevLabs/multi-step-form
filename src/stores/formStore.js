import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {
      firstName: "",
      lastName: "",
      businessName: "",
      businessType: "",
      identificationNumber: "",
      issueDate: "",
    },
  }),

  actions: {
    updateUserInfo(newData) {
      this.userInfo = { ...this.userInfo, ...newData };
    },

    resetUserInfo() {
      this.userInfo = {
        firstName: "",
        lastName: "",
        businessName: "",
        businessType: "",
        identificationNumber: "",
        issueDate: "",
      };
    },
  },
});
