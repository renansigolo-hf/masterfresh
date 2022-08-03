import { Stepper } from "@hellofresh/scm-design-system"

export const HowItWorksView = () => {
  return (
    <>
      <h1>How it works</h1>
      <Stepper
        activeStep={0}
        color="default"
        orientation="vertical"
        size="small"
        steps={[
          {
            label: "Take a picture of your recipe",
          },
          {
            label: "Upload it to our platform",
          },
          {
            label: "Wait until users vote for it at the SCM Tech AHM",
          },
        ]}
      />
    </>
  )
}
