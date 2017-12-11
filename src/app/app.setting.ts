import { environment } from '../environments/environment';

export module AppSetting {
  export let API_SERVER_URL: string = null;
  export let STATIC_SERVER_URL: string = null;
  export let SERVER_URL: string = null;

  if (environment.production) {
    API_SERVER_URL = 'http://localhost:3000/';
    STATIC_SERVER_URL = '';
    SERVER_URL = 'http://localhost:4200/';
  } else {
    API_SERVER_URL = 'http://localhost:3000/';
    STATIC_SERVER_URL = '';
    SERVER_URL = 'http://localhost:4200/';
  }

  export let API_PREFIX_URL = '';
  export let BASE_URL = API_SERVER_URL + API_PREFIX_URL;
  
  export let ASSESTS_URL = STATIC_SERVER_URL + 'assets/';
}
