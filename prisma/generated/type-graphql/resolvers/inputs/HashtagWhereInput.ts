import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TweetListRelationFilter } from "../inputs/TweetListRelationFilter";

@TypeGraphQL.InputType("HashtagWhereInput", {
  isAbstract: true
})
export class HashtagWhereInput {
  @TypeGraphQL.Field(_type => [HashtagWhereInput], {
    nullable: true
  })
  AND?: HashtagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereInput], {
    nullable: true
  })
  OR?: HashtagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereInput], {
    nullable: true
  })
  NOT?: HashtagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contents?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TweetListRelationFilter, {
    nullable: true
  })
  tweets?: TweetListRelationFilter | undefined;
}
