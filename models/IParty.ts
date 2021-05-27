import {IDeputy} from "./IDeputy";

export interface IParty {
    name: string;
    chairman: IDeputy;
    members: Array<IDeputy>;
}