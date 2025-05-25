import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class UpdateSoundtrackDTO {
  @IsNotEmpty()
  @IsString()
  memoryId!: string;

  @IsNotEmpty()
  @IsString()
  songId!: string;

  @IsNotEmpty()
  @Min(0)
  @IsInt()
  startTime!: string;

  @IsNotEmpty()
  @Min(15)
  @IsInt()
  endTime!: string;
}
