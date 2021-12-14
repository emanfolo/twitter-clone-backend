import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagUpdateWithoutTweetsInput } from "../inputs/HashtagUpdateWithoutTweetsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType("HashtagUpdateWithWhereUniqueWithoutTweetsInput", {
  isAbstract: true
})
export class HashtagUpdateWithWhereUniqueWithoutTweetsInput {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagUpdateWithoutTweetsInput, {
    nullable: false
  })
  data!: HashtagUpdateWithoutTweetsInput;
}
