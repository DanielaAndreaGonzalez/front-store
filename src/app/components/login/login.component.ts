import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación real cuando esté disponible
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Login Failed: Invalid username or password';
    }
  }
}
