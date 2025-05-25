import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateTagDTO {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(15)
  @IsString()
  name!: string;
}
