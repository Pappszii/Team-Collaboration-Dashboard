import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TeamsModule } from './team/teams.module';
import { UsersModule } from './user/user.module';
import { ProjectsModule } from './project/project.module';

@Module({
  imports: [TeamsModule, UsersModule, ProjectsModule],
  providers: [AppService, PrismaService]
})
export class AppModule {}
