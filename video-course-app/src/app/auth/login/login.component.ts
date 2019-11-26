import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  LoginClickHandler() {
    console.log(this.email, this.password);
    this.authService.Login(this.email, this.password);
  }
}
