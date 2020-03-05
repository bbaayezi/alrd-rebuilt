export interface IStatistics {
  publicationName: {
    [key: string]: number;
  };
  contentType: {
    [key: string]: number;
  };
}

export interface ILatestItem {
  title: string;
  author: string;
  date: string;
}

export interface IOverview {
  publications: number;
  authors: number;
  citations: number;
  startYear: string;
  endYear: string;
}

export interface IYearlySummary {
  [key: string]: number;
}

export interface IPartnerCountry {
  [key: string]: number;
}

export interface INumberedMap {
  [key: string]: number;
}
