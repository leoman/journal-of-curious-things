import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import Layout from "../../Layout";
import Loading from "../../../components/loading";
import { ProductsActionCreators } from "../../../redux/actions/product";
import { ProductsActionTypes } from "../../../redux/types";
import { ProductI } from "../../../models/product";
import Purchase from "./purchase";
import { priceFormat } from "../../helpers";
import {
  Product,
  ProductContent,
  ReturnToPrevious,
  Title,
  Price,
  Description,
  AddToCart,
  ProductImagesWrapper,
} from "./styles";

interface RouteParams {
  slug: string
}

const findProduct = (products: ProductI[], slug: string) =>
  products.find((product) => product.slug === slug);

const ProductImages = ({ photo, images }: any) => {
  const showPhoto = photo ? <img alt={""} src={photo} /> : null;
  const showImages =
    images && Array.isArray(images) ? (
      <div>
        {images.map((image, i) => (
          <img key={i} alt={""} src={image.url} />
        ))}
      </div>
    ) : null;

  return (
    <ProductImagesWrapper>
      {showPhoto}
      {showImages}
    </ProductImagesWrapper>
  );
};

const ProductView = () => {
  const { slug }: RouteParams = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [purchase, setPurchase] = useState<boolean>(false);

  const { products, loading, productError, product } = useSelector(
    (state: any) => state.ProductReducer
  );

  const getProductsData = useCallback(() => {
    const { getProducts } = ProductsActionCreators;
    dispatch(getProducts());
  }, [dispatch]);

  const setProduct = useCallback(
    (product) => {
      dispatch({
        type: ProductsActionTypes.SET_PRODUCT_RES,
        payload: product,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (!loading && !productError && !products.length) {
      getProductsData();
    }
  }, [loading, products, productError, getProductsData]);

  useEffect(() => {
    if (products) {
      const product = findProduct(products, slug);
      if (product) {
        setProduct(product);
      }
    }
  }, [slug, products, setProduct]);

  const returnToProducts = () => history.push(`/products`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePurchase = useCallback(() => setPurchase(true), [setPurchase])

  if (loading) {
    return <Loading />;
  }

  console.log(product);

  return (
    <Product>
      <ProductContent>
        {/* <% if @return_to_previous %>
          <ReturnToPrevious>
            <%= link_to 'Return to previous', @return_to_previous %>
          </ReturnToPrevious>
        <% end %> */}

        <ReturnToPrevious>
          <p onClick={returnToProducts}>Return to Products</p>
        </ReturnToPrevious>

        <Title>
          <h2>{product.title}</h2>
          <h4>{product.subtitle}</h4>
        </Title>

        <Price>
          <h4>{priceFormat(product.pricePence)}</h4>
        </Price>

        <Description>{product.description}</Description>

        {purchase && <AddToCart onClick={handlePurchase}>Purchase Product</AddToCart>}

        {!purchase && <Purchase product={product} />}
        
      </ProductContent>

      <ProductImages photo={product.photo} images={product.productImage} />
    </Product>
  );
};

const WrappedProductView = () => <Layout component={ProductView} />;

export default WrappedProductView;
