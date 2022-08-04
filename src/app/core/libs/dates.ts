import { Timestamp } from "firebase/firestore"

export const currentMonth = new Intl.DateTimeFormat("en", {
  month: "long",
}).format(new Date())

export const currentTimestamp = Timestamp.now()
