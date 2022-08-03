import { useSelector } from "react-redux";

import { isEmpty } from "loadsh";

const TopBanner = () => {
  const data = useSelector((state) => state.main);

  return isEmpty(data.banner) ? (
    <div className="pt-4" />
  ) : (
    <div>
      <div className="sm:block hidden">
        <a href={data.banner.link} target="_blank">
          <img
            src={data.banner.base_url + data.banner.image_url}
            alt={data.banner.image_url}
            className="w-full"
          />
        </a>
      </div>
      <div className=" sm:hidden block">
        <a href={data.banner.link} target="_blank">
          <img
            src={data.banner.base_url + data.banner.mobile_image_url}
            alt={data.banner.mobile_image_url}
            className="w-full"
          />
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
