import { animation } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';
 
@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<Boolean>()
  contactForm!: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })
  }



  onSubmit() {
    
    if(this.contactForm.valid) {
      this.formSubmitted.emit(true)
 
    } else {
     
      this.formSubmitted.emit(false)
      this.contactForm.markAllAsTouched()
     
    }
  }

}
