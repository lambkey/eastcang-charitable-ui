<template>
  <div class="es-carousel">
    <el-carousel :interval="2000" arrow="always" :height="carouselHeight">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <el-image :src="item.url" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg',
          text: '你好'
        },
        {
          url: 'https://www.guangzhoucishan.org.cn/upload/adv/2023/04/11/20230411153652_423_8.jpg',
          text: '你好'
        },
        {
          url: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/11/25/20211125101509_124_4.jpg',
          text: '你好'
        },
        {
          url: 'https://www.guangzhoucishan.org.cn/upload/adv/2023/04/11/20230411154807_232_8.jpg',
          text: '你好'
        }
      ]
    };
  },
  computed: {
    carouselHeight() {
      // 在移动设备上，将轮播图的高度设置为宽度的一半
      if (window.innerWidth <= 600) {
        return window.innerWidth / 2 + 'px';
      } else {
        return '600px'; // 在其他设备上保持默认高度
      }
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carousel'
};
</script>

<style scoped>
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: 100%;
  height: 100%;
}

@media (max-width: 600px) {
  .es-carousel {
    height: 207px;
  }
}
</style>
