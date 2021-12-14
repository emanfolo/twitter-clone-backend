import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateNestedManyWithoutTweetsInput } from "../inputs/HashtagCreateNestedManyWithoutTweetsInput";
import { UserCreateNestedOneWithoutTweetsInput } from "../inputs/UserCreateNestedOneWithoutTweetsInput";

@TypeGraphQL.InputType("TweetCreateInput", {
  isAbstract: true
})
export class TweetCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTweetsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTweetsInput;

  @TypeGraphQL.Field(_type => HashtagCreateNestedManyWithoutTweetsInput, {
    nullable: true
  })
  hashtags?: HashtagCreateNestedManyWithoutTweetsInput | undefined;
}
