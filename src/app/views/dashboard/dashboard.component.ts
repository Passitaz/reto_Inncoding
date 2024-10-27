import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  onCancel() {
    // Aquí puedes agregar la lógica para cerrar sesión
    console.log('Sesión cerrada');
    // Redirigir a la página de inicio o login
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
