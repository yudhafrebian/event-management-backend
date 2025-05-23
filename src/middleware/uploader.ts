import multer from "multer";

export const uploaderMemory = () => {
  return multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter(req, file, callback: any) {
      if (
        file.mimetype === "image/webp" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Only JPG, PNG and WEBP format allowed"), false);
      }
    },
  });
};
