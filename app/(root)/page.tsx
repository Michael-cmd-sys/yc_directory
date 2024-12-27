import React from "react";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams} : {
  searchParams: Promise<{ query?: string }>
}) {
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1},
      _id: 1,
      title: "",
      description: "",
      img: "",
      category: ""
    }
  ]
  const query = (await searchParams).query

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch your Startup<br />Connect with Entrepreneurs</h1>

      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote Pitches, and Get Noticed in Virtual Competitions</p>

      <SearchForm query={query}/>
    </section>

;   <section className="section_container">
      <p className="text-30-semibold">
        {query? `Showing results for "${query}"`: "All Startups"}
      </p>

      <ul className="mt-5 card_grid">
        { posts?.length > 0 ? (
          posts.map((post: StartupCardType, index: number) => <StartupCard />)
        ):(
          <p className="no-results">No Startups found...</p>
        )}
      </ul>
</section>
    </>
  );
}
