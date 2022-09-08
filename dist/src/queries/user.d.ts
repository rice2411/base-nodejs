import QueryOptions from "../dtos/QueryOptions";
export interface IUserQuery {
    getAllUser: (searchParams: object, options: QueryOptions) => Promise<any>;
    getByCondition: (searchParams: object) => Promise<any>;
    getById: (searchParams: object) => Promise<any>;
}
declare const userQuery: IUserQuery;
export { userQuery };
