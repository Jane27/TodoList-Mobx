import{observable, computed,action} from 'mobx';

interface Todo {
    no: number,
    title: string,
    done: boolean
}

class TodoStore {
    @observable todos: Todo[] = [{    no: 0,
        title: 'learn mobx',
        done: false,}];

    @computed get completed() {
        return this.todos.filter(i => i.done).length;
    }

    @computed get total() {
        return this.todos.length;
    }

    @action
    add(title: string) {
        this.todos.push({
            no: this.todos.length,
            title,
            done: false
        });
    }

    delete(index: number) {
        debugger
        this.todos.splice(index, 1);
        debugger
    }

    finish(index: number) {
        debugger
        this.todos[index].done = !this.todos[index].done;
        debugger
    }
}

export default new TodoStore();