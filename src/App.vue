<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggleFavorite="toggleFavoriteStatus"
      ></friend-contact>
    </ul>
    <say-hi @send-me="saySomething"></say-hi>
    <kira-existance :kira="kira" @change-kkira="toggleKira"></kira-existance>
    <contact-me
      v-for="nat in naty"
      :id="nat.id"
      :key="nat.id"
      :broName="broName"
      :select="nat.select"
      @goodor-bad="changeBad"
    ></contact-me>
  </section>
</template>

<script>
import SayHi from './components/SayHi.vue';
export default {
  components: { SayHi },
  data() {
    return {
      kira: true,
      friends: [
        {
          id: 'Mohtasim Hasan',
          name: 'Mohtasim Hasan',
          phone: '02341 41234213',
          email: 'mohtasim@gmail.com',
          isFavorite: true
        },
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
          isFavorite: true
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          isFavorite: false
        }
      ],
      broName: 'Shihab',
      naty: [
        {
          id: '333',
          dog: 'no',
          select: true
        },
        {
          id: '444',
          dog: 'yes',
          select: false
        }
      ]
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      console.log(friendId);
      const identifiedFriend = this.friends.find(
        friend => friend.id === friendId
      );
      console.log('hey', identifiedFriend);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    changeBad(obj) {
      console.log(obj);
      const indenti = this.naty.find(nat => nat.id === obj);
      indenti.select = !indenti.select;
      console.log(obj, 'why not');
    },
    toggleKira(k) {
      console.log(k);
      k = 'sdalkf';
      console.log(k);
      this.kira = !this.kira;
    },
    saySomething(e) {
      console.log('Hello', e);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #a3008d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
