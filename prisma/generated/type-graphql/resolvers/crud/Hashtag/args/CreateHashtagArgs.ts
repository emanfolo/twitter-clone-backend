import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagCreateInput } from "../../../inputs/HashtagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagCreateInput, {
    nullable: false
  })
  data!: HashtagCreateInput;
}
