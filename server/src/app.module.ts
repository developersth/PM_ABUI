import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
@Module({
  imports: [AuthModule,UserModule],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
