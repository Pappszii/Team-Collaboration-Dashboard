import { Module } from '@nestjs/common';
import { ProjectsController } from './project.controller';
import { ProjectsService } from './project.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
