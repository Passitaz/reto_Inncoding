import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css'],
})
export class ContinueComponent implements OnInit {
  @Input() form!: NgForm;

  constructor(private router: Router) { }

  dashboard() {
    if (this.form && this.form.valid) {
    this.router.navigate(['/dashboard']);
  } else {
    alert('Por favor, completa todos los campos requeridos.'); // Manejo de error si no es válido
  }
  }

  ngOnInit(): void {
  }

}
