import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsersService],
})
export class AppModule {}
