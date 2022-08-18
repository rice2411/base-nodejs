import path from "path";
import { v4 as uuidv4 } from "uuid";
import { FILE_PATH } from "../../constants/file";

const fileController = {
  upload: async (req, res, next) => {
    try {
      const files = req.files;
      Object.keys(files).forEach((key) => {
        let extFile = path.extname(files[key].name);
        const filepath = path.join(
          __dirname,
          "../..",
          FILE_PATH.IMAGE_PATH,
          uuidv4() + extFile
        );
        files[key].mv(filepath, (err) => {
          if (err)
            return res.status(500).json({ status: "error", message: err });
        });
      });

      return res.json({
        status: "success",
        message: Object.keys(files).toString(),
      });
    } catch (err) {
      next(err);
    }
  },
  getFile: async (req, res, next) => {
    try {
      const { image } = req.params;
      res.sendFile(
        path.join(__dirname, "../..", FILE_PATH.IMAGE_PATH + image),
        function (err: any) {
          if (err) {
            next(err);
          }
        }
      );
    } catch (err) {
      next(err);
    }
  },
};

export default fileController;
