export function Task(text) {
  this.text = text
  this.status = STATUSES.PENDING
}

export const STATUSES = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
}