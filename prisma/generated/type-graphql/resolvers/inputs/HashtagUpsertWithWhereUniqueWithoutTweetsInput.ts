import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateWithoutTweetsInput } from "../inputs/HashtagCreateWithoutTweetsInput";
import { HashtagUpdateWithoutTweetsInput } from "../inputs/HashtagUpdateWithoutTweetsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType("HashtagUpsertWithWhereUniqueWithoutTweetsInput", {
  isAbstract: true
})
export class HashtagUpsertWithWhereUniqueWithoutTweetsInput {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagUpdateWithoutTweetsInput, {
    nullable: false
  })
  update!: HashtagUpdateWithoutTweetsInput;

  @TypeGraphQL.Field(_type => HashtagCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: HashtagCreateWithoutTweetsInput;
}
