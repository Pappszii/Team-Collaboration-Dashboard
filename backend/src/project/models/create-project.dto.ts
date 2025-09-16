import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  title: string;

  @IsInt()
  @IsNotEmpty()
  teamId: number;
}
