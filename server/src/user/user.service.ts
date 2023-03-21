import { Injectable } from '@nestjs/common';
import { User } from './user.model';
@Injectable()
export class UserService {
    user:User[] =[]
    findAll(){
        return this.user
    }
    create(data:User){
        this.user.push(data)
    }
    findById(id:any){
        return this.user = this.user.filter(u => u.id == id);
    }
}
