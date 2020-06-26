import { Component, OnInit } from '@angular/core';
import { DatosusService } from 'src/app/services/datosus.service';
import { DatosUs } from 'src/app/models/datosu-model';
import { Publicacion } from 'src/app/models/publicacion-model';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.page.html',
  styleUrls: ['./add-publicacion.page.scss'],
})
export class AddPublicacionPage implements OnInit {

  perfil: DatosUs[];

  constructor(private publicacionService: PublicacionService, private route:Router, private datosusService: DatosusService) {

    this.datosusService.traerPerfil().subscribe((data: DatosUs[]) => {
      this.perfil = data;
      console.log(this.perfil);
    }, (error) => {
      console.log(error);
      alert('error');
    });

   }

  ngOnInit() {
  }

  datosPubli: Publicacion[];

  publicacion: Publicacion = {
    idPublicacion: 0,
    FK_idUsuario: 0,
    estadoPublicacion: "",
    fechaPublicacion: "",
    contenido: ""
  }

  spinner = false;
  texto = true;

  activarSpinner() {
    this.spinner=true;
    this.texto = false;
  }

  guardarPublica(publi) {
    this.publicacionService.guardarPublicacion(publi.value).subscribe(data => {
      this.spinner = false;
      this.texto = true;
      this.route.navigate(['/tab/publicaciones']);
    },(error)=>{
      alert('Ocurrió un error');
    });
  }

}
