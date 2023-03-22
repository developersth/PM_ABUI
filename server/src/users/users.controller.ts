import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  async addUser(@Body() user: User): Promise<User> {
    return this.usersService.addUser(user);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Put(':id')
  async updateUser(@Param('id') userId: string, @Body() user: User): Promise<User> {
    return this.usersService.updateUser(userId, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<User> {
    return this.usersService.deleteUser(userId);
  }
}
