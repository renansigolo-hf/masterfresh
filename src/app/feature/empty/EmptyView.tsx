import { Box, Icons, Typography } from "@hellofresh/scm-design-system"

export const EmptyView = () => {
  const { BoxEmpty } = Icons

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <BoxEmpty />
      <Typography variant="h5" color="gray">
        Ops, looks like there's nothing here.
      </Typography>
    </Box>
  )
}
