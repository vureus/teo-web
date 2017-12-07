import { environment } from '../environments/environment';

export module AppSetting {
  export let API_SERVER_URL: string = null;
  export let STATIC_SERVER_URL: string = null;
  export let SERVER_URL: string = null;

  if (environment.production) {
    API_SERVER_URL = '';
    STATIC_SERVER_URL = '';
    SERVER_URL = '';
  } else {
    API_SERVER_URL = '';
    STATIC_SERVER_URL = '';
    SERVER_URL = '';
  }

  export let API_PREFIX_URL = 'api/v1/';
  export let BASE_URL = API_SERVER_URL + API_PREFIX_URL;
  export let ASSESTS_URL = STATIC_SERVER_URL + 'assets/';
}
