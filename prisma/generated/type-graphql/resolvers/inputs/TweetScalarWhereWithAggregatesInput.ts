import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TweetScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TweetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TweetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TweetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TweetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TweetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  contents?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userID?: IntWithAggregatesFilter | undefined;
}
