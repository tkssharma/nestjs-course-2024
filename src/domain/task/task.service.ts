import { Injectable, NotFoundException } from "@nestjs/common";
import { Task, TaskLists } from "./task.model";

@Injectable()
export class TaskService {

  private tasks: Task[] = TaskLists;

  create(task: Task) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    })
  }
  findAll() {
    return this.tasks;
  }
  deleteTask(id: number) {
    const task = this.tasks.find(i => i.id === id);
    if (!task) {
      throw new NotFoundException()
    }

    this.tasks = this.tasks.filter(i => i.id !== id);
    return null;
  }
  updateTask(id: number, payload: Partial<Task>) {
    const task = this.tasks.find(i => i.id === id);
    if (!task) {
      throw new NotFoundException()
    }
    this.tasks = this.tasks.map(i => {
      if (i.id === id) {
        return { ...i, ...payload }
      }
      return i;
    })
    return task.id
  }
}
