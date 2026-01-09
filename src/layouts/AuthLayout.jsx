import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ee4d2d] via-[#ff6b4a] to-[#ff8c6b] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-block mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" 
              alt="Shopee Logo" 
              className="h-16 w-auto mx-auto brightness-0 invert"
            />
          </Link>
          <h2 className="text-white text-2xl font-semibold mb-2">
            Nền tảng thương mại điện tử yêu thích
          </h2>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <Outlet />
        </div>

        {/* Footer Links */}
        <div className="text-center text-white text-sm space-y-2">
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:underline opacity-90">Điều khoản</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline opacity-90">Chính sách</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline opacity-90">Bảo mật</a>
          </div>
          <p className="opacity-75 text-xs mt-4">
            © 2024 Shopee. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
