import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetWhereUniqueInput } from "../../../inputs/TweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTweetArgs {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;
}
