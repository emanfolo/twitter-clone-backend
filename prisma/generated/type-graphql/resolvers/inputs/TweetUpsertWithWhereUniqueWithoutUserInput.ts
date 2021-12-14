import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutUserInput } from "../inputs/TweetCreateWithoutUserInput";
import { TweetUpdateWithoutUserInput } from "../inputs/TweetUpdateWithoutUserInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TweetUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutUserInput, {
    nullable: false
  })
  create!: TweetCreateWithoutUserInput;
}
