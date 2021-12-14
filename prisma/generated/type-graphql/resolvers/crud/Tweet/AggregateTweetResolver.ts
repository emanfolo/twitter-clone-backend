import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTweetArgs } from "./args/AggregateTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { AggregateTweet } from "../../outputs/AggregateTweet";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class AggregateTweetResolver {
  @TypeGraphQL.Query(_returns => AggregateTweet, {
    nullable: false
  })
  async aggregateTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTweetArgs): Promise<AggregateTweet> {
    return getPrismaFromContext(ctx).tweet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
