import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent{
  @ViewChild('popup') popup: ElementRef | any;
  constructor() { }

 
  openPopup() {
    const popupElement = this.popup.nativeElement;
    (popupElement).modal('show');
  }
}

