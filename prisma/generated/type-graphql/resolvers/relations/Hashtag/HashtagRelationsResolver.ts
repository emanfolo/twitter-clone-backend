import * as TypeGraphQL from "type-graphql";
import { Hashtag } from "../../../models/Hashtag";
import { Tweet } from "../../../models/Tweet";
import { HashtagTweetsArgs } from "./args/HashtagTweetsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtag)
export class HashtagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Tweet], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Root() hashtag: Hashtag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: HashtagTweetsArgs): Promise<Tweet[]> {
    return getPrismaFromContext(ctx).hashtag.findUnique({
      where: {
        id: hashtag.id,
      },
    }).tweets(args);
  }
}
