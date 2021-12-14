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
exports.HashtagUpdateManyWithoutTweetsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const HashtagCreateOrConnectWithoutTweetsInput_1 = require("../inputs/HashtagCreateOrConnectWithoutTweetsInput");
const HashtagCreateWithoutTweetsInput_1 = require("../inputs/HashtagCreateWithoutTweetsInput");
const HashtagScalarWhereInput_1 = require("../inputs/HashtagScalarWhereInput");
const HashtagUpdateManyWithWhereWithoutTweetsInput_1 = require("../inputs/HashtagUpdateManyWithWhereWithoutTweetsInput");
const HashtagUpdateWithWhereUniqueWithoutTweetsInput_1 = require("../inputs/HashtagUpdateWithWhereUniqueWithoutTweetsInput");
const HashtagUpsertWithWhereUniqueWithoutTweetsInput_1 = require("../inputs/HashtagUpsertWithWhereUniqueWithoutTweetsInput");
const HashtagWhereUniqueInput_1 = require("../inputs/HashtagWhereUniqueInput");
let HashtagUpdateManyWithoutTweetsInput = class HashtagUpdateManyWithoutTweetsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [HashtagCreateWithoutTweetsInput_1.HashtagCreateWithoutTweetsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagCreateOrConnectWithoutTweetsInput_1.HashtagCreateOrConnectWithoutTweetsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagUpsertWithWhereUniqueWithoutTweetsInput_1.HashtagUpsertWithWhereUniqueWithoutTweetsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagWhereUniqueInput_1.HashtagWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagWhereUniqueInput_1.HashtagWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagWhereUniqueInput_1.HashtagWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagWhereUniqueInput_1.HashtagWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagUpdateWithWhereUniqueWithoutTweetsInput_1.HashtagUpdateWithWhereUniqueWithoutTweetsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagUpdateManyWithWhereWithoutTweetsInput_1.HashtagUpdateManyWithWhereWithoutTweetsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [HashtagScalarWhereInput_1.HashtagScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], HashtagUpdateManyWithoutTweetsInput.prototype, "deleteMany", void 0);
HashtagUpdateManyWithoutTweetsInput = __decorate([
    TypeGraphQL.InputType("HashtagUpdateManyWithoutTweetsInput", {
        isAbstract: true
    })
], HashtagUpdateManyWithoutTweetsInput);
exports.HashtagUpdateManyWithoutTweetsInput = HashtagUpdateManyWithoutTweetsInput;
//# sourceMappingURL=HashtagUpdateManyWithoutTweetsInput.js.map