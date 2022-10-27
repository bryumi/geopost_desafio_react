import './CardsGroups.css'
import ListTeams from './ListTeams/index';

export default function CardsGroups() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "git-user": "bryumi"
                }
            })
            .then(response => {
                let list = response.json().Result
                setTeams(list)

            })
            .catch(error => {
                console.log('Error fetching data: ', error);
                setError(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return 'Loading...'
    if (error) return 'error!'

    return (

        <div>

            <ul class="numberOne">
                teams.map((team) => {
                 
                })
            </ul>
        </div>

    )
}




