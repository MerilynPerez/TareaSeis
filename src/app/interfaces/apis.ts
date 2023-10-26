export interface ApisGender {
    gender: string;
}

export interface ApisAge {
  age: number;
}

export interface ApisUniversidades {
  domains: string[];
  web_pages: string[];
  name: string;
  country: string[];
}

export interface ApisTime {
  current_weather: {
    temperature: any;
    weathercode: number;
  };
}
