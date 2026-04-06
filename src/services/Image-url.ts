import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.lastIndexOf(target) + target.length;
  return url.substring(0, index) + "crop/600/400/" + url.substring(index);
};

export default getCroppedImageURL;
