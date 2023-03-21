import React from "react";
import styles from "../styles";
import { logo, thiennhien } from "../assets";

const Gioithieu = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-10 sm:px-20 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-10 bg-line-gradient rounded-[10px] mb-2">
          <img src={logo} alt="" className="w-[35px] h-[30px]" />
          <span className="px-[5px]">Về chúng tôi</span>
        </div>
        <h1>Ngôi Sao Xanh</h1>
        <div>
          <p>Ngôi sao xanh</p><br/>
          <a className="border bg-neutral-500 px-2 py-2 hover:bg-red-400">
            Tại sao chúng tôi luôn là lựa chọn hàng đầu?
          </a>
        </div>
      </div>
      <div>
        <img src={thiennhien} alt="goithieu" width="350px" />
      </div>
    </section>
  );
};

export default Gioithieu;
