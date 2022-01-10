import { Button, Card, Divider, icons } from "@hellofresh/scm-design-system";
import { Link } from "react-router-dom";

const { Activation, BoxOrdered, DeliveryTruckMoving } = icons;

export function HomeView() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Welcome to MasterFresh</h1>

      <h2>Routes</h2>

      <Link to="login" style={{ textDecoration: "none" }}>
        <Button color="primary" label="Go to login" variant="primary" />
      </Link>
      <br />
      <br />
      <Link to="lorem" style={{ textDecoration: "none" }}>
        <Button color="primary" label="Go to random route" variant="primary" />
      </Link>

      <br />
      <br />
      <h2>Components</h2>
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
