import { useApiContext } from "@app/core/api/ApiContext"
import { currentMonth } from "@app/core/libs/dates"
import { RecipeApi } from "@domain/api/recipe"
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Modal,
} from "@hellofresh/scm-design-system"
import { useEffect, useState } from "react"

export const VoteView = () => {
  const api = useApiContext()
  const [apiResponse, setApiResponse] = useState<RecipeApi[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    api
      ?.apiRequest<RecipeApi[]>(`getRecipes`)
      .then((res) => setApiResponse(res.data))
      .catch((error) => console.error(error))
  }, [api])

  return (
    <>
      <h1>Vote</h1>
      <p>Vote on your favourite recipe for the month of {currentMonth}</p>

      <Grid container direction="row" spacing={2}>
        {apiResponse.map((recipe) => (
          <Grid item xs={12} md={6} key={recipe.id}>
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}
              onClick={() => setIsOpen(true)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "1fr",
                    gridColumnGap: "4px",
                  }}
                >
                  <img
                    src={recipe.imageUrl}
                    style={{
                      borderRadius: "4px",
                      objectFit: "cover",
                      aspectRatio: "3 / 2",
                      maxWidth: "100%",
                    }}
                    alt="HelloFresh Recipe"
                  />
                  <img
                    src={
                      recipe.pictureUrl ||
                      "https://cdn.shoplightspeed.com/shops/620718/themes/6715/assets/placeholder-660x660.png?2020070621575920201219173038"
                    }
                    style={{
                      borderRadius: "4px",
                      objectFit: "cover",
                      aspectRatio: "3 / 2",
                      maxWidth: "100%",
                    }}
                    alt="User Recipe"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "16px",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginBottom: "16px",
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
                    <div>
                      {/* <SocialButtons
                    count={1}
                    onClick={() => null}
                    // position="horizontal"
                    variant="like"
                    tabIndex={1}
                    disabled={true}
                  /> */}
                    </div>
                  </div>
                  <Button
                    color="primary"
                    fullWidth
                    label="Vote for this recipe"
                    onClick={() => null}
                    variant="primary"
                  />
                </div>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal handleOnHide={() => setIsOpen(false)} isOpen={isOpen}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg"
            style={{ maxWidth: "49%" }}
            alt="Recipe"
          />
          <img
            src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg"
            style={{ maxWidth: "49%" }}
            alt="Recipe"
          />
        </div>
      </Modal>
    </>
  )
}
