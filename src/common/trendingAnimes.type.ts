export interface TrendingAnimes {
    data: Data;
}

export interface Data {
    trending: Trending;
}

export interface Trending {
    pageInfo: PageInfo;
    media: Media[];
}

export interface Media {
    title: Title;
    coverImage: CoverImage;
    id: number;
    bannerImage: null | string;
    description: string;
    episodes: number | null;
}

export interface CoverImage {
    extraLarge: string;
    color: string;
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
