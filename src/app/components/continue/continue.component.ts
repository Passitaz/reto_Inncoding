import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css'],
})
export class ContinueComponent implements OnInit {
  @Input() validateForm: boolean = true;
  @Input() form!: NgForm;

  constructor(private router: Router) { }

  dashboard() {
    if (this.validateForm && this.form) {
      // Valida solo si validateForm es true y el formulario existe
      if (this.form.valid) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Por favor, completa todos los campos requeridos.');
      }
    } else {
      // Si validateForm es false o no está en login, redirige directamente
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  }

}
