import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/token/token.service';

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

  constructor(private router: Router, private authService: AuthService, private tokenService:TokenService) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación real cuando esté disponible
    this.authService.login(this.username, this.password).subscribe({
      next: (data) => {
        this.tokenService.login(data.token);
      },
      error: (error) => {
        alert('Error al iniciar sesión: ');
      }
    });
  }
}
