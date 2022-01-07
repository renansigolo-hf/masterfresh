import { Button, Card, Divider } from "@hellofresh/scm-design-system";
import ReactLogo from "assets/logo.svg";

export function HomeView() {
  return (
    <div>
      <br />
      <p>Welcome to MasterFresh</p>

      <ReactLogo />

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
