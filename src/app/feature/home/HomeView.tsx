import { Button, Card, Divider, icons } from "@hellofresh/scm-design-system";

const { Activation, BoxOrdered, DeliveryTruckMoving } = icons;

export function HomeView() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Welcome to MasterFresh</h1>

      <Button color="primary" label="Learn more" variant="primary" />

      <br />
      <br />
      <Card
        image="https://dummyimage.com/640x295/fff/aaa"
        onSelect={() => {
          console.log("onSelect");
        }}
      >
        {/* <TopContentExample /> */}
        <div>Top</div>
        <Divider />
        <div>Bottom</div>
        <Button
          color="primary"
          fullWidth
          label="Select Card"
          onClick={function noRefCheck() {
            console.log("onSelect");
          }}
          variant="primary"
        />
      </Card>

      <br />
      <br />

      <Activation size="medium" />
      <BoxOrdered state="active" />
      <DeliveryTruckMoving />
    </div>
  );
}
