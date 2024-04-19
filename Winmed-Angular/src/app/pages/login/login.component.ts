import { AppUser } from 'src/app/model/user.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Router } from '@angular/router';

import { ToastService } from 'src/app/service/toast/toast.service';

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
    private router: Router,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }
  showToast(message: string, toastType: 'success' | 'danger' | 'warning') {
    this.toastService.show(message, {
      classname: `bg-${toastType} text-light`,
      delay: 5000,
    });
  }

  handleLogin() {
    if (this.userFormGroup.valid) {
      let email = this.userFormGroup.value.email;
      let password = this.userFormGroup.value.password;
      this.authService.login(email, password).subscribe({
        next: (appUser) => {
          this.authService.autheticateUser(appUser!).subscribe({
            next: (data) => {
              this.router.navigateByUrl('/accueil');
              this.showToast('Login Success', 'success');
            },
          });
        },
        error: (err) => {
          this.errorMessage = err;
          this.showToast(this.errorMessage.message, 'danger');
          console.dir('Error during login:', err);
 
        },
      });
    } else {
      this.showToast('Invalid inputs', 'warning');
    }
  }
}
