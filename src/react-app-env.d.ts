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
  // channelExclusions: [],
  // webLargePriority: 0,
  content: {
    title: string;
    // subTitle: string | null,
    // webLargeImageUrl: string | null,
    // mobileImageUrl: string | null
  },
  // display: string | null,
  // style: {
  //   webLargeStyleType: string;
  //   mobileStyleType: string;
  // },
  link: {
  //   linkType: string;
  //   brandSectionAlias: string | null,
    categoryId: null,
  //   webUrl: string;
  //   appUrl: string | null
  },
  children: Cat[];
}

interface Category {
  id: string;
  type: string;
  // channelExclusions: [],
  // webLargePriority: number,
  content: {
    title: string;
    // subTitle: null,
    // webLargeImageUrl: null,
    // mobileImageUrl: null
  },
  // display: null,
  // style: {
  //   webLargeStyleType: string;
  //   mobileStyleType: string;
  // },
  // link: {
  //   linkType: string;
  //   brandSectionAlias: null,
  //   categoryId: number,
  //   webUrl: string;
  //   appUrl: string;
  // },
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
      // value: null,
      text: string;
    },
  rrp: {
      // value: null,
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
  // groupId: null,
  productCode: number;
  productType: string;
  url: string;
  imageUrl: string;
  // videoUrl: null,
  isSellingFast: boolean,
  // sponsoredCampaignId: null
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
