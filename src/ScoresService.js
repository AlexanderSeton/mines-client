const baseURL = "https://mines-game-server.herokuapp.com/api/scores"

export const getScores = () => {
    return(
        fetch(baseURL)
        .then(result => result.json())
        .then(data => result.results)
    )
}

export const postScore = (high_score) => {
    return(
        fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(high_score),
            headers: {"Content-Type": "application/json"}
        })
        .then(result => result.json())
    )
}
