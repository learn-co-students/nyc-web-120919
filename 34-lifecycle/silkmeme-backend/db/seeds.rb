# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = ["Greg", "Caryn", "Ian", "Matt"]
students = []
subreddits = ['memes', 'dankmemes', 'meirl']

memes =  [
    {
    "postLink": "https://redd.it/f5tfhd",
    "subredditId": 1,
    "title": "what a waste of money",
    "url": "https://i.redd.it/lqlbx3uoaph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5ruw0",
    "subredditId": 1,
    "title": "He has arrived",
    "url": "https://i.redd.it/ms8fxbt9qoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5t1e6",
    "subredditId": 1,
    "title": "The Holy Trinity",
    "url": "https://i.redd.it/joe202ax5ph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qcf7",
    "subredditId": 1,
    "title": "'03 gang where you at?",
    "url": "https://i.redd.it/2x4gc6j03oh41.png"
    },
    {
    "postLink": "https://redd.it/f5ozik",
    "subredditId": 1,
    "title": "We're still limited to the technology of our time",
    "url": "https://i.redd.it/ibdxss9udnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5stcs",
    "subredditId": 1,
    "title": "Like that would ever happen!",
    "url": "https://i.redd.it/kppmm4b03ph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qcvx",
    "subredditId": 1,
    "title": "Best way to end a presentation",
    "url": "https://i.redd.it/hxhffq1a3oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5p9ye",
    "subredditId": 1,
    "title": "Man down! Man down!",
    "url": "https://i.redd.it/baqm9r68jnh41.png"
    },
    {
    "postLink": "https://redd.it/f5tzik",
    "subredditId": 1,
    "title": "Small dogs are jerks",
    "url": "https://i.redd.it/jg44ihaehph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5pie4",
    "subredditId": 1,
    "title": "That's fonny",
    "url": "https://i.redd.it/csv7kwkqnnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qk29",
    "subredditId": 1,
    "title": "I just saw my cat like this",
    "url": "https://i.redd.it/u1zi31et6oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5quz7",
    "subredditId": 1,
    "title": "Face Swap: A fresh cup of nightmares every day.",
    "url": "https://i.redd.it/ibkwwhumboh41.png"
    },
    {
    "postLink": "https://redd.it/f5qo17",
    "subredditId": 1,
    "title": "Heal Weed",
    "url": "https://i.redd.it/hd0kxdno8oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5oblm",
    "subredditId": 1,
    "title": "A match made in heaven",
    "url": "https://i.redd.it/dzbx35b81nh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5r4t6",
    "subredditId": 1,
    "title": "Someone just give it to him",
    "url": "https://i.redd.it/jcfqn1kvfoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5sy56",
    "subredditId": 1,
    "title": "The goodest of boys.",
    "url": "https://i.redd.it/1rzup6iq4ph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5s7e0",
    "subredditId": 1,
    "title": "As an Indian, I can confirm India does not have physics.",
    "url": "https://i.redd.it/s95k4ld2voh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qx1x",
    "subredditId": 1,
    "title": "SNEAK 100",
    "url": "https://i.redd.it/oouwobmmcoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5oncr",
    "subredditId": 1,
    "title": "Peppa goes to zoo....",
    "url": "https://i.redd.it/fr74ulle7nh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5pz2a",
    "subredditId": 1,
    "title": "Lego is part of our religion",
    "url": "https://i.redd.it/col61lfdwnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5oaeg",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.imgur.com/zHiSGut.jpg"
    },
    {
    "postLink": "https://redd.it/f5sfzj",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.redd.it/257g3308yoh41.png"
    },
    {
    "postLink": "https://redd.it/f58xci",
    "subredditId": 3,
    "title": "Me irl",
    "url": "https://i.redd.it/t1m19c9bnhh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5q9yz",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.redd.it/52rzvs2v1oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5u7av",
    "subredditId": 3,
    "title": "Meirl",
    "url": "https://i.redd.it/m0gujlkujph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5m1ze",
    "subredditId": 3,
    "title": "Meirl",
    "url": "https://i.redd.it/bvvqqni81mh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5n4e0",
    "subredditId": 3,
    "title": "Me irl",
    "url": "https://i.redd.it/tesv01xygmh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5pide",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.redd.it/iv6hzqepnnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5lx1f",
    "subredditId": 3,
    "title": "MEIRL",
    "url": "https://i.redd.it/6bxti8eazlh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qxfc",
    "subredditId": 3,
    "title": "Me_irl",
    "url": "https://i.redd.it/n1delvescoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5urp1",
    "subredditId": 3,
    "title": "Meirl",
    "url": "https://i.redd.it/lfsl6ce9qph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qe77",
    "subredditId": 3,
    "title": "Me irl",
    "url": "https://i.redd.it/3lp9olux3oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5kivz",
    "subredditId": 3,
    "title": "me👶irl",
    "url": "https://i.redd.it/6k4tyizqglh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5n2yq",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.redd.it/sshqn8edgmh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5m6gj",
    "subredditId": 3,
    "title": "me irl",
    "url": "https://i.redd.it/4q4nlu7x2mh41.png"
    },
    {
    "postLink": "https://redd.it/f5hz51",
    "subredditId": 3,
    "title": "Meirl",
    "url": "https://i.redd.it/07ka5gzjkkh41.jpg"
    },
    {
    "postLink": "https://redd.it/f58h3z",
    "subredditId": 3,
    "title": "Me_irl",
    "url": "https://i.redd.it/0ga61c5ighh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5od96",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.redd.it/2c0zkf042nh41.png"
    },
    {
    "postLink": "https://redd.it/f5kdna",
    "subredditId": 3,
    "title": "meirl",
    "url": "https://i.redd.it/io18op1yelh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5tggq",
    "subredditId": 3,
    "title": "me_irl",
    "url": "https://i.redd.it/6oxrtva1bph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5rkgb",
    "subredditId": 2,
    "title": "The worst superpower",
    "url": "https://i.redd.it/3ywo4c66moh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5q7xd",
    "subredditId": 2,
    "title": "Rumour has it her dad is a rough one",
    "url": "https://i.redd.it/tlr7qnpu0oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5os7b",
    "subredditId": 2,
    "title": "Did anyone ask for this?",
    "url": "https://i.imgur.com/SlzDBSG.jpg"
    },
    {
    "postLink": "https://redd.it/f5r1mp",
    "subredditId": 2,
    "title": "You maybe wanna, y'know",
    "url": "https://i.redd.it/vy8dmk4jeoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5unvk",
    "subredditId": 2,
    "title": "You are a genius you moron",
    "url": "https://i.redd.it/nxfztjg2pph41.png"
    },
    {
    "postLink": "https://redd.it/f5tk82",
    "subredditId": 2,
    "title": "Oh lawd they coming",
    "url": "https://i.redd.it/wdsuhz5bcph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5sf5u",
    "subredditId": 2,
    "title": "Time to reflect",
    "url": "https://i.redd.it/qv7rp6gwxoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5qcno",
    "subredditId": 2,
    "title": "(Oc) ah yes, lego",
    "url": "https://i.redd.it/dbrhzqr43oh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5py9p",
    "subredditId": 2,
    "title": "Stop it, get some help",
    "url": "https://i.redd.it/89gx8y2yvnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5rycq",
    "subredditId": 2,
    "title": "It’s our boy",
    "url": "https://i.redd.it/eqj4mkulroh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5svw3",
    "subredditId": 2,
    "title": "Then the lesson goes off topic",
    "url": "https://i.redd.it/hnta871s3ph41.png"
    },
    {
    "postLink": "https://redd.it/f5t1qs",
    "subredditId": 2,
    "title": "The Egyptians were good motivators",
    "url": "https://i.redd.it/4o9sfz526ph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5ulak",
    "subredditId": 2,
    "title": "Looks like I found my favourite place",
    "url": "https://i.redd.it/m7she5p9oph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5pd0h",
    "subredditId": 2,
    "title": "Search your feelings. You know it to be true.",
    "url": "https://i.redd.it/r8sbf9avknh41.png"
    },
    {
    "postLink": "https://redd.it/f5skx4",
    "subredditId": 2,
    "title": "Ah The good old days",
    "url": "https://i.redd.it/6ztp3kbzzoh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5oxh8",
    "subredditId": 2,
    "title": "Name your favourite bands Metalheads",
    "url": "https://i.redd.it/hpozuo9bcnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5nqne",
    "subredditId": 2,
    "title": "Very poor choice of words",
    "url": "https://i.redd.it/rv16xdb2rmh41.png"
    },
    {
    "postLink": "https://redd.it/f5uyu4",
    "subredditId": 2,
    "title": "69 law",
    "url": "https://i.redd.it/auucyl1dsph41.jpg"
    },
    {
    "postLink": "https://redd.it/f5pot5",
    "subredditId": 2,
    "title": "He was just following orders",
    "url": "https://i.redd.it/zso60op0rnh41.jpg"
    },
    {
    "postLink": "https://redd.it/f5pttz",
    "subredditId": 2,
    "title": "Good day gentlemen, I'm here to change the future",
    "url": "https://i.redd.it/kv205ofltnh41.jpg"
    }
]

users.each do |user|
    User.create(
            username: user,
            password: "123456",
            admin: true
    )
end

students.each do |user|
    User.create(
            username: user,
            password: "123456",
            admin: false
    )
end

subreddits.each do |subreddit|
    Subreddit.create(
        name: subreddit
    )
end

memes.each do |meme|
    Meme.create({
        title: meme[:title],
        url: meme[:url],
        subreddit_id: meme[:subredditId]
    })
end
