export const enum ApiPath {
  Brands = 'sf/brands',
  Categories = 'sf/categories',
  Configs = 'sf/configs',
  GuestCarts = 'guest-carts',
  Items = 'items',
  Orders = 'sf/orders',
  Pages = 'sf/pages',
  PaymentInformation = 'payment-information',
  Products = 'sf/products',
  SelectedPaymentMethod = 'selected-payment-method',
  ShippingInformation = 'shipping-information',
  ShippingMethods = 'shipping-methods',
  CustomersLogin = 'integration/customer/token',
  CustomersLogout = 'sf/auth/logout',
  CustomersMe = 'customers/me',
  CustomersRegister = 'customers',
}

export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}

export const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
