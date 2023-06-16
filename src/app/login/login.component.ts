import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  
  loginForm : FormGroup;

  users = [{
    'name' : 'Arshad',
    'age' : 22,
    'gender' : 'male',
    'address' : 'bangalore'
  }]

  constructor(
    private _fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }


  OnSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value.email)
      console.log(this.loginForm.value.password)
      // alert('Teek hai')
      this.router.navigate(['home']);
    }
  }


  onSingUp() {
    this.router.navigate(['signup']);
  }

}
