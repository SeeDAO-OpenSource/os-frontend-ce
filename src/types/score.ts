import type { User } from "./user"

export interface Link {
    title: string,
    url: string
  }
  
export interface FullRecord {
    _id:             number;
    wallet:          string;
    event:           string;
    creator:         Pick<User, "_id" | "wallet" | "nickname">;
    beneficiary:     Pick<User, "_id" | "wallet" | "nickname">;
    status:          string;
    value_claim:     number;
    datetime:        number;
    links:           Link[];
    budget:          Budget;
    notes:           string;
    value_fulfilled: number;
}
  
export interface SearchRecord {
    creator:     Pick<User, "_id" | "wallet" | "nickname">;
    _id:         number;
    beneficiary: Pick<User, "_id" | "wallet" | "nickname">;
    event:       string;
    status:      string;
    value_claim: number;
    datetime:    number;
    budget:      Budget;
}
  
export interface NewRecordResult {
    creator: Pick<User, "_id" | "wallet" | "nickname">
    _id: number
    beneficiary: Pick<User, "_id" | "wallet" | "nickname">
    status: string
    value_claim: number
    datetime: number
    budget: Budget
  }
  
export interface Budget {
    subject: string
    _id: number
}
  
export interface NewRecord {
    creator: number,
    wallet: string,
    notes: string,
    event: string,
    status: string,
    value_claim: number,
    value_fulfilled: number,
    datetime: number,
    budget: number,
    links: Array<Link>
}
  
export interface WalletScore {
    onchainScore: number,
    offchainScore: OffChainScore,
    updated: number,
    level: number
}

export interface OffChainScore {
    registered: number,
    reviewing: number,
}

export interface ScoreMyRegistered {
    creator:     Beneficiary;
    _id:         number;
    beneficiary: Beneficiary;
    status:      string;
    value_claim: number;
    datetime:    number;
    budget:      Budget;
}

export interface Beneficiary {
    nickname: string;
    _id:      number;
    wallet:   string;
}

export interface Budget {
    subject: string;
    _id:     number;
}
