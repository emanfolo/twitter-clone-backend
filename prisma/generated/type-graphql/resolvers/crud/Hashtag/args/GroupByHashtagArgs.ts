import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagOrderByWithAggregationInput } from "../../../inputs/HashtagOrderByWithAggregationInput";
import { HashtagScalarWhereWithAggregatesInput } from "../../../inputs/HashtagScalarWhereWithAggregatesInput";
import { HashtagWhereInput } from "../../../inputs/HashtagWhereInput";
import { HashtagScalarFieldEnum } from "../../../../enums/HashtagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  where?: HashtagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashtagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: HashtagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "contents">;

  @TypeGraphQL.Field(_type => HashtagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HashtagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
