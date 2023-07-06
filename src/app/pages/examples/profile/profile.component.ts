import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "../model/UserModel";

@Component({
  selector: "app-profile",
  templateUrl: "profile.component.html"
})
export class ProfileComponent implements OnInit {
  constructor( private userService: UserService) {}
  user: User
  ngOnInit() {
    this.getUserById()
  }

  getUserById(){
    const userId = 5; // Replace with the desired user ID
    this.userService.getUserById(userId).subscribe(
      user => {
        this.user = user;
        console.log(user)
      },
      error => {
        console.log('Error occurred while fetching user:', error);
      }
    );
  }
}
