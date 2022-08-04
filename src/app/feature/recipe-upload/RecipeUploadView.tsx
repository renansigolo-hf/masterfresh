import { currentMonth } from "@app/core/libs/dates"
import {
  Button,
  Card,
  Divider,
  Typography,
} from "@hellofresh/scm-design-system"
import { Stack, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

export const RecipeUploadView = () => {
  const [file, setFile] = useState("")

  return (
    <>
      <Typography color="initial" margin={4} variant="h4">
        Recipe Upload
      </Typography>
      <Typography color="initial" margin={4} variant="h5">
        Upload your recipe for the month of {currentMonth}
      </Typography>
      <Stack spacing={2} alignItems="center" minWidth={"100%"}>
        <>
          <Card image={file || "https://via.placeholder.com/150"}>
            <input
              type="file"
              name="recipeUpload"
              id="recipeUpload"
              accept="image/*"
              onChange={(event: ChangeEvent<any>) => {
                const file = URL.createObjectURL(event.target.files[0])
                setFile(file)
              }}
            />
            <TextField
              id="recipeName"
              label="Recipe Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="recipeURL"
              label="Recipe URL"
              variant="outlined"
              fullWidth
            />

            {file && (
              <>
                <Divider />
                <Button
                  color="primary"
                  label="Submit Recipe"
                  variant="primary"
                />
              </>
            )}
          </Card>
        </>
      </Stack>
    </>
  )
}
