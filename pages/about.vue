<template>
  <div class="wrapper-about">
    <div class="avatar"></div>
    <h2 class="summary" style="margin-bottom: 120px;">With my camera in hand and a decade of commercial photography experience, I can help to tell your story in a visually stunning way. I specialize in capturing beauty of brands and individuals.</h2>

    <h3 class="heading">Clients</h3>
    <div class="clients short">
      <NuxtLink to="/clients/client4">Zara</NuxtLink>    
      <NuxtLink to="/clients/client1">Samsung</NuxtLink>
      <NuxtLink to="/clients/client2">Xiaomi</NuxtLink>
      <NuxtLink to="/clients/client3">Honor</NuxtLink>
      <NuxtLink to="/clients/client4">Pexels</NuxtLink>
      <NuxtLink to="/clients/client3">Oppo</NuxtLink>
        
    </div>
    <div class="clients long">
      <NuxtLink to="/clients/client1">Casio</NuxtLink>
      <NuxtLink to="/clients/client2">Stutterheim</NuxtLink>
      <NuxtLink to="/clients/client3">Mophie</NuxtLink>
      <NuxtLink to="/clients/client4">Dima Ermuzevich</NuxtLink>
      <NuxtLink to="/clients/client3">Pocket Rocket  </NuxtLink>
      <NuxtLink to="/clients/client4">Papa John’s</NuxtLink>
    </div>


  </div>

</template>


<style lang="scss">
.wrapper-about {
  margin-top: 102px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  gap: 8px;
  padding: 12px;
}

.avatar {
  grid-column-start: 1;
  grid-column-end: 4;
  width: 4rem;
  height: 4rem;
  background-image: url('/public/img/1.png');
  background-size: cover;
  background-position: center;
  border-radius: 999px;
}

.summary {
  grid-column-start: 4;
  grid-column-end: 9;
  display: flex;
  align-items: flex-end;
  cursor: default;
  
}

.heading {
    grid-column-start: 1;
  grid-column-end: 4;
    font-size: 1rem;
    color: #333;
  }

  .clients {

    display: flex;
    flex-direction: column;
    cursor: default;
    font-size: 1rem;
    line-height: 1.3;
    a{
    color: var(--text-dark);
    text-decoration: none;
    font-size: 5rem;
    line-height: 1.1;
      letter-spacing: -.03rem;
  }

  a:hover{
    color: var(--accent);
  }
    
  }

  .short {
    grid-column-start: 4;
    grid-column-end: 7;
  }

  .long {
    grid-column-start: 7;
    grid-column-end: 13;
  }

h1 {
  font-size: 2rem;
  color: #333;
}

h2 {
  // font-family: 'PPEditorialNew-Regular', serif;
  font-family: Helvetica, Arial, sans-serif;
  font-family: 'PPNeueMontreal-Medium';
  font-weight: 400;
  // letter-spacing: -.02rem;
  // font-size: 24px !important;
  font-size: 1.25rem;
  line-height: 1.2;
}


</style>