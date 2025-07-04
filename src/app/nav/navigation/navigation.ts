import { Component } from '@angular/core';
import { SideBar } from '../../side-bar/side-bar';
import { NewsUpdate } from '../../news-update/news-update';
import { Footer } from '../../footer/footer/footer';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  imports: [SideBar,NewsUpdate,Footer,RouterModule,MatButtonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {

}
