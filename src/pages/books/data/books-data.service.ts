import { PagedListDto } from '../../../dto/paged-list.dto';
import { BookDto } from './dto/book.dto';
import { http } from '../../../data/http';
import { AxiosInstance } from 'axios';

class BooksDataService {

    private readonly http: AxiosInstance;

    constructor() {
        this.http = http;
    }

    public async searchBooks(searchTerm: string): Promise<PagedListDto<BookDto>> {
        const params = {
            q: searchTerm
        };

        const response = await this.http.get<PagedListDto<BookDto>>('/v1/volumes', { params });

        return response.data;
    }
}

export default new BooksDataService();
