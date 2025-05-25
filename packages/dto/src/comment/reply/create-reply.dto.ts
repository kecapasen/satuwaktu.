import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateReplyDTO {
  @IsNotEmpty()
  @IsString()
  commentId!: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  @IsString()
  content!: string;
}
