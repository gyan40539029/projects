import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  imports: [MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './user-registration-form.html',
  styleUrl: './user-registration-form.scss'
})
export class UserRegistrationForm {

}
