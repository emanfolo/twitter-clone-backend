import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutUserInput } from "../inputs/TweetCreateWithoutUserInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class TweetCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutUserInput, {
    nullable: false
  })
  create!: TweetCreateWithoutUserInput;
}
