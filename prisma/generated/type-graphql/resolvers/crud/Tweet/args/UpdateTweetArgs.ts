import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetUpdateInput } from "../../../inputs/TweetUpdateInput";
import { TweetWhereUniqueInput } from "../../../inputs/TweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTweetArgs {
  @TypeGraphQL.Field(_type => TweetUpdateInput, {
    nullable: false
  })
  data!: TweetUpdateInput;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;
}
