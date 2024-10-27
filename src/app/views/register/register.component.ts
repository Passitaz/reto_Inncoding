import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordsMatch: boolean = true;

  constructor(private router: Router) { }

  onboarding(loginForm: NgForm) {
    if (loginForm.valid && this.checkPasswords(loginForm)) {
      this.router.navigate(['/onboarding']);
    } else if (!this.passwordsMatch) {
      alert('Por favor, asegúrate de que las contraseñas coincidan.');
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
  checkPasswords(form: NgForm): boolean {
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    this.passwordsMatch = password === confirmPassword;
    return this.passwordsMatch;
  }
  ngOnInit(): void {
  }
}