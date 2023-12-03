import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
  ],
})
export class AppModule {}
