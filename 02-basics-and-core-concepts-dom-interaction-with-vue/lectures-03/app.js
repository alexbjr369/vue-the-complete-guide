const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      lastName: '',
    };
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {},
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
