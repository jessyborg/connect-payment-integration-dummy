import { Static, Type } from '@sinclair/typebox';

export const PaymentRequestSchema = Type.Object({
  paymentMethod: Type.String(),
});

export enum PaymentOutcome {
  AUTHORIZED = 'Authorized',
  REJECTED = 'Rejected',
}

export const PaymentResponseSchema = Type.Object({
  paymentReference: Type.String(),
});

export type PaymentRequestSchemaDTO = Static<typeof PaymentRequestSchema>;
export type PaymentResponseSchemaDTO = Static<typeof PaymentResponseSchema>;
