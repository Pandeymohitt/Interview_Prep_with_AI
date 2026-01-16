import ImageKit from "imagekit";

const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoint = process.env.URL_ENDPOINT;

let imagekit = null;

if (publicKey && privateKey && urlEndpoint) {
  imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });
} else {
  console.log("⚠️ ImageKit keys missing, skipping ImageKit init");
}

export default imagekit;
