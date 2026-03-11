import type { BitgenErrorBody } from './types/index.js'

export class BitgenError extends Error {
  /** HTTP status code */
  readonly status: number
  /** BITGEN error code (from body) */
  readonly code: number
  /** BITGEN service name (e.g. "order", "transaction") */
  readonly service: string
  /** BITGEN module name (e.g. "create", "read") */
  readonly module: string
  /** Raw error message from API */
  readonly apiMessage: string

  constructor(status: number, body: BitgenErrorBody) {
    super(`[${body.service}] ${body.message}`)
    this.name = 'BitgenError'
    this.status = status
    this.code = body.code
    this.service = body.service
    this.module = body.module
    this.apiMessage = body.message
  }
}