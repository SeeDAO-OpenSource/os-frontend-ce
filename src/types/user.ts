export interface QuickUser {
    _id:      number;
    wallet:   string;
    nickname: string;
}

export interface User {
    _id:      number;
    sysuser:  Sysuser;
    wallet:   string;
    nickname: string;
    email:    string;
    zoom:     Zoom;    
    google:   AuthAccount;
    github:   AuthAccount;
    twitter:  AuthAccount;
    discord:  AuthAccount;
    telegram: AuthAccount;
    wechat:   AuthAccount;
}

export interface AuthAccount {
    name:      string;
    _id:       number;
    id:        string;
    username?: string;
    email?:    string;
    handle?:   string;
}

export interface Sysuser {
    _id:      number;
    username: string;
    auth:     Auth[];
    roles:    Role[];
}

export interface Auth {
    _id:  number;
    id:   string;
    salt: string;
    type: string;
}

export interface Role {
    _id:   number;
    id:    string;
    doc:   string;
    rules: Rule[];
}

export interface Rule {
    _id: number;
}

export interface Zoom {
    _id:  number;
    name: string;
}
