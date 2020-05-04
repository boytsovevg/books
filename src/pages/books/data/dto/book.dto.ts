export interface BookDto {
    id: string;
    volumeInfo: VolumeInfoDto;
}

export interface VolumeInfoDto {
    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    pageCount: number;
    categories: string[];
    imageLinks: ImageLinksDto;
    authors?: string[];
}

export interface ImageLinksDto {
    smallThumbnail: string;
    thumbnail: string;
}
