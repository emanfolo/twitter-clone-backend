import * as TypeGraphQL from "type-graphql";

export enum TweetScalarFieldEnum {
  id = "id",
  contents = "contents",
  createdAt = "createdAt",
  image = "image",
  userID = "userID"
}
TypeGraphQL.registerEnumType(TweetScalarFieldEnum, {
  name: "TweetScalarFieldEnum",
  description: undefined,
});
