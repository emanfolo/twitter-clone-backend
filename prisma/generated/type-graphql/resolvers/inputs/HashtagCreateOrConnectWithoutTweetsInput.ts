import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateWithoutTweetsInput } from "../inputs/HashtagCreateWithoutTweetsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType("HashtagCreateOrConnectWithoutTweetsInput", {
  isAbstract: true
})
export class HashtagCreateOrConnectWithoutTweetsInput {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: HashtagCreateWithoutTweetsInput;
}
