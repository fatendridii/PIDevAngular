import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-relve-de-note',
  templateUrl: './get-relve-de-note.component.html',
  styleUrls: ['./get-relve-de-note.component.css']
})
export class GetRelveDeNoteComponent implements OnInit {
  pdfSrc: any;
  constructor(private candidatureService: CandidatureService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idCandidature = this.route.snapshot.paramMap.get('idCandidature');
    this.candidatureService.getReleveDeNoteById(idCandidature)
      .subscribe((data: Blob) => {
        this.pdfSrc = URL.createObjectURL(data);
      });
  }
}





