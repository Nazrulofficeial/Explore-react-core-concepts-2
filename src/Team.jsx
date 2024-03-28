import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)

    const teamStyle = {
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const handleAdd = () => {
        const newTeamcount = team + 1;
        setTeam(newTeamcount)
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}