import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './ProductDetails.scss';

export const ProductDetails: React.FC = React.memo(
  () => {
    const { productDetails, cart, setCart } = useContext(AppContext);

    const [imagesUrls, setImagesUrls] = useState<string[]>([]);
    const [displayImageUrl, setDisplayImageUrl] = useState('');
    const [variants, setVariants] = useState<Variant[]>([]);

    const details = document.getElementById('details');

    useEffect(() => {
      if (productDetails) {
        setImagesUrls(productDetails.media.images.map(image => image.url));
      }

    }, [imagesUrls, productDetails]);

    useEffect(() => {
      if (productDetails) {
        setDisplayImageUrl(productDetails.media.images[0].url);
        setVariants(productDetails.variants);
      }
    }, [productDetails]);

    useEffect(() => {
      console.log(details)
    }, [details]);

    return (
      <div className="product-details">
        <div className="product-details__wrapper">
          <div className="product-details__content">
            <div className="product-details__visuals">
              <ul className="product-details__previews">
                {imagesUrls.map((imageUrl, index) => (
                  <li key={index}>
                      <img
                        src={`https://${imageUrl}`} 
                        alt="product"
                        className="product-details__image--preview"
                        onClick={() => setDisplayImageUrl(imageUrl)}
                      />
                  </li>
                ))}
              </ul>

              <div className="product-details__image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/left-arrow.png`} 
                  alt="left arrow"
                  className="product-details__image-arrows product-details__image-arrows--left"
                  onClick={() => {
                    const index = imagesUrls.findIndex(url => url === displayImageUrl);

                    if (index === 0) {
                      setDisplayImageUrl(imagesUrls[3]);
                    } else {
                      setDisplayImageUrl(imagesUrls[index - 1]);
                    }
                  }}
                />

                <img 
                  src={`https://${displayImageUrl}`} 
                  alt="product"
                  className="product-details__image-img"
                />

                <img 
                  src={`${process.env.PUBLIC_URL}/images/right-arrow.png`} 
                  alt="right arrow"
                  className="product-details__image-arrows product-details__image-arrows--right"
                  onClick={() => {
                    const index = imagesUrls.findIndex(url => url === displayImageUrl);

                    if (index === 3) {
                      setDisplayImageUrl(imagesUrls[0]);
                    } else {
                      setDisplayImageUrl(imagesUrls[index + 1]);
                    }
                  }}
                />
              </div>
            </div>

            <div className="product-details__info">
              <h3 className="product-details__info-name">
                {productDetails?.name}
              </h3>

              <p className="product-details__info-price">
                {productDetails?.price.current.text}
              </p>

              <p className="product-details__info-color">
                {`Color: ${productDetails?.media.images[0].colour}`}
              </p>

              <div className="product-details__info-size">
                <p>Size:</p>

                <select 
                  name="size" 
                  className="product-details__info-size--select"
                >
                  {variants.map(variant => {
                    if (!variant.isAvailable) {
                      return (
                        <option  value=""  disabled>
                          {`${variant.displaySizeText} - Out of Stock`}
                        </option>
                      )
                    }
                    return (
                      <option value="">
                        {variant.displaySizeText}
                      </option>
                    )
                  })}
                </select>
              </div>

              {!productDetails?.isInStock && (
                <p className="product-details__info-stock">Out of stock</p>
              )}

              <button 
                type="button"
                className="product-details__info-button"
                onClick={() => {
                  if (cart.every(item => item.name !== productDetails?.name)) {
                    setCart(prevCart => [
                      ...prevCart,
                      productDetails!,
                    ])
                  }}}
              >
                Add to cart
              </button>

              
            </div>
          </div>

          <div className="product-details__description">
            <div>
              <p 
                className="product-details__description-heading"
              >
                Product details
              </p>

              <div 
                dangerouslySetInnerHTML={{__html: productDetails?.description!}}
                className="product-details__description-desc"
              >
              </div>
            </div>

            <div>
              <p className="product-details__description-heading">
                Product code
              </p>
              <p>{productDetails?.productCode}</p>
            </div>

            <div className="product-details__info-text">
              <div className="product-details__info-text-container">
                <p className="product-details__description-heading">
                  Size & Fit
                </p>

                <div
                  dangerouslySetInnerHTML={{__html: productDetails?.info.sizeAndFit!}}
                >
                </div>
              </div>

              <div className="product-details__info-text-container">
                <p className="product-details__description-heading">
                  Look after me
                </p>

                <div
                  dangerouslySetInnerHTML={{__html: productDetails?.info.careInfo!}}
                >
                </div>
              </div>

              <div className="product-details__info-text-container">
                <p className="product-details__description-heading">
                  About me
                </p>
                <div
                  dangerouslySetInnerHTML={{__html: productDetails?.info.aboutMe!}}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
)
