import { Button, Card, Divider, icons } from "@hellofresh/scm-design-system";

const { Activation, BoxOrdered, DeliveryTruckMoving } = icons;

export function HomeView() {
  return (
    <div>
      <br />
      <br />
      <br />
      <p>Welcome to MasterFresh</p>

      <Activation size="medium" />
      <BoxOrdered state="active" />
      <DeliveryTruckMoving />

      <Button color="primary" label="Learn React" variant="primary" />

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
    </div>
  );
}
