import { Container } from "typedi";

import { PostService } from "./postService";

/**
 * Keeps track of all services for dependency injection
 */
export function createServices() {
  return {
    postService: Container.get(PostService),
  };
}
