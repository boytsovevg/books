import { PagedListDto } from '../../../dto/paged-list.dto';
import { BookDto } from './dto/book.dto';
import { http } from '../../../data/http';
import { AxiosInstance } from 'axios';

class BooksDataService {

    private readonly http: AxiosInstance;
    private readonly baseUrl = '/books/v1/volumes';

    constructor() {
        this.http = http;
    }

    public async searchBooks(searchTerm: string): Promise<PagedListDto<BookDto>> {
        const params = {
            q: searchTerm
        };

        const response = await this.http.get<PagedListDto<BookDto>>(`${this.baseUrl}`, { params });

        return response.data;
    }

    public async getBook(id: string): Promise<BookDto> {
        const response = await this.http.get<BookDto>(`${this.baseUrl}/${id}`);

        return response.data;
    }

    public async getBooks(userId: string): Promise<BookDto[]> {
        const loadUserBooks = () => new Promise<BookDto[]>(
            resolve => setTimeout(
                () => resolve([]),
                500
            )
        );

        const response = await loadUserBooks();

        return response;
    }
}

export default new BooksDataService();
