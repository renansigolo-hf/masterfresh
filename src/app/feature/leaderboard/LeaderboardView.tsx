import { useApiContext } from "@app/core/api/ApiContext"
import { RecipeApi } from "@domain/api/recipe"
import { Avatar, Card, Divider, Grid } from "@hellofresh/scm-design-system"
import { useEffect, useState } from "react"

export const LeaderboardView = () => {
  const api = useApiContext()
  const [apiResponse, setApiResponse] = useState<RecipeApi[]>([])

  useEffect(() => {
    api
      ?.apiRequest<RecipeApi[]>(`getRecipes`)
      .then((res) => setApiResponse(res.data))
      .catch((error) => console.error(error))
  }, [api])

  return (
    <>
      <h1>Leaderboard</h1>
      <p>Here you can view the current leaderboard status.</p>

      <Grid container>
        <Grid item xs={12} p={1}>
          <h1 style={{ textAlign: "left" }}>2022</h1>
        </Grid>
        {apiResponse.map((recipe) => (
          <Grid item xs={12} sm={6} md={3} p={1} key={recipe.id}>
            <Card
              image={
                recipe.pictureUrl ||
                recipe.imageUrl ||
                "https://cdn.shoplightspeed.com/shops/620718/themes/6715/assets/placeholder-660x660.png?2020070621575920201219173038"
              }
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <span>
                <strong>{recipe.date}</strong>
                <br />({recipe.votes} votes)
              </span>
              <Divider />
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <Avatar image="" size="large" />
                <div style={{ textAlign: "left" }}>
                  <strong>{recipe.author}</strong>
                  <br />
                  <a href={recipe.url} target="_blank" rel="noreferrer">
                    {recipe.title}
                  </a>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
