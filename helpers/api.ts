import axios from "axios";

export async function getData({ sessionId }: { sessionId: string }) {
  const res = await axios.get(
    `https://node-service-isah.onrender.com/sdk/get-data?sessionId=${sessionId}`
  );

  return res.data as {
    sessionId: string;
    data: string;
    type: string;
  };
}
