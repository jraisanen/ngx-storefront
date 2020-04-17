export const enum ApiPath {
  Brands = 'sf/brands',
  Categories = 'sf/categories',
  Configs = 'sf/configs',
  GuestCarts = 'guest-carts',
  Items = 'items',
  Orders = 'orders',
  Pages = 'sf/pages',
  PaymentInformation = 'payment-information',
  Posts = 'posts',
  Products = 'sf/products',
  SelectedPaymentMethod = 'selected-payment-method',
  ShippingInformation = 'shipping-information',
  ShippingMethods = 'shipping-methods',
  UsersLogin = 'users/login',
  UsersLogout = 'users/logout',
  UsersMe = 'users/me',
  UsersRegister = 'users/register',
}

export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Patch = 'PATCH',
  Put = 'PUT',
  Delete = 'DELETE',
}
