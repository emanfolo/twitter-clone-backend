import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTweetsInput } from "../inputs/UserCreateOrConnectWithoutTweetsInput";
import { UserCreateWithoutTweetsInput } from "../inputs/UserCreateWithoutTweetsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTweetsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTweetsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTweetsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
