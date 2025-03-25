export default async function(year: number, day: number) {
    const request = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
        headers: {
            "User-Agent": import.meta.env.USER_AGENT,
            "Cookie": `session=${import.meta.env.API_KEY}`
        }
    });
    return await request.text();
}