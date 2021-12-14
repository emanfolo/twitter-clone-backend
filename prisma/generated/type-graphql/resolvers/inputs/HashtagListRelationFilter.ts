import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagWhereInput } from "../inputs/HashtagWhereInput";

@TypeGraphQL.InputType("HashtagListRelationFilter", {
  isAbstract: true
})
export class HashtagListRelationFilter {
  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  every?: HashtagWhereInput | undefined;

  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  some?: HashtagWhereInput | undefined;

  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  none?: HashtagWhereInput | undefined;
}
