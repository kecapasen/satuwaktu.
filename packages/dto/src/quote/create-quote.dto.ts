import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateQuoteDTO {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  @IsString()
  content!: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(15)
  @IsString()
  author?: string;
}
