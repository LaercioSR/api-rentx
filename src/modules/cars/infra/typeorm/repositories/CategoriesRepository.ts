import { getRepository, Repository } from "typeorm";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

// DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = new Category();
    // // category.name = name;
    // // category.description = description;
    // // category.created_at = new Date();

    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });

    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({
      name,
    });
    return category;
  }
}

export { CategoriesRepository };
