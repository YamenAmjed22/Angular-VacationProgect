import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageCompComponent } from './home-page-comp/home-page-comp.component';

export const routes: Routes = [
    {path:"" ,component:HomePageCompComponent} ,
    {path:"profile" ,component:ProfilePageComponent}
];
