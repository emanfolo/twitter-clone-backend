import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetUpdateWithoutHashtagsInput } from "../inputs/TweetUpdateWithoutHashtagsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetUpdateWithWhereUniqueWithoutHashtagsInput", {
  isAbstract: true
})
export class TweetUpdateWithWhereUniqueWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutHashtagsInput, {
    nullable: false
  })
  data!: TweetUpdateWithoutHashtagsInput;
}
