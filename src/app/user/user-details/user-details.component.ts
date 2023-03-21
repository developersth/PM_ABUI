import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  id :number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,    
    private location: Location
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.getUser(this.id);
  }

  getUser(id: number) {
  this.userService.getUser(id)
  .subscribe(user => this.user = user);
  }
  
  updateUser() {
  this.userService.updateUser(this.user)
  .subscribe(() => this.goBack());
  }
  deleteUser(){
    this.userService.deleteUser(this.id).subscribe(()=>this.goBack());
  }
  goBack() {
  this.location.back();
  }
  }