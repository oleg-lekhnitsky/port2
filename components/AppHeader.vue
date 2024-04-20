<template>
  <div class="wrapper" style="position: fixed; top: 0; left: 0; z-index: 200000000;">
    <a class="logo" href="/">Max Goncharenok</a>
    <p class="title">Photographer based in Minsk</p>
    <div class="links" style="display: flex; flex-direction: column;">
      <a href="">maxgelatin@gmail.com</a>
      <a href="">Instagram</a>
    </div>
    <a class="about" href="/about">About</a>
    <a class="contact" href="">Contact</a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  *{
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 400;
    font-family: 'PPEditorialNew-Regular', serif;
    letter-spacing: .03em;
    --bg: #fafafa;
    --text: #171717;
    --accent: #0811EA;
  }

  .wrapper{
    height: auto;
  }

  .wrapper:hover{
    background-color: var(--bg);


    a, p{
      color: var(--text);
      -webkit-text-stroke: 1px var(--text);

    }
    a:hover{
    color: var(--accent);
    -webkit-text-stroke: 1px var(--accent);

    /* text-decoration-line: underline; */
  }

  }

  a{
    color: white;
    width: fit-content;
    height: fit-content;
    -webkit-text-stroke: .5px #fff;
  }

  p{
    margin: 0;
    -webkit-text-stroke: .5px #fff;
    font-family: 'PPEditorialNew-Italic', serif;
  }



 .wrapper{
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