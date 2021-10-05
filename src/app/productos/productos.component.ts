import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/models/curso.interface';
import { CursoService } from '../service/curso.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public cursos!: Curso[];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.cursos
    .subscribe((respuesta) =>{
      this.cursos = respuesta;
      console.log(this.cursos);
    })
  }

}
