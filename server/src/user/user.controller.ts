import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
@Controller('api/users')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    findAll() {
        return this.userService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findById(id)
    }

    @Post()
    async crete(@Body() user: User) {
        this.userService.create(user)
        return 'Create Success';
    }
}
