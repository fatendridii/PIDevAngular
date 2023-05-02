import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';
import { AddCandidatureComponent } from './candidature/add-candidature/add-candidature/add-candidature.component';
import { MoyenneFilterCandidatureComponent } from './candidature/MoyenneFilterCandidature/moyenne-filter-candidature/moyenne-filter-candidature.component';
import { AddOffreComponent } from './offre/add-offre/add-offre/add-offre.component';
import { GetRelveDeNoteComponent } from './candidature/getRelvéDeNote/get-relve-de-note/get-relve-de-note.component';
import { MailFormComponentComponent } from './candidature/Mail/mail-form-component/mail-form-component.component';
import { GeneratePdfComponentComponent } from './candidature/generate-pdf-component/generate-pdf-component.component';

const routes: Routes = [
  {  path:'',redirectTo:'home' ,pathMatch:'full'
  
  }
  ,
  {
    path:'home',component:HomeComponent},
    {
      path:'login',component:LoginComponent},
      {
        path:'accueil',component:AccueilComponent}
        ,
      {
        path:'admin',component:NavAdminComponent},
        {
          path:'addCandidature',component:AddCandidatureComponent}
          ,
          {
            path:'filtrer',component:MoyenneFilterCandidatureComponent}
            ,
            {
              path:'addOffre',component:AddOffreComponent}
              ,
              {
                path:'RelveDeNote/:idCandidature',component:GetRelveDeNoteComponent}
                ,
                {
                  path:'mail',component:MailFormComponentComponent} 
                  ,
                  {
                    path:'generatePDF',component:GeneratePdfComponentComponent}               
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
