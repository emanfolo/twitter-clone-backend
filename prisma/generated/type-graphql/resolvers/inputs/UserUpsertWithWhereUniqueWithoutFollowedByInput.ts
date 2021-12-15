import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowedByInput } from "../inputs/UserCreateWithoutFollowedByInput";
import { UserUpdateWithoutFollowedByInput } from "../inputs/UserUpdateWithoutFollowedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutFollowedByInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutFollowedByInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowedByInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFollowedByInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowedByInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowedByInput;
}
