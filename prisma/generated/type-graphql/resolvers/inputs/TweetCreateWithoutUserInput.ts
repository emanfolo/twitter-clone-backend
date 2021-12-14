import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateNestedManyWithoutTweetsInput } from "../inputs/HashtagCreateNestedManyWithoutTweetsInput";

@TypeGraphQL.InputType("TweetCreateWithoutUserInput", {
  isAbstract: true
})
export class TweetCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contents!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => HashtagCreateNestedManyWithoutTweetsInput, {
    nullable: true
  })
  hashtags?: HashtagCreateNestedManyWithoutTweetsInput | undefined;
}
