import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDo } from '../../models/toDo';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  todoList: ToDo[] = [
    // 'List element 1',
    // 'List element 2',
    // 'List element 3',
    // 'List element 4',
    // 'List element 5',
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
    //this.getTodos2();
  }

  getTodos() {
    this.httpClient
      .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (response: ToDo[]) => {
          // console.log('backend den cevap geldi:', response);
          this.todoList = response;
        },
        error: (error) => {
          console.log('backend den hatali cevap geldi:', error);
        },
        complete: () => {
          console.log('backend isteği sonlandi');
        },
      });
  }

  postToDo(){
    let obj = {};
    this.httpClient.post("link", obj).subscribe();
  }

}
