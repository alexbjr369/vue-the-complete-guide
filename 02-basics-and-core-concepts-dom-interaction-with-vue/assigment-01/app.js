const app = Vue.createApp({
  data() {
    return {
      name: 'John',
      age: 36,
      imageUrl: 'http://placehold.it/320x150'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
