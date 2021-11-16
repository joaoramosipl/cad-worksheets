
const app = Vue.createApp({})

app.component('button-counter', {
    props: ['buttontext'],
    template: `
        <button>{{buttontext}}</button>
    `
});

app.mount('#app')