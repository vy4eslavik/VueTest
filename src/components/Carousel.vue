<template>
  <section class="carousel-wrapper">
    <el-carousel
            trigger="click"
            v-if="!isMobile"
            type="card"
            :interval="2000"
            height="500px"
            indicator-position="outside"
            >
      <el-carousel-item v-for="(item, i) in imageItems" :key="i">
        <img ref="image" :src="item.src" width="100%" />
      </el-carousel-item>
    </el-carousel>
    <v-carousel class="carousel-mobile" v-else dark lazy :style="{height: windowWidth*0.55+'px'}">
      <v-carousel-item v-for="(item,i) in imageItems" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: 'carousel',
  props: ['isMobile', 'windowHeight', 'windowWidth'],
  data () {
    return {
      imageItems: [
        {
          src: 'http://mirpozitiva.ru/uploads/posts/2016-10/1477469507_autumn-panorama.jpg'
        },
        {
          src: 'http://7oom.ru/wp-content/uploads/peizaji-01.jpg'
        },
        {
          src: 'http://komotoz.ru/photo/images/krasivye_photo_prirody/krasivye_photo_prirody_01.jpg'
        },
        {
          src: 'http://7oom.ru/wp-content/uploads/peizaji-31.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/_variables.scss";
  .carousel-wrapper {
    .el-carousel__item img{
      position: absolute;
      top: 50%;
      transform: translate(0, -50%)
    }
    .el-carousel__button {
        background-color: $primary-color;
        opacity: 0.9;
    }
    .is-active .el-carousel__button,
    .el-carousel__indicator:hover .el-carousel__button {
      background-color: $secondary-color;
      opacity: 0.9;
    }
    .carousel-mobile {
      .jumbotron img {
        width: 100%;
      }
      .carousel__controls {
        .carousel__controls__item {
          color: $primary-color;
        }
        .carousel__controls__item--active {
          color: $secondary-color;
        }
      }
    }
  }
</style>
