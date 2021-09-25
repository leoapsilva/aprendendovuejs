const HelloVueApp = {
    data() {
      return {
        message: 'Este é o help deste campo',
        counter: 0,
        mostra: true,
        nomeBotao: 'esconde',
        newTodo: '',
        todos: [
            { text: 'Aprender JavaScript'},
            { text: 'Aprender Vue' },
            { text: 'Construir algo bacana!'},
          ],
        } 
    },
    mounted() {
        setInterval(()=>{
          this.counter++
        }, 1000)
    },

    methods: {
        reverseMessage() {
          this.message = this.message
            .split('')
            .reverse()
            .join('')
        },
        esconde() {
            this.mostra = !this.mostra
            if(this.mostra)
                this.nomeBotao = 'esconde'
            else
                this.nomeBotao = 'mostra'
        },
        insereLista() {
            this.todos.push({ text: this.newTodo })
          }
    },
  }
  
  const app = Vue.createApp(HelloVueApp)