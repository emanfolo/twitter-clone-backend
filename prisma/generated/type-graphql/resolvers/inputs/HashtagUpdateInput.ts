import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TweetUpdateManyWithoutHashtagsInput } from "../inputs/TweetUpdateManyWithoutHashtagsInput";

@TypeGraphQL.InputType("HashtagUpdateInput", {
  isAbstract: true
})
export class HashtagUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  contents?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateManyWithoutHashtagsInput, {
    nullable: true
  })
  tweets?: TweetUpdateManyWithoutHashtagsInput | undefined;
}
