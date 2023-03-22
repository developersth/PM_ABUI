import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

    async addUser(user: User): Promise<User> {
        //const newUser = new this.userModel(user);
        for (let index = 0; index < 100000; index++) {
           const newUser = new this.userModel(user);
           newUser.save();       
        }
        return null
      }
    
      async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
      }
    
      async getUserById(userId: string): Promise<User> {
        return this.userModel.findById(userId).exec();
      }
      async getUserByUserName(userName: string): Promise<User> {
        return this.userModel.findOne({ usernam: userName }).exec();
      }
    
      async updateUser(userId: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(userId, user, { new: true }).exec();
      }
    
      async deleteUser(userId: string): Promise<User> {
        return this.userModel.findByIdAndRemove(userId).exec();
      }
}