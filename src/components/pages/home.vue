<template>
  <div id="home">
    <!-- <h1>Главная страница</h1>
    <router-link tag="div" to="/login">логин</router-link>-->
    <div class="home">
      <!-- <div class="link">Студент</div> -->
      <router-link class="link" tag="div" to="/login">
        <div>Студент</div>
        <div>студ</div>
      </router-link>
      <!-- <div class="link">Преподаватель</div> -->
      <router-link class="link" tag="div" to="/login">
        <div>Преподаватель</div>
        <div>студ</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#home {
  display: flex;
  justify-content: center;
  /* background-color: chartreuse; */
}
.home {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#home,
.home {
  width: 100%;
}
.link {
  /* background-color: royalblue; */
  background-color: #f5f5f5af;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 25vw;
  /* padding: 15% 10%; */
  border-radius: 7%;
  font-size: 2em;
  cursor: pointer;
}

.link:hover {
  width: 22vw;
  height: 27vw;
}
</style>