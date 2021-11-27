<template>
  <div>
    <button @click="sendMe" :key="this.run">
      Click me to be welcomed
    </button>
    <div>
      <p>You are a person who really cares about me.</p>
      <button @click="tumi('sumon', $event)">Yes. I do!!</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      run: false
    };
  },
  emits: ['send-me'],
  methods: {
    sendMe() {
      this.$emit('send-me', 'k');
    },
    tumi(name, ev) {
      console.log({ name, ev });
    }
  }
};
</script>

<style></style>
