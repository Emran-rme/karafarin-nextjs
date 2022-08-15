import ImageGallery from "react-image-gallery";

import config from "../../../../services/config.json";

export default function Galleries({ data }) {
  const images = data.get_galleries?.map((image, index) => ({
    original: config.karafarinBase + image.image_url,
    thumbnail: config.karafarinBase + image.thumbnail_image_url,
  }));

  return (
    <ImageGallery items={images} lazyLoad={true} useBrowserFullscreen={false} />
  );
}
