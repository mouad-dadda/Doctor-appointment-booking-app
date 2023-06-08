import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/HomeCss/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = ({ colorText }) => {
  const { t } = useTranslation();
  const Color = colorText || "black";
  return (
    <footer className="footer_height">
      <div className="lgine"></div>
      <div className="_container content_footer items-center h-full ">
        <Link to={"/"}>
          {" "}
          <img src="/img/logo.png" alt="" />
        </Link>
        <p className={`text-${Color} text-[14px] ml-[21rem] `}>
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
