import React from 'react'
import ProductTemplate from '../components/ProductTemplate';
import data from '../data/content.json';
import ShoppingCart from '../components/ShoppingCart';
import otherData from '../data/otherdata.json';
import CategoryCart from '../components/CategoryCart';
import { Smartphone,Computer, Watch, CameraAlt, Headphones, SportsEsports } from '@mui/icons-material';
import CategoryTemplete from '../components/CategoryTemplete';
import Banner from '../components/Banner';

const colour = "text-gray-800";
const category = [
  {
    categoryIcon:<Smartphone fontSize='large' className={colour} />,
    text:'phones',
  },
  {
    categoryIcon:<Computer fontSize='large' className={colour}/>,
    text:'computers',
  },
  {
    categoryIcon:<Watch fontSize='large' className={colour}/>,
    text:'SmartWatch',
  },
  {
    categoryIcon:<CameraAlt fontSize='large' className={colour}/>,
    text:'camera',
  },
  {
    categoryIcon:<Headphones fontSize='large' className={colour}/>,
    text:'headphones',
  },
  {
    categoryIcon:<SportsEsports fontSize='large' className={colour}/>,
    text:'gaming',
  }
];
function Product() {
  const bannerData = otherData.banner;
  return (
    <div className="w-[90%] flex flex-col gap-4 x-sm:w-[99%]">
        <ProductTemplate
          productHeading={"today's"}
          productSubheading={"flash sales"}
          arrowIcon={true}
          products={
            data.discountedProduct.map((item,index)=>(
                <ShoppingCart
                  key={index}
                  discount={item.discount}
                  itemImg={item.img}
                  itemName={item.productName}
                  discountedPrice={item.price}
                  orgPrice={item.notPrice}
                />
            ))
          }
        />
        <CategoryTemplete
          categoryHeading={"categories"}
          categorySubheading={"browse by category"}
          arrowIcon={false}
          products={
            category.map((item,index)=>(
              <CategoryCart
                key={index}
                imgLogo={item.categoryIcon}
                text={item.text}/>
            ))
          }
        />
        <ProductTemplate
          productHeading={'this month'}
          productSubheading={'best selling product'}
          arrowIcon={'view all'}
          products={
            data.newProduct.map((item,index)=>(
              <ShoppingCart
                key={index}
                discount={item.discount}
                itemImg={item.img}
                itemName={item.productName}
                discountedPrice={item.price}
                orgPrice={item.notprice}
              />
            ))
          }
        />
        <Banner
          bannerBgImg={bannerData.img}
          bannerHeading={bannerData.head}
          bannerCaption={bannerData.subhead}
          imgAlt={bannerData.describe}
        />
        <ProductTemplate
          productHeading={'our products'}
          productSubheading={'explore our products'}
          arrowIcon={true}
          products={
            data.newProduct.map((item,index)=>(
              <ShoppingCart 
               key={indexedDB}
               discount={item.discount}
               itemImg={item.img}
               itemName={item.productName}
               discountedPrice={item.price}
              />
            ))
          }
        />
    </div>
  )
}

export default Product;