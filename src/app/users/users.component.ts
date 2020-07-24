import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  //Lists of Users
  public users;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUsers(); //Get All Users
  }

  getUsers() {
    console.log('Getting all the users');
    this.usersService
      .getUsers()
      .then((response) => {
        console.log(response);
        this.users = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
