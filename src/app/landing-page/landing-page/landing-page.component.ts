import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/user/shared/user.model';
import { UserService } from 'src/app/user/shared/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  loginUrl : string = environment.apiUrl + "/api/auth";
  currentUser : CurrentUser;
  isSignedIn : boolean = false;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe( user => {
      if ( user !== null ) {
        this.currentUser = user;
        this.isSignedIn = true;
      } 
    })
  }

}
