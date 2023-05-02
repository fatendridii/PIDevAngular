import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-generate-pdf-component',
  templateUrl: './generate-pdf-component.component.html',
  styleUrls: ['./generate-pdf-component.component.css']
})
export class GeneratePdfComponentComponent implements OnInit {
  title = 'my-app';

  constructor(private s: CandidatureService) { }
  ngOnInit(): void {
  }

  downloadPdf() {
    this.s.generatePdf().subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
 

