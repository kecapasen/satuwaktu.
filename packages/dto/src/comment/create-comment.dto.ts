import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCommentDTO {
  @IsNotEmpty()
  @IsString()
  memoryId!: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  @IsString()
  content!: string;
}
