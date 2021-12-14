import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetCreateInput } from "../../../inputs/TweetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTweetArgs {
  @TypeGraphQL.Field(_type => TweetCreateInput, {
    nullable: false
  })
  data!: TweetCreateInput;
}
