import { Converter, Product, ImageType } from '@spartacus/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BestButProductNormalizer implements Converter<any, Product> {
    convert(source: any, target?: any): Product {
        target.code = source.sku;
        target.name = source.name;
        // target.averageRating = source.customerReviewAverage;
        // target.numberOfReviews = source.customerReviewCount;
        target.description = source.longDescriptionHtml;
        target.summary = source.shortDescription;
        target.price = {
            formattedValue: source.salePrice + '$',
            value: source.salePrice,
        };

        target.stock = source.onlineAvailability
            ? { stockLevel: 100, stockLevelStatus: 'good' }
            : {};

        // target.categories = this.convertCategories(source);
        target.images = this.convertImages(source);
        // target.classifications = this.convertFeatures(source);

        return target;
    }

    private convertCategories(source: any) {
        return source.categoryPath.map(c => {
            return { name: c.name, code: c.id };
        });
    }

    private convertImages(source: any) {
        return {
            PRIMARY: {
                product: {
                    format: 'product',
                    imageType: ImageType.PRIMARY,
                    url: source.image,
                },
                thumbnail: {
                    format: 'thumbnail',
                    imageType: ImageType.PRIMARY,
                    url: source.thumbnailImage,
                },
            },
        };
    }
    private convertFeatures(source: any) {
        return [
            {
                name: 'Technical features',
                features: [
                    {
                        name: 'Feature',
                        featureValues: source.features.map(f => {
                            return { value: f.feature };
                        }),
                    },
                ],
            },
            {
                name: 'Details',
                features: source.details.map(detail => {
                    return {
                        name: detail.name,
                        featureValues: detail.values.map(value => {
                            return {
                                value,
                            };
                        }),
                    };
                }),
            },
        ];
    }

}
