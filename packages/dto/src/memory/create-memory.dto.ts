import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateMemoryDTO {
  @IsOptional()
  @MaxLength(50)
  @IsString()
  title?: string;

  @IsOptional()
  @MaxLength(100)
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  capturedAt?: Date;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean = false;

  @IsOptional()
  @IsString()
  timelineId?: string;
}
