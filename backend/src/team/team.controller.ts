import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TeamsService } from './team.service';
import { CreateTeamDto } from './models/create-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body('name') teamDto: CreateTeamDto) {
    return this.teamsService.create(teamDto.name);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.findOne(id);
  }

  @Post(':id/members/:userId')
  addMember(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.teamsService.addMember(id, userId);
  }

  @Delete(':id/members/:userId')
  removeMember(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.teamsService.removeMember(id, userId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.remove(id);
  }
}
