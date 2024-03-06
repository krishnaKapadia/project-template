import { Post } from "@prisma/client";
import { Service } from "typedi";
import { db } from "@/server/db";

@Service()
export class PostService {
  constructor() {}

  public async create(name: string): Promise<Post> {
    return db.post.create({
      data: {
        name,
      },
    });
  }

  public async getLatest(): Promise<Post | null> {
    return db.post.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
