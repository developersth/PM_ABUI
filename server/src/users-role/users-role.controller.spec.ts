import { Test, TestingModule } from '@nestjs/testing';
import { UsersRoleController } from './users-role.controller';
import { UsersRoleService } from './users-role.service';

describe('UsersRoleController', () => {
  let controller: UsersRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRoleController],
      providers: [UsersRoleService],
    }).compile();

    controller = module.get<UsersRoleController>(UsersRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
