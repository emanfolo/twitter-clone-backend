// import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import * as bcrypt from 'bcryptjs'

import { User } from '../../../models/User';
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from '../../../helpers'

import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateUserArgs } from "./args/CreateUserArgs";


@TypeGraphQL.Resolver(_of => User)
export class RegisterUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async registerUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUserArgs): Promise<User> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }  
}

  // @TypeGraphQL.Mutation(() => User)
  // async register(
  //   @Arg('email') email: string,
  //   @Arg('name') name: string,
  //   @Arg('username') username: string,
  //   @Arg('password') password: string
  // ): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(password, 12)

  //   const user = await User.create({
  //     email,
  //     name,
  //     username,
  //     hashedPassword
  //   }).save();

  //   return user;
//   }


// }

