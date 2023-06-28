<!--<template>-->
<!--  <header class="header" :style="{ backgroundColor: '#2196F3' }">-->
<!--    &lt;!&ndash; Header content &ndash;&gt;-->
<!--    <div class="header-content">-->
<!--      &lt;!&ndash; Logo &ndash;&gt;-->
<!--      <div class="logo">-->
<!--        <a>-->
<!--          <img src="https://www.guangzhoucishan.org.cn/static/20220704/logoV2.png" alt="Logo">-->
<!--        </a>-->
<!--      </div>-->

<!--      &lt;!&ndash; Right content &ndash;&gt;-->
<!--      <div class="right-content">-->
<!--        &lt;!&ndash; Search &ndash;&gt;-->
<!--        <div class="search">-->
<!--          <form action="/Search/SearchList" method="get">-->
<!--            <div class="input-group">-->
<!--              <input type="text" class="form-control" placeholder="全站搜索">-->
<!--              <button type="submit" class="search-btn">搜索</button>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->

<!--        &lt;!&ndash; Login and Registry buttons &ndash;&gt;-->
<!--        <div class="actions">-->
<!--          <div class="login-register-buttons">-->
<!--            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">登录</button>-->
<!--            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#registerModal">注册</button>-->
<!--            <button type="button" class="btn btn-outline-dark" @click="goToPersonalRoute">个人中心</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <Login/>-->
<!--    <Registry/>-->
<!--  </header>-->
<!--</template>-->

<!--<script>-->
<!--import Login from "@/components/header/Login";-->
<!--import Registry from "@/components/header/Registry";-->

<!--export default {-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  name: 'Header',-->
<!--  components: { Login, Registry },-->
<!--  methods: {-->
<!--    goToPersonalRoute() {-->
<!--      this.$router.push({path:'/personal/123'})-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.header {-->
<!--  width: 100%;-->
<!--  min-height: 126px;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  background-color: #2196F3;-->
<!--}-->

<!--.header-content {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  max-width: 95%;-->
<!--  margin: 0 auto;-->
<!--  padding: 0 2%;-->
<!--}-->

<!--.logo img {-->
<!--  height: 90px;-->
<!--}-->

<!--.right-content {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.search {-->
<!--  flex: 1;-->
<!--  margin-right: 20px;-->
<!--}-->

<!--.input-group {-->
<!--  display: flex;-->
<!--}-->

<!--.form-control {-->
<!--  flex: 1;-->
<!--  height: 34px;-->
<!--  padding: 6px 10px;-->
<!--  box-sizing: border-box;-->
<!--}-->

<!--.search-btn {-->
<!--  padding: 6px 10px;-->
<!--  border: none;-->
<!--  background-color: #CCCCCC;-->
<!--  color: #fff;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  height: 34px;-->
<!--  line-height: 1;-->
<!--}-->

<!--.search-btn:hover {-->
<!--  background-color: #45a049;-->
<!--}-->

<!--.actions {-->
<!--  display: flex;-->
<!--  gap: 10px;-->
<!--}-->

<!--.btn-outline-dark {-->
<!--  border-color: transparent;-->
<!--  color: #000000;-->
<!--}-->

<!--.login-register-buttons {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->
<!--.logo{-->
<!--  margin-right: 847px;-->
<!--}-->
<!--@media (max-width: 1500px) {-->
<!--  .header{-->
<!--    min-height: 100px;-->
<!--  }-->
<!--  .header-content {-->
<!--    flex-wrap: wrap;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--  }-->

<!--  .logo {-->
<!--    flex-basis: 30%;-->
<!--    margin-bottom: 10px;-->
<!--  }-->

<!--  .right-content {-->
<!--    flex: 1 1 100%;-->
<!--  }-->

<!--  .search {-->
<!--    flex: 1 1 100%;-->
<!--    margin-bottom: 10px;-->
<!--  }-->

<!--  .input-group {-->
<!--    display: flex;-->
<!--    flex-wrap: wrap;-->
<!--    align-items: center;-->
<!--    justify-content: space-between;-->
<!--  }-->

<!--  .form-control {-->
<!--    width: 70%;-->
<!--    margin-bottom: 10px;-->
<!--    padding: 8px;-->
<!--    box-sizing: border-box;-->
<!--    height: 34px;-->
<!--  }-->

<!--  .search-btn {-->
<!--    width: calc(50% - 10px);-->
<!--    margin-bottom: 10px;-->
<!--    padding: 1px 10px;-->
<!--    box-sizing: border-box;-->
<!--    line-height: 1;-->
<!--    height: 34px;-->
<!--  }-->

<!--  .actions {-->
<!--    flex: 1 1 100%;-->
<!--    justify-content: flex-end;-->
<!--    margin-bottom: 20px;-->
<!--  }-->
<!--  .logo img {-->
<!--    height: 40px;-->
<!--    width: auto;-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <header class="header" :style="{ backgroundColor: '#8257E5' }">
    <!-- Header content -->
    <div class="header-content">
      <!-- Logo -->
      <div class="logo">
        <a>
          <img src="https://www.guangzhoucishan.org.cn/static/20220704/logoV2.png" alt="Logo">
        </a>
      </div>

      <!-- Right content -->
      <div class="right-content">
        <!-- Search -->
        <div class="search">
          <form action="/Search/SearchList" method="get">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="全站搜索">
              <button type="submit" class="search-btn">搜索</button>
            </div>
          </form>
        </div>

        <!-- Login and Registry buttons -->
        <div class="actions">
          <div class="login-register-buttons">
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">登录</button>
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#registerModal">注册</button>
            <button type="button" class="btn btn-outline-dark" @click="goToPersonalRoute">个人中心</button>
          </div>
        </div>
      </div>
    </div>

    <Login/>
    <Registry/>
  </header>
</template>

<script>
import Login from "@/components/header/Login";
import Registry from "@/components/header/Registry";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: { Login, Registry },
  methods: {
    goToPersonalRoute() {
      this.$router.push({path:'/personal/123'})
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196F3;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 2%;
}


.logo img {
  height: 90px;

}

.right-content {
  display: flex;
  align-items: center;
  margin-left: 300px;
}

.search {
  flex: 1;
  margin-right: 20px;
}

.input-group {
  white-space: nowrap; /* 添加此行以防止换行 */
}

.form-control {
  flex: 1;
  height: 34px;
  padding: 6px 10px;
  box-sizing: border-box;
}

.search-btn {
  padding: 6px 10px;
  border: none;
  background-color: #CCCCCC;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  height: 34px;
  line-height: 1;
}

.search-btn:hover {
  background-color: #45a049;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn-outline-dark {
  border-color: transparent;
  color: #000000;
}

.login-register-buttons {
  display: flex;
  align-items: center;
}

/* 添加媒体查询以实现响应式布局 */
@media (max-width: 768px) {

  .logo img {
    height: 40px;
  }
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .search {
    margin-top: 10px;
    margin-right: 0;
  }

  .actions {
    margin-top: 10px;
  }
  .right-content{
    margin-left: auto;
  }

}
</style>






