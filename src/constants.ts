export const LOGIN_API_URL: string = `${process.env.REACT_APP_API_URL}/auth/admin/sign-in`
export const REGISTER_API_URL: string = `${process.env.REACT_APP_API_URL}/auth/admin/sign-up`
export const PRODUCTS_API_URL: string = `${process.env.REACT_APP_API_URL}/product`
export const REFRESH_TOKEN_API_URL: string = `${process.env.REACT_APP_API_URL}/auth/refresh-token`
export const LOGOUT_API_URL: string = `${process.env.REACT_APP_API_URL}/auth/logout`
export const BRANDS_API_URL: string = `${process.env.REACT_APP_API_URL}/brand`
export const COMPUTER_API_URL: string = `${process.env.REACT_APP_API_URL}/computer`

export const ORDERS_API_URL: string = `${process.env.REACT_APP_API_URL}/order`

export const PAYED_ORDERS_API_URL: string = `${ORDERS_API_URL}/status/payment-succeeded`
export const SHIPPED_ORDERS_API_URL: string = `${ORDERS_API_URL}/status/shipped`
export const ADMIN_ORDERS_API_URL: string = `${ORDERS_API_URL}/status/processing`

export const ALL_ORDERS_API_URL: string = `${ORDERS_API_URL}/all`

export const REQUEST_COURIER_API_URL: string = `${ORDERS_API_URL}/request-courier`
export const PROCESS_ORDER_API_URL: string = `${ORDERS_API_URL}/process`
export const FINISH_ORDER_API_URL: string = `${ORDERS_API_URL}/finish`

export const ECONT_CITIES_URL: string =
    'http://ee.econt.com/services/Nomenclatures/NomenclaturesService.getCities.json'

export const ONE_SECOND_IN_MS: number = 1000
