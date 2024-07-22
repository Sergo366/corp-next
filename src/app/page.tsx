import {db} from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany()

  return (
      <div className={'flex flex-col gap-2'}>
          <div className={'flex m-2 justify-between items-center'}>
              <h1 className={'text-xl font-bold'}>Snippets</h1>
              <Link
                  href={'/snippets/new'}
                  className={'border p-2 rounded'}
              >
                  New
              </Link>
          </div>
          {snippets.map((snip) => (
              <Link
                  href={`/snippets/${snip.id}`}
                  className={'flex justify-between items-center p-2 border rounded'}
                  key={snip.id}
              >
                  {snip.title}
                  <p>View</p>
              </Link>
          ))}
      </div>
  );
}
