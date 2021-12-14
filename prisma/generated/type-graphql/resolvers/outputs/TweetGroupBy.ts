import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetAvgAggregate } from "../outputs/TweetAvgAggregate";
import { TweetCountAggregate } from "../outputs/TweetCountAggregate";
import { TweetMaxAggregate } from "../outputs/TweetMaxAggregate";
import { TweetMinAggregate } from "../outputs/TweetMinAggregate";
import { TweetSumAggregate } from "../outputs/TweetSumAggregate";

@TypeGraphQL.ObjectType("TweetGroupBy", {
  isAbstract: true
})
export class TweetGroupBy {
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
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userID!: number;

  @TypeGraphQL.Field(_type => TweetCountAggregate, {
    nullable: true
  })
  _count!: TweetCountAggregate | null;

  @TypeGraphQL.Field(_type => TweetAvgAggregate, {
    nullable: true
  })
  _avg!: TweetAvgAggregate | null;

  @TypeGraphQL.Field(_type => TweetSumAggregate, {
    nullable: true
  })
  _sum!: TweetSumAggregate | null;

  @TypeGraphQL.Field(_type => TweetMinAggregate, {
    nullable: true
  })
  _min!: TweetMinAggregate | null;

  @TypeGraphQL.Field(_type => TweetMaxAggregate, {
    nullable: true
  })
  _max!: TweetMaxAggregate | null;
}
