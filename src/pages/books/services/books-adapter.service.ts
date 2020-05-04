import { BookDto } from '../data/dto/book.dto';
import { BookPreviewModel } from '../components/BookPreview/BookPreview';

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
}
