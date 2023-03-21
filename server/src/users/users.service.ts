import { Injectable } from '@nestjs/common';
import { User } from './users.model';
@Injectable()
export class UsersService {
    users: any[]
    constructor() {
        this.users = [
            {
                id: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                id: 2,
                username: 'maria',
                password: 'guess',
            },
        ];
    }
    async findAll() {
        return this.users
    }
    async findOne(username) {
        return this.users.find(user => user.username === username);
    }
    create(data:User){
        this.users.push(data)
    }
}