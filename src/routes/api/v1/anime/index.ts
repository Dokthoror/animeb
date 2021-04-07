import { Request, Response, Router } from "express";
import fetch from "node-fetch";
import { AnimeType } from "../../../../common/anime.type";

const router: Router = Router();

const query = `
query ($id: Int) {
	Media(id: $id) {
	  title {
		english
		native
	  }
	  description
	  episodes
	  trailer {
		site
		id
	  }
	  bannerImage
	  coverImage {
		extraLarge
		color
	  }
	  averageScore
	  tags {
		id
		name
		category
	  }
	  studios {
		edges {
		  node {
			name
		  }
		}
	  }
	}
  }
`;
const url = "https://graphql.anilist.co";

router.get("/:id", async (req: Request, res: Response) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: {
                id: req.params.id,
            },
        }),
    };
    const apiAnswer: AnimeType = await (await fetch(url, options)).json();
    if (!apiAnswer.errors) {
        res.json(apiAnswer.data!.Media);
    } else {
        res.json(apiAnswer.errors);
    }
});

export default router;
