import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateSoundtrackDTO {
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
