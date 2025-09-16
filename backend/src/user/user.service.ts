import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserDto } from './models/update-user.dto';
import { User } from '@prisma/client';
import { CreateUserDto } from './models/create-user.dto';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: dto.name,
        role: dto.role,
      },
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        teams: {
          include: {
            team: true,
          },
        },
      },
    });
  }

  findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        teams: {
          include: {
            team: true,
          },
        },
      },
    });
  }

  update(id: number, dto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: dto.name,
        role: dto.role,
      },
    });
  }

  remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
