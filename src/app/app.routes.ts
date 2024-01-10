import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : '' , component : HomeComponent},
    {path : 'home',component:HomeComponent},
    { path : 'events', component: EventsComponent}
];
