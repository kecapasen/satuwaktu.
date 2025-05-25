import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginAuthDTO {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(15)
  @IsString()
  username!: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password!: string;
}
