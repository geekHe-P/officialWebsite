<script setup>
import TextCascade from '@/components/TextCascade.vue'
import MemoryImageGroup from '@/components/MemoryImageGroup.vue'

import aTopImg from '@/assets/images/a1.png'
import aBottomLeftImg from '@/assets/images/a2.png'
import aBottomRightImg from '@/assets/images/a3.png'
import aRightImg from '@/assets/images/a4.png'
import bTopImg from '@/assets/images/b1.png'
import bBottomLeftImg from '@/assets/images/b2.png'
import bBottomRightImg from '@/assets/images/b3.png'
import bRightImg from '@/assets/images/b4.png'
import cTopImg from '@/assets/images/c1.png'
import cBottomLeftImg from '@/assets/images/c2.png'
import cBottomRightImg from '@/assets/images/c3.png'
import cRightImg from '@/assets/images/c4.png'

</script>

<template>
  <div class="memory-container" id="xxxxx-memory">
    <div class="main-container">
      <text-cascade back-text="Memories" front-text="公司影像" align="mid"/>
      <div class="horizontal-scroll">
        <MemoryImageGroup class="img-group" :top-img="aTopImg" :bottom-left-img="aBottomLeftImg" :bottom-right-img="aBottomRightImg" :right-img="aRightImg"/>
        <MemoryImageGroup class="img-group" :top-img="bTopImg" :bottom-left-img="bBottomLeftImg" :bottom-right-img="bBottomRightImg" :right-img="bRightImg"/>
        <MemoryImageGroup class="img-group" :top-img="cTopImg" :bottom-left-img="cBottomLeftImg" :bottom-right-img="cBottomRightImg" :right-img="cRightImg"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.horizontal-scroll {
  display: flex;
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
}

.img-group + .img-group {
 margin-left: 24px;
}

</style>
