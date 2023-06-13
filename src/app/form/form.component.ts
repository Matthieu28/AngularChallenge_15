import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      credentials: this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(`Email :${this.userForm.value.credentials.email}`);
      console.log(`Password : ${this.userForm.value.credentials.password}`);
    }
  }
}
