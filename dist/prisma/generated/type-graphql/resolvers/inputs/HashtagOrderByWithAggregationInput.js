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
exports.HashtagOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const HashtagAvgOrderByAggregateInput_1 = require("../inputs/HashtagAvgOrderByAggregateInput");
const HashtagCountOrderByAggregateInput_1 = require("../inputs/HashtagCountOrderByAggregateInput");
const HashtagMaxOrderByAggregateInput_1 = require("../inputs/HashtagMaxOrderByAggregateInput");
const HashtagMinOrderByAggregateInput_1 = require("../inputs/HashtagMinOrderByAggregateInput");
const HashtagSumOrderByAggregateInput_1 = require("../inputs/HashtagSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let HashtagOrderByWithAggregationInput = class HashtagOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "contents", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagCountOrderByAggregateInput_1.HashtagCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagAvgOrderByAggregateInput_1.HashtagAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagMaxOrderByAggregateInput_1.HashtagMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagMinOrderByAggregateInput_1.HashtagMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => HashtagSumOrderByAggregateInput_1.HashtagSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagOrderByWithAggregationInput.prototype, "_sum", void 0);
HashtagOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("HashtagOrderByWithAggregationInput", {
        isAbstract: true
    })
], HashtagOrderByWithAggregationInput);
exports.HashtagOrderByWithAggregationInput = HashtagOrderByWithAggregationInput;
//# sourceMappingURL=HashtagOrderByWithAggregationInput.js.map