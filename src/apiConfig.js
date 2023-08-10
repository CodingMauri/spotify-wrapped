

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID

const clientSecret = process.env.REACT_APP_SECRET_KEY


const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',

]
const redirectURI = "http://localhost:3000"

const getAuthorizationURL = () => {
    const scopeString = scopes.join("");
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=}`
}

export {clientId,redirectURI,getAuthorizationURL}