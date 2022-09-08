"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paging_1 = require("../../constants/paging");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
module.exports = function paginate(schema, options) {
    schema.plugin(aggregatePaginate);
    schema.statics.aggregatePaginateCustom = function paginateQuery(query, paginate) {
        let options = {
            page: paginate.page || 1,
            limit: paginate.limit || paging_1.PAGING_DEFAULT.LIMIT,
        };
        return this.aggregatePaginate(query, options);
    };
};
//# sourceMappingURL=aggregatePaginate.js.map