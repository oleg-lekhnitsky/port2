<template>
  <div class="header-wrapper" style="position: fixed; top: 0; left: 0; z-index: 200000000;">
    <NuxtLink class="logo" to="/">Maks Goncharenok</NuxtLink>
    <p class="title">Photographer (brands+personal)</p>
    <div class="links" style="display: flex; flex-direction: column;">
      <NuxtLink to="mailto:maxgelatin@gmail.com">maksgelatin@gmail.com</NuxtLink>
      <div style="display: flex; gap: 2px">
      <NuxtLink to="https://www.instagram.com/maksgelatin" target="_blank">Instagram,  </NuxtLink>
      <NuxtLink to="https://www.t.me/maksgelatin" target="_blank">Telegram</NuxtLink>
    </div>
    </div>
    <NuxtLink class="gallery" to="/gallery">Gallery</NuxtLink>
    <NuxtLink class="about" to="/about">About</NuxtLink>
  </div>
</template>



<script lang="ts" setup>

</script>

<style lang="scss">




  .header-wrapper{
    height: auto;
    
  }

  .header-wrapper:hover{
    background-color: var(--bg-light);


    a, p{
      color: var(--text-dark);
      // -webkit-text-stroke: 1px var(--text-dark);

    }
    a:hover{
    color: var(--accent);
    // -webkit-text-stroke: 1px var(--accent);

    /* text-decoration-line: underline; */
  }

  }

  a{
    color: white;
    width: fit-content;
    height: fit-content;
    // -webkit-text-stroke: .5px #fff;
  }

  p{
    margin: 0;
    // -webkit-text-stroke: .5px #fff;
    color: var(--text-light);
    font-family: 'PPEditorialNew-Italic', serif;
  }



 .header-wrapper{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  gap: 8px;
  padding: 12px;
 }

 .logo {
  grid-column-start: 1;
  grid-column-end: 4;
 }

 .title {
  display: flex;
  align-items: flex-end;
  grid-column-start: 4;
  grid-column-end: 7;
  cursor: default;
 }

 .links{
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column-start: 7;
  grid-column-end: 10;
 }

 .gallery{
  grid-column-start: 10;
  grid-column-end: 13;
 }

 .about{
  position: absolute;
  right: 12px;
  top: 12px;
 }
</style>

