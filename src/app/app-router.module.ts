import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {RemindersComponent} from "./reminders/reminders.component";
import {AlarmsComponent} from "./alarms/alarms.component";
import {NotesComponent} from "./notes/notes.component";
import {PageUnderConstructionComponent} from "./page-under-construction/page-under-construction.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'to-do-list', component: ToDoListComponent, pathMatch: 'full' },
  { path: 'reminders', component: RemindersComponent, pathMatch: 'full' },
  { path: 'alarms', component: AlarmsComponent, pathMatch: 'full' },
  { path: 'notes', component: NotesComponent, pathMatch: 'full' },
  { path: 'page-under-construction', component: PageUnderConstructionComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
