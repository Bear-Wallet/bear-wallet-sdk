import axios from "axios";

// const BACKEND_URL = `https://node-service-isah.onrender.com`;
const BACKEND_URL = `https://node-service1-1.onrender.com`;

export async function getData({ sessionId }: { sessionId: string }) {
  const res = await axios.get(
    `${BACKEND_URL}/sdk/get-data?sessionId=${sessionId}`
  );

  return res.data as {
    sessionId: string;
    data: string;
    type: string;
  };
}

export async function storeReq({
  sessionId,
  data,
  type,
}: {
  sessionId: string;
  data: string;
  type: string;
}) {
  const res = await axios.post(`${BACKEND_URL}/sdk/store-req`, {
    sessionId,
    data,
    type,
  });

  return res.data as {
    sessionId: string;
    data: string;
    type: string;
  };
}
