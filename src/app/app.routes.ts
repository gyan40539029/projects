import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { User } from './user/user';
import { College } from './college/college';
import { Course } from './course/course';
import { Class } from './class/class';
import { Book } from './book/book';
import { Student } from './student/student';
import { Trainer } from './trainer/trainer';
import { Account } from './account/account';


export const routes: Routes = [
    {path:'',component:Dashboard},
    {path:'user',component:User},
    {path:'college',component:College},
    {path:'course',component:Course},
    {path:'class',component:Class},
    {path:'book',component:Book},
    {path:'student',component:Student},
    {path:'trainer',component:Trainer},
    {path:'account',component:Account},
    {path:'**',redirectTo:'',pathMatch:'full'}
];
