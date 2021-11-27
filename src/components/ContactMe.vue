<template>
  <div>
    <h2 class="red">
      why o why tell me why not {{ myName }} , broName {{ broName }}
    </h2>
    <p>I am a {{ select ? 'goood' : 'baad' }}</p>
    <button @click="goodorBad">Change Good {{select }}</button>
  </div>
</template>
<script>
export default {
  props: ['broName', 'select', 'id'],
  emits: ['goodor-bad'],
  data() {
    return {
      myName: 'mohtasim',
      sisterName: 'samiha'
    };
  },
  methods: {
    goodorBad() {
      this.$emit('goodor-bad', this.id);
    }
  }
};
</script>
<style></style>
