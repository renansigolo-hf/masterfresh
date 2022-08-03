import { Button, Typography } from "@hellofresh/scm-design-system"
import { PhotoCamera } from "@mui/icons-material"
import { Stack, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

export const RecipeUploadView = () => {
  const [file, setFile] = useState("")
  const UploadBtn = () => {
    return (
      <>
        <PhotoCamera sx={{ marginRight: 2 }} />
        Load Image
        <input
          hidden
          type="file"
          name="recipeUpload"
          id="recipeUpload"
          accept="image/*,.heic"
          onChange={(event: ChangeEvent<any>) => {
            const file = URL.createObjectURL(event.target.files[0])
            setFile(file)
          }}
        />
      </>
    )
  }

  return (
    <>
      <Typography color="initial" margin={4} variant="h4">
        Recipe Upload
      </Typography>
      <Stack spacing={2} alignItems="center" minWidth={"100%"}>
        {file ? (
          <img src={file} alt="Recipe Upload" style={{ maxWidth: "60%" }} />
        ) : (
          <>
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
            <Button
              fullWidth
              color="primary"
              variant="primary"
              children={<UploadBtn />}
            />
            <Button
              fullWidth
              color="primary"
              variant="primary"
              label="Submit Recipe"
            />
          </>
        )}

        {file && (
          <Button color="primary" label="Submit Recipe" variant="primary" />
        )}
      </Stack>
    </>
  )
}
