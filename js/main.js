const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newTask: "",
            tasks: [
                { text: "Imparare a disegnare", done: true },
                { text: "Creare un art da zero", done: false },
                { text: "publicare l'art", done: false },
            ],

            newTodo: {
                text: "",
                done: false,
            },

            error: false,
        }
    },

    methods: {
        addTask() {
            this.tasks.push({
                text: this.newTask,
                done: false
            });
            this.newTask = "";
        },

        removeTask(i) {
            this.tasks.splice(i, 1);
        },

        doneTodo(todo) {
            todo.done = !todo.done;
        }
    },
});

app.mount("#app");