import { Button, Card, Divider } from "@hellofresh/scm-design-system";

export function HomeView() {
  return (
    <div className="App">
      <h1>Ho sssme</h1>
      <p>Welcome to MasterFresh</p>
      <Button color="primary" label="Learn React" variant="primary" />

      <Card image="https://dummyimage.com/640x295/fff/aaa" onSelect={() => {}}>
        {/* <TopContentExample /> */}
        <div>Top</div>
        <Divider />
        <div>Bottom</div>
        <Button
          color="primary"
          fullWidth
          label="Select Card"
          onClick={function noRefCheck() {}}
          variant="primary"
        />
      </Card>
    </div>
  );
}
