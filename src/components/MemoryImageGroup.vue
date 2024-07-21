<script setup>
const props = defineProps({
  topImg: String,
  bottomLeftImg: String,
  bottomRightImg: String,
  rightImg: String
})
</script>

<template>
<div class="memory-image-ground">
  <div class="memory-image-left">
    <img class="top-image" :src="props.topImg" alt="">
    <div class="memory-image-left-bottom">
      <div class="memory-image-left-bottom-left">
        <img class="bottom-img-left" :src="props.bottomLeftImg" alt="">
      </div>
      <div class="memory-image-left-bottom-right">
        <img class="bottom-img-right" :src="props.bottomRightImg" alt="">
      </div>
    </div>
  </div>
  <img class="right-img" :src="props.rightImg" alt="">
</div>
</template>

<style scoped>
.memory-image-ground {
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  font-size: 0;
}

.memory-image-ground img {
  object-fit: cover;
}

.memory-image-left {
  flex: 1;
  margin-right: 24px;
}

.memory-image-left-bottom {
  display: flex;
  margin-right: -24px;
}

.memory-image-left-bottom-left, .memory-image-left-bottom-right {
  flex: 0 0 50%;
  width: 50%;
  padding-right: 24px;
  box-sizing: border-box;
}

.top-image {
  width: 100%;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 30px;
}

.bottom-img-left, .bottom-img-right {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
}

.right-img {
  width: 462px;
  height: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  overflow: hidden;
}

@media screen and (max-width: 1300px){
  .memory-image-left-bottom {
    flex-direction: column;
    width: 100%;
    flex: 1;
  }

  .memory-image-left-bottom div {
    flex: 0 0 100%;
    width: 100%;
    padding-right: 0;
    box-sizing: border-box;
  }

  .top-image, .bottom-img-left {
    height: 210px;
    margin-bottom: 16px;
  }

  .bottom-img-right {
    height: 210px;
    margin-bottom: 0;
  }

}

@media screen and (max-width: 950px) {
  .right-img {
    width: 50%;
  }
}
@media screen and (max-width: 600px){
  .memory-image-ground {
    display: flex;
    flex-direction: column;
  }
  .top-image,
  .bottom-img-left,
  .bottom-img-right,
  .right-img {
    width: 100%;
    height: 300px;
  }
  .memory-image-left {
    margin-right: 0;
    margin-bottom: 16px;
  }
}
</style>
