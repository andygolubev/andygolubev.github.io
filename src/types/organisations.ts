export interface Organisation {
    id: string;
    name: string;
    bussinessField: string;
    country: string;
    logo: string;
    logoBw: string;
    link?: string;
}

export interface Organisations {
    organisations: Organisation[];
}