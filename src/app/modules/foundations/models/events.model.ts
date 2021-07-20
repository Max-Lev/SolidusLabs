
export interface IEvents {
    timestamp: number;
    price: string;
    status: string;
    snapshot: Snapshot;
}

export class Snapshot {
    IBid: string[] = [];
    ASK: string[] = [];
}