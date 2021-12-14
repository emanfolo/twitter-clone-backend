import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetCreateInput } from "../../../inputs/TweetCreateInput";
import { TweetUpdateInput } from "../../../inputs/TweetUpdateInput";
import { TweetWhereUniqueInput } from "../../../inputs/TweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTweetArgs {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetCreateInput, {
    nullable: false
  })
  create!: TweetCreateInput;

  @TypeGraphQL.Field(_type => TweetUpdateInput, {
    nullable: false
  })
  update!: TweetUpdateInput;
}
