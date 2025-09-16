import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from 'prisma/prisma.service';
import { TeamsModule } from './team/teams.module';
import { UsersModule } from './user/user.model';
import { ProjectsController } from './project/project.controller';
import { UsersController } from './user/user.controller';
import { ProjectsModule } from './project/project.module';

@Module({
  imports: [TeamsModule, UsersModule, ProjectsModule],
  controllers: [AppController, ProjectsController, UsersController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
