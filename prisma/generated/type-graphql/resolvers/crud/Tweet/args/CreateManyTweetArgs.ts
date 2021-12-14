import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetCreateManyInput } from "../../../inputs/TweetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTweetArgs {
  @TypeGraphQL.Field(_type => [TweetCreateManyInput], {
    nullable: false
  })
  data!: TweetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
