<template>
  <!-- <Tutorial/> -->
  <div>
    <h1>Hello World</h1>
    <div v-for="home in homes" :key="home.ObjectID" style="float:left; margin:10px">
        <!-- <a :href="`/home/${home.objectID}`"><HomeCard :home="home"></HomeCard></a> -->
        <!-- <router-link :to="`/home/${home.objectID}`"><HomeCard :home="home"></HomeCard></router-link> -->
        <!-- <nuxt-link :to="`/home/${home.objectID}`"><HomeCard :home="home"></HomeCard></nuxt-link>  -->
        <nuxt-link :to="`/home/${home.objectID}`" prefetch><HomeCard :home="home"></HomeCard></nuxt-link>
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes'
import HomeCard from '../components/HomeCard.vue'

export default {
  components : {
      HomeCard,
  },
  head() {
    return {
      title: 'Homepage',
      meta : [{
        name: 'description',
        content: 'This is a homepage',
        hid : 'description'
      }]
    }
  },
  data(){
    return {
      homes: homes.slice(0,3)
    }
  }
}
</script>
