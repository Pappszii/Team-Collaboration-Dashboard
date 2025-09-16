import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UpdateProjectDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsInt()
  teamId?: number | null;
}
