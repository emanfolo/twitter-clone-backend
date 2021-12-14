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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTweetArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TweetOrderByWithAggregationInput_1 = require("../../../inputs/TweetOrderByWithAggregationInput");
const TweetScalarWhereWithAggregatesInput_1 = require("../../../inputs/TweetScalarWhereWithAggregatesInput");
const TweetWhereInput_1 = require("../../../inputs/TweetWhereInput");
const TweetScalarFieldEnum_1 = require("../../../../enums/TweetScalarFieldEnum");
let GroupByTweetArgs = class GroupByTweetArgs {
};
__decorate([
    TypeGraphQL.Field(_type => TweetWhereInput_1.TweetWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTweetArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TweetOrderByWithAggregationInput_1.TweetOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTweetArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TweetScalarFieldEnum_1.TweetScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByTweetArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => TweetScalarWhereWithAggregatesInput_1.TweetScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTweetArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTweetArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], GroupByTweetArgs.prototype, "skip", void 0);
GroupByTweetArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByTweetArgs);
exports.GroupByTweetArgs = GroupByTweetArgs;
//# sourceMappingURL=GroupByTweetArgs.js.map