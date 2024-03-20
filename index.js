require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData={
  "login": "NeelahAgarwal",
  "id": 155094420,
  "node_id": "U_kgDOCT6NlA",
  "avatar_url": "https://avatars.githubusercontent.com/u/155094420?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/NeelahAgarwal",
  "html_url": "https://github.com/NeelahAgarwal",
  "followers_url": "https://api.github.com/users/NeelahAgarwal/followers",
  "following_url": "https://api.github.com/users/NeelahAgarwal/following{/other_user}",
  "gists_url": "https://api.github.com/users/NeelahAgarwal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/NeelahAgarwal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/NeelahAgarwal/subscriptions",
  "organizations_url": "https://api.github.com/users/NeelahAgarwal/orgs",
  "repos_url": "https://api.github.com/users/NeelahAgarwal/repos",
  "events_url": "https://api.github.com/users/NeelahAgarwal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/NeelahAgarwal/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-12-28T16:45:07Z",
  "updated_at": "2024-03-11T12:54:56Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
   res.send('lelo twitter')
})
app.get('/login',(req,res)=>{
  res.send('<h1>Successfully login</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>On the chai youtube</h2>')
})
app.get('github',(req,res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})