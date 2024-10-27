import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent implements OnInit {

  constructor(private router: Router) { }

  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
