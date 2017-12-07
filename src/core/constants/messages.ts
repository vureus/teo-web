export module MESSAGE {
    export const API_FAILED = 'Something went wrong';
    export const DUPLICATED_SHOWTIME = 'Dulicated Showtimes';

    export const INVALID_SHOWING_DUPLICATE_TIME = 'Duplicate showing time.';
    export const INVALID_SHOWING_START_END_TIME = 'Showing end time must be greater than start time.';
    export const INVALID_TICKET_TYPE = 'Invalid ticket type';
    export const INVALID_TICKET_TYPE_NAME = 'Invalid ticket type name.';
    export const INVALID_TICKET_TYPE_PRICE = 'Invalid ticket type price.';
    export const INVALID_TICKET_TYPE_QUANTITY = 'Invalid ticket type quantity.';
    export const INVALID_TICKET_TYPE_MAX_QUANTITY_GREATER_THAN_QUANTITY =
    'Invalid ticket type max quantity greater than quantity.';
    export const INVALID_TICKET_TYPE_BUNDLE = 'Invalid ticket type bundle.';
    export const INVALID_TICKET_TYPE_CUSTOMIZE = 'Invalid ticket type customize.';
    export const INVALID_TICKET_TYPE_START_END_TIME = 'Ticket type end time must be greater than start time.';
    export const INVALID_TICKET_TYPE_END_TIME_GREATER_THAN_SHOWING_START_TIME
    = 'Ticket type end time must be less than showing start time.';

    export const INVALID_EMAIL = 'Invalid email address';
    export const NOT_MATCH_EMAIL = 'Email does not match';
}
