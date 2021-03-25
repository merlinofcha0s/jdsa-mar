import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {filter, map} from 'rxjs/operators';
import {UserService} from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAll().pipe(
      filter(response => response.ok),
      map(response => response.body)
    ).subscribe(users => this.users = users,
      error => console.log(error),
      () => console.log('finish'));
  }
}
