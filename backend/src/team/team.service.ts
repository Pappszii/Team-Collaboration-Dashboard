import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  create(name: string) {
    return this.prisma.team.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.team.findMany({
      include: {
        members: true,
        projects: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.team.findUnique({
      where: { id },
      include: {
        members: true,
        projects: true,
      },
    });
  }

  addMember(teamId: number, userId: number) {
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

  removeMember(teamId: number, userId: number) {
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

  async remove(id: number) {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
