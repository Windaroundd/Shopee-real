import React from "react";

const products = [
  {
    id: 1,
    title: "Quần thể thao nam",
    price: 424500,
    discount: 15,
    image: "https://down-vn.img.susercontent.com/file/sg-11134201-822yq-miba7z25aq6ef0_tn",
    badge: "Mall",
  },
  {
    id: 2,
    title: "Kính cường lực",
    price: 7500,
    discount: 50,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lytqnfkgzqkt42_tn",
  },
  {
    id: 3,
    title: "Ốp lưng điện thoại",
    price: 9000,
    discount: 74,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-meyl927712wx24_tn",
  },
  {
    id: 4,
    title: "Cáp sạc nhanh",
    price: 29000,
    discount: 52,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mgbt0lnpo7bi4e_tn",
  },
  {
    id: 5,
    title: "Khăn tắm",
    price: 29000,
    discount: 61,
    image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvd1-ljm6hn9zsuk4e0_tn",
    badge: "Mall",
  },
  {
    id: 6,
    title: "Quần short nam",
    price: 52020,
    discount: 13,
    image: "https://down-vn.img.susercontent.com/file/vn-11134211-820l4-mhixrpigs9okb4_tn",
    liked: true,
    badge: "Mall",
  },
];

const format = (v) => v.toLocaleString("vi-VN");

const Index = () => {
  return (
    <section className="bg-white rounded-md shadow-sm p-4 my-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png" alt="Flash Sale" className="h-8 object-contain" />
          </div>
        </div>

        <a href="#" className="text-orange-500 font-medium">
          Xem tất cả &gt;
        </a>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-6 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white">
              <div className="relative rounded overflow-hidden border">
                {/* Top-left small badges */}
                {p.badge && (
                  <div className="absolute left-2 top-2 bg-red-600 text-white px-2 py-0.5 text-xs rounded">
                    {p.badge}
                  </div>
                )}
                {p.liked && (
                  <div className="absolute left-2 top-8 bg-orange-400 text-white px-2 py-0.5 text-xs rounded">
                    Yêu thích
                  </div>
                )}

                {/* Discount */}
                <div className="absolute right-2 top-2 bg-yellow-300 text-red-600 px-2 py-0.5 text-xs font-bold rounded">
                  -{p.discount}%
                </div>

                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-2 text-center">
                <div className="text-orange-400 text-lg font-bold">{format(p.price)} đ</div>
                <div className="mt-2 inline-block bg-linear-to-r from-orange-400 to-orange-300 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ĐANG BÁN CHẠY
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
