<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>Japanese</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(word, i) in words" :key="i">
        <td>{{ word.english }}</td>
        <td>{{ word.japanese }}</td>
        <td width="75" class="center aligned" v-if="login">
          <router-link :to="{ name: 'show', params: { id: word._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned" v-if="login">
          <router-link :to="{ name: 'edit', params: { id: word._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)" v-if="login">
          <a :href="`/words/${word._id}`">Destroy</a>
        </td>
      </tr>
    </table>
    <button @click="giveAdminAccess" class="hidden">Click here</button>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'words',
  data() {
    return {
      words: [],
      login: false
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;

      await api.deleteWord(id);
      this.flash('Word deleted sucessfully!', 'success');
      const newWords = this.words.filter(word => word._id !== id);
      this.words = newWords;
    },
    giveAdminAccess() {
      this.login = true;
    }
  },
  async mounted() {
    this.words = await api.getWords();
    if (this.$route.params.admin === 'yes') {
      this.login = true;
    }
  }
};
</script>

<style scoped>
.hidden {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
