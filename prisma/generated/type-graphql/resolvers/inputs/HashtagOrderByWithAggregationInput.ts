import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagAvgOrderByAggregateInput } from "../inputs/HashtagAvgOrderByAggregateInput";
import { HashtagCountOrderByAggregateInput } from "../inputs/HashtagCountOrderByAggregateInput";
import { HashtagMaxOrderByAggregateInput } from "../inputs/HashtagMaxOrderByAggregateInput";
import { HashtagMinOrderByAggregateInput } from "../inputs/HashtagMinOrderByAggregateInput";
import { HashtagSumOrderByAggregateInput } from "../inputs/HashtagSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("HashtagOrderByWithAggregationInput", {
  isAbstract: true
})
export class HashtagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contents?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => HashtagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: HashtagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HashtagAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: HashtagAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HashtagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: HashtagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HashtagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: HashtagMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HashtagSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: HashtagSumOrderByAggregateInput | undefined;
}
