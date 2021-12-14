import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetUpdateWithoutUserInput } from "../inputs/TweetUpdateWithoutUserInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class TweetUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TweetUpdateWithoutUserInput;
}
