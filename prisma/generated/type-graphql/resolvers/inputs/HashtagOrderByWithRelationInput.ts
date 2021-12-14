import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetOrderByRelationAggregateInput } from "../inputs/TweetOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("HashtagOrderByWithRelationInput", {
  isAbstract: true
})
export class HashtagOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contents?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TweetOrderByRelationAggregateInput, {
    nullable: true
  })
  tweets?: TweetOrderByRelationAggregateInput | undefined;
}
