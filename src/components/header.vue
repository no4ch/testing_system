<template>
  <div id="header">
    <div class="header">
      <div class="logo">Testing System</div>
      <div class="links">
        <ul>
          <li>
            <a target="_blank" href="http://www.dgma.donetsk.ua/">ДГМА</a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/aezakmi1488/">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
#header {
  background-color: #f5f5f5;
  padding: 20px 5px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
ul > li {
  margin-left: 20px;
}
a {
  text-decoration: none;
}
</style>