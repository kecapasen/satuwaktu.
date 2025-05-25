import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateTimelineDTO {
  @IsOptional()
  @MaxLength(50)
  @IsString()
  title?: string;

  @IsNotEmpty()
  @IsDate()
  date: Date = new Date();
}
