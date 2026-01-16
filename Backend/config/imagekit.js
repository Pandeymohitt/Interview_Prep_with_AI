import ImageKit from "imagekit";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Explicitly load Backend/.env
dotenv.config({ path: path.join(__dirname, "../.env") });

// 🔍 DEBUG
console.log("IMAGEKIT ENV:", process.env.IMAGEKIT_PUBLIC_KEY);

const { IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, URL_ENDPOINT } = process.env;

if (!IMAGEKIT_PUBLIC_KEY || !IMAGEKIT_PRIVATE_KEY || !URL_ENDPOINT) {
  throw new Error("Missing ImageKit configuration");
}

const imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: URL_ENDPOINT,
});

export default imagekit;
