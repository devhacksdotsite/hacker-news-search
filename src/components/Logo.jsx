export const Logo = () => {
    return (
        <div className="w-full flex justify-center m-6 text-center">
            <img className="w-8 md:w-12" src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="logo" />
            <h1 className="mx-2 text-lg md:text-3xl self-center font-semibold">Search Hacker News</h1>
        </div>
    );
}