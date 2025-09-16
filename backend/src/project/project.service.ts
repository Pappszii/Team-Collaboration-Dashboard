import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Project } from '@prisma/client';
import { CreateProjectDto } from './models/create-project.dto';
import { UpdateProjectDto } from './models/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateProjectDto): Promise<Project> {
    return this.prisma.project.create({
      data: { title: dto.title, teamId: dto.teamId },
    });
  }

  update(id: number, dto: UpdateProjectDto): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data: { title: dto.title, teamId: dto.teamId },
    });
  }

  findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  findOne(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  async remove(id: number): Promise<Project> {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
