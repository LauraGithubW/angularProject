import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NutritionalInfoComponent } from './nutritional-info/nutritional-info.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpService } from './services/http.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nutritionalinfo', component: NutritionalInfoComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NutritionalInfoComponent,
    RecipesComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [httpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
