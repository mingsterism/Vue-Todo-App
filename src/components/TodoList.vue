<template>
<section class="main">
    <input
        type="checkbox"
        class="toggle-all"
        @click="toggleAllTodo"
        :checked = "isAllChecked"
    />
    <ul class="todo-list">
        <todo
            v-for="todo in todos"
            :todo="todo"
            :key="todo.key"
            @deleteTodo="deleteTodo"
            @checkTodo="checkTodo"
            :isEditing="isEditing"
            @startEdit="startEdit"
            @finishEdit="finishEdit"
        />
    </ul>
</section>
</template>
<script>
import Todo from './Todo.vue';
import { mapGetters } from 'vuex';

export default{
    name: 'TodoList',
    data () {
        return {
            isEditing: ''
        }
    },
    computed: mapGetters([
        'isAllChecked'
    ]),
    props: {
        todos: Array
    },
    components: {
        Todo
    },
    methods: {
        deleteTodo (deleteTargetKey) {
            this.$emit('deleteTodo', deleteTargetKey);
        },
        checkTodo (isDone, id) {
            this.$emit('completedTodo', isDone, id);
        },
        startEdit (editingTarget) {
            this.isEditing = editingTarget;
        },
        finishEdit (id, todo) {
            const targetId = id;
            const editedTodo = todo;

            if(this.isEditing.length<=0){
                return false;
            }
            this.$emit('editTodo', targetId, editedTodo);
            this.isEditing = '';
        },
        toggleAllTodo (e) {
            const isChecked = !e.target.checked;

            this.$emit('toggleAllTodo', isChecked)
        }
    }
}
</script>
<style>

.main {
	position: relative;
	z-index: 2;
	border-top: 1px solid #e6e6e6;
}
.main label[for='toggle-all'] {
    display: none;
}
.main .toggle-all {
    position: absolute;
    top: -55px;
    left: -12px;
    width: 60px;
    height: 34px;
    text-align: center;
    border: none;
}
.main .toggle-all:before{
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}
.main .toggle-all:checked:before{
    color: #737373;
}
.main .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
	.toggle-all,
	.todo-list li .toggle {
		background: none;
	}
	.todo-list li .toggle {
		height: 40px;
	}
	.toggle-all {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
		-webkit-appearance: none;
		appearance: none;
	}
}
</style>
