import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateProjectDto } from 'src/project/models/update-project.dto';


@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(dto: UpdateProjectDto) {
    return this.prisma.project.create({
      data: {
        title: dto.title,
        teamId: dto.teamId ?? null,
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      include: { team: true },
    });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id },
      include: { team: true },
    });
  }

  update(id: number, dto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: {
        title: dto.title,
        teamId: dto.teamId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
