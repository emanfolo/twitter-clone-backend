import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TweetScalarWhereInput", {
  isAbstract: true
})
export class TweetScalarWhereInput {
  @TypeGraphQL.Field(_type => [TweetScalarWhereInput], {
    nullable: true
  })
  AND?: TweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereInput], {
    nullable: true
  })
  OR?: TweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereInput], {
    nullable: true
  })
  NOT?: TweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contents?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userID?: IntFilter | undefined;
}
