import { BookDto } from '../data/dto/book.dto';
import { BookPreviewModel } from '../components/BookPreview/BookPreview';
import { BookModel } from '../models/book.model';

export class BooksAdapterService {

    public static convertToBookPreviewModel({ id, volumeInfo }: BookDto): BookPreviewModel {
        const { title, authors, publisher, imageLinks } = volumeInfo;

        return {
            id,
            title,
            author: authors ? authors.join(', ') : publisher,
            icon: imageLinks ? imageLinks.smallThumbnail : 'https://via.placeholder.com/150'
        };
    }

    public static convertToBookModel({ id, volumeInfo }: BookDto): BookModel {
        const { title, authors, publisher, imageLinks, categories } = volumeInfo;

        return {
            id,
            title,
            iconUrl: imageLinks.thumbnail,
            author: authors ? authors.join(', ') : publisher,
            categories
        };
    }

    public static updateBookDto(bookDto: BookDto, bookModel: BookModel): BookDto {
        const { categories, author, iconUrl, title } = bookModel;

        return {
            id: bookDto.id,
            volumeInfo: {
                ...bookDto.volumeInfo,
                categories,
                title,
                imageLinks: {
                    smallThumbnail: bookDto.volumeInfo.imageLinks.smallThumbnail,
                    thumbnail: iconUrl
                },
                authors: author.split(',')
            }
        }
    }
}
