import { Request, Response, Router } from "express";
import fetch from "node-fetch";
import { TrendingAnimes } from "../../../../common/trendingAnimes.type";

const router: Router = Router();

const url = "https://graphql.anilist.co";
const query = `
{
	trending: Page(page: 1, perPage: 20) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  media(sort: TRENDING_DESC, type: ANIME) {
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
    const apiAnswer: TrendingAnimes = await (await fetch(url, options)).json();
    if (!apiAnswer.errors) {
        const animeNumber: number = Math.floor(
            Math.random() * apiAnswer.data!.trending.media.length
        );
        res.json(apiAnswer.data!.trending.media[animeNumber]);
    } else {
        res.json(apiAnswer.errors);
    }
});

export default router;
