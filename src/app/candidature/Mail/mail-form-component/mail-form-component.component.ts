import { Component, OnInit } from '@angular/core';
import { MailRequest } from 'src/app/model/mail';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-mail-form-component',
  templateUrl: './mail-form-component.component.html',
  styleUrls: ['./mail-form-component.component.css']
})
export class MailFormComponentComponent{
 
  to?: string;
  from?: string;
  subject?: string;
  name?: string;
  
  constructor(private candidatureService: CandidatureService) {  
    this.from = 'faten.dridi@esprit.tn';
    this.subject = 'Accepté pour l\'entretien'
    this.name = 'ESPRIT'
  }

  onSubmit(event: any) {
    event.preventDefault();
    const request: MailRequest = {
      to: this.to,
      from: this.from,
      subject: this.subject,
      name: this.name
    };
    this.candidatureService.sendMail(request)
      .subscribe(response => {
        console.log('Mail sent successfully', response);
      }, error => {
        console.error('Error sending mail', error);
      });
  }
}