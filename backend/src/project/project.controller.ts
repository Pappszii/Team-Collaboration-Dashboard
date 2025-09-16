import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './project.service';
import { Project } from '@prisma/client';
import { UpdateProjectDto } from './models/update-project.dto';
import { CreateProjectDto } from './models/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.projectsService.create(dto);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectsService.update(Number(id), dto);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project | null> {
    return this.projectsService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Project> {
    return this.projectsService.remove(Number(id));
  }
}
