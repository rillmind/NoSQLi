import { Module } from '@nestjs/common';
import { UserSchema } from './schema/user.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
