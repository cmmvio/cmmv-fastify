import { Module } from '@cmmv/core';
import { FastifyTranspiler } from './fastify.transpiler';

export const FastifyModule = new Module('fastify', {
    transpilers: [FastifyTranspiler],
});
