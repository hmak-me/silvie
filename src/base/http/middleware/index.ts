import { Request, Response } from 'express';
import HTTPServer from 'base/http/server';

export const middlewares = {};

export interface IMiddlewareHandler {
	(request: Request, res: Response, next: () => void): void;
}

export default interface IMiddleware {
	handler: IMiddlewareHandler;
}

/**
 * Register middleware decorator
 * @param name The name to access middleware
 * @param global Weather to register this middleware in global scope or not
 */
export function middleware(name: string, global = false): (target: any) => any {
	return (target: IMiddleware): IMiddleware => {
		middlewares[name] = target;

		if (global) {
			HTTPServer.registerGlobalMiddleware(target);
		}

		return target;
	};
}