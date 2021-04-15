"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
//import {MiddlewareSequence} from '@loopback/rest';
//export class MySequence extends MiddlewareSequence {}
// ---------- ADD IMPORTS -------------
const authentication_1 = require("@loopback/authentication");
// ------------------------------------
let MySequence = class MySequence {
    constructor(
    // ---- ADD THIS LINE ------
    authenticateRequest) {
        this.authenticateRequest = authenticateRequest;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            // - enable jwt auth -
            // call authentication action
            // ---------- ADD THIS LINE -------------
            await this.authenticateRequest(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            // ---------- ADD THIS SNIPPET -------------
            // if error is coming from the JWT authentication extension
            // make the statusCode 401
            if (err.code === authentication_1.AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === authentication_1.USER_PROFILE_NOT_FOUND) {
                Object.assign(err, { statusCode: 401 /* Unauthorized */ });
            }
            // ---------- END OF SNIPPET -------------
            this.reject(context, err);
        }
    }
};
MySequence = tslib_1.__decorate([
    tslib_1.__param(0, inject(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    tslib_1.__metadata("design:paramtypes", [Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map