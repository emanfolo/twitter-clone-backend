import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagCreateOrConnectWithoutTweetsInput } from "../inputs/HashtagCreateOrConnectWithoutTweetsInput";
import { HashtagCreateWithoutTweetsInput } from "../inputs/HashtagCreateWithoutTweetsInput";
import { HashtagWhereUniqueInput } from "../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.InputType("HashtagCreateNestedManyWithoutTweetsInput", {
  isAbstract: true
})
export class HashtagCreateNestedManyWithoutTweetsInput {
  @TypeGraphQL.Field(_type => [HashtagCreateWithoutTweetsInput], {
    nullable: true
  })
  create?: HashtagCreateWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutTweetsInput], {
    nullable: true
  })
  connectOrCreate?: HashtagCreateOrConnectWithoutTweetsInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagWhereUniqueInput[] | undefined;
}
