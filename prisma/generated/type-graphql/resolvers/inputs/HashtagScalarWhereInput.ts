import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("HashtagScalarWhereInput", {
  isAbstract: true
})
export class HashtagScalarWhereInput {
  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  AND?: HashtagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  OR?: HashtagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  NOT?: HashtagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contents?: StringFilter | undefined;
}
