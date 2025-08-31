import {productTable, Product } from './schema';
import { db } from './seed'; 
import { eq } from 'drizzle-orm';

export async function getProducts(category?: string): Promise<Product[] | null> {
  console.log(`getProducts,category: ${category}`);
  try {
    let query = db.select().from(productTable)
    if (category) {
        query = query.where(eq(productTable.category, category))
    }
    
    return await query;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
}

// const products = await getProducts().catch(console.error)
// console.log('products:', JSON.stringify(products, null, 2));
