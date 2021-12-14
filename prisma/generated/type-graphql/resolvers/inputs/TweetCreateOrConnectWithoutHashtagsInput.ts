import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutHashtagsInput } from "../inputs/TweetCreateWithoutHashtagsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetCreateOrConnectWithoutHashtagsInput", {
  isAbstract: true
})
export class TweetCreateOrConnectWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutHashtagsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutHashtagsInput;
}
