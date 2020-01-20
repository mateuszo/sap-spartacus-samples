import { Injectable } from '@angular/core';
import { Converter, ProductSearchPage, PriceType, Image, ImageGroup, ImageType, ConverterService, PRODUCT_NORMALIZER } from '@spartacus/core';

@Injectable({ providedIn: 'root' })
export class BestBuySearchPageNormalizer implements Converter<any, ProductSearchPage> {

    constructor(private converterService: ConverterService) { }

    convert(source: any, target?: ProductSearchPage): ProductSearchPage {
        console.log(source);

        target = {
            // type: 'productCategorySearchPageWsDTO',
            breadcrumbs: [],
            freeTextSearch: 'cam',
            pagination: {
                currentPage: 0,
                pageSize: 10,
                sort: 'relevance',
                totalPages: 14,
                totalResults: 132
            },
            products: [],
        };

        target.products = source.products.map(product =>
            this.converterService.convert(product, PRODUCT_NORMALIZER)
        );

        console.log(target);


        return target;
    }
}
