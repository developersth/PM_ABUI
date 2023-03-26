import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
selector: 'app-user-form',
templateUrl: './user-form.component.html',
styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
users: User;

constructor(
private router: Router,
private userService: UserService
) { }

ngOnInit() {
this.users = new User();
}

addUser() {
this.userService.addUser(this.users)
.subscribe(() => {
this.router.navigate(['/users']);
});
}

updateUser() {
this.userService.updateUser(this.users)
.subscribe(() => {
this.router.navigate(['/users']);
});
}
}