import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/models/curso.interface';
import { CursoService } from './service/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejercicio1';
  public cursos: Curso[] = [];
  constructor(private cursoService:CursoService){

  }

  ngOnInit(): void{
    this.cursoService.cursos.subscribe(resp => {
      this.cursos = resp;
      console.log(this.cursos);
    })
  }
}
