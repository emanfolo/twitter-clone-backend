import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetScalarWhereInput } from "../inputs/TweetScalarWhereInput";
import { TweetUpdateManyMutationInput } from "../inputs/TweetUpdateManyMutationInput";

@TypeGraphQL.InputType("TweetUpdateManyWithWhereWithoutHashtagsInput", {
  isAbstract: true
})
export class TweetUpdateManyWithWhereWithoutHashtagsInput {
  @TypeGraphQL.Field(_type => TweetScalarWhereInput, {
    nullable: false
  })
  where!: TweetScalarWhereInput;

  @TypeGraphQL.Field(_type => TweetUpdateManyMutationInput, {
    nullable: false
  })
  data!: TweetUpdateManyMutationInput;
}
