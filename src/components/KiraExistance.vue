<template>
  <div>
      <p>
          e rate ei mosum {{kira ? 'pass' : 'fail'}}
      </p>
      <button @click="changeKira">changeKira</button>
  </div>
</template>

<script>
export default {
    props:['kira'],
    emits:['change-kkira'],
    data() {
        return {
            
        }
    },
    methods: {
        changeKira() {
            this.$emit('change-kkira', this.kira)
        }
    }
}
</script>

<style>

</style>