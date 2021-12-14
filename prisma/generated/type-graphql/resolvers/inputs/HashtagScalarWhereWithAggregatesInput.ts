import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("HashtagScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class HashtagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [HashtagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: HashtagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: HashtagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: HashtagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  contents?: StringWithAggregatesFilter | undefined;
}
