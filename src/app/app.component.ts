import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tobeto';
  count = 0;
  imputValue: string = '';
  obBtnClick(event: Event) {
    console.log(this.imputValue);
    this.count++;
  }
  onChange(event: Event) {
    let element = event.target as HTMLInputElement;
    console.log('Input value is changed', element.value);
    this.imputValue = element.value;
  }
}
