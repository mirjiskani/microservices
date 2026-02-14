import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums/transport.enum';

@Injectable()
export class ProductStockService {
    private client:ClientProxy;
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3003,
            },
        });
    }
    // It will return the list of Categories
    getCategories() {
        return this.client.send({ cmd: 'get_categories' }, {});
    }
    // It will return the Category by id
    getCategoryById(id: number) {
        return this.client.send({ cmd: 'get_category_by_id' }, id);
    }
    // It will update the Category by id
    updateCategory(id: number, category: any) {
        return this.client.send({ cmd: 'update_category' }, { id, category });
    }
    // It will return the list of Products
    getProducts() {
        return this.client.send({ cmd: 'get_products' }, {});
    }
    // It will return the Product by id
    getProductById(id: number) {
        return this.client.send({ cmd: 'get_product_by_id' }, id);
    }
    // It will update the Product by id
    updateProduct(id: number, product: any) {
        return this.client.send({ cmd: 'update_product' }, { id, product });
    }
    // It will return the list of Product Stocks
    getProductStock() {
        return this.client.send({ cmd: 'get_product_stock' }, {});
    }
    
    // It will return the Product Stock by id
    getProductStockById(id: number) {
        return this.client.send({ cmd: 'get_product_stock_by_id' }, id);
    }
    
    // It will update the Product Stock by id
    updateProductStock(id: number, stock: number) {
        return this.client.send({ cmd: 'update_product_stock' }, { id, stock });
    }
    // It will return the list of Product Stock Transactions
    getProductStockTransactions() {
        return this.client.send({ cmd: 'get_product_stock_transactions' }, {});
    }
    // It will return the Product Stock Transaction by id
    getProductStockTransactionById(id: number) {
        return this.client.send({ cmd: 'get_product_stock_transaction_by_id' }, id);
    }
    // It will update the Product Stock Transaction by id
    updateProductStockTransaction(id: number, transaction: any) {
        return this.client.send({ cmd: 'update_product_stock_transaction' }, { id, transaction });
    }
}
