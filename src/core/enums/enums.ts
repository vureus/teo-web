export module ENUMS {

  // CREATE EVENT

  export enum CategoryStatus {
    Deactive = 0,
    Active = 1
  }

  export enum CreatingEventStep {
    BasicInfo = 1,
    FullInfo = 2,
    TimeAndTicketType = 3,
    GeneralSetting = 4,
    PaymentMethod = 5
  }

  export enum CoverAlignStyle {
    Style1 = 1,
    Style2 = 2,
    Style3 = 3,
    Style4 = 4,
    Style5 = 5
  }

  export enum ShowtimeFrequence {
    OnlyOne = 1,
    Weekly = 2,
    Monthly = 3,
    Customized = 4
  }

  export enum CustomTheme {
    Default = 0,
    MoreOption = 1
  }

  export enum QuestionType {
    Text = 1,
    Paragraph = 2,
    MultipleChoiceSingleAnswer = 3,
    MultipleChoiceMultipleAnswer = 4,
    Grid = 5
  }

  export enum DefaultQuestion {
    PHONE_NUMBER = 1,
    EMAIL = 2,
    FIRST_NAME = 6,
    LAST_NAME = 7,
    GENDER = 8,
    COUNTRY = 9
  }

  export enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
  }

  export enum Month {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
  }

  export enum TimeUnit {
    Hours = 0,
    Days = 1
  }

  export enum TickTypeSaleEndType {
    Starts = 0,
    Ends = 1
  }

  export enum EventShowingFilter {
    All = 0,
    ThisMonth = 1,
    ThisYear = 2,
    NextMonth = 3
  }
  // ORGANIZERS

  export enum MyEventType {
    Draft = 1,
    Past = 2,
    Upcoming = 3
  }

  export enum OrganizationOtherType {
    Picture = 1,
    Video = 2
  }

  export enum ModalType {
    Created = 1,
    Updated = 2,
    Deleted = 3,
    Viewed = 4
  }

  export enum SiteType {
    VietNam = 1,
    Thai = 2,
    Sing = 3
  }

  export enum PriceFilterType {
    Free = 1,
    Paid = 2,
    AllPrices = 3,
  }

  export enum DateFilterType {
    AllUpcomingDate = 1,
    Today = 2,
    Tomorrow = 3,
    ThisWeek = 4,
    CustomDate = 5
  }

  export enum SearchEventSortByType {
    Date = 0,
    Price = 1
  }

  export enum DateTimeFormatType {
    ShortDatePattern = 0,
    SortableDateTimePattern = 1
  }
}
