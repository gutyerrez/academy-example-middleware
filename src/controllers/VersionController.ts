import { Request, Response } from 'express'

export class VersionController {
  public static index = async (
    _request: Request,
    response: Response
  ) => {
    try {
      return response.json({
        'API Version': '0.0.1-ALPHA'
      })
    } catch (err: any) {
      console.error(err.message)
    }
  }
}