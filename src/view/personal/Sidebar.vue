<template>
  <div class="content">
    <!--左侧导航栏-->
    <div class="content-left">
      <div class="left-title">
        <router-link to="/">个人中心</router-link>
      </div>

      <!--水平线-->
      <div class="seg"></div>

      <!--菜单栏导航-->
      <div class="nav">
        <!--每一个菜单栏项-->
        <div class="nav-menu">
          <!--主标题-->
          <div class="nav-title" @click="toggleSubMenu(0)">商品管理</div>
          <!--子标题-->
          <div class="nav-content" v-show="subMenuVisible[0]">
            <router-link to="/goods-list">商品列表</router-link>
            <router-link to="/add-goods">添加商品</router-link>
          </div>
        </div>

        <!--每一个菜单栏项-->
        <div class="nav-menu">
          <!--主标题-->
          <div class="nav-title" @click="toggleSubMenu(1)">订单管理</div>
          <!--子标题-->
          <div class="nav-content" v-show="subMenuVisible[1]">
            <router-link to="/order-view">订单查看</router-link>
            <router-link to="/order-sort">订单排序</router-link>
          </div>
        </div>

        <!--每一个菜单栏项-->
        <div class="nav-menu">
          <!--主标题-->
          <div class="nav-title" @click="toggleSubMenu(2)">类目管理</div>
          <!--子标题-->
          <div class="nav-content" v-show="subMenuVisible[2]">
            <router-link to="/category-view">类目查看</router-link>
            <router-link to="/category-delete">类目删除</router-link>
          </div>
        </div>
      </div>

      <!--水平线-->
      <div class="seg"></div>
    </div>

    <!--右侧内容区-->
    <div class="content-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  data() {
    return {
      subMenuVisible: [false, false, false]
    };
  },
  methods: {
    toggleSubMenu(index) {
      this.subMenuVisible[index] = !this.subMenuVisible[index];
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  max-width: 100%;
}

.content-left {
  width: 19%;
  height: 600px;
  background-color: #1c232f;
  float: left;
}

.left-title {
  width: 100%;
  height: 50px;
}

.left-title > a {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  text-decoration: none;
}

.seg {
  height: 1px;
  width: 100%;
  background-color: black;
}

.nav {
  margin: 5px 0;
  display: block;
}

.nav-menu {
  margin-bottom: 5px;
}

.nav-title {
  height: 40px;
  width: 100%;
  color: white;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.nav-content {
  width: 100%;
  height: 100%;
  background-color: #0c1119;
}

.nav-content > a {
  display: block;
  width: 100%;
  height: 30px;
  color: #cccccc;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
  font-size: 13px;
}

.nav-content > a:hover {
  color: #ffffff;
  background-color: #12040c;
}

.content-right {
  width: 81%;
  height: 600px;
  background-color: #6495ed;
  font-size: 50px;
  line-height: 600px;
  text-align: center;
}

</style>
