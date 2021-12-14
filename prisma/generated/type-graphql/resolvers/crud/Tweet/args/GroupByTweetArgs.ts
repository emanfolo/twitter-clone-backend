import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetOrderByWithAggregationInput } from "../../../inputs/TweetOrderByWithAggregationInput";
import { TweetScalarWhereWithAggregatesInput } from "../../../inputs/TweetScalarWhereWithAggregatesInput";
import { TweetWhereInput } from "../../../inputs/TweetWhereInput";
import { TweetScalarFieldEnum } from "../../../../enums/TweetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTweetArgs {
  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  where?: TweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TweetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TweetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "contents" | "createdAt" | "image" | "userID">;

  @TypeGraphQL.Field(_type => TweetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TweetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
