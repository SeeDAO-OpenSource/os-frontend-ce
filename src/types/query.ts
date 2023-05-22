export interface Query {
    query: QueryFilter,
    offset: number,
    limit: number
}

export interface QueryFilter {
    filter: string,
    condition: string,
}

function getQuery(data: Partial<Query>): Query {
    return {
        query: data.query ? data.query : { filter: "", condition: "" },
        offset: data.offset ? data.offset : 0,
        limit: data.limit ? data.limit : 1000
    }
}

export {
    getQuery,
}