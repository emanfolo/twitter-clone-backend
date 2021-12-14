import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagWhereUniqueInput } from "../../../inputs/HashtagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagWhereUniqueInput;
}
