import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'myform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  username: string = '';

  writeToConsole() {
    console.log(this.username);
  }

  changeFormTs() {
    this.username = 'sample';
  }
}
