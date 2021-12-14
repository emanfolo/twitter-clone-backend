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
exports.ProfileOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProfileAvgOrderByAggregateInput_1 = require("../inputs/ProfileAvgOrderByAggregateInput");
const ProfileCountOrderByAggregateInput_1 = require("../inputs/ProfileCountOrderByAggregateInput");
const ProfileMaxOrderByAggregateInput_1 = require("../inputs/ProfileMaxOrderByAggregateInput");
const ProfileMinOrderByAggregateInput_1 = require("../inputs/ProfileMinOrderByAggregateInput");
const ProfileSumOrderByAggregateInput_1 = require("../inputs/ProfileSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProfileOrderByWithAggregationInput = class ProfileOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "header_image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "bio", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "userID", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileCountOrderByAggregateInput_1.ProfileCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileAvgOrderByAggregateInput_1.ProfileAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileMaxOrderByAggregateInput_1.ProfileMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileMinOrderByAggregateInput_1.ProfileMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileSumOrderByAggregateInput_1.ProfileSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileOrderByWithAggregationInput.prototype, "_sum", void 0);
ProfileOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("ProfileOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProfileOrderByWithAggregationInput);
exports.ProfileOrderByWithAggregationInput = ProfileOrderByWithAggregationInput;
//# sourceMappingURL=ProfileOrderByWithAggregationInput.js.map