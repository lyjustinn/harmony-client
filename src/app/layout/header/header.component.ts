import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CurrentUser } from 'src/app/user/shared/user.model';
import { UserService } from 'src/app/user/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser : CurrentUser | null
  pfp : string;

  constructor(private userService : UserService, private authService : AuthService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(x => {
      this.pfp = x?.images[0].url ?? "";
      this.currentUser = x});
  }

  signout():void {
    this.authService.signout().subscribe(x => console.log("signedout"))
  }

}
