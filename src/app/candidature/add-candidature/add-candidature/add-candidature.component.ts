import { Component, Input, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-candidature',
  templateUrl: './add-candidature.component.html',
  styleUrls: ['./add-candidature.component.css']
})
export class AddCandidatureComponent implements OnInit {
 

  releveDeNote: File | undefined;
  cv: File | undefined;
  submitted = false; 
  candidatureForm!: FormGroup;
  b2f: File | undefined;
  B2a: File | undefined;
 
  
  constructor(private candidatureService: CandidatureService) {
   
  }
  ngOnInit(): void {
    const candidatureForm = new FormGroup({
      releveDeNote: new FormControl('', [Validators.required]),
      cv: new FormControl('', [Validators.required])
    });
  }
 
  

 
  onReleveDeNoteSelected(event: any) {
    this.releveDeNote = event.target.files[0];
  }

  onCVSelected(event: any) {
    this.cv = event.target.files[0];
  }
  onB2FSelected(event: any) {
    this.b2f = event.target.files[0];
  }
  onB2ASelected(event: any) {
    this.B2a = event.target.files[0];
  }


  onSubmit() {
    if (!this.releveDeNote || !this.cv|| !this.b2f || !this.B2a) {
      alert('Veuillez sélectionner les fichiers avant de soumettre le formulaire');
      return;
    }
  
    const formData = new FormData();
    formData.append('Relevé de Note', this.releveDeNote);
    formData.append('CV', this.cv);
    formData.append('B2 Francais', this.b2f);
    formData.append('B2 Anglais', this.B2a);

    this.candidatureService.addCandidature(formData).subscribe(
      () => alert('Candidature ajoutée avec succès'),
    (error) => console.log('Erreur lors de l\'ajout de la candidature : ', error)
  );
  }

 
  
}
  

  
  

