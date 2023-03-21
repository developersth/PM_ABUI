import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  username: string;
  password: string;

  data: any;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit(loginForm: NgForm) {
    const { username, password } = loginForm.value;
    this.userService.logIn(username,password).subscribe(data =>{
    
      this.data = data;
      if(this.data.success){
        console.log(this.data.user.token)
      }
      else{
        //
      }
  });
}
}
