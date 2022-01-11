import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  anioActual! :number;
  constructor() { }

  ngOnInit() {
    this.anioActual = new Date().getFullYear();
  }
  topFunction() {
    // setTimeout(() => {
    //    document.querySelector('mat-sidenav-content').scrollTop  = 0 ;
    //  }, 100);
   }
}
