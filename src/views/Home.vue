<template>
  <div class="home">
  <Counter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Counter from '@/components/Counter.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Counter
  },
})
export default class Home extends Vue {}
</script>
