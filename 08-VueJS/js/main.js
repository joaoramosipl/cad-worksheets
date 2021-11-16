
const app = Vue.createApp({
    data: function() {
        return {
            message: 'Hello World!!!!',
            seen: false,
            links: ['Home', 'About', 'Settings'],
            counter: 1,
            isOn: true
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        },
        incrementCounter: function() {
            this.counter++;
        }
    },
    computed: {
        messageReversed() {
            return this.message.split('').reverse().join('')
        }   
    },
    mounted: function() {
        setInterval(this.incrementCounter, 500);
    }
});

app.mount('#app')