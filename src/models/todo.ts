class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString();
    // this.id = new Date().toISOString();
  }
}

export default Todo;
