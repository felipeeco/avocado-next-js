import { useRouter } from "next/router";

export default function Page() {
  const {
    query: { id },
  } = useRouter();

  return <p>Post: {id}</p>;
}
