"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_EXNTESION = exports.FILE_PATH = exports.ACCEPTED_FILE = exports.FILE_SIZE_LIMIT = exports.MB = void 0;
const MB = 5; // 5 MB
exports.MB = MB;
const FILE_SIZE_LIMIT = MB * 1024 * 1024;
exports.FILE_SIZE_LIMIT = FILE_SIZE_LIMIT;
const DEFAULT_FOLDER = "public";
const FILE_EXNTESION = {
    IMAGE_EXTENSION: [".png", ".jpg", ".jpeg"],
    AUDIO_EXTENSION: [".mp3"],
    DOCUMENT_EXTENSION: [".doc", ".docx", ".txt"],
    VIDEO_EXTENSION: [".mp4"],
};
exports.FILE_EXNTESION = FILE_EXNTESION;
const ACCEPTED_FILE = [
    ...FILE_EXNTESION.IMAGE_EXTENSION,
    ...FILE_EXNTESION.AUDIO_EXTENSION,
    ...FILE_EXNTESION.DOCUMENT_EXTENSION,
    ...FILE_EXNTESION.VIDEO_EXTENSION,
];
exports.ACCEPTED_FILE = ACCEPTED_FILE;
const FILE_PATH = {
    IMAGE_PATH: `${DEFAULT_FOLDER}/images/`,
    AUDIO_PATH: `${DEFAULT_FOLDER}/audios/`,
    DOCUMENT_PATH: `${DEFAULT_FOLDER}/docs/`,
    VIDEO_PATH: `${DEFAULT_FOLDER}/videos/`,
};
exports.FILE_PATH = FILE_PATH;
//# sourceMappingURL=file.js.map