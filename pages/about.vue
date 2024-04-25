<template>

  <div class="wrapper-about">

    <!-- <div class="avatar"></div> -->
    <h2 class="summary">
      
      With my camera in hand and a decade of commercial photography
      experience, I can help to tell your story in a visually stunning way. I specialize in capturing beauty of brands
      and individuals.
      <br>
      Currently in [Minsk, Belarus] </h2>
    <div class="bg-about"
      style="background-size: cover; height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; z-index: -1; background-color: aqua;">
    </div>
    <h3 class="heading ">Featured by</h3>
    <div class="clients short">
      <NuxtLink id="apple" to="/clients/client4">Apple</NuxtLink>
      <NuxtLink id="adobe" to="/clients/client4">Adobe</NuxtLink>
      <NuxtLink id="adobe" to="/clients/client4">Vogue</NuxtLink>



    </div>
    <!-- <div class="clients long">
      <NuxtLink to="/clients/client4">Vogue</NuxtLink>  
        
    </div> -->

    <h3 class="heading sticky">Worked with</h3>
    <div class="clients short">
      <NuxtLink id="nike" to="/clients/client4">Nike</NuxtLink>
      <NuxtLink id="zara" to="/clients/client4">Zara</NuxtLink>
      <NuxtLink :to="'/clients/client1'" :id="'samsung'">Samsung</NuxtLink>
      <NuxtLink :to="'/clients/client2'" :id="'xiaomi'">Xiaomi</NuxtLink>
      <NuxtLink :to="'/clients/client1'" :id="'casio'">Casio</NuxtLink>
      <NuxtLink :to="'/clients/client3'" :id="'honor'">Honor</NuxtLink>
      <NuxtLink :to="'/clients/client3'" :id="'oppo'">Oppo</NuxtLink>
      <NuxtLink :to="'/clients/client4'" :id="'dima-ermuzevich'">Dima Ermuzevich</NuxtLink>
      <NuxtLink :to="'/clients/client4'" :id="'pexels'">Pexels</NuxtLink>
      <NuxtLink :to="'/clients/client4'" :id="'stocksy'">Stocksy</NuxtLink>
      <NuxtLink :to="'/clients/client4'" :id="'life'">Life</NuxtLink>
      <NuxtLink to="/clients/client3">Mophie</NuxtLink>
      <NuxtLink to="/clients/client3">Pocket Rocket  </NuxtLink>
      <NuxtLink to="/clients/client4">Badoo</NuxtLink>
      <NuxtLink to="/clients/client4">Papa John’s</NuxtLink>


    </div>
    <!-- <div class="clients long">
      <NuxtLink to="/clients/client1">Casio</NuxtLink>
      <NuxtLink to="/clients/client2">Stutterheim</NuxtLink>
      <NuxtLink to="/clients/client3">Mophie</NuxtLink>
      <NuxtLink to="/clients/client4">Dima Ermuzevich</NuxtLink>
      <NuxtLink to="/clients/client3">Pocket Rocket  </NuxtLink>
      <NuxtLink to="/clients/client4">Papa John’s</NuxtLink>
      <NuxtLink to="/clients/client4">Life</NuxtLink>
      <NuxtLink to="/clients/client4">Badoo</NuxtLink>
    </div> -->

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
  background-image: url('/public/img/2.png');
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
  padding-bottom: 80px;

}

.heading {
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 18px;
}

.clients {

  display: flex;
  flex-direction: column;

  cursor: default;
  font-size: 1rem;
  line-height: 1.3;

  a {
    position: relative;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 5rem;
    line-height: 1.1;
    letter-spacing: -.03rem;
  }

  a:hover {
    color: var(--accent);
  }

}

.short {
  grid-column-start: 4;
  grid-column-end: 12;
}

.long {
  grid-column-start: 7;
  grid-column-end: 13;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-family: 'PPNeueMontreal-Medium';
  font-weight: 400;
  font-size: 1.15rem;
  line-height: 1.2;
}

.clients a:hover::after {
  content: "";
  background-image: none;
  background-size: cover;
  background-position: center;
  position: absolute;

  top: 20px;
  left: 110%;
  width: 15vw;
  height: 15vw;
  transform: translateY(-15vw);
  z-index: 9999999999999;
  animation: op .5s ease;
}

@keyframes op {
  0% {
    opacity: 0;
    transform: translateY(-12vw);
    filter: blur(14px);
  }

  100% {
    opacity: 1;
    transform: translateY(-15vw);
    filter: blur(0px);
  }
}

#apple:hover::after {
  background-image: url('/public/img/12.png');
}

#adobe:hover::after {
  background-image: url('/public/img/16.png');
}


#nike:hover::after {
  background-image: url('/public/img/2.png');
}

#zara:hover::after {
  background-image: url('/public/img/5.png');
}

#samsung:hover::after {
  background-image: url('/public/img/20.png');
}

.bg-about {
  background-image: url('/public/img/cover-m.png');
  background-size: cover;
  background-position: right;
  mix-blend-mode: multiply;
}
</style>