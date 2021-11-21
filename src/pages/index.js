import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
    return (
        <div>
            <Head>
                <title>AirBnb</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Banner */}
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
                {/* srction 1 */}
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>

                    {/* Using the data pulled from API  */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                        {exploreData?.map((item) => (
                            <SmallCard
                                key={item.img}
                                img={item.img}
                                location={item.location}
                                distance={item.distance}
                            />
                        ))}
                    </div>
                </section>

                {/* section 2 */}
                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>

                    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
                        {cardsData?.map((item, id) => (
                            <MediumCard
                                key={id}
                                img={item.img}
                                title={item.title}
                            />
                        ))}
                    </div>
                </section>

                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb"
                    buttonText="Get Inspired"
                />
            </main>

            <Footer />
        </div>
    );
}

// Static server side calls
// Make a cache of the page on the server and server it everytime

export async function getStaticProps() {
    // Explore nearby data
    const exploreData = await fetch("https://links.papareact.com/pyp").then(
        (res) => res.json()
    );

    // live anywhere data
    const cardsData = await fetch("https://links.papareact.com/zp1").then(
        (res) => res.json()
    );

    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}
