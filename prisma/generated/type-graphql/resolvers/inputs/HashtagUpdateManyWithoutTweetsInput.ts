import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateOrConnectWithoutTweetsInput } from "../inputs/HashtagCreateOrConnectWithoutTweetsInput";
import { HashtagCreateWithoutTweetsInput } from "../inputs/HashtagCreateWithoutTweetsInput";
import { HashtagScalarWhereInput } from "../inputs/HashtagScalarWhereInput";
import { HashtagUpdateManyWithWhereWithoutTweetsInput } from "../inputs/HashtagUpdateManyWithWhereWithoutTweetsInput";
import { HashtagUpdateWithWhereUniqueWithoutTweetsInput } from "../inputs/HashtagUpdateWithWhereUniqueWithoutTweetsInput";
import { HashtagUpsertWithWhereUniqueWithoutTweetsInput } from "../inputs/HashtagUpsertWithWhereUniqueWithoutTweetsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType("HashtagUpdateManyWithoutTweetsInput", {
  isAbstract: true
})
export class HashtagUpdateManyWithoutTweetsInput {
  @TypeGraphQL.Field(_type => [HashtagCreateWithoutTweetsInput], {
    nullable: true
  })
  create?: HashtagCreateWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutTweetsInput], {
    nullable: true
  })
  connectOrCreate?: HashtagCreateOrConnectWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpsertWithWhereUniqueWithoutTweetsInput], {
    nullable: true
  })
  upsert?: HashtagUpsertWithWhereUniqueWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  set?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  delete?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpdateWithWhereUniqueWithoutTweetsInput], {
    nullable: true
  })
  update?: HashtagUpdateWithWhereUniqueWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagUpdateManyWithWhereWithoutTweetsInput], {
    nullable: true
  })
  updateMany?: HashtagUpdateManyWithWhereWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HashtagScalarWhereInput[] | undefined;
}
