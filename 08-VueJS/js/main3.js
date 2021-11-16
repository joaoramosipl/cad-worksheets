
const app = Vue.createApp({});

app.component('toggle', {
    props: ['title'],
    data() {
        return {
            isOn: false
        }
    },
    methods: {
        toggleClick() {
            this.isOn = !this.isOn
        },
        
    },
    computed: {
        changeLight() {
            return {
                'fas': this.isOn,
                'far': !this.isOn
            }
        }
    },
    template: `
    <i class="fa-lightbulb" :class="changeLight"></i>
    <p>{{ title }}</p>
    <i @click="toggleClick" class="fas" :class="{'fa-toggle-on': isOn, 'fa-toggle-off': !isOn}"></i>`
})

app.mount('#app')