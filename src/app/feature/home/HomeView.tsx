import {
  Button,
  Card,
  Divider,
  Dropdown,
  icons,
} from "@hellofresh/scm-design-system";
import { Link } from "react-router-dom";
import { environment } from "@environments/environment";
import { useState } from "react";

const { Activation, BoxOrdered, DeliveryTruckMoving } = icons;

export function HomeView() {
  const [dropdownValue, setDropdownValue] = useState();

  return (
    <div>
      <h1>Welcome to MasterFresh</h1>

      <h2>Environment Variables</h2>
      <p>{JSON.stringify(environment)}</p>

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
      <div>
        <Dropdown
          id="simple"
          label="Simple"
          value={dropdownValue}
          onBlur={function noRefCheck() {
            return;
          }}
          onChange={({ value }) => {
            const dropValue: any = value;
            setDropdownValue(dropValue);
          }}
          options={[
            {
              label: "Last 2 days",
              value: "2",
            },
            {
              label: "Last 1 week",
              value: "7",
            },
            {
              label: "Last 2 week",
              value: "14",
            },
            {
              label: "Last 1 Month",
              value: "30",
            },
            {
              label: "Last 2 Month",
              value: "60",
            },
          ]}
          placeholder="My Placeholder text"
        />
      </div>
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
