import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { NavUserComponent } from './shared/nav-user/nav-user.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { AddCandidatureComponent } from './candidature/add-candidature/add-candidature/add-candidature.component';
import { MoyenneFilterCandidatureComponent } from './candidature/MoyenneFilterCandidature/moyenne-filter-candidature/moyenne-filter-candidature.component';
import { AddOffreComponent } from './offre/add-offre/add-offre/add-offre.component';
import { GetRelveDeNoteComponent } from './candidature/getRelvéDeNote/get-relve-de-note/get-relve-de-note.component';
import { MailFormComponentComponent } from './candidature/Mail/mail-form-component/mail-form-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponentComponent } from './candidature/MoyenneFilterCandidature/popup-component/popup-component.component';
import { GeneratePdfComponentComponent } from './candidature/generate-pdf-component/generate-pdf-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavAdminComponent,
    NavUserComponent,
    FooterComponent,
    LoginComponent,
    AccueilComponent,
    AddCandidatureComponent,
    MoyenneFilterCandidatureComponent,
    AddOffreComponent,
    GetRelveDeNoteComponent,
    MailFormComponentComponent,
    PopupComponentComponent,
    GeneratePdfComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
