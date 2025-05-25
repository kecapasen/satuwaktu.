import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export class UpdateTimelineDTO {
  @IsOptional()
  @MaxLength(50)
  @IsString()
  title?: string;

  @IsNotEmpty()
  @IsDate()
  date!: Date;
}
