import mongoose from "mongoose";
export declare const ObjectId: (id?: string) => mongoose.Types._ObjectId;
export declare const isObjectId: (id?: string) => boolean;
export declare const instanceofObjectId: (id: any) => boolean;
export declare const arrayRemoveDuplicates: (arr: Array<any>) => any[];
export declare const arrayRemoveItems: (arr: Array<any>, itemRemove: any) => any[];
