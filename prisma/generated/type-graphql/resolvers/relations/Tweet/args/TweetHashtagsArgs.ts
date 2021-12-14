import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagOrderByWithRelationInput } from "../../../inputs/HashtagOrderByWithRelationInput";
import { HashtagWhereInput } from "../../../inputs/HashtagWhereInput";
import { HashtagWhereUniqueInput } from "../../../inputs/HashtagWhereUniqueInput";
import { HashtagScalarFieldEnum } from "../../../../enums/HashtagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TweetHashtagsArgs {
  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  where?: HashtagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HashtagOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: HashtagOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: true
  })
  cursor?: HashtagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [HashtagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "contents"> | undefined;
}
