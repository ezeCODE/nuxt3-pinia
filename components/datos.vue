<template>
<div>
 <p> use getter </p>
  <client-only>
    <div v.v-if="condition">
      <p style="color:blue"> this user has created post. </p>
    </div>
 
  {{  checkingLogin  }}
  </client-only>



</div>
</template>

<script setup lang="js">
import { storeToRefs }  from 'pinia'

export default {


  setup(){

   const store = useProfilePostState()

   //
   const { createPost } = storeToRefs(store)
   const { checkingLogin } = store
 
  
    return {
     createPost,checkingLogin

    }

  }


}
</script>