import React from "react";
import { Search, ShoppingCart, Bell, HelpCircle, Globe } from "lucide-react";

const index = () => {
  return <header className="bg-[#ee4d2d] text-white text-[13px] pb-4">
      <div className="container mx-auto px-4">
        {/* --- Top Navbar --- */}
        <div className="flex justify-between py-2">
          {/* Top Left */}
          <div className="flex gap-3">
            <a href="#" className="hover:opacity-80">Kênh Người Bán</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:opacity-80">Trở thành Người bán Shopee</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:opacity-80">Tải ứng dụng</a>
            <span className="opacity-30">|</span>
            <div className="flex items-center gap-2">
              Kết nối
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="w-4 h-4 invert" alt="FB" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-4 h-4 invert" alt="IG" /></a>
            </div>
          </div>

          {/* Top Right */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              <Bell size={16} /> Thông báo
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              <HelpCircle size={16} /> Hỗ trợ
            </a>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <Globe size={16} /> Tiếng Việt <span className="text-[10px]">▼</span>
            </div>
            <div className="flex gap-3 font-semibold">
              <a href="#" className="hover:opacity-80">Đăng Ký</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:opacity-80">Đăng Nhập</a>
            </div>
          </div>
        </div>

        {/* --- Main Header (Search & Logo) --- */}
        <div className="flex items-center mt-3 gap-10">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer mb-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" 
              alt="Shopee Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
          </div>

          {/* Search Bar Container */}
          <div className="flex-grow">
            <div className="bg-white p-1 rounded-sm flex shadow-sm">
              <input 
                type="text" 
                placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" 
                className="flex-grow px-4 py-2 text-black text-sm outline-none"
              />
              <button className="bg-[#fb5533] px-6 py-2 rounded-sm hover:opacity-90 transition-opacity">
                <Search size={20} />
              </button>
            </div>

            {/* Sub-Search Keywords */}
            <div className="flex gap-3 mt-2 text-[12px] opacity-90">
              <a href="#" className="hover:text-gray-200">Sục Crocs</a>
              <a href="#" className="hover:text-gray-200">Quần Đùi Bó</a>
              <a href="#" className="hover:text-gray-200">Gương Toàn Thân</a>
              <a href="#" className="hover:text-gray-200">Áo Khoác Hot</a>
              <a href="#" className="hover:text-gray-200">Món Ăn Vặt</a>
              <a href="#" className="hover:text-gray-200">Quần Jean Ống Rộng</a>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="px-5 cursor-pointer relative group">
            <ShoppingCart size={32} />
            {/* Badge giả */}
            <span className="absolute top-[-5px] right-2 bg-white text-[#ee4d2d] text-[12px] px-1.5 rounded-full border border-[#ee4d2d]">
              3
            </span>
          </div>
        </div>
      </div>
    </header>;
};

export default index;
