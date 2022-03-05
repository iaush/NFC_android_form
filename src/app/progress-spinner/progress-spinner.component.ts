import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  template: `
    <style>
      
    </style>

    <mat-spinner color="warn" *ngIf="showspinner"></mat-spinner>
   
  `,
  styles: [
  ]
})
export class ProgressSpinnerComponent implements OnInit {
  
  showspinner = false;

  constructor() { }

  


  ngOnInit(): void {
  }

}
