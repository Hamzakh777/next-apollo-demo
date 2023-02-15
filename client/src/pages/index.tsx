import Image from "next/image";
import { Inter } from "@next/font/google";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const getData = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  useEffect(() => {
    getData();
  }, []);
  return <main>test</main>;
}
