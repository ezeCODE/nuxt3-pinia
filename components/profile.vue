<template>
<div>
  <h1> NUXT 3 + PINIA </h1>
 

 
  <client-only>
  <p>use states</p>
  <h3 class="">Profile</h3>
  <p> name : {{ profile.name }}  </p>
  <p> age: {{ profile.age }}   </p>
   <datos />
  <hr>
  <p>use action</p>
  <h4> post </h4>
  <button @click="store.closesection(true)"> open sesion </button>
  <div v-if="!profile.isLogin">
  <p style="color:red"> you need state log in {{profile.isLogin}} </p>
  </div>

  <div v-else>
  now...
  <button @click="store.postUser()"> call post </button>
  or
  <button @click="store.closesection(false)"> close sesion </button>
  <ul>
  <li v-for="(items, index) in  store.postList" :key="index">
  {{ items.title}} ++
  </li>
  </ul>

  </div>
 
  </client-only>

</div>
</template>
<script setup lang="js">


 export default {

setup(){

    const store = useProfilePostState()
    const profile = useProfileStore()
 
    
    return {
    store,  profile
    }
   

}

 }
</script>
