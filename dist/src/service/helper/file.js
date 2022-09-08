"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFilePath = void 0;
const file_1 = require("../../constants/file");
function configFilePath(fileExt) {
    if (file_1.FILE_EXNTESION.IMAGE_EXTENSION.includes(fileExt))
        return file_1.FILE_PATH.IMAGE_PATH;
    if (file_1.FILE_EXNTESION.AUDIO_EXTENSION.includes(fileExt))
        return file_1.FILE_PATH.AUDIO_PATH;
    if (file_1.FILE_EXNTESION.DOCUMENT_EXTENSION.includes(fileExt))
        return file_1.FILE_PATH.DOCUMENT_PATH;
    if (file_1.FILE_EXNTESION.VIDEO_EXTENSION.includes(fileExt))
        return file_1.FILE_PATH.VIDEO_PATH;
}
exports.configFilePath = configFilePath;
//# sourceMappingURL=file.js.map