export module ROUTER_LINK {
     export const CREATE_EVENT = 'create-event';
     export const FAST_CREATION = 'fast-creation';
     export const BASIC_INFO_STEP = 'basic-info';
     export const GENERAL_SETTINGS = 'general-settings';
     export const TIME_AND_TICKET_TYPE = 'time-n-tickettype';
     export const SHOWING_AND_TICKET_TYPE = 'showtimes-tickets';
     export const PAYMENT_METHOD = 'payment-methods';
     export const LOGIN = 'login';
     export const THANK_YOU = 'thank-you';

     export function GET_CREATE_EVENT_LINK_BY (childRouterUrl: string, eventId?: number): string {
       let path: string  = '/' + CREATE_EVENT;
       path = eventId !== null ? path + '/' + eventId : '';
       return path + '/' + childRouterUrl;
     }

     // Organizer page
     export const NEWS = 'news';

     export const HOME_PAGE = '';
     export const SEARCH = 'search';
}
