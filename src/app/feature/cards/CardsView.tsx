import { useApiContext } from "@app/core/api/ApiContext"
import { Notification } from "@app/core/notification/Notification"
import {
  Button,
  Card,
  CircularLoader,
  Divider,
} from "@hellofresh/scm-design-system"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type AlbumApi = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export function CardsView() {
  const api = useApiContext()
  const [apiResponse, setApiResponse] = useState<AlbumApi[]>([])

  useEffect(() => {
    api
      ?.apiRequest<AlbumApi[]>(`getCardPhotos`)
      .then((res) => setApiResponse(res.data))
      .catch((error) => console.error(error))
  }, [api])

  if (!apiResponse.length) return <CircularLoader />

  const cards = apiResponse.slice(0, 10)

  return (
    <>
      <h1>Cards Example</h1>
      <Link to="/home">Go to home</Link>
      <section
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cards.map((item: AlbumApi) => (
          <Card
            key={item.id}
            image={item.thumbnailUrl}
            onSelect={() => console.log("onSelect")}
          >
            <div>{item.title}</div>

            <Divider />

            <Button
              color="primary"
              fullWidth
              label="Click Me!"
              onClick={() => console.log("onSelect")}
              variant="primary"
            />
          </Card>
        ))}
      </section>
      <Notification
        open={true}
        title="Showing from cards component"
        message="Notification is working!!!"
        severity="success"
      />
    </>
  )
}
