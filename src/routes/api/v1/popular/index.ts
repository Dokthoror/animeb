import { Request, Response, Router } from "express";
import fetch from "node-fetch";
import { PopularAnimes } from "../../../../common/popularAnimes.type";

const router: Router = Router();

const query = `
{
	popular: Page(page: 1, perPage: 20) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  media(sort: POPULARITY_DESC, type: ANIME) {
		title {
		  english
		  native
		}
		coverImage {
		  extraLarge
		  color
		}
		id
		bannerImage
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
    const apiAnswer: PopularAnimes = await (await fetch(url, options)).json();
    const animeNumber: number =
        Math.round(Math.random() * apiAnswer.data.popular.media.length) - 1;
    res.json(apiAnswer.data.popular.media[animeNumber]);
});

export default router;
