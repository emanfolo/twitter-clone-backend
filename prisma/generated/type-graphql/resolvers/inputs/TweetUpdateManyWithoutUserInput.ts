import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateManyUserInputEnvelope } from "../inputs/TweetCreateManyUserInputEnvelope";
import { TweetCreateOrConnectWithoutUserInput } from "../inputs/TweetCreateOrConnectWithoutUserInput";
import { TweetCreateWithoutUserInput } from "../inputs/TweetCreateWithoutUserInput";
import { TweetScalarWhereInput } from "../inputs/TweetScalarWhereInput";
import { TweetUpdateManyWithWhereWithoutUserInput } from "../inputs/TweetUpdateManyWithWhereWithoutUserInput";
import { TweetUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TweetUpdateWithWhereUniqueWithoutUserInput";
import { TweetUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TweetUpsertWithWhereUniqueWithoutUserInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class TweetUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TweetCreateWithoutUserInput], {
    nullable: true
  })
  create?: TweetCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TweetUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TweetCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TweetCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  set?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  delete?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  connect?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TweetUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TweetUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TweetScalarWhereInput[] | undefined;
}
