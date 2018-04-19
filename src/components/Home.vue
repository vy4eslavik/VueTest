<template>
    <carousel :isMobile="isMobile" :windowHeight="windowHeight" :windowWidth="windowWidth"></carousel>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  components: {Carousel},
  name: 'home',
  data () {
    return {
      isMobile: false,
      windowHeight: 0,
      windowWidth: 0
    }
  },
  mounted () {
    this.isMobileDevice()
    window.addEventListener('resize', this.isMobileDevice)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.isMobileDevice)
  },
  methods: {
    isMobileDevice () {
      this.isMobile = (window.innerWidth < 900) ||
        (typeof window.orientation !== 'undefined') ||
        (navigator.userAgent.indexOf('IEMobile') !== -1)
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style scoped>

</style>
