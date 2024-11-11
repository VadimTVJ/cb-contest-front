export type ApiStoreGiftAsset = {
  id: number;
  name: string;
  appearanceColor: string;
}

export type ApiStoreGift = {
  id: number;
  name: string;
  previewGradientFrom: string;
  previewGradientTo: string;
  price: number;
  purchasedQuantity: number;
  totalQuantity: number;
  asset: ApiStoreGiftAsset;
}

export type ApiPurchasedGiftStoreGift = {
  id: number;
  name: string;
  lottieUrl: string;
  price: number;
  totalQuantity: number;
  asset: {
    name: string;
  };
}

export type ApiPurchasedGiftCustomer = {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  hasPremium: boolean;
}

export type ApiPurchasedGift = {
  id: number;
  index: number;
  purchasedDate: string;
  receivedDate: string;
  customer: ApiPurchasedGiftCustomer;
  storeGift: ApiPurchasedGiftStoreGift;
}

export type ApiInvoiceStatus = 'active' | 'paid' | 'expired';

export type ApiInvoice = {
  amount: string;
  asset: 'TON' | 'USDT' | 'BTC' | 'ETH' | 'LTC' | 'BNB' | 'TGX' | 'USDC';
  description: string;
  hash: string;
  invoice_id: number;
  mini_app_invoice_url: string;
  status: ApiInvoiceStatus;
}

export type ApiUser = {
  id: number;
  tgId: number;
  firstName: string;
  lastName: string;
  hasPremium: boolean;
  avatarUrl: string;
  receivedGiftsCount: number;
  leaderboardPosition: number;
}

export type ApiFeedGift = {
  storeGift: {
    id: number;
    name: string;
    price: number;
    asset: {
      name: string;
    };
  };
  customer: {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    tgId: number;
  };
  recipient?: {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    tgId: number;
  };
}

export type ApiFeedItem = {
  id: number;
  action: 'sent_gift' | 'buy_gift' | 'receive_gift';
  purchasedGift: ApiFeedGift;
}
