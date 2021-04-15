"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
// ---------- ADD IMPORTS -------------
const core_1 = require("@loopback/core");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const security_1 = require("@loopback/security");
const repository_1 = require("@loopback/repository");
// ----------------------------------
let UserController = class UserController {
    constructor(jwtService, userService, user, userRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.user = user;
        this.userRepository = userRepository;
    }
};
UserController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(1, core_1.inject(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__param(2, core_1.inject(security_1.SecurityBindings.USER, { optional: true })),
    tslib_1.__param(3, repository_1.repository(authentication_jwt_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [Object, authentication_jwt_1.MyUserService, Object, authentication_jwt_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map