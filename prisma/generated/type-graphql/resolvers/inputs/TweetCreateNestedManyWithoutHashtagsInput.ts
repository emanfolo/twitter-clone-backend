import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutHashtagsInput } from "../inputs/TweetCreateOrConnectWithoutHashtagsInput";
import { TweetCreateWithoutHashtagsInput } from "../inputs/TweetCreateWithoutHashtagsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType("TweetCreateNestedManyWithoutHashtagsInput", {
  isAbstract: true
})
export class TweetCreateNestedManyWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => [TweetCreateWithoutHashtagsInput], {
    nullable: true
  })
  create?: TweetCreateWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetCreateOrConnectWithoutHashtagsInput], {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutHashtagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  connect?: TweetWhereUniqueInput[] | undefined;
}
