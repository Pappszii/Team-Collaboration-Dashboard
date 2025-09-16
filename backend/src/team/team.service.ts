import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Team } from '@prisma/client';


@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  create(name: string): Promise<Team> {
    return this.prisma.team.create({
      data: { name },
    });
  }

  findAll(): Promise<Team[]> {
    return this.prisma.team.findMany({
      include: {
        members: true,
        projects: true,
      },
    });
  }

  findOne(id: number): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: { id },
      include: {
        members: true,
        projects: true,
      },
    });
  }

  addMember(teamId: number, userId: number): Promise<Team> {
    return this.prisma.team.update({
      where: { id: teamId },
      data: {
        members: {
          connect: { id: userId },
        },
      },
      include: { members: true },
    });
  }

  removeMember(teamId: number, userId: number): Promise<Team> {
    return this.prisma.team.update({
      where: { id: teamId },
      data: {
        members: {
          disconnect: { id: userId },
        },
      },
      include: { members: true },
    });
  }

  async remove(id: number): Promise<Team> {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
