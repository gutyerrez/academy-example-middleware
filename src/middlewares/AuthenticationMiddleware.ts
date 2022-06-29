import { NextFunction, Request, Response } from 'express'

import { JwtPayload, verify } from 'jsonwebtoken'

export class AuthenticationMiddleware {
  public static handle = async (
    request: Request,
    _response: Response,
    nextFunction: NextFunction
  ) => {
    const headers = request.headers

    if (!headers.authorization) {
      throw new Error('Unauthorized')
    }

    const [tokenType, tokenValue] = headers.authorization.split(' ')

    if (tokenType !== 'Bearer') {
      throw new Error('Unauthorized')
    }

    const { user_id: userId } = verify(
      tokenValue,
      process.env.APP_KEY!
    ) as JwtPayload

    console.log(userId)

    return nextFunction()
  }
}
