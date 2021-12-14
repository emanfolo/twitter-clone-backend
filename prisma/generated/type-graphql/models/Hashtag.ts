import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tweet } from "../models/Tweet";
import { HashtagCount } from "../resolvers/outputs/HashtagCount";

@TypeGraphQL.ObjectType("Hashtag", {
  isAbstract: true
})
export class Hashtag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contents!: string;

  tweets?: Tweet[];

  @TypeGraphQL.Field(_type => HashtagCount, {
    nullable: true
  })
  _count?: HashtagCount | null;
}
