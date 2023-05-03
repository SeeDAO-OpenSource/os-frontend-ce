export interface Query {
    query: QueryFilter,
    offset: number,
    limit: number
}

export interface QueryFilter {
    filter: string,
    condition: string,
}