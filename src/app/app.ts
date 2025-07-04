import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogIN } from './log-in/log-in';
import { UserRegistrationForm } from './user-registration-form/user-registration-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LogIN,UserRegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'GUI';
}
