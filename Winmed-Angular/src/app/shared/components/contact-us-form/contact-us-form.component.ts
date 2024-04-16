import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
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
    console.log('attempting form submission!', this.contactForm.value);   
    console.log('form validity', this.contactForm.valid);   

    
    if(this.contactForm.valid) {
      console.log('form submitted!', this.contactForm.value);   
      this.formSubmitted.emit(true)
    } else {
      console.log('form not submitted!');
      this.formSubmitted.emit(false)
      this.contactForm.markAllAsTouched()
    }
  }

}
