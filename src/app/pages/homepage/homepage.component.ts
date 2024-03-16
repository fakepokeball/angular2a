import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  todoList: string[] = [
    'List element 1',
    'List element 2',
    'List element 3',
    'List element 4',
    'List element 5',
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    //this.getTodos();
    this.getTodos2();

  }

  getTodos() {
    // this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    console.log("fonksiyon öncesi");
    this.someAsyncOperation()
      .then((response: string) => {
        console.log('cevap başarili promise ten şu değer geldi:', response);
      }) //işlem başarılı
      .catch((error) => {
        console.log('cevap başarisiz promise ten şu değer geldi:', error);
      }) //işlem başarılı
      .finally(() => {
        console.log("Promise işlemi başarili ya da başarisiz sonlandi.");
      }); //işlem bitti. (başarılı/başarısız)
      console.log("fonksiyon sonrasi");
  }

  async getTodos2(){
    try {
      let value: string = await this.someAsyncOperation();
    console.log(value);
    } catch (error) {
      console.log("Hata:",error);
    }
    
  }

  someAsyncOperation(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('sonuç geldi');
      }, 3000);
    });
  }
}
