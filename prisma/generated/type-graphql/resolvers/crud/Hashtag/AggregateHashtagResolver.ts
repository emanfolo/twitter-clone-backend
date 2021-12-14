import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHashtagArgs } from "./args/AggregateHashtagArgs";
import { Hashtag } from "../../../models/Hashtag";
import { AggregateHashtag } from "../../outputs/AggregateHashtag";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtag)
export class AggregateHashtagResolver {
  @TypeGraphQL.Query(_returns => AggregateHashtag, {
    nullable: false
  })
  async aggregateHashtag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHashtagArgs): Promise<AggregateHashtag> {
    return getPrismaFromContext(ctx).hashtag.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
