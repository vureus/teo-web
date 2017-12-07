
export module ScollerHelper {

  export function scrollTo(element: HTMLElement) {
    $('html, body').animate(
      { scrollTop: $(element).offset().top - 150 },
      500);
  }

  export function scrollTo50Px(element: HTMLElement) {
    $('html, body').animate(
      { scrollTop: $(element).offset().top - 50 },
      500);
  }

   export function scrollTop() {
    $('html, body').animate(
      { scrollTop: 0 },
      500);
  }
}
