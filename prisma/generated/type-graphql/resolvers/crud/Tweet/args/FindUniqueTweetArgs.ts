import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetWhereUniqueInput } from "../../../inputs/TweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTweetArgs {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;
}
