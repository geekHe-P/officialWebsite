<script setup>
// import footerLogo from '@/assets/images/LOGO-2.png';
import footerLogo from '@/assets/images/logo.png';
</script>

<template>
 <div class="footer">
   <div class="footer-container">
     <img class="footer-logo" :src="footerLogo" alt=""/>
     <span class="footer-text">何博轩-vue重构 Copyright ©2011-2023 xxxxx公司, All Rights Reserved.</span>
   </div>
 </div>
</template>

<style scoped>
.footer {
  font-family: PingFangSC-Regular, sans-serif;
  width: 100%;
  background-color: #242a3a;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
}

.footer-container {
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.footer-logo {
  width: 95px;
  object-fit: contain;
  height: 80px;
}

.footer-text {
  font-style: italic;
  opacity: 0.8;
}

@media screen and (max-width: 1300px){
  .footer-container {
    width: 100%;
    flex-direction: column;
  }

  .footer-logo, .footer-text {
    margin-bottom: 24px;
    text-align: center;
  }

  .footer-logo {
    height: auto;
    margin-top: 40px;
  }

  .footer-text {
    opacity: 0.5
  }
}
</style>
