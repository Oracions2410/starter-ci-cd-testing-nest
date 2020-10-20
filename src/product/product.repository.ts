import { Repository, EntityRepository } from 'typeorm'

import { Product } from './product.entity'
import { CreateProductDTO } from './dto/create-product.dto'

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {

        const { name, description, price } = createProductDTO
        const product = new Product()
        product.name = name
        product.description = description
        product.price = price

        await product.save()
        return product
    }

    public async editProduct(createProductDTO: CreateProductDTO, editedProduct: Product): Promise<Product> {
        const { name, description, price } = createProductDTO

        editedProduct.name = name
        editedProduct.description = description
        editedProduct.price = price

        await editedProduct.save()
        return editedProduct
    }

}