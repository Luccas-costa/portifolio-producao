// lib/framer.ts

export const ControlType = {
  Object: 'object',
  Enum: 'enum',
  Array: 'array',
  Color: 'color',
  Number: 'number',
  Boolean: 'boolean',
} as const

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function addPropertyControls(..._args: unknown[]): void {
  // noop — intencionalmente vazio
}
