export interface LocationConfig {
  readonly venueName: string;
  readonly address: string;
  readonly city: string;
  readonly mapsUrl: string;
}

export interface LocationDetail {
  readonly label: string;
  readonly value: string;
}
