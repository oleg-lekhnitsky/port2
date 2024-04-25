
<template>
<AppHeader></AppHeader>
  <!-- <div>
    <h1>Hello</h1>
  </div> -->

  <div class="wrapper" 
    style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; flex-direction: column; padding: 120px 12px; overflow: hidden; max-width: 100vw; box-sizing: border-box;">

    <h1>2024</h1>
    <NuxtImg src="/img/3.png" format="webp" alt="Discover Nuxt 3" :placeholder="[]"/>
    <NuxtImg class="" src="/img/15.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]"/>
    <NuxtImg src="/img/13.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />
    

    <NuxtImg src="/img/4.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />
<h1>2023</h1>
    <NuxtImg src="/img/5.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

    <NuxtImg src="/img/19.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

    <NuxtImg src="/img/22.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

    <NuxtImg src="/img/8.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

    <NuxtImg src="/img/28.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]"/>

    <NuxtImg src="/img/14.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]"/>
<h1>2022</h1>
<NuxtImg src="/img/9.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

<NuxtImg src="/img/25.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

<NuxtImg src="/img/21.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />

<NuxtImg src="/img/8.png" format="webp" alt="Discover Nuxt 3" :placeholder="[5]" />
  </div>

</template>



<style lang="scss" >

.NuxtImg{
  height: auto;
  width: 100%;
  min-width: 100%;
  min-height: 200px;
}

caption{
  text-align: center;
}




</style>


<style lang="scss" scoped>
  .header-wrapper{
    height: auto;
    background-color: var(--bg-light);
    color: var(--text-dark);

	*{
      color: var(--text-dark);
      // -webkit-text-stroke: 1px var(--text-dark);

    }
  }



  

</style>