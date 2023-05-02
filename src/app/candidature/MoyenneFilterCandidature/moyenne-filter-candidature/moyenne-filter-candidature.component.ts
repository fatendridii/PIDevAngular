import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-moyenne-filter-candidature',
  templateUrl: './moyenne-filter-candidature.component.html',
  styleUrls: ['./moyenne-filter-candidature.component.css']
})
export class MoyenneFilterCandidatureComponent implements OnInit {

  constructor(private s:CandidatureService) { }
  candidature:any
  ngOnInit(): void {
    this.s.filtrerMoyenne().subscribe(r=>{this.candidature=r})
}

afficherDetailsCandidature(candidature: any) {
  alert(`
    ID candidature: ${candidature.idCandidature}
  `);
}

updateCandidature() {
  const identifiant = '25juy';
  this.s.updateCandidature(identifiant).subscribe(
    response => console.log(response),
    error => console.error(error)
  );
}

getStatutCandidatureClass(statut: string): string {
  switch (statut) {
    case 'AcceptéPourEntretien':
      return 'text-success';
    case 'EnCoursDeTraitement':
      return 'text-warning';
    default:
      return '';
  }
}


}
  


