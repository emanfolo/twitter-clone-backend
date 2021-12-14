import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetWhereInput } from "../inputs/TweetWhereInput";

@TypeGraphQL.InputType("TweetListRelationFilter", {
  isAbstract: true
})
export class TweetListRelationFilter {
  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  every?: TweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  some?: TweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  none?: TweetWhereInput | undefined;
}
