import { Component, OnInit } from '@angular/core';
import { httpService } from '../services/http.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [httpService],
})
export class RecipesComponent implements OnInit {
  constructor(private _http: httpService) {}
  //Creamos un array para recoger los ingredientes
  ingredients: [] = [];
  //En estas variables guardamos el tipo de cocina recogido en la respuesta, la imagen, el título, la url ....
  cuisineType: string = '';
  image: string = '';
  ingText: string[] = [];
  ingQuery: string = '';
  titleRecipe: string = '';
  url: string = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.ingQuery}&app_id=d2729b7c&app_key=%209957025f803fa6614c4b60a1114762b1%09`;
  booleano: boolean = false;
  validator: boolean = true;
  //Hacemos la petición http reutilizando el service también en este componente
  getRecipe() {
    this.titleRecipe = this.ingQuery;
    if (this.ingQuery.length <= 1) {
      this.validator = false;
    }
    this.url = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.ingQuery}&app_id=d2729b7c&app_key=%209957025f803fa6614c4b60a1114762b1%09`;
    this._http.apiData(this.url).subscribe(
      (response) => {
        this.ingredients = response.hits[0].recipe.ingredients;
        //Recorremos con un bucle for los ingredientes para poder mostrarlos luego y guardar los datos en cada variable
        for (let i = 0; i < 9; i++) {
          this.ingredients = response.hits[0].recipe.ingredients[i];
          this.ingText = [
            ...this.ingText,
            response.hits[0].recipe.ingredients[i].text,
          ];
          this.cuisineType = response.hits[0].recipe.cuisineType[0];
          this.image = response.hits[0].recipe.image;
        }

        this.booleano = true;
        this.ingQuery = '';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
