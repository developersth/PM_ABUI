import { Mongoose } from 'mongoose';
import { UserSchema } from '../users/users.schema';

export const UserProviders = [
  {
    provide: 'USER',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
