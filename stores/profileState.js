import { defineStore } from 'pinia'
import { useProfileStore } from "./profile"

export const useProfilePostState = defineStore('profilePost', {
    state: () => ({
        postList: [],
        createPost: false
    }),

    //getter replaces mutations
    getters: {
        //sorry no have other idea for this example
        checkingLogin(state) {

            let profileData = useProfileStore() ///thoer store states
            console.log("totalPost", profileData.totalPost);
            // changing local state vars using getter
            profileData.totalPost > 1 ? state.createPost = true : state.createPost = false


        }

    },


    actions: {
        //change from the other state, other files.
        async closesection(data) {

            let login = useProfileStore()
            login.isLogin = data

        },

        async postUser() {

            let login = useProfileStore()

            if (login.isLogin) {

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => {

                        this.postList = json

                    })

            } else {
                console.log("not login");
            }




        },

    },



})