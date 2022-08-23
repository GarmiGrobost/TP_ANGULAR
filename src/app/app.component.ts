import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Learn Java', done: true },
    { description: 'Learn Spring Boot', done: false },
    { description: 'Learn HTML5 CSS3 JavaScript', done: false },
    { description: 'Learn Angular', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.push({
      description,
      done: false
    });
  }

  // remove(item) {
  //   this.allItems.splice(this.allItems.indexOf(item), 1);
  // }
}
