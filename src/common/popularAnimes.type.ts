export interface QueryType {
    data: Data;
}

export interface Data {
    Page: Page;
}

export interface Page {
    pageInfo: PageInfo;
    media: Media[];
}

export interface Media {
    title: Title;
    coverImage: CoverImage;
    description: string;
    id: number;
    episodes: number;
    bannerImage: string;
}

export interface CoverImage {
    extraLarge: string;
    color: null | string;
}

export interface Title {
    english: string;
    native: string;
}

export interface PageInfo {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
}
