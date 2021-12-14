import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetUpdateManyMutationInput } from "../../../inputs/TweetUpdateManyMutationInput";
import { TweetWhereInput } from "../../../inputs/TweetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTweetArgs {
  @TypeGraphQL.Field(_type => TweetUpdateManyMutationInput, {
    nullable: false
  })
  data!: TweetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  where?: TweetWhereInput | undefined;
}
