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
exports.AggregateHashtag = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const HashtagAvgAggregate_1 = require("../outputs/HashtagAvgAggregate");
const HashtagCountAggregate_1 = require("../outputs/HashtagCountAggregate");
const HashtagMaxAggregate_1 = require("../outputs/HashtagMaxAggregate");
const HashtagMinAggregate_1 = require("../outputs/HashtagMinAggregate");
const HashtagSumAggregate_1 = require("../outputs/HashtagSumAggregate");
let AggregateHashtag = class AggregateHashtag {
};
__decorate([
    TypeGraphQL.Field(_type => HashtagCountAggregate_1.HashtagCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateHashtag.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagAvgAggregate_1.HashtagAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateHashtag.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagSumAggregate_1.HashtagSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateHashtag.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagMinAggregate_1.HashtagMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateHashtag.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagMaxAggregate_1.HashtagMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateHashtag.prototype, "_max", void 0);
AggregateHashtag = __decorate([
    TypeGraphQL.ObjectType("AggregateHashtag", {
        isAbstract: true
    })
], AggregateHashtag);
exports.AggregateHashtag = AggregateHashtag;
//# sourceMappingURL=AggregateHashtag.js.map