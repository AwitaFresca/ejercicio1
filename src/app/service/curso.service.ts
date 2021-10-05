import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from 'src/models/curso.interface';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  public cursos!: Observable<Curso[]>;
  public cursoCollection! : AngularFirestoreCollection<Curso>;
  constructor(private firestore: AngularFirestore) {
    this.cursoCollection = this.firestore.collection<Curso>('cursos');
  console.log(this.cursoCollection);
  this.obtenerCursos();
   }
   //obtiene todos los cursos de la base de datos
  obtenerCursos(){
    this.cursos = this.cursoCollection!.snapshotChanges().pipe(
    map (action => action.map (a => a.payload.doc.data() as Curso))
    )
  }
  //obtiene un curso de la base de datos por el id
  obtenerCurso(idCurso:string){
 
  }
  createCurso(data: Curso){
  
  }

  actualizarCurso(idCurso: string, data: Curso){

    
  }

  eliminarCurso(idCurso:string){

  }
}




