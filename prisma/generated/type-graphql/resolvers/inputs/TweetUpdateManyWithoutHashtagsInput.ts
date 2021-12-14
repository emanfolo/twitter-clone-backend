import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutHashtagsInput } from "../inputs/TweetCreateOrConnectWithoutHashtagsInput";
import { TweetCreateWithoutHashtagsInput } from "../inputs/TweetCreateWithoutHashtagsInput";
import { TweetScalarWhereInput } from "../inputs/TweetScalarWhereInput";
import { TweetUpdateManyWithWhereWithoutHashtagsInput } from "../inputs/TweetUpdateManyWithWhereWithoutHashtagsInput";
import { TweetUpdateWithWhereUniqueWithoutHashtagsInput } from "../inputs/TweetUpdateWithWhereUniqueWithoutHashtagsInput";
import { TweetUpsertWithWhereUniqueWithoutHashtagsInput } from "../inputs/TweetUpsertWithWhereUniqueWithoutHashtagsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetUpdateManyWithoutHashtagsInput", {
  isAbstract: true
})
export class TweetUpdateManyWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => [TweetCreateWithoutHashtagsInput], {
    nullable: true
  })
  create?: TweetCreateWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetCreateOrConnectWithoutHashtagsInput], {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpsertWithWhereUniqueWithoutHashtagsInput], {
    nullable: true
  })
  upsert?: TweetUpsertWithWhereUniqueWithoutHashtagsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TweetUpdateWithWhereUniqueWithoutHashtagsInput], {
    nullable: true
  })
  update?: TweetUpdateWithWhereUniqueWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpdateManyWithWhereWithoutHashtagsInput], {
    nullable: true
  })
  updateMany?: TweetUpdateManyWithWhereWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TweetScalarWhereInput[] | undefined;
}
