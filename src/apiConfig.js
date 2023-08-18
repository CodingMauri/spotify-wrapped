

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID


const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',

]
const redirectURI = "http://localhost:3000/"

const getAuthorizationURL = () => {
    console.log("Generating authorization URL");
    const scopeString = scopes.join(" ");
    console.log("Scope String:", scopeString);
    
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=code&scope=${encodeURIComponent(scopeString)}`;
    console.log("Generated Authorization URL:", authUrl);

    return authUrl;
}


export {clientId,redirectURI,getAuthorizationURL}