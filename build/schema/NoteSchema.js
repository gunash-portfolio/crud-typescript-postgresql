"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteSchema = exports.createNoteSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createNoteSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default
            .string()
            .min(1, { message: "Name must be greater than 1 characters!" }),
        description: zod_1.default.
            string()
            .min(4, { message: "Description must be greater than 1 characters!" }),
    }),
});
exports.updateNoteSchema = zod_1.default.object({
    params: zod_1.default.object({ id: zod_1.default.string() }),
    body: zod_1.default.object({
        name: zod_1.default.
            string()
            .min(1, { message: "Name must be greater than 1 characters!" }),
        description: zod_1.default.
            string()
            .min(1, { message: "Description must be greater than 4 characters!" }),
    })
        .partial(),
});
