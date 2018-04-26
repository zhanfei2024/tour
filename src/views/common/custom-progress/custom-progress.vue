<template>
    <div class="custom-progress" v-if="progress.currentNum === 1  || progress.currentNum === 2">
        <div class="step" :class="{active: progress.currentNum === 1}">
            <div class="step-cricle">1</div>
            <p class="step-text">{{progress.step1}}</p>
        </div>
        <div class="step" :class="{active: progress.currentNum === 2}">
            <div class="step-cricle">2</div>
            <p class="step-text">{{progress.step2}}</p>
        </div>
        <div class="step" :class="{active: progress.currentNum === 3}">
            <div class="step-cricle">3</div>
            <p class="step-text">{{progress.step3}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props: {
      progress: Object
  },
  components: {

  }
}
</script>

<style lang="scss">
</style>
