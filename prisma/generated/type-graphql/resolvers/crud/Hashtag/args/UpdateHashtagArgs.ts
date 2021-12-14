import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagUpdateInput } from "../../../inputs/HashtagUpdateInput";
import { HashtagWhereUniqueInput } from "../../../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagUpdateInput, {
    nullable: false
  })
  data!: HashtagUpdateInput;

  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;
}
