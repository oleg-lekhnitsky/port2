<template>
  <div class="wrapper-about">
    <div class="avatar"></div>
    <h2 class="summary">With my camera in hand and a decade of commercial photography experience, I can help to tell your story in a visually stunning way. I specialize in capturing beauty of brands and individuals.</h2>

    <h3 class="heading">Clients</h3>
    <div class="clients short">
      <NuxtLink to="/clients/client1">Client 1</NuxtLink>
      <NuxtLink to="/clients/client2">Client 2</NuxtLink>
      <NuxtLink to="/clients/client3">Client 3</NuxtLink>
      <NuxtLink to="/clients/client4">Client 4</NuxtLink>
    </div>
    <div class="clients long">
      <NuxtLink to="/clients/client1">Client 1</NuxtLink>
      <NuxtLink to="/clients/client2">Client 2</NuxtLink>
      <NuxtLink to="/clients/client3">Client 3</NuxtLink>
      <NuxtLink to="/clients/client4">Client 4</NuxtLink>
    </div>


  </div>

</template>


<style lang="scss">
.wrapper-about {
  margin-top: 62px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  gap: 8px;
  padding: 12px;
  background-color: #b6b6b6;
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
  font-size: 1rem;
  line-height: 1.3;
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
    font-size: 4rem;
  
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
    grid-column-end: 12;
  }

h1 {
  font-size: 2rem;
  color: #333;
}


</style>