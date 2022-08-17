export const compareObject = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

//Array.prototype.includes version Object
export const includes_object = (userIDs : Array<any>, objectId : any, managerId? : any) => {
    let flag = false;
    let objectIdFound = {};
    for (let i = 0; i < userIDs.length; i++) {
        let id = userIDs[i]._id !== undefined ? userIDs[i]._id : userIDs[i]
        if (compareObject(id, objectId)) {
            objectIdFound = managerId;
            flag = true;
            break;
        }
    }
    return { objectIdFound, flag };
};