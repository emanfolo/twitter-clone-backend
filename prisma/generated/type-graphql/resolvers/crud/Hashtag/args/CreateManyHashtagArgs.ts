import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HashtagCreateManyInput } from "../../../inputs/HashtagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHashtagArgs {
  @TypeGraphQL.Field(_type => [HashtagCreateManyInput], {
    nullable: false
  })
  data!: HashtagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
