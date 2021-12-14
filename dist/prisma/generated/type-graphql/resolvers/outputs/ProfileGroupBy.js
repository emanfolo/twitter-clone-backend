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
exports.ProfileGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProfileAvgAggregate_1 = require("../outputs/ProfileAvgAggregate");
const ProfileCountAggregate_1 = require("../outputs/ProfileCountAggregate");
const ProfileMaxAggregate_1 = require("../outputs/ProfileMaxAggregate");
const ProfileMinAggregate_1 = require("../outputs/ProfileMinAggregate");
const ProfileSumAggregate_1 = require("../outputs/ProfileSumAggregate");
let ProfileGroupBy = class ProfileGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], ProfileGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "header_image", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "bio", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], ProfileGroupBy.prototype, "userID", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileCountAggregate_1.ProfileCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileAvgAggregate_1.ProfileAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileSumAggregate_1.ProfileSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileMinAggregate_1.ProfileMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileMaxAggregate_1.ProfileMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileGroupBy.prototype, "_max", void 0);
ProfileGroupBy = __decorate([
    TypeGraphQL.ObjectType("ProfileGroupBy", {
        isAbstract: true
    })
], ProfileGroupBy);
exports.ProfileGroupBy = ProfileGroupBy;
//# sourceMappingURL=ProfileGroupBy.js.map