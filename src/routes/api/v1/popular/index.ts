import { Request, Response, Router } from "express";
import fetch from "node-fetch";
import { QueryType } from "./queryType";

const router: Router = Router();

const query = `
query {
	Page (page: 1, perPage: 20) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  media (sort: POPULARITY_DESC, type: ANIME) {
		title {
		  english
		  native
		}
		coverImage {
		  extraLarge
		  color
		}
		description
		episodes
	  }
	}
  }
`;
const url = "https://graphql.anilist.co";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        query: query,
    }),
};

router.get("/", async (_req: Request, res: Response) => {
    const apiAnswer: QueryType = await (await fetch(url, options)).json();
    const animeNumber: number = Math.round(
        Math.random() * (apiAnswer.data.Page.media.length - 1)
    );
    res.json(apiAnswer.data.Page.media[animeNumber].title);
});

export default router;
