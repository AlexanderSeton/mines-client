const baseURL = "https://mines-game-server.herokuapp.com/api/scores"

export const getScores = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log("data:", data);
    const scores = await data.results;
    console.log("scores:", scores);
    return scores;
}

export const postScore = async (high_score) => { 
        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(high_score),
            headers: {"Content-Type": "application/json"}
        })
}
