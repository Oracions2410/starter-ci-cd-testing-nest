import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';

import { ProductService } from './product.service'
import { CreateProductDTO } from './dto/create-product.dto'
import { Product } from './product.entity'

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Post('/')
    public async createProduct(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
        const product = await this.productService.createProduct(createProductDTO)
        return product
    }

    @Get('/')
    public async getProducts(): Promise<Product[]> {
        const products = await this.productService.getProducts()
        return products
    }

    @Get('/:productId')
    public async getProduct(@Param('productId') productId: number) {
        const product = await this.productService.getProduct(productId)
        return product
    }

    @Patch('/:productId')
    public async editProduct(@Body() createProductDTO: CreateProductDTO, @Param('productId') productId: number): Promise<Product> {
        const product = await this.productService.editProduct(productId, createProductDTO)
        return product
    }

    @Delete('/:productId')
    public async deleteProduct(@Param('productId') productId: number) {
        const deletedProduct = await this.productService.deleteProduct(productId)
        return deletedProduct
    }

}
