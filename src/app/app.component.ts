import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi_dev_angular';
  constructor(private router: Router) {}
  isHomePage() {
    return this.router.url === '/home';
  }
  isLoginPage() {
    return this.router.url === '/login';
  }
  isAdminPage() {
    return this.router.url === '/admin';
  }
  isMailPage() {
    return this.router.url === '/mail';
  }
  isRelveDeNotePage() {
    return this.router.url === '/RelveDeNote/:idCandidature';
  }
  isFiltrerPage() {
    return this.router.url === '/filtrer';
  }
}

