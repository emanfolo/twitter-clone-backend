import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetAvgOrderByAggregateInput } from "../inputs/TweetAvgOrderByAggregateInput";
import { TweetCountOrderByAggregateInput } from "../inputs/TweetCountOrderByAggregateInput";
import { TweetMaxOrderByAggregateInput } from "../inputs/TweetMaxOrderByAggregateInput";
import { TweetMinOrderByAggregateInput } from "../inputs/TweetMinOrderByAggregateInput";
import { TweetSumOrderByAggregateInput } from "../inputs/TweetSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TweetOrderByWithAggregationInput", {
  isAbstract: true
})
export class TweetOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contents?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TweetCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TweetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TweetAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TweetAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TweetMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TweetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TweetMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TweetMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TweetSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TweetSumOrderByAggregateInput | undefined;
}
