<template>
  <div class="header-wrapper" style="position: fixed; top: 0; left: 0; z-index: 200000000;">
    <NuxtLink class="logo" to="/">Maks Goncharenok</NuxtLink>
    <p class="title">Photographer based in Minsk</p>
    <div class="links" style="display: flex; flex-direction: column;">
      <NuxtLink to="mailto:maxgelatin@gmail.com">maksgelatin@gmail.com</NuxtLink>
      <NuxtLink to="https://www.instagram.com/maksgelatin">Instagram</NuxtLink>
    </div>
    <NuxtLink class="about" to="/about">About</NuxtLink>
    <NuxtLink class="contact" to="/contact">Contact</NuxtLink>
  </div>
</template>



<script lang="ts" setup>

</script>

<style lang="scss">

  @font-face {
    font-family:'PPEditorialNew-Regular';
    src: url(/assets/fonts/PPEditorialNew-Regular.woff2);
  }

  @font-face {
    font-family:'PPEditorialNew-Italic';
    src: url(/assets/fonts/PPEditorialNew-Italic.woff2);
  }



  .header-wrapper{
    height: auto;
    font-family: 'PPEditorialNew-Regular', serif;
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
  grid-column-start: 7;
  grid-column-end: 10;
 }

 .about{
  grid-column-start: 10;
  grid-column-end: 13;
 }

 .contact{
  position: absolute;
  right: 12px;
  top: 12px;
 }
</style>

