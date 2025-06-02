// import React, { useEffect, useState } from "react";
// // Component to display home, slider, and product data
// const HomePage = () => {
//   const [homeData, setHomeData] = useState([]);
//   const [sliderData, setSliderData] = useState([]);
//   const [productData, setProductData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error handling

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const homeResponse = await fetch("http://localhost:1234/home");
//         // const home = await homeResponse.json();
//         // console.log("Home Data:", home);
//         // setHomeData(home);

//         // // Fetching data for 'slider' section
//         // const sliderResponse = await fetch("http://localhost:1234/slider");
//         // const slider = await sliderResponse.json();
//         // console.log("Slider Data:", slider);
//         // setSliderData(slider);

//         // Fetching data for 'product' section
//         const productResponse = await fetch("http://localhost:1234/product");
//         const product = await productResponse.json();
//         console.log("Product Data:", product);
//         setProductData(product);
//       } catch (error) {
//         setError(`There was an error fetching the data: ${error.message}`);
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//         <div className="container">
//           <div className="row">
//             <div className="cols-4">
//                  {
//                     productData.map((val)=>{
                      
//                           val.men.map((m)=>{
//                               m.clothes.map((c,index)=>{
//                                   return (
//                                       <div>
//                                           {<p>{c.name}</p>
//                                           }
//                                       </div>
//                                   )
                                
//                               })
                              
//                           })
                          
                           
                      
//                     })
//                  }
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };
// export default HomePage;
import React, { useState, useEffect } from "react";

// Sample data (this could be imported from your db.json or API)
// const data = {
//   "product": [
      
//     {
//       "men": [
//         {
//           "clothes": [
//             {
//               "id": 1,
//               "name": "Men Solid Round Neck Cotton T-Shirt",
//               "brand": "Roadster",
//               "category": "T-Shirts",
//               "price": 499,
//               "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/z/c/s-mn24-rn-hs-beige-solid-seersucker-maniac-original-imah5772djfnrsrd.jpeg?q=70"
//             },
//             {
//               "id": 2,
//               "name": "Men Slim Fit Solid Formal Shirt",
//               "brand": "Levi's",
//               "category": "Jeans",
//               "price": 999,
//               "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/j/y/l-phsh000175-highlander-original-imah2bzm3zbseqky.jpeg?q=70"
//             },
//             {
//               "id": 3,
//               "name": "amiri jazz wolf t-shirt",
//               "brand": "Highlander",
//               "category": "Shirts",
//               "price": 999,
//               "image": "https://cdn.shopify.com/s/files/1/1056/1394/files/cd43a281-dc17-4770-a086-b75fca0b0664.jpg?v=1739233652&width=760&height=1014&crop=center"
//             },
//             {
//               "id": 4,
//               "name": "amiri hollywood t-shirt",
//               "brand": "Puma",
//               "category": "Track Pants",
//               "price": 1499,
//               "image": "https://amiri.com/cdn/shop/files/1b3a83f3-ef4c-430b-b3a5-71a75daa47f1.jpg?v=1733525917&width=1440"
//             }
//           ],
//           "watches": [
//             {
//               "id": 1,
//               "brand": "Rolex",
//               "model": "Submariner",
//               "price": 9500,
//               "description": "Luxury diving watch with classic design.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWutQqux0xzTZXGH-d8JcZSUFlf0KGvFTMmGdByk0cxnLKP3YVzgpp9Bb95Z4JCwdd6hRY8DrGElhUgrukfG67yG-lz9gnuZ9mkwa_wfx8COyaI7OZ_C83Sw",
//               "available": true
//             },
//             {
//               "id": 2,
//               "brand": "Omega",
//               "model": "Speedmaster",
//               "price": 6300,
//               "description": "The iconic moonwatch worn by astronauts.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNfI-Y2DpPt_UEqJt3Clr6O7-0R3xjxEp26y6c7dQVyiaVajOSOFcfnBbSWWMMVnFOU8yLGIIULRH6vP-4sta5Z_VnQoa0pe7DbMTm-CFh4tSgB9pFJJ75",
//               "available": true
//             },
//             {
//               "id": 3,
//               "brand": "Tag Heuer",
//               "model": "Carrera",
//               "price": 4200,
//               "description": "Sporty and elegant, designed for motorsport fans.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0XqP8oxypJAcUMS_r2MPbYofw-2SOYsI1QxME6IpmC9sw5csA9tyIdRxu88YMXRVX1gh_dwydKU26j_qrt_HrA2QLjvn04ycQm_PiSXJChU8t4TKTFI7S",
//               "available": false
//             },
//             {
//               "id": 4,
//               "brand": "Seiko",
//               "model": "Prospex",
//               "price": 1200,
//               "description": "Reliable Japanese diving watch at a great value.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBDzwzmCLDWO8mOotNPnKwwiSbbocI9M0STD-bSTMmNwyjSBV8_46slAG5Bvhib7YLIi-ZgbQdkSkE8d2i8N_jTGyVpgyLzoWRZwSaUs6B",
//               "available": true
//             },
//             {
//               "id": 5,
//               "brand": "Casio",
//               "model": "G-Shock GA2100",
//               "price": 150,
//               "description": "Rugged and affordable digital-analog hybrid.",
//               "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOEpowonnltImYZJKDenlcOm4PovSCHXcaT5JWskUyLkC7lrB3VRN0IGoOasn5PmdSjzTKU3EwluaHjqp0RCS_6ytm4leNONU9BLXeeekB2UhKYiMR0Px6",
//               "available": true
//             }
//           ],
//           "sportShoes": [
//             {
//               "id": 1,
//               "brand": "Nike",
//               "model": "ZoomX Vaporfly NEXT%",
//               "price": 15848.85,
//               "description": "Elite racing shoes built for speed with ZoomX foam.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4GD9_QxMXwmEr8V4AnHS0jdq1JsnnkxH4VT7plgZNx_ZFmoRtZzBNvzVYt59yc7eAvV8bgJRbfAKbeFFqm-r_MyghuJLT8wyOSMO9GgzukxxwAYywQZNHAQ",
//               "available": true,
//               "category": "Running"
//             },
//             {
//               "id": 2,
//               "brand": "Adidas",
//               "model": "Adizero Adios Pro 3",
//               "price": 63056.83,
//               "description": "High-performance running shoes with carbon rods for propulsion.",
//               "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcd1xcuyDsjHAbDsqkSWs4pxCxLT-YGgQf5q5P6ZxG_BgyB1fpfcpwrADbL2no9C7_OShtj5iHkp3-I50lHdGEygCVMKPg-aFm2ANiT3p3V1g0fJP9oNg_vFo",
//               "available": true,
//               "category": "Running"
//             },
//             {
//               "id": 3,
//               "brand": "ASICS",
//               "model": "Gel-Kayano 30",
//               "price": 12797,
//               "description": "Stability running shoes with advanced cushioning.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAjBPQ7H8-wRBUM0ffxf7N-O6ib3NU3mW87k-aSdPeZh3g-iX6EMbwOdAsINrxlhu8pemDHKH9RlT4dlCyUOJpvtIOLd3cU_Elm-vvwC1OvPiIuSgzdQdL",
//               "available": false,
//               "category": "Running"
//             },
//             {
//               "id": 4,
//               "brand": "Under Armour",
//               "model": "HOVR Machina 3",
//               "price": 9781.00,
//               "description": "Smart running shoes with real-time coaching via UA MapMyRun.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPepduDzjkUoKu0ac02OZdlWGblRbjNWBoMdrnhUSMWsvfUmCHU0BbFJbyMxvv975gfnwpOt2NUMt0OmlJNYJbJIW4I5FVRSHy7jTe6coOxrFIH4oRScVOMg",
//               "available": true,
//               "category": "Running"
//             },
//             {
//               "id": 5,
//               "brand": "Puma",
//               "model": "Deviate Nitro 2",
//               "price": 7199,
//               "description": "Lightweight and responsive shoe for long-distance runs.",
//               "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMUVUUrzmPlpigV5XX3ybpwx3sIT6bn7OpaFYshoHopTlsQ_gzFHrQniSpGMBy6On48r0evcN1QJNgHGSEtjMVrxct7y33cHKd5Je4BadRDjxEEhnZLQuC",
//               "available": true,
//               "category": "Running"
//             }
//           ]
//         }
//       ],
//       "women": [
//         {
//           "Watches": [
//             {
//               "id": 1,
//               "brand": "Michael Kors",
//               "model": "Runway MK5774",
//               "price": 10319.98,
//               "description": "Stylish and sleek, with a gold-tone stainless steel bracelet.",
//               "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0c-uGle8xvKwqLA8Cv4Yfsw5JawQ1SkUAX_JWwWdqlrt2ob_EyA12EIRRoe-YUUDx7wP8PzszVu9FHUuPqTiPXMPE3a-j92sjinJwaDmmcgPV4_JdSrqZRw",
//               "available": true
//             },
//             {
//               "id": 2,
//               "brand": "Fossil",
//               "model": "Hybrid HR Collider",
//               "price": 4198.50,
//               "description": "Smart hybrid watch that blends tech with classic analog style.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuI3OGt_ms9ocjFDadI9OtdABu81Rv63LYghvxOeoaWZwfWC1AYW93_h_AGFT9nVVPB9cMUIvSNpRZ2DuFVfYkCnrg3TvTRHJLgrSH8iIOI7oyz4Miz1B1nw",
//               "available": true
//             },
//             {
//               "id": 3,
//               "brand": "Gucci",
//               "model": "G-Timeless",
//               "price": 59400,
//               "description": "Luxury Italian design with elegant diamonds and a stainless steel case.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSw-abSX8d4qJK9igjiUh9fTV9TgTDtyAjMvl1Q_tbX5Ta6D2ezfHZxo_tFerWs1uPcYwbiovpuLuZWohrCfCwhxbDrw9bjLyuscxci_BFBeSRzTeCvr27u",
//               "available": false
//             },
//             {
//               "id": 4,
//               "brand": "Kate Spade",
//               "model": "Metro Gold-tone",
//               "price": 43669,
//               "description": "Chic and minimalistic with a sleek gold-tone design.",
//               "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4wUgqE-ykCpgrCfqgYuzkw8oR8--XY1USlEDtDLcDcvnlC8XuPv-oZajTkIg36BFm-9J2lGSQnePwfz3gUT6Um1aIdnyYwHUtzXsm5-hi880RFVs3usDF",
//               "available": true
//             },
//             {
//               "id": 5,
//               "brand": "Marc Jacobs",
//               "model": "Riley",
//               "price": 12495,
//               "description": "A stylish watch with a large, easy-to-read dial and comfortable leather strap.",
//               "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-eauS2KDIfizWzVWizzOMVq9uvrh4_5l1syhhl8D2FQtMmF7e9Onxu4kZ7ypmaDw7pNHQHlpQql_Zbhx1k3YzrVwLM6E7ZejsPqVAy8Up9__RSM8mEiS1",
//               "available": true
//             }
//           ],
//           "Shoes": [
//             {
//               "id": 1,
//               "brand": "Steve Madden",
//               "model": "Carrson Heels",
//               "price": 12000,
//               "description": "Elegant pointed toe heels with a slim, high heel perfect for formal events.",
//               "image": "https://i.ebayimg.com/images/g/1q8AAOSwDuJhukwb/s-l400.jpg",
//               "available": true,
//               "category": "Heels"
//             },
//             {
//               "id": 2,
//               "brand": "Sam Edelman",
//               "model": "Loraine Loafers",
//               "price": 1230,
//               "description": "Classic loafer style with a chic and modern twist. Comfortable yet stylish.",
//               "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf09BSxcBMcTYUeqBxC3UlI6wDztyDeXw_eM8s62KQKdaEgiBSpy5yTLRg2VWo1a8tqIQ&usqp=CAU",
//               "available": true,
//               "category": "Flats"
//             },
//             {
//               "id": 3,
//               "brand": "Ugg",
//               "model": "Kendra Boots",
//               "price": 3160,
//               "description": "Comfortable and warm suede boots, perfect for cold weather.",
//               "image": "https://di2ponv0v5otw.cloudfront.net/posts/2023/02/24/63f9236aa0aeb7c304db7918/m_63f923ffb635f8a2a7a02b9c.jpg",
//               "available": true,
//               "category": "Boots"
//             },
//             {
//               "id": 4,
//               "brand": "Chanel",
//               "model": "Camellia Pumps",
//               "price": 1166,
//               "description": "Luxurious leather pumps with iconic Camellia flower detail. Elegant and timeless.",
//               "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkEyT_QWE-mbxYRIJN7HWcQfj7SuQJAK5igSKgqgsP7E6BGYTF",
//               "available": false,
//               "category": "Heels"
//             },
//             {
//               "id": 5,
//               "brand": "Prada",
//               "model": "Brushed Leather Booties ",
//               "price": 7289.10,
//               "description": "Chic ankle boots made of luxurious leather, designed for a polished and fashionable look.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlh0uRDeErrd39XI9U5Z2aME3Iw7IveMpdYi3GxHbr-7dfNe58rWqPaOrf03TAhdMgUkVTWaDAKnQS_6RBStFFKjOffTeZGfth8p4esG1U5jOsSaDpLiG0Fg",
//               "available": false,
//               "category": "Boots"
//             }
//           ],
//           "clothes": [
//             {
//               "id": 1,
//               "brand": "Zara",
//               "model": "Checked Blazer",
//               "price": 3699,
//               "description": "A chic and tailored checked blazer to elevate your office look.",
//               "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfQnL8a9QebtJBKOdHvJ1JTq1dFzGYjr_cYU7-9r3XEMTANUhFUpPt7WMwJAKv3mGHttjJwAegrAKj2MwwqP5OAUwYYO7-v4kLyEoj_agxaJKWkKmW3fZgpA",
//               "available": true,
//               "category": "Outerwear"
//             },
//             {
//               "id": 2,
//               "brand": "Uniqlo",
//               "model": "Wool Blend Overcoat",
//               "price": 2267,
//               "description": "Classic wool blend overcoat for a timeless, elegant look.",
//               "image": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/1/NMRvpXiO_5f1cd4acd93449ec90671fac3f0e3314.jpg",
//               "available": false,
//               "category": "Outerwear"
//             },
//             {
//               "id": 3,
//               "brand": "H&M",
//               "model": "Cotton Ribbed Tank",
//               "price": 1500,
//               "description": "Soft, ribbed cotton tank top that goes with everything.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRUip8SJjGDOnv2K_Uv63p13ykL9rYHwrLAn-q-RNAhP_et7Eape8xn_N_hXfTyzCpaztDMgfsfrP5bLGgN35X1hxSmfFhfVA",
//               "available": true,
//               "category": "Casual"
//             },
//             {
//               "id": 4,
//               "brand": "Anthropologie",
//               "model": "Boho Blouse",
//               "price": 1299,
//               "description": "Bohemian-style blouse with embroidered details, perfect for layering.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9C162KNLggYuY959icza4nle0yjIScWq_rkh8PJvLxS91sPYRm1G7fQRL_FlPK-9zGXieollEPW5oU9RIAfutxkOd0ZQjtLZj1MtemNc",
//               "available": false,
//               "category": "Casual"
//             },
//             {
//               "id": 5,
//               "brand": "Everlane",
//               "model": "The Soft Cotton Crew",
//               "price": 628,
//               "description": "Classic crew-neck t-shirt made with soft cotton fabric.",
//               "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSm1Tut7UILsdRvkpdvVb6rsVZ9BgtebvT32LcxaFG8RK6QKlBRMaJOIjygIb3wtSbT3Z8aop_mMHvcw-1d2W6ithWlkZTeYF_I6lTsUG24wO1FOD_WRpk6LQ",
//               "available": true,
//               "category": "Casual"
//             }
//           ]
//         }
//       ]
//     }
  
//   ]
// };


import productData from "./data.json"; // Assuming you save the data in a file named data.json
//product css
import "./product.css";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Flatten and aggregate all items from nested categories
    const men = productData.product[0].men[0];
    const women = productData.product[0].women[0];

    const flattenProducts = (section) =>
      Object.values(section).flat().map((item) => ({ ...item, gender: section === men ? "Men" : "Women" }));

    const combinedProducts = [...flattenProducts(men), ...flattenProducts(women)];
    setProducts(combinedProducts);
  }, []);

  return (
   <div className="container py-4">
  <div className="row g-4">
    {products.map(product => (
      <div
        key={`${product.gender}-${product.id}-${product.model || product.name}`}
        className="col-12 col-sm-6 col-md-4 col-lg-3 px-4" 
      >
        <div className="card h-100 shadow-sm rounded-3 border-0 bg-light">
          <img
            src={product.image}
            alt={product.model || product.name}
            className="card-img-top product-image"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {product.brand} {product.model || product.name}
            </h5>
            <p className="card-text text-muted flex-grow-1">
              {product.description || product.category}
            </p>
            <p className="fw-bold text-primary fs-5">₹{product.price.toLocaleString()}</p>
            {product.available !== undefined && (
              <p className={`mb-0 ${product.available ? 'text-success' : 'text-danger'}`}>
                {product.available ? 'In Stock' : 'Out of Stock'}
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ProductList;


