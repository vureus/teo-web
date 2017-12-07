export module GOOGLE_MAP_HELPER {
  export let AUTO_COMPLETECOMPLETE_TYPE = {
    ADDRESS: 'address',
    ESTABLISHMENT: 'establishment',
    GEOCODE: 'geocode'
  };

  export let PLACE_TYPE = {
    STREET_NUMBER: 'street_number',
    ROUTE: 'route',
    SUBLOCALITY_LEVEL_1: 'sublocality_level_1',
    ADMINISTRATIVE_AREA_LEVEL_2: 'administrative_area_level_2',
    ADMINISTRATIVE_AREA_LEVEL_1: 'administrative_area_level_1',
    COUNTRY: 'country',
    POSTAL_CODE: 'postal_code'
  };

  export function GetGoolePlaceInfo(place: any): GooglePlaceInfo {
    let googlePlaceInfo = new GooglePlaceInfo();
    googlePlaceInfo.id = place.place_id;
    googlePlaceInfo.name = place.name;
    googlePlaceInfo.url = place.url;

    if (place.geometry !== undefined && place.geometry !== null) {
      googlePlaceInfo.latitude = place.geometry.location.lat();
      googlePlaceInfo.longitude = place.geometry.location.lng();
    }

    if (place.address_components !== undefined && place.address_components !== null) {
      for (let i = 0; i < place.address_components.length; i++) {
        let addressComponent = place.address_components[i];
        switch (addressComponent.types[0]) {
          case PLACE_TYPE.STREET_NUMBER: googlePlaceInfo.street_number = addressComponent.short_name; break;
          case PLACE_TYPE.ROUTE: googlePlaceInfo.street_name = addressComponent.short_name; break;
          case PLACE_TYPE.SUBLOCALITY_LEVEL_1: googlePlaceInfo.ward = addressComponent.short_name; break;
          case PLACE_TYPE.ADMINISTRATIVE_AREA_LEVEL_2: googlePlaceInfo.district = addressComponent.short_name; break;
          case PLACE_TYPE.ADMINISTRATIVE_AREA_LEVEL_1: googlePlaceInfo.city = addressComponent.short_name; break;
          case PLACE_TYPE.COUNTRY: googlePlaceInfo.country = addressComponent.short_name; break;
          case PLACE_TYPE.POSTAL_CODE: googlePlaceInfo.postal_code = addressComponent.short_name; break;
        }
      }
    }

    googlePlaceInfo.formatted_address = place.formatted_address;

    return googlePlaceInfo;
  }

  export class GooglePlaceInfo {
    public id: string;
    public street_number: string;
    public street_name: string;
    public ward: string;
    public district: string;
    public city: string;
    public country: string;
    public postal_code: string;
    public latitude: number;
    public longitude: number;
    public url: string;
    public name: string;
    //Use For Exactly google API
    public formatted_address: string;
    public get full_address(): string {
      let address = '';
      if (this.street_number !== '') {
        address += this.street_number + ' ';
      }

      if (this.street_name !== '') {
        address += this.street_name;
      }

      if (this.ward !== '') {
        address += ', ' + this.ward + ', ';
      }

      if (this.district !== '') {
        address += this.district + ', ' + this.city;
      }

      return address;
    }

    constructor() {
      this.name = '';
      this.street_number = '';
      this.street_name = '';
      this.ward = '';
      this.district = '';
      this.city = '';
      this.country = '';
      this.postal_code = '';
      this.latitude = 0;
      this.longitude = 0;
      this.url = '';
      this.formatted_address = '';
    }
  }
}
