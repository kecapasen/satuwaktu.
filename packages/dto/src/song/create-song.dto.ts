import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateSongDTO {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  @IsString()
  title!: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  @IsString()
  artist!: string;
}
