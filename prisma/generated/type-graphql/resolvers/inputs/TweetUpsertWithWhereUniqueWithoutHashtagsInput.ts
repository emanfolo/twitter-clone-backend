import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutHashtagsInput } from "../inputs/TweetCreateWithoutHashtagsInput";
import { TweetUpdateWithoutHashtagsInput } from "../inputs/TweetUpdateWithoutHashtagsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetUpsertWithWhereUniqueWithoutHashtagsInput", {
  isAbstract: true
})
export class TweetUpsertWithWhereUniqueWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutHashtagsInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutHashtagsInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutHashtagsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutHashtagsInput;
}
