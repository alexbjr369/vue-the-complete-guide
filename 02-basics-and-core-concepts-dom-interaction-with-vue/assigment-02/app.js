const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('This works!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput(event) {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount('#assignment');
