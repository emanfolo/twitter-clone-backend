import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowedByInput } from "../inputs/UserCreateOrConnectWithoutFollowedByInput";
import { UserCreateWithoutFollowedByInput } from "../inputs/UserCreateWithoutFollowedByInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFollowedByInput } from "../inputs/UserUpdateManyWithWhereWithoutFollowedByInput";
import { UserUpdateWithWhereUniqueWithoutFollowedByInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFollowedByInput";
import { UserUpsertWithWhereUniqueWithoutFollowedByInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFollowedByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutFollowedByInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutFollowedByInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFollowedByInput], {
    nullable: true
  })
  create?: UserCreateWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFollowedByInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFollowedByInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFollowedByInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFollowedByInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutFollowedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
