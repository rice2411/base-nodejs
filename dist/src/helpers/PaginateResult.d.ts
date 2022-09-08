declare class ApiPaginateResult {
    private docs;
    private page;
    private limit;
    private totalDocs;
    private totalPages;
    constructor(dto: any);
    toRESPONSE: () => {
        data: any;
        paginate: {
            page: number;
            limit: number;
            totalDocs: number;
            totalPages: number;
        };
    };
}
export { ApiPaginateResult };
