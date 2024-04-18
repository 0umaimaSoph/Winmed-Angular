import { AppUser } from 'src/app/model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  handleLogin() {
    let email = this.userFormGroup.value.email;
    let password = this.userFormGroup.value.password;
    this.authService.login(email, password).subscribe({
      next: (appUser) => {
        this.authService.autheticateUser(appUser).subscribe({
          next: (data) => {
            this.router.navigateByUrl('/accueil');
          },
        });
      },
      error: (err) => {
        console.error('Error during login:', err);

        this.errorMessage = err;
      },
    });
  }
}
