import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagWhereInput } from "../../../inputs/HashtagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  where?: HashtagWhereInput | undefined;
}
