import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProjectsController } from './project.controller';
import { ProjectsService } from './project.service';


@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}
