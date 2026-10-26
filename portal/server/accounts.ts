import { m2d } from '../data/m2d'
import { marty } from '../data/marty'

/* Every client space. Add a client: one data file in portal/data, one line here, one key in PORTAL_KEYS. */
export const ACCOUNTS: Record<string, any> = { m2d, marty }

export const accountsFor = (v: { account: string; team: boolean }) =>
  v.team ? ACCOUNTS : ACCOUNTS[v.account] ? { [v.account]: ACCOUNTS[v.account] } : {}
