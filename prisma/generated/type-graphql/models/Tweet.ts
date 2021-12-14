import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Hashtag } from "../models/Hashtag";
import { User } from "../models/User";
import { TweetCount } from "../resolvers/outputs/TweetCount";

@TypeGraphQL.ObjectType("Tweet", {
  isAbstract: true
})
export class Tweet {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contents!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userID!: number;

  user?: User;

  hashtags?: Hashtag[];

  @TypeGraphQL.Field(_type => TweetCount, {
    nullable: true
  })
  _count?: TweetCount | null;
}
