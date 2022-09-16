module.exports = function(host, server){
    
    server.get("/data", async (req, res) => {
        res.json([
            {
                route:"/data",
                methods: ["GET"],
                description:"This route: The API documentation"
            },
            {
                route:"/data/login",
                methods: ["POST","GET","DELETE"],
                description:"Login user, get current logged in user, logout"
            },
            {
                route:"/data/users",
                methods: ["GET","POST","PUT"],
                description:"Get list of users, create user, add/change user details",
                link: host  + "/data/users"
            },
            {
                route:"/data/users/password",
                methods: ["DELETE","PATCH"],
                description:"Clear old password, add new password",
                link: host  + "/data/users/password"
            },
            {
                route:"/data/video-example",
                methods: ["GET"],
                description:"Get a video example streams",
                link: host  + "/data/video-example"
            },
            {
                route:"/data/video-streams",
                methods: ["GET"],
                description:"Get list of video streams",
                link: host  + "/data/video-streams"
            },
            {
                route:"/data/video-streams/1",
                methods: ["GET"],
                description:"Get video stream",
                link: host  + "/data/video-streams/1"
            },
            {
                route:"/data/audio-example",
                methods: ["GET"],
                description:"Get an audio example streams",
                link: host  + "/data/audio-example"
            },
            {
                route:"/data/audio-streams",
                methods: ["GET"],
                description:"Get list of audio streams",
                link: host  + "/data/audio-streams"
            },
            {
                route:"/data/audio-streams/1",
                methods: ["GET"],
                description:"Get audio stream",
                link: host  + "/data/audio-streams/1"
            }
        ])
    })
}
