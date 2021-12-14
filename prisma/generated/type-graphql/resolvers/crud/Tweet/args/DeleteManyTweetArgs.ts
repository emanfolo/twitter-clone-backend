import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetWhereInput } from "../../../inputs/TweetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTweetArgs {
  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  where?: TweetWhereInput | undefined;
}
