<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/" exact class="item">
            <i class="comment outline icon"></i> Words
          </router-link>
          <router-link to="/new" class="item" v-if="login">
            <i class="plus circle icon"></i> New
          </router-link>
          <router-link to="/test" class="item">
            <i class="graduation cap icon"></i> Test
          </router-link>
        </div>
      </div>
      <button @click="giveAdminAccess" class="hidden">Secret button</button>
    </div>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>

      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      login: false
    }
  },
  methods: {
    giveAdminAccess() {
      this.login = true;
    }
  }
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}

.hidden {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
