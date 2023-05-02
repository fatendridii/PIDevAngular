import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  password: string | undefined;
  email: string | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Vérifiez si les informations d'identification de l'utilisateur correspondent à celles stockées dans votre objet.
    if (this.email === this.user.email && this.password === this.user.password) {
      this.router.navigate(['/home']);
    } else {
      // Afficher un message d'erreur si les informations d'identification sont incorrectes.
    }
  }
}