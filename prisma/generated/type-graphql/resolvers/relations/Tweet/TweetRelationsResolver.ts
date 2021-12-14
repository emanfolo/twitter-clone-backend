import * as TypeGraphQL from "type-graphql";
import { Hashtag } from "../../../models/Hashtag";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { TweetHashtagsArgs } from "./args/TweetHashtagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class TweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Hashtag], {
    nullable: false
  })
  async hashtags(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetHashtagsArgs): Promise<Hashtag[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).hashtags(args);
  }
}
