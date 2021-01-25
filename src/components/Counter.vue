<style>
.message {
  padding-bottom: 20px;
  font-weight: bold;
}
</style>

<template>
  <div class="message">
    <p>Total clicks: {{ count }}</p>
    <button id="IncrementButton" v-on:click.prevent="increment">+</button>
    <button id="DecrementButton" v-on:click.prevent="decrement">-</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
