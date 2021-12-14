import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateNestedManyWithoutHashtagsInput } from "../inputs/TweetCreateNestedManyWithoutHashtagsInput";

@TypeGraphQL.InputType("HashtagCreateInput", {
  isAbstract: true
})
export class HashtagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contents!: string;

  @TypeGraphQL.Field(_type => TweetCreateNestedManyWithoutHashtagsInput, {
    nullable: true
  })
  tweets?: TweetCreateNestedManyWithoutHashtagsInput | undefined;
}
