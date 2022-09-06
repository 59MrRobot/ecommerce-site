interface Links {
  image: {
    href: string;
  },
  self: {
    href: string;
  },
  listings: {
    href: string;
  },
  follow: {
    href: string;
  }
}

interface Search {
  docs: Device[];
}

interface Section {
  id: string;
  alias: string;
  type: string;
  content: {
    title: string;
  },
  link: {
    categoryId: null,
  },
  children: Cat[];
}

interface Category {
  id: string;
  type: string;
  content: {
    title: string;
  },
  children: Children[];
}

interface Cat {
  id: string;
  content: {
    title: string;
  },
  children: Category[];
}

interface Children extends Category {
  link: Link | null;
}

interface Link {
  categoryId: number | null;
}

interface Product {
  id: number;
  name: string;
  price: {
    current: {
      value: number;
      text: string;
    },
    previous: {
      text: string;
    },
  rrp: {
      text: string;
    },
    isMarkedDown: boolean,
    isOutletPrice: boolean,
    currency: string;
  },
  colour: string;
  colourWayId: number;
  brandName: string;
  hasVariantColours: boolean,
  hasMultiplePrices: boolean,
  productCode: number;
  productType: string;
  url: string;
  imageUrl: string;
  isSellingFast: boolean,
}

interface Facet {
  id: string;
  name: string;
  facetValues: FacetValue[];
  displayStyle: string;
  facetType: string;
  hasSelectedValues: boolean;
}

interface FacetValue {
  count: number;
  id: string;
  name: string;
  isSelected: boolean;
}

interface Image {
  url: string;
  type: string;
  colourWayId: number | null;
  colourCode: string;
  colour: string;
  isPrimary: boolean;
}

interface ProductDetails {
  id: number;
  name: string;
  description: string;
  gender: string;
  productCode: string;
  pdpLayout: string;
  brand: {
    brandId: number;
    name: string;
  };
  isInStock: boolean;
  variants: Variant[];
  media: {
    images: Image[];
  };
  info: {
    aboutMe: string;
    sizeAndFit: string;
    careInfo: string;
  };
  price: {
    current: {
      value: number;
      text: string;
      versionId: string;
      conversionId: string;
    };
    currency: string;
  };
  productType: {
    id: number;
    name: string;
  };
  baseUrl: string;
}

interface Variant {
  id: number;
  name: string;
  sizeId: number;
  brandSize: string;
  sizeDescription: string;
  displaySizeText: string;
  sizeOrder: number;
  sku: string;
  isLowInStock: boolean;
  isInStock: boolean;
  isAvailable: boolean;
  colour: string;
}
