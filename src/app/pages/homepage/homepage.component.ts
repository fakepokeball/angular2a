import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  todoList: string[] = [
    'List element 1',
    'List element 2',
    'List element 3',
    'List element 4',
    'List element 5',
  ];
}
