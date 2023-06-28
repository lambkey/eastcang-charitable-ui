<template>
  <div class="slideshow-container">
    <div
        v-for="(image, index) in images"
        :key="index"
        :class="{ slide: true, active: currentSlide === index }"
        @mouseover="zoomIn(index)"
        @mouseleave="zoomOut(index)"
    >
      <img :src="image.src" :alt="image.alt">
    </div>
  </div>
  <div class="separator"></div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg', alt: 'Image 1' },
        { src: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg', alt: 'Image 2' },
        { src: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg', alt: 'Image 3' },
        { src: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg', alt: 'Image 4' },
        { src: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg', alt: 'Image 5' },
        { src: 'https://www.guangzhoucishan.org.cn/upload/adv/2021/02/19/20210219160336_516_1.jpg', alt: 'Image 6' },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    zoomIn(index) {
      this.currentSlide = index;
    },
    zoomOut(index) {
      if (this.currentSlide === index) {
        this.currentSlide = null;
      }
    }
  },
};
</script>

<style scoped>
.slideshow-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.slide {
  position: relative;
  width: calc(33.33% - 20px);
  margin: 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.slide.active {
  transform: scale(1.1);
  z-index: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.separator {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, red, blue);
  margin: 20px 0;
}

/* 移动端样式 */
@media (max-width: 768px) {
  .slide {
    width: calc(50% - 20px);
  }
}
</style>
