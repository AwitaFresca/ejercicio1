import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/models/curso.interface';
import { CursoService } from '../service/curso.service';
import {FormBuilder} from '@angular/forms';
import { validateEventsArray } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public cursos: Curso[]=[];
  form;
  static id: string;

  constructor(private cursoService: CursoService,
  private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required],
 
    });
  }

  ngOnInit(): void {
    this.cursoService.cursos
    .subscribe((respuesta) =>{
      this.cursos = respuesta;
      console.log(this.cursos);
    })
    
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.cursoService.createProducto(this.form.value)
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }

}
