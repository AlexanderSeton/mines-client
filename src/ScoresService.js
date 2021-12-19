const baseURL = "https://mines-game-server.herokuapp.com/api/scores"

export const getScores = async () => {
    const response = await fetch(baseURL);
    const data = await response.results;
    console.log("data:", data);
    return data;
}

export const postScore = async (high_score) => { 
        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(high_score),
            headers: {"Content-Type": "application/json"}
        })
}
