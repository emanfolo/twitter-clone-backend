import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { HashtagUpdateManyWithoutTweetsInput } from "../inputs/HashtagUpdateManyWithoutTweetsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTweetsInput } from "../inputs/UserUpdateOneRequiredWithoutTweetsInput";

@TypeGraphQL.InputType("TweetUpdateInput", {
  isAbstract: true
})
export class TweetUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  contents?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTweetsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => HashtagUpdateManyWithoutTweetsInput, {
    nullable: true
  })
  hashtags?: HashtagUpdateManyWithoutTweetsInput | undefined;
}
