import {Component} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton, MatFabAnchor, MatFabButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardHeader} from "@angular/material/card";
import {MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatTabHeader} from "@angular/material/tabs";
import {TO_DO_FIELDS, ToDoDto} from "../shared/dtos/to-do.dto";
import {Form, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToDoPayload} from "../shared/payloads/to-do.payload";
import {ToDoService} from "../shared/services/to-do-service";

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [MatTableModule, MatInput, MatFormField, MatLabel, MatButton, MatFabAnchor, RouterLink, MatFabButton, MatIcon, MatCard, MatCardHeader, MatExpansionPanel, MatExpansionPanelHeader, MatTable, MatTabHeader, MatHeaderCell, MatCell, MatColumnDef, MatRow, MatHeaderRow, ReactiveFormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'

})
export class ToDoListComponent {

  public dataSource: MatTableDataSource<ToDoDto>;
  public displayedColumns: string[] = TO_DO_FIELDS;
  public addToDoFg: FormGroup;

  constructor(private toDoService: ToDoService) {
    this.addToDoFg = new FormGroup({});

    this.addToDoFg.addControl('name', new FormControl('',[Validators.required]));


    this.dataSource = new MatTableDataSource();

    this.toDoService.getToDos().subscribe(data => {
      this.dataSource.data.push(data);
    });
  }

  addToDo() {
    if (this.addToDoFg.valid &&
      this.addToDoFg.controls['name'].dirty
      && this.addToDoFg.controls['name'] !== null
      && this.addToDoFg.controls['name'].value !== '') {
      let payload: ToDoPayload = {
        name: this.addToDoFg.get('name')!.value
      };
      console.log(payload);
    }
  }

}
