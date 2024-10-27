import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  //templateUrl: './cancel.component.html',
  template: `<button class="button is-info" (click)="cancel()">{{ label }}</button>`,
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  @Input() label: string = 'Cancelar';

  constructor(private router: Router) { }

  cancel() {
    this.router.navigate(['']);
  } 

  ngOnInit(): void {
  }

}
