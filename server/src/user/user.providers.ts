import { Mongoose } from 'mongoose';
import { UserSchema } from '../schema/user.schema';

export const UserProviders = [
  {
    provide: 'USER',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
