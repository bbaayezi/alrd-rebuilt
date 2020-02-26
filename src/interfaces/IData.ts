export interface IStatistics {
  publisher: Array<Object>;
  contentType: Array<Object>;
  byYear: Array<Object>;
  language: Array<Object>;
}

export interface ILatestItem {
  title: string;
  author: string;
  date: string;
}

export interface IOverview {
  metadata: number;
  firstAuthor: number;
  authors: number;
  citations: number;
  fulltext: number;
  years: {
    start: number;
    end: number;
  };
}
