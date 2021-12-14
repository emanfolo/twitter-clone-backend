import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TweetOrderByWithRelationInput } from "../../../inputs/TweetOrderByWithRelationInput";
import { TweetWhereInput } from "../../../inputs/TweetWhereInput";
import { TweetWhereUniqueInput } from "../../../inputs/TweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTweetArgs {
  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  where?: TweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TweetOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TweetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  cursor?: TweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
