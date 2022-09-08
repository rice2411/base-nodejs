"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paging_1 = require("../../constants/paging");
const mongoosePaginate = require("mongoose-paginate-v2");
module.exports = function paginate(schema, options) {
    schema.plugin(mongoosePaginate);
    schema.statics.paginateCustom = function paginateQuery(query, paginate) {
        let options = {
            page: paginate.page || 1,
            limit: paginate.limit || paging_1.PAGING_DEFAULT.LIMIT,
        };
        return this.paginate(query, options);
    };
};
//# sourceMappingURL=paginate.js.map