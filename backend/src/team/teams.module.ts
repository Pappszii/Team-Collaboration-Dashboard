import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TeamsController } from './team.controller';
import { TeamsService } from './team.service';


@Module({
  controllers: [TeamsController],
  providers: [TeamsService, PrismaService],
})
export class TeamsModule {}
