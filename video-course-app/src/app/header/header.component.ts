import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/services/auth-service.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthServiceService) {
  }

  ngOnInit() {
  }

  LogoutClickHandler() {
    this.authService.Logout();
  }

}
