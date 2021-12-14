import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTweetsInput } from "../inputs/UserCreateWithoutTweetsInput";
import { UserUpdateWithoutTweetsInput } from "../inputs/UserUpdateWithoutTweetsInput";

@TypeGraphQL.InputType("UserUpsertWithoutTweetsInput", {
  isAbstract: true
})
export class UserUpsertWithoutTweetsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTweetsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTweetsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTweetsInput;
}
