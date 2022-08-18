import path from "path";
import { FILE_PATH } from "../../constants/file";
import { v4 as uuidv4 } from "uuid";
import { configFilePath } from "../helper/file";

interface IFileService {
  upload: (files: any) => Promise<any>;
  get: (fileName: string, res: any, next: any) => Promise<any>;
}

const fileService: IFileService = {
  upload: async (files) => {
    Object.keys(files).forEach((key) => {
      let extFile = path.extname(files[key].name);
      let savePath = configFilePath(extFile);
      const filepath = path.join(
        __dirname,
        "../..",
        savePath,
        uuidv4() + extFile
      );
      files[key].mv(filepath, (err) => {
        if (err) return Promise.reject({ status: "error", message: err });
      });
    });

    return Promise.resolve({
      status: "success",
      message: "Tải lên thành công",
    });
  },
  get: async (fileName, res, next) => {
    const savePath = configFilePath(path.extname(fileName));
    res.sendFile(path.join(__dirname, "../..", savePath + fileName), (err) => {
      if (err) {
        next(err);
      }
    });
  },
};

export default fileService;
