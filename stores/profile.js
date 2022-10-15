import { defineStore } from "pinia";


export const useProfileStore = defineStore('Profile', {

    state: () => ({
        name: "Sebastian lucas",
        age: 34,
        totalPost: 100,
        isLogin: false,



    })



})