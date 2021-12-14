import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("HashtagCreateWithoutTweetsInput", {
  isAbstract: true
})
export class HashtagCreateWithoutTweetsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contents!: string;
}
