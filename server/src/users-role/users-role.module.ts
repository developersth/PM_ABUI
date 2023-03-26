import { Module } from '@nestjs/common';
import { UsersRoleService } from './users-role.service';
import { UsersRoleController } from './users-role.controller';

@Module({
  controllers: [UsersRoleController],
  providers: [UsersRoleService]
})
export class UsersRoleModule {}
