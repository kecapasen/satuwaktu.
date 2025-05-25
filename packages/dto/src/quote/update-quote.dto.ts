import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateQuoteDTO {
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

  @IsOptional()
  @IsBoolean()
  isPinned: boolean = false;

  @IsOptional()
  @IsBoolean()
  isDeleted: boolean = false;
}
