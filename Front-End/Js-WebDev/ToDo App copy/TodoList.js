import { STATUSES } from "./Task"

export function ToDoList() {
  this.todoList = []
  this.addTask = (task) => {
    this.todoList.push(task)
  }

  this.removeTask = (removeTask) => {
    this.todoList = this.todoList.filter((task) => {
      return task.text !== removeTask.text
    })
  }

  this.getAllTasks = () => {
    return this.todoList
  }

  this.toggleStatus = (toggleTask) => {
    this.todoList = this.todoList.map(task => {
      if (task.text === toggleTask.text) {
        task.status = task.status === STATUSES.COMPLETED ? STATUSES.PENDING : STATUSES.COMPLETED
      }
      return task
    })
  }

  this.getAllPendingTask = () => {
    return this.todoList.filter((task) => {
      if (task.status === STATUSES.PENDING)
        return true
      else
        return false
    })
  }
}