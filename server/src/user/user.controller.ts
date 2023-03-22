import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User } from '../schema/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly  userService: UserService) {}

  @Post()
  async addUser(@Body() user: User): Promise<User> {
    return this.userService.addUser(user);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Put(':id')
  async updateUser(@Param('id') userId: string, @Body() user: User): Promise<User> {
    return this.userService.updateUser(userId, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<User> {
    return this.userService.deleteUser(userId);
  }
}
