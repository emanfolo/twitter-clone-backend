import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowedByInput } from "../inputs/UserCreateWithoutFollowedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowedByInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFollowedByInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowedByInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowedByInput;
}
