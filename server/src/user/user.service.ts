import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user.schema';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly  userModel: Model<User>) {}

  async addUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  async updateUser(userId: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, user, { new: true }).exec();
  }

  async deleteUser(userId: string): Promise<User> {
    return this.userModel.findByIdAndRemove(userId).exec();
  }
}
