import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToDoDto} from "../dtos/to-do.dto";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl: string = 'https://localhost:5000';

  constructor(private http: HttpClient) {
  }

  getToDos(): Observable<ToDoDto> {
    return this.http.get<ToDoDto>(`${this.apiUrl}/todos`);
  }
}
