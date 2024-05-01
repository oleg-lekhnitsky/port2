<template>


  <div>
    <AppHeader></AppHeader>

    <div class="wrapper" style="">

      <!-- <h1>2024</h1> -->
      <NuxtImg src="/img/3.png" format="webp" alt="Discover Nuxt 3" :placeholder="[]" />
      <NuxtImg src="/img/15.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />


      <NuxtImg src="/img/4.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <NuxtImg src="/img/5.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />
      <h1 style="text-align: center;">(Apple) <br> specifies a grid item's size and location within a grid row by
        contributing a line, a span, or nothing automatic to its grid placement, </h1>
      <NuxtImg src="/img/13.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <NuxtImg src="/img/19.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <NuxtImg src="/img/22.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <!-- <NuxtImg src="/img/8.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" /> -->

      <NuxtImg src="/img/28.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <NuxtImg src="/img/14.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />
      <h1 style="text-align: center;">(Apple) <br> specifies a grid item's size and location within a grid row by
        contributing a line, a span, or nothing automatic to its grid placement, </h1>
      <NuxtImg src="/img/9.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <NuxtImg src="/img/25.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <NuxtImg src="/img/21.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

      <!-- <NuxtImg src="/img/8.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" /> -->
    </div>
  </div>


</template>



<style lang="scss" scoped>
.NuxtImg {
  height: auto;
  width: 100%;
  min-width: 100%;
  min-height: 200px;
}

caption {
  text-align: center;
}
</style>


<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  flex-direction: column;
  padding: 120px 12px;
  max-width: 100vw;
  box-sizing: border-box;
}


.header-wrapper {
  height: auto;
  background-color: var(--bg-light);
  color: var(--text-dark);

  * {
    color: var(--text-dark);
    // -webkit-text-stroke: 1px var(--text-dark);

  }
}

h1 {
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: white;
}

.wide {
  grid-column: span 2;
}

.full {
  grid-column: span 4;
}

@media screen and (max-width: 760px) {
  .wrapper {
  display: flex;
  flex-direction: column;
  gap: 0px;
  flex-direction: column;
  padding: 52px 0px 0px 0px;

}
}
</style>