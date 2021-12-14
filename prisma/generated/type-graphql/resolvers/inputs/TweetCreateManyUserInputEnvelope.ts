import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateManyUserInput } from "../inputs/TweetCreateManyUserInput";

@TypeGraphQL.InputType("TweetCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TweetCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TweetCreateManyUserInput], {
    nullable: false
  })
  data!: TweetCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
