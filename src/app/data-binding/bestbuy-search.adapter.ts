import { ProductSearchAdapter, SearchConfig, ProductSearchPage, Suggestion, OccEndpointsService, ConverterService, PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER } from '@spartacus/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


const DEFAULT_SEARCH_CONFIG: SearchConfig = {
    pageSize: 3,
};

@Injectable()
export class BestBuyProductSearchAdapter implements ProductSearchAdapter {

    constructor(
        protected http: HttpClient,
        protected occEndpoints: OccEndpointsService,
        protected converter: ConverterService
    ) { }

    search(
        query: string,
        searchConfig: SearchConfig = DEFAULT_SEARCH_CONFIG
    ): Observable<ProductSearchPage> {
        return this.http
            .get(
                // this.getSearchEndpoint(query, searchConfig))
                // tslint:disable-next-line: max-line-length
                `https://api.bestbuy.com/v1/products(search=${query})?show=sku,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice,image,thumbnailImage,details,features.feature,onlineAvailability,description,longDescriptionHtml,categoryPath&apiKey=GIJ1DzoNuPuAoKjFJmqfJuDa&format=json`)
            .pipe(
                tap((v) => console.log(v)),
                this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER),
                tap((v) => console.log(v)));
    }

    loadSuggestions(
        term: string,
        pageSize: number = 3
    ): Observable<Suggestion[]> {
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(
                pluck('suggestions'),
                this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER)
            );
    }

    protected getSearchEndpoint(
        query: string,
        searchConfig: SearchConfig
    ): string {
        return this.occEndpoints.getUrl(
            'productSearch',
            {},
            {
                query,
                pageSize: searchConfig.pageSize,
                currentPage: searchConfig.currentPage,
                sort: searchConfig.sortCode,
            }
        );
    }

    protected getSuggestionEndpoint(term: string, max: string): string {
        return this.occEndpoints.getUrl('productSuggestions', {}, { term, max });
    }


}