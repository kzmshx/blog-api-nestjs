import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BaseExceptionFilter } from '@nestjs/core';

import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002': {
        const statusCode = HttpStatus.CONFLICT;

        // In production, don't send the exception details or sensitive information to the client.
        response.status(statusCode).json({ statusCode, message });
        break;
      }
      default:
        super.catch(exception, host);
        break;
    }

    super.catch(exception, host);
  }
}
