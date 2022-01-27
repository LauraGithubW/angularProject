import { Component, OnInit } from '@angular/core';
//Importamos el service que hará las peticiones
import { httpService } from '../services/http.service';

@Component({
  selector: 'app-nutritional-info',
  templateUrl: './nutritional-info.component.html',
  styleUrls: ['./nutritional-info.component.css'],
  //Añadimos el service
  providers: [httpService],
})
export class NutritionalInfoComponent implements OnInit {
  //Variable con la url a la api
  url: string =
    'https://api.edamam.com/api/nutrition-data?app_id=ef06cc45&app_key=59b66d422ed4d0a5d8a57ebfce042cb7&nutrition-type=cooking&ingr=';
  //Aquí recogemos el valor que escriba el usuario para hacer su búsqueda
  fruitName: any = '';

  apiKey: string = '6c4fe1be';

  responseInfo: any;
  //Show y error los uso para luego mostrar u ocultar los divs con la directiva ngIf
  show: boolean = false;
  disablButton: boolean = false;
  error: boolean = false;
  infoForm: any;
  errorDiv: boolean = false;
  //Función en la que hacemos validaciones de lo que introduce el usuario y hacemos la petición con el service de http que hemos creado con anterioridad
  infoFruits() {
    if (!this.fruitName || this.fruitName.length <= 1) {
      alert('Enter a valid ingredient');
    }

    this.httpService.apiData(this.url + this.fruitName).subscribe(
      (response) => {
        this.responseInfo = response;

        if (this.responseInfo.totalNutrientsKCal.ENERC_KCAL.quantity == 0) {
          this.error = true;
        } else {
          this.show = true;
        }

        this.fruitName = '';
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //Aquí inyectamos el servicio para hacer peticiones
  constructor(private httpService: httpService) {}

  ngOnInit(): void {}
}
