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
exports.AggregateTweet = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TweetAvgAggregate_1 = require("../outputs/TweetAvgAggregate");
const TweetCountAggregate_1 = require("../outputs/TweetCountAggregate");
const TweetMaxAggregate_1 = require("../outputs/TweetMaxAggregate");
const TweetMinAggregate_1 = require("../outputs/TweetMinAggregate");
const TweetSumAggregate_1 = require("../outputs/TweetSumAggregate");
let AggregateTweet = class AggregateTweet {
};
__decorate([
    TypeGraphQL.Field(_type => TweetCountAggregate_1.TweetCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateTweet.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => TweetAvgAggregate_1.TweetAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateTweet.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => TweetSumAggregate_1.TweetSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateTweet.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => TweetMinAggregate_1.TweetMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateTweet.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => TweetMaxAggregate_1.TweetMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateTweet.prototype, "_max", void 0);
AggregateTweet = __decorate([
    TypeGraphQL.ObjectType("AggregateTweet", {
        isAbstract: true
    })
], AggregateTweet);
exports.AggregateTweet = AggregateTweet;
//# sourceMappingURL=AggregateTweet.js.map