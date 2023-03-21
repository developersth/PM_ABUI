import { Component,OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  selectedUsers: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id)
      .subscribe(() => {
        this.users = this.users.filter(u => u !== user);
      });
  }
}