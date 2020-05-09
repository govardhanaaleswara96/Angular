import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient, private userService: UsersService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .then((result) => {
        this.users = result;
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(this.userService.getUsers());
  }

  // async getallusers() {
  //   try {
  //     this.users = await this.userService.getusers();
  //     console.log(this.users);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
