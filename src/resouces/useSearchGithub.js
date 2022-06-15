import { useHttp } from '../hooks/http.hook'

const useSearchGithub = () => {

    const {loading, request, error, clearError} = useHttp();

    const getAllrepos = async (username) => {
        const res = await request(`https://api.github.com/users/${username}/repos`);
        return res.map(_transformRepos)
     }
     const _transformRepos = (data) => {
        return{
            name: data.name,
            id: data.id,
            language: data.language,
            url: data.html_url,
            description: data.description
        }
    }
    return {getAllrepos}
}



export default useSearchGithub;