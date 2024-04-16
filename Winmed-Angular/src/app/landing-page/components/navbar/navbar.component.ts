import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
handleFormSubmissionEvent(success: Boolean, closeFunc: Function) {
  if (success) {
    console.log('Form submission successful!!!');
    
    closeFunc()
  } else {
    console.log('Form submission failed!!!');

    alert('Form submission failed!')
  }
}
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  public isCollapsed = false;

  open(content: any) {
    this.modalService.open(content);
  }
}
