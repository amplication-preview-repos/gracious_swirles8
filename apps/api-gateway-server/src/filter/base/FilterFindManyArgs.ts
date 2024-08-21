/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FilterWhereInput } from "./FilterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FilterOrderByInput } from "./FilterOrderByInput";

@ArgsType()
class FilterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FilterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FilterWhereInput, { nullable: true })
  @Type(() => FilterWhereInput)
  where?: FilterWhereInput;

  @ApiProperty({
    required: false,
    type: [FilterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FilterOrderByInput], { nullable: true })
  @Type(() => FilterOrderByInput)
  orderBy?: Array<FilterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FilterFindManyArgs as FilterFindManyArgs };
