const MB = 5; // 5 MB
const FILE_SIZE_LIMIT = MB * 1024 * 1024;
const ACCEPTED_FILE = [".png", ".jpg", ".jpeg"];
const FILE_PATH = {
  IMAGE_PATH: "public/images/",
  AUDIO_PATH: "public/audio/",
};

export { MB, FILE_SIZE_LIMIT, ACCEPTED_FILE, FILE_PATH };
