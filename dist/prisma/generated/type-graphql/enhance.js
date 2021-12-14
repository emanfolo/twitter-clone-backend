"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    Tweet: crudResolvers.TweetCrudResolver,
    Hashtag: crudResolvers.HashtagCrudResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Profile: {
        profile: actionResolvers.FindUniqueProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        createProfile: actionResolvers.CreateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        deleteProfile: actionResolvers.DeleteProfileResolver,
        updateProfile: actionResolvers.UpdateProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        upsertProfile: actionResolvers.UpsertProfileResolver,
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver
    },
    Tweet: {
        tweet: actionResolvers.FindUniqueTweetResolver,
        findFirstTweet: actionResolvers.FindFirstTweetResolver,
        tweets: actionResolvers.FindManyTweetResolver,
        createTweet: actionResolvers.CreateTweetResolver,
        createManyTweet: actionResolvers.CreateManyTweetResolver,
        deleteTweet: actionResolvers.DeleteTweetResolver,
        updateTweet: actionResolvers.UpdateTweetResolver,
        deleteManyTweet: actionResolvers.DeleteManyTweetResolver,
        updateManyTweet: actionResolvers.UpdateManyTweetResolver,
        upsertTweet: actionResolvers.UpsertTweetResolver,
        aggregateTweet: actionResolvers.AggregateTweetResolver,
        groupByTweet: actionResolvers.GroupByTweetResolver
    },
    Hashtag: {
        hashtag: actionResolvers.FindUniqueHashtagResolver,
        findFirstHashtag: actionResolvers.FindFirstHashtagResolver,
        hashtags: actionResolvers.FindManyHashtagResolver,
        createHashtag: actionResolvers.CreateHashtagResolver,
        createManyHashtag: actionResolvers.CreateManyHashtagResolver,
        deleteHashtag: actionResolvers.DeleteHashtagResolver,
        updateHashtag: actionResolvers.UpdateHashtagResolver,
        deleteManyHashtag: actionResolvers.DeleteManyHashtagResolver,
        updateManyHashtag: actionResolvers.UpdateManyHashtagResolver,
        upsertHashtag: actionResolvers.UpsertHashtagResolver,
        aggregateHashtag: actionResolvers.AggregateHashtagResolver,
        groupByHashtag: actionResolvers.GroupByHashtagResolver
    }
};
const crudResolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
    Tweet: ["tweet", "findFirstTweet", "tweets", "createTweet", "createManyTweet", "deleteTweet", "updateTweet", "deleteManyTweet", "updateManyTweet", "upsertTweet", "aggregateTweet", "groupByTweet"],
    Hashtag: ["hashtag", "findFirstHashtag", "hashtags", "createHashtag", "createManyHashtag", "deleteHashtag", "updateHashtag", "deleteManyHashtag", "updateManyHashtag", "upsertHashtag", "aggregateHashtag", "groupByHashtag"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProfileArgs: ["data"],
    CreateManyProfileArgs: ["data", "skipDuplicates"],
    DeleteProfileArgs: ["where"],
    UpdateProfileArgs: ["data", "where"],
    DeleteManyProfileArgs: ["where"],
    UpdateManyProfileArgs: ["data", "where"],
    UpsertProfileArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTweetArgs: ["where"],
    FindFirstTweetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTweetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTweetArgs: ["data"],
    CreateManyTweetArgs: ["data", "skipDuplicates"],
    DeleteTweetArgs: ["where"],
    UpdateTweetArgs: ["data", "where"],
    DeleteManyTweetArgs: ["where"],
    UpdateManyTweetArgs: ["data", "where"],
    UpsertTweetArgs: ["where", "create", "update"],
    AggregateTweetArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTweetArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueHashtagArgs: ["where"],
    FindFirstHashtagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyHashtagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateHashtagArgs: ["data"],
    CreateManyHashtagArgs: ["data", "skipDuplicates"],
    DeleteHashtagArgs: ["where"],
    UpdateHashtagArgs: ["data", "where"],
    DeleteManyHashtagArgs: ["where"],
    UpdateManyHashtagArgs: ["data", "where"],
    UpsertHashtagArgs: ["where", "create", "update"],
    AggregateHashtagArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByHashtagArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    Tweet: relationResolvers.TweetRelationsResolver,
    Hashtag: relationResolvers.HashtagRelationsResolver
};
const relationResolversInfo = {
    User: ["tweets", "profile"],
    Profile: ["user"],
    Tweet: ["user", "hashtags"],
    Hashtag: ["tweets"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    Profile: ["id", "image", "header_image", "bio", "userID"],
    Tweet: ["id", "contents", "createdAt", "image", "userID"],
    Hashtag: ["id", "contents"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "email", "name", "username", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
    ProfileGroupBy: ["id", "image", "header_image", "bio", "userID", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTweet: ["_count", "_avg", "_sum", "_min", "_max"],
    TweetGroupBy: ["id", "contents", "createdAt", "image", "userID", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateHashtag: ["_count", "_avg", "_sum", "_min", "_max"],
    HashtagGroupBy: ["id", "contents", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["tweets"],
    UserCountAggregate: ["id", "email", "name", "username", "createdAt", "updatedAt", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    ProfileCountAggregate: ["id", "image", "header_image", "bio", "userID", "_all"],
    ProfileAvgAggregate: ["id", "userID"],
    ProfileSumAggregate: ["id", "userID"],
    ProfileMinAggregate: ["id", "image", "header_image", "bio", "userID"],
    ProfileMaxAggregate: ["id", "image", "header_image", "bio", "userID"],
    TweetCount: ["hashtags"],
    TweetCountAggregate: ["id", "contents", "createdAt", "image", "userID", "_all"],
    TweetAvgAggregate: ["id", "userID"],
    TweetSumAggregate: ["id", "userID"],
    TweetMinAggregate: ["id", "contents", "createdAt", "image", "userID"],
    TweetMaxAggregate: ["id", "contents", "createdAt", "image", "userID"],
    HashtagCount: ["tweets"],
    HashtagCountAggregate: ["id", "contents", "_all"],
    HashtagAvgAggregate: ["id"],
    HashtagSumAggregate: ["id"],
    HashtagMinAggregate: ["id", "contents"],
    HashtagMaxAggregate: ["id", "contents"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "username", "createdAt", "updatedAt", "tweets", "profile"],
    UserOrderByWithRelationInput: ["id", "email", "name", "username", "createdAt", "updatedAt", "tweets", "profile"],
    UserWhereUniqueInput: ["id", "email", "username"],
    UserOrderByWithAggregationInput: ["id", "email", "name", "username", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "username", "createdAt", "updatedAt"],
    ProfileWhereInput: ["AND", "OR", "NOT", "id", "image", "header_image", "bio", "userID", "user"],
    ProfileOrderByWithRelationInput: ["id", "image", "header_image", "bio", "userID", "user"],
    ProfileWhereUniqueInput: ["id", "userID"],
    ProfileOrderByWithAggregationInput: ["id", "image", "header_image", "bio", "userID", "_count", "_avg", "_max", "_min", "_sum"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "image", "header_image", "bio", "userID"],
    TweetWhereInput: ["AND", "OR", "NOT", "id", "contents", "createdAt", "image", "userID", "user", "hashtags"],
    TweetOrderByWithRelationInput: ["id", "contents", "createdAt", "image", "userID", "user", "hashtags"],
    TweetWhereUniqueInput: ["id"],
    TweetOrderByWithAggregationInput: ["id", "contents", "createdAt", "image", "userID", "_count", "_avg", "_max", "_min", "_sum"],
    TweetScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "contents", "createdAt", "image", "userID"],
    HashtagWhereInput: ["AND", "OR", "NOT", "id", "contents", "tweets"],
    HashtagOrderByWithRelationInput: ["id", "contents", "tweets"],
    HashtagWhereUniqueInput: ["id"],
    HashtagOrderByWithAggregationInput: ["id", "contents", "_count", "_avg", "_max", "_min", "_sum"],
    HashtagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "contents"],
    UserCreateInput: ["email", "name", "username", "createdAt", "updatedAt", "tweets", "profile"],
    UserUpdateInput: ["email", "name", "username", "createdAt", "updatedAt", "tweets", "profile"],
    UserCreateManyInput: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["email", "name", "username", "createdAt", "updatedAt"],
    ProfileCreateInput: ["image", "header_image", "bio", "user"],
    ProfileUpdateInput: ["image", "header_image", "bio", "user"],
    ProfileCreateManyInput: ["id", "image", "header_image", "bio", "userID"],
    ProfileUpdateManyMutationInput: ["image", "header_image", "bio"],
    TweetCreateInput: ["contents", "createdAt", "image", "user", "hashtags"],
    TweetUpdateInput: ["contents", "createdAt", "image", "user", "hashtags"],
    TweetCreateManyInput: ["id", "contents", "createdAt", "image", "userID"],
    TweetUpdateManyMutationInput: ["contents", "createdAt", "image"],
    HashtagCreateInput: ["contents", "tweets"],
    HashtagUpdateInput: ["contents", "tweets"],
    HashtagCreateManyInput: ["id", "contents"],
    HashtagUpdateManyMutationInput: ["contents"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TweetListRelationFilter: ["every", "some", "none"],
    ProfileRelationFilter: ["is", "isNot"],
    TweetOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "email", "name", "username", "createdAt", "updatedAt"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    UserRelationFilter: ["is", "isNot"],
    ProfileCountOrderByAggregateInput: ["id", "image", "header_image", "bio", "userID"],
    ProfileAvgOrderByAggregateInput: ["id", "userID"],
    ProfileMaxOrderByAggregateInput: ["id", "image", "header_image", "bio", "userID"],
    ProfileMinOrderByAggregateInput: ["id", "image", "header_image", "bio", "userID"],
    ProfileSumOrderByAggregateInput: ["id", "userID"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    HashtagListRelationFilter: ["every", "some", "none"],
    HashtagOrderByRelationAggregateInput: ["_count"],
    TweetCountOrderByAggregateInput: ["id", "contents", "createdAt", "image", "userID"],
    TweetAvgOrderByAggregateInput: ["id", "userID"],
    TweetMaxOrderByAggregateInput: ["id", "contents", "createdAt", "image", "userID"],
    TweetMinOrderByAggregateInput: ["id", "contents", "createdAt", "image", "userID"],
    TweetSumOrderByAggregateInput: ["id", "userID"],
    HashtagCountOrderByAggregateInput: ["id", "contents"],
    HashtagAvgOrderByAggregateInput: ["id"],
    HashtagMaxOrderByAggregateInput: ["id", "contents"],
    HashtagMinOrderByAggregateInput: ["id", "contents"],
    HashtagSumOrderByAggregateInput: ["id"],
    TweetCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    TweetUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutTweetsInput: ["create", "connectOrCreate", "connect"],
    HashtagCreateNestedManyWithoutTweetsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutTweetsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    HashtagUpdateManyWithoutTweetsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TweetCreateNestedManyWithoutHashtagsInput: ["create", "connectOrCreate", "connect"],
    TweetUpdateManyWithoutHashtagsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TweetCreateWithoutUserInput: ["contents", "createdAt", "image", "hashtags"],
    TweetCreateOrConnectWithoutUserInput: ["where", "create"],
    TweetCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ProfileCreateWithoutUserInput: ["image", "header_image", "bio"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    TweetUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    TweetUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    TweetUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    TweetScalarWhereInput: ["AND", "OR", "NOT", "id", "contents", "createdAt", "image", "userID"],
    ProfileUpsertWithoutUserInput: ["update", "create"],
    ProfileUpdateWithoutUserInput: ["image", "header_image", "bio"],
    UserCreateWithoutProfileInput: ["email", "name", "username", "createdAt", "updatedAt", "tweets"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create"],
    UserUpdateWithoutProfileInput: ["email", "name", "username", "createdAt", "updatedAt", "tweets"],
    UserCreateWithoutTweetsInput: ["email", "name", "username", "createdAt", "updatedAt", "profile"],
    UserCreateOrConnectWithoutTweetsInput: ["where", "create"],
    HashtagCreateWithoutTweetsInput: ["contents"],
    HashtagCreateOrConnectWithoutTweetsInput: ["where", "create"],
    UserUpsertWithoutTweetsInput: ["update", "create"],
    UserUpdateWithoutTweetsInput: ["email", "name", "username", "createdAt", "updatedAt", "profile"],
    HashtagUpsertWithWhereUniqueWithoutTweetsInput: ["where", "update", "create"],
    HashtagUpdateWithWhereUniqueWithoutTweetsInput: ["where", "data"],
    HashtagUpdateManyWithWhereWithoutTweetsInput: ["where", "data"],
    HashtagScalarWhereInput: ["AND", "OR", "NOT", "id", "contents"],
    TweetCreateWithoutHashtagsInput: ["contents", "createdAt", "image", "user"],
    TweetCreateOrConnectWithoutHashtagsInput: ["where", "create"],
    TweetUpsertWithWhereUniqueWithoutHashtagsInput: ["where", "update", "create"],
    TweetUpdateWithWhereUniqueWithoutHashtagsInput: ["where", "data"],
    TweetUpdateManyWithWhereWithoutHashtagsInput: ["where", "data"],
    TweetCreateManyUserInput: ["id", "contents", "createdAt", "image"],
    TweetUpdateWithoutUserInput: ["contents", "createdAt", "image", "hashtags"],
    HashtagUpdateWithoutTweetsInput: ["contents"],
    TweetUpdateWithoutHashtagsInput: ["contents", "createdAt", "image", "user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map