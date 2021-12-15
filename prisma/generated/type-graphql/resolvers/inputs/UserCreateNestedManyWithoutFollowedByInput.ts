import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowedByInput } from "../inputs/UserCreateOrConnectWithoutFollowedByInput";
import { UserCreateWithoutFollowedByInput } from "../inputs/UserCreateWithoutFollowedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutFollowedByInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutFollowedByInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFollowedByInput], {
    nullable: true
  })
  create?: UserCreateWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowedByInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
