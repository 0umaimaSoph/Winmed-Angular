import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  alertMessage: string = '';
  alertType: 'success' | 'danger' = 'success';

  handleFormSubmissionEvent(success: Boolean, closeFunc: Function) {
    if (success) {
      console.log('Form submission successful!!!');
      this.alertMessage = 'Form submitted successfully';
      this.alertType = 'success';
      closeFunc();
    } else {
      console.log('Form submission failed!!!');
      this.alertMessage = 'Failed to submit!!';
      this.alertType = 'danger';
      alert('Form submission failed!');
    }
  }
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public authService: AuthenticationService,
    private router: Router
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  public isCollapsed = false;

  open(content: any) {
    this.modalService.open(content);
  }
  hadleLogout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigateByUrl('/login');
      },
    });
  }
}
