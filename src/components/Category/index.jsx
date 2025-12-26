import React from "react";

const index = () => {
  return <div className="bg-[#f5f5f5] py-5">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Khung trắng bao quanh danh mục */}
        <div className="bg-white rounded-sm shadow-sm">
          
          {/* Tiêu đề DANH MỤC */}
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-gray-500 font-medium uppercase text-base">Danh mục</h2>
          </div>

          {/* Lưới danh mục - 10 cột mỗi hàng */}
          <div className="grid grid-cols-10">
            
            {/* Ô 1: Thời Trang Nam */}
            <div className="border-r border-b border-gray-100 p-2 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-2">
                <img 
                  src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp" 
                  alt="Thời Trang Nam" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] text-gray-700 leading-tight h-10 flex items-center">
                Thời Trang Nam
              </span>
            </div>

            {/* Ô 2: Điện Thoại & Phụ Kiện */}
            <div className="border-r border-b border-gray-100 p-2 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-2">
                <img 
                  src="https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp" 
                  alt="Điện Thoại" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] text-gray-700 leading-tight h-10 flex items-center">
                Điện Thoại & Phụ Kiện
              </span>
            </div>

            {/* Ô 3: Thiết Bị Điện Tử */}
            <div className="border-r border-b border-gray-100 p-2 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-2">
                <img 
                  src="https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5@resize_w640_nl.webp" 
                  alt="Thiết Bị" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] text-gray-700 leading-tight h-10 flex items-center">
                Thiết Bị Điện Tử
              </span>
            </div>

            {/* Ô 4: Máy Tính & Laptop */}
            <div className="border-r border-b border-gray-100 p-2 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-2">
                <img 
                  src="https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w640_nl.webp" 
                  alt="Laptop" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] text-gray-700 leading-tight h-10 flex items-center">
                Máy Tính & Laptop
              </span>
            </div>
            {/* Ô 4: Máy Tính & Laptop */}
            <div className="border-r border-b border-gray-100 p-2 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-2">
                <img 
                  src="https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w640_nl.webp" 
                  alt="Laptop" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[13px] text-gray-700 leading-tight h-10 flex items-center">
                May Quay Phim
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>;
};

export default index;
