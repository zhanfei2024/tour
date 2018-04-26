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
        test: ''
    }
  },
  props: {
      progress: {
          currentNum: Number,
          step1: String,
          step2: String,
          step3: String
      }
  },
  components: {

  }
}
</script>
<style lang="scss">
    @import './custom-progress.scss';
</style>

