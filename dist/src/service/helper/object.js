"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includes_object = exports.compareObject = void 0;
const compareObject = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
exports.compareObject = compareObject;
//Array.prototype.includes version Object
const includes_object = (userIDs, objectId, managerId) => {
    let flag = false;
    let objectIdFound = {};
    for (let i = 0; i < userIDs.length; i++) {
        let id = userIDs[i]._id !== undefined ? userIDs[i]._id : userIDs[i];
        if ((0, exports.compareObject)(id, objectId)) {
            objectIdFound = managerId;
            flag = true;
            break;
        }
    }
    return { objectIdFound, flag };
};
exports.includes_object = includes_object;
//# sourceMappingURL=object.js.map