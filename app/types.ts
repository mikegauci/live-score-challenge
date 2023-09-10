export interface DataType {
  all?: DataItemType[] | any[]
  results?: DataItemType[] | any[]
  live?: DataItemType[] | any[]
  upcoming?: DataItemType[] | any[]
}

export interface DataItemType {
  awayScore?: { current: number; normaltime: number; period1: number }
  awayTeam?: {
    gender?: string
    id?: number
    name?: string
    slug?: string
    subteams?: []
  }
  competition?: string
  competitionId?: string
  country?: string
  countryId?: string
  date?: string
  homeScore?: {
    current?: number
    normaltime?: number
    period1?: number
  }
  homeTeam?: {
    gender?: string
    id?: number
    name?: string
    slug?: string
    subteams?: []
  }
  id?: string
  liveStatus?: string
  name?: string
  round?: { round: number }
  status?: { code: number; type: string }
  time?: string
  timestamp?: number
}
