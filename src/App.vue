
<template>
  <div id="app">
    <Header/>
    <nav class="navbar-default navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center"  id="collapsibleNavbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/') }" to="/">平台首页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/applyhelp') }" to="/applyhelp">申请援助</router-link>
            </li>
            <li class="nav-item" >
              <router-link class="nav-link" :class="{ active: isActive('/onlineraise') }" to="/onlineraise">在线筹集</router-link>
            </li>
            <li class="nav-item dropdown" @mouseover="isSubmenuOpen = true" @mouseleave="isSubmenuOpen = !isSubmenuOpen"  @click="isSubmenuOpen = true">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" >
                慈善新闻
              </a>
              <ul class="dropdown-menu" :class="{ 'show': isSubmenuOpen }" aria-labelledby="navbarDropdown" >
                <li><router-link class="dropdown-item" :class="{ active: isActive('/news') }" to="/news">新闻列表</router-link></li>
                <li><router-link class="dropdown-item" :class="{ active: isActive('/news/detail') }" to="/news/detail">新闻详情</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/sourceactive') }" to="/sourceactive">资源活动</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view>
      </router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/view/header/Header";
import Footer from "@/view/footer/Footer";
export default {
  name: 'App',
  components: {Footer, Header},
  data() {
    return {
      isSubmenuOpen: false
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style scoped>
.abc{

}
.mt-3{
  max-width: 100%;
  max-height: 100%;
  background-color: #F5F0FB;
  margin-top: 0;
}
.nav-link {
  color: #000000;
  font-size: large;
  transition: background-color 0.3s;
  border-radius: 5%;
  font-family: Georgia, serif;
}

.nav-link:hover {
  background-color: #FF9800;
  color: #fff;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  color: #000000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #FF9800;
  color: #fff;
}
.nav-item {
  margin: 10px 50px 10px 85px;
}
.navbar-default {
  background-color: #D8C8E6;
}
</style>

<!--<template>-->
<!--  <div id="app">-->
<!--    <Header/>-->
<!--    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">-->
<!--      <div class="container-fluid">-->
<!--        <a class="navbar-brand" href="#">Logo</a>-->
<!--        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">-->
<!--          <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->
<!--        <div class="collapse navbar-collapse" id="collapsibleNavbar">-->
<!--          <ul class="navbar-nav">-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link" href="#">链接</a>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link" href="#">链接</a>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link" href="#">链接</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Header from "@/view/header/Header";-->
<!--export default {-->
<!--  components:{-->
<!--    Header-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      activeIndex: '1'-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->




