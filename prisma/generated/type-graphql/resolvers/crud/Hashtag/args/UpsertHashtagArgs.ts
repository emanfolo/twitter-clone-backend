import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagCreateInput } from "../../../inputs/HashtagCreateInput";
import { HashtagUpdateInput } from "../../../inputs/HashtagUpdateInput";
import { HashtagWhereUniqueInput } from "../../../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagCreateInput, {
    nullable: false
  })
  create!: HashtagCreateInput;

  @TypeGraphQL.Field(_type => HashtagUpdateInput, {
    nullable: false
  })
  update!: HashtagUpdateInput;
}
