export module REGEX {
  export let EMAIL_VALIDATION = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  export let ISO6801 = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d/;
  export let RGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  export let NUMBER_ONLY = /^([0-9]*)$/;
  export let YOUTUBE_ID = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  export let YOUTUBE_CODE = /youtube\.com.*(\?v=|\/embed\/)(.{11})/;
  //export let URL_VALIDATION = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;
  // export var DISCOUNT_CODE_VALIDATION = "^(?=.*[A-Z]+)(?=.*[0-9]+).{6}$";
  // export var DISCOUNT_CODE_VALIDATION = "[A-Z0-9]{2,}";
}
