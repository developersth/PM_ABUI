import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [CatsModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
