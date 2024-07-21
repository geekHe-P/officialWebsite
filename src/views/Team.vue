<script setup>
import teamImg from "@/assets/images/team.png";
import TextCascade from '@/components/TextCascade.vue'
</script>

<template>
 <div class="team-container" id="xxxxx-team">
   <div class="main-container index-container">
     <img class="index-left" :src="teamImg" alt="">
     <div class="index-right">
       <TextCascade front-text="xxxxx 团队" back-text="Team" text-color="#000" align="left"></TextCascade>
       <div class="text-bold">我们是一个年轻有活力、独特有魅力、高能有潜力的成长型团队。</div>
       <div class="text-desc">我们很年轻，绝大多数同事都是奔涌的后浪一代，元气满满，无所畏惧，且创意无边。我们很独特，有着非常扁平化的组织和管理方式，所有员工按项目分组，不以部门分阵营，所有人都是地位平等、并肩战斗的合作伙伴，且都直接对老板负责，没有中间的领导层级。我们很高能，小伙伴儿们个个都背景优秀，能力出众，是万里挑一的精兵，也是以一当百的强将，未来，我们拥有无限的可能。</div>
     </div>
   </div>
 </div>
</template>

<style scoped>
.team-container {
  padding: 160px 0;
}

.main-container {
  display: flex;
  justify-content: space-between;
}

.index-left img {
  object-fit: cover;
}

.index-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
