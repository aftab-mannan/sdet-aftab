import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KarateComponent } from './components/karate/karate.component';
import { SeleniumComponent } from './components/selenium/selenium.component';
import { JsframeworksComponent } from './components/jsframeworks/jsframeworks.component';
import { RestassuredComponent } from './components/restassured/restassured.component';
import { EndpointvalidatorComponent } from './components/endpointvalidator/endpointvalidator.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'selenium', component: SeleniumComponent},
  {path: 'js-frameworks', component: JsframeworksComponent},
  {path: 'rest-assured', component: RestassuredComponent},
  {path: 'karate', component: KarateComponent},
  {path: 'endpoint-validator', component: EndpointvalidatorComponent},
  {path: 'contact-us', component: ContactusComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    ContactusComponent,
    KarateComponent,
    SeleniumComponent,
    JsframeworksComponent,
    RestassuredComponent,
    EndpointvalidatorComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
