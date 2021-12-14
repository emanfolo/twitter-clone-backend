import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagUpdateManyMutationInput } from "../../../inputs/HashtagUpdateManyMutationInput";
import { HashtagWhereInput } from "../../../inputs/HashtagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHashtagArgs {
  @TypeGraphQL.Field(_type => HashtagUpdateManyMutationInput, {
    nullable: false
  })
  data!: HashtagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HashtagWhereInput, {
    nullable: true
  })
  where?: HashtagWhereInput | undefined;
}
