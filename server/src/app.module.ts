import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersRoleModule } from './users-role/users-role.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    // MongooseModule.forRoot(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }),
    UserModule,
    AuthModule,
    UsersRoleModule,
    BookingModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
