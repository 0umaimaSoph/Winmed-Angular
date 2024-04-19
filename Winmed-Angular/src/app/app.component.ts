import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Component } from '@angular/core';
import { ToastService } from './service/toast/toast.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toasts:any = []
  constructor(private authService:AuthenticationService, private toastService: ToastService){
    this.authService.loadUser()
    this.toasts = this.toastService.toasts
  }
}
