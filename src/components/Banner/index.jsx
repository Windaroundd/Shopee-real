import React from "react";
import Slider from "../Swiper/Swiper";

const data = [
  {
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134258-82260-mhlnp92ot8g396@resize_w1594_nl.webp",
    title: "Main Banner",
  },
  {
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134258-82260-mhlnp92ot8g396@resize_w1594_nl.webp",
    title: "Main Banner",
  },
  {
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134258-82260-mhlnp92ot8g396@resize_w1594_nl.webp",
    title: "Main Banner",
  },
  {
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134258-82260-mhlnp92ot8g396@resize_w1594_nl.webp",
    title: "Main Banner",
  },
  {
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134258-82260-mhlnp92ot8g396@resize_w1594_nl.webp",
    title: "Main Banner",
  },
];

const index = () => {
  return (
    <div className="bg-[#f5f5f5] py-4">
      <div className="container mx-auto max-w-7xl px-4">
        {/* --- Top Section: Main Banner & Sub Banners --- */}
        <div className="grid grid-cols-12 gap-1 mb-6">
          {/* Main Slider (Chiếm 8 cột) */}
          <div className="col-span-8 relative">
            <Slider data={data} />
          </div>

          {/* Sub Banners (Chiếm 4 cột) */}
          <div className="col-span-4 flex flex-col gap-1">
            <img
              src="https://down-vn.img.susercontent.com/file/sg-11134258-82260-mhlnp92ot8g396@resize_w1594_nl.webp"
              alt="Sub 1"
              className="w-full h-[148px] object-cover rounded-sm"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/sg-11134258-81zv4-min010zmyg3s61@resize_w796_nl.webp"
              alt="Sub 2"
              className="w-full h-[148px] object-cover rounded-sm"
            />
          </div>
        </div>

        {/* --- Bottom Section: Icons Menu --- */}
        <div className="bg-white py-4 rounded-sm flex justify-between items-start text-center shadow-sm px-2">
          {/* Mục 1: Deal 1k */}
          <div className="flex flex-col items-center gap-3 w-28 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl bg-orange-50 group-hover:-translate-y-1 transition-all">
              <svg
                className="w-7 h-7 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-gray-800 group-hover:text-[#ee4d2d]">
              Deal Từ 1.000Đ
            </span>
          </div>

          {/* Mục 2: Shopee Xử Lý */}
          <div className="flex flex-col items-center gap-3 w-28 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl bg-red-50 group-hover:-translate-y-1 transition-all">
              <svg
                className="w-7 h-7 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-gray-800 group-hover:text-[#ee4d2d]">
              Shopee Xử Lý
            </span>
          </div>

          {/* Mục 3: Deal Hot */}
          <div className="flex flex-col items-center gap-3 w-28 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl bg-yellow-50 group-hover:-translate-y-1 transition-all">
              <svg
                className="w-7 h-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-gray-800 group-hover:text-[#ee4d2d]">
              Giờ Vàng
            </span>
          </div>

          {/* Mục 4: Voucher */}
          <div className="flex flex-col items-center gap-3 w-28 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl bg-pink-50 group-hover:-translate-y-1 transition-all">
              <svg
                className="w-7 h-7 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-gray-800 group-hover:text-[#ee4d2d]">
              Voucher 30%
            </span>
          </div>

          {/* Mục 5: Thành Viên */}
          <div className="flex flex-col items-center gap-3 w-28 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-2xl bg-blue-50 group-hover:-translate-y-1 transition-all">
              <svg
                className="w-7 h-7 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium text-gray-800 group-hover:text-[#ee4d2d]">
              Thành Viên
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
