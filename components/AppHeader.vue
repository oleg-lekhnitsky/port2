<template>
  <div class="header-wrapper">
    <NuxtLink class="logo" to="/">Maks Goncharenok</NuxtLink>
    <p class="title" :class="{ 'menu-open': isMenuOpen }">Photographer (brands+personal)</p>
    <div class="links" :class="{ 'menu-open': isMenuOpen }">
      <NuxtLink to="mailto:maxgelatin@gmail.com">maksgelatin@gmail.com</NuxtLink>
      <div style="display: flex; gap: 2px">
        <NuxtLink to="https://www.instagram.com/maksgelatin" target="_blank">Instagram, </NuxtLink>
        <NuxtLink to="https://www.t.me/maksgelatin" target="_blank">Telegram</NuxtLink>
      </div>
    </div>
    <NuxtLink class="gallery" :class="{ 'menu-open': isMenuOpen }" to="/gallery">Gallery</NuxtLink>
    <NuxtLink class="about" :class="{ 'menu-open': isMenuOpen }" to="/about">About</NuxtLink>

    <button style="position: absolute; top: 0; right: 0; z-index: 9;" class="toggle-menu-btn"
      @click="toggleMenu">{{ isMenuOpen ? 'Menu' : 'Close' }}</button>
    <div class="mobile-header-bg" :class="{ 'menu-open': isMenuOpen }"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// State to track whether the menu is open or closed
const isMenuOpen = ref(true);

// Method to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<style lang="scss" scoped>
.header-wrapper {

  height: auto;
  // color: var(--text-dark);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200000000;
}

.header-wrapper:hover {
  background-color: var(--bg-light);


  a,
  p {
    color: var(--text-dark);
    // -webkit-text-stroke: 1px var(--text-dark);

  }

  a:hover {
    color: var(--accent);
    // -webkit-text-stroke: 1px var(--accent);

    /* text-decoration-line: underline; */
  }

}

a {
  color: var(--text-light);
  width: fit-content;
  height: fit-content;
  // -webkit-text-stroke: .5px #fff;
}

p {
  margin: 0;
  // -webkit-text-stroke: .5px #fff;
  color: var(--text-light);
  font-family: 'PPEditorialNew-Italic';
  font-style: italic;
}



.header-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  gap: 0px;
  padding: 12px;
  height: auto;
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

.links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column-start: 7;
  grid-column-end: 10;
}

.gallery {
  grid-column-start: 10;
  grid-column-end: 13;
}

.about {
  position: absolute;
  right: 12px;
  top: 12px;
}

.toggle-menu-btn {
  display: none;
}

@media screen and (max-width: 760px) {
  
  .header-wrapper {

    background-color: var(--bg-light);
    display: flex;
    gap: 24px;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    font-size: 2rem;
    

  }

  a {
    color: var(--text-dark);
    width: fit-content;
    height: fit-content;
    // -webkit-text-stroke: .5px #fff;
    animation: blur-header 1s ease;
  }


  .logo {
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 1.5rem;
    animation: none;
  }

  .title {
    padding-top: 20%;
    animation: blur-header 1s ease;
  }

  @keyframes blur-header {
    0%{
      filter: blur(20px);
      
    }
    100%{
      filter: blur(00px);
    }
  }

  .about {
    position: static;
    right: 12px;
    top: 12px;
  }

  button.toggle-menu-btn {
    display: block;
    border: none;
    padding: 12px;
    font-size: 1.5rem;
    background-color: transparent;
  }

  .menu {
    color: var(--text-dark);

  }

  .menu-open {
    display: none;

  }

  .mobile-header-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--bg-light);
    z-index: -1;
  }
}
</style>
