import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { UsersService } from './users.service';
@Controller('api/users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get()
    @Roles(Role.Admin)
    findAll() {
        return this.userService.findAll()
    }
    @Post()
    async crete(@Body() user: any) {
        this.userService.create(user)
        return 'Create Success';
    }
}
