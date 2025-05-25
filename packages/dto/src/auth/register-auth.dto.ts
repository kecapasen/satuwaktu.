import { Role } from "@satuwaktu/db";
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class RegisterAuthDTO {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @IsString()
  name!: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(15)
  @IsString()
  username!: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role!: Role;
}
