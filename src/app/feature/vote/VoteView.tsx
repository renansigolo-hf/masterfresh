import {
  Avatar,
  Button,
  Card,
  Grid,
  Modal,
} from "@hellofresh/scm-design-system"
import { useState } from "react"

export const VoteView = () => {
  const [isOpen, setIsOpen] = useState(false)

  const currentMonth = new Intl.DateTimeFormat("en", {
    month: "long",
  }).format(new Date())

  const recipes = [
    {
      id: 0,
      title: "Roast Veggie & Garlic Crouton Salad",
      author: "Renan Sigolo",
      link: "https://www.hellofresh.com.au/recipes/roast-veggie-garlic-crouton-salad-61b96df10db0c84a862bacc1",
      originalPicture:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg",
      userPicture:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg",
    },
    {
      id: 1,
      title: "Roast Veggie & Garlic Crouton Salad",
      author: "Renan Sigolo",
      link: "https://www.hellofresh.com.au/recipes/roast-veggie-garlic-crouton-salad-61b96df10db0c84a862bacc1",
      originalPicture:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg",
      userPicture:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg",
    },
    {
      id: 2,
      title: "Roast Veggie & Garlic Crouton Salad",
      author: "Renan Sigolo",
      link: "https://www.hellofresh.com.au/recipes/roast-veggie-garlic-crouton-salad-61b96df10db0c84a862bacc1",
      originalPicture:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg",
      userPicture:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/roast-veggie-garlic-crouton-salad-7fd44915.jpg",
    },
  ]
  return (
    <>
      <h1>Vote</h1>
      <p>Vote on your favourite recipe for the month of {currentMonth}</p>

      <Grid container direction="row" spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={12} md={6}>
            <Card
              style={{ width: "100%" }}
              key={recipe.id}
              onClick={() => setIsOpen(true)}
            >
              <div
                style={{
                  display: "flex",
                  maxWidth: "100%",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={recipe.originalPicture}
                  style={{ maxWidth: "49%" }}
                  alt="Recipe"
                />
                <img
                  src={recipe.userPicture}
                  style={{ maxWidth: "49%" }}
                  alt="Recipe"
                />
              </div>

              <div
                style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
              >
                <Avatar image="" size="large" />
                <div style={{ textAlign: "left" }}>
                  <strong>{recipe.author}</strong>
                  <br />
                  <a href={recipe.link} target="_blank" rel="noreferrer">
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
