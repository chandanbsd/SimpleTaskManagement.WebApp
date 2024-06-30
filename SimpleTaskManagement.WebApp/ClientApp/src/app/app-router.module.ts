import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {RemindersComponent} from "./reminders/reminders.component";
import {AlarmsComponent} from "./alarms/alarms.component";
import {NotesComponent} from "./notes/notes.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'ToDoList', component: ToDoListComponent, pathMatch: 'full' },
  { path: 'Reminders', component: RemindersComponent, pathMatch: 'full' },
  { path: 'Alarms', component: AlarmsComponent, pathMatch: 'full' },
  { path: 'Notes', component: NotesComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
